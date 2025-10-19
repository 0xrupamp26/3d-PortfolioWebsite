import { NextResponse } from 'next/server';

const GITHUB_USERNAME = '0xrupamp26';

export async function GET() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

  try {
    const res = await fetch(url, { headers, next: { revalidate: 300 } });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: 'GitHub API error', details: text }, { status: res.status });
    }
    const data: any[] = await res.json();

    // Map GitHub repos to local Project type
    const projects = data
      .filter((repo) => !repo.fork)
      .map((repo) => {
        const homepage = repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : undefined;
        const ogImage = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
        const topics: string[] = repo.topics || [];
        const category = topics[0] || repo.language || 'Project';

        return {
          id: repo.name,
          category,
          title: repo.name,
          src: ogImage,
          screenshots: [],
          skills: {
            frontend: [],
            backend: [],
          },
          content: repo.description || 'No description provided.',
          github: repo.html_url,
          live: homepage || repo.html_url,
        };
      });

    return NextResponse.json({ projects });
  } catch (e: any) {
    return NextResponse.json({ error: 'Unexpected error', details: e?.message || String(e) }, { status: 500 });
  }
}
