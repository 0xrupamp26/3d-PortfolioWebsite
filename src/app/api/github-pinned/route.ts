import { NextResponse } from 'next/server';

const GITHUB_USERNAME = '0xrupamp26';

export async function GET() {
  const url = `https://gh-pinned-repos.egoist.dev/?username=${GITHUB_USERNAME}`;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: 'Pinned service failed', details: text }, { status: res.status });
    }
    const data = await res.json();
    const projects = (data as any[]).map((repo) => {
      const ogImage = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.repo}`;
      return {
        id: repo.repo,
        category: repo.owner,
        title: repo.repo,
        src: ogImage,
        screenshots: [],
        skills: { frontend: [], backend: [] },
        content: repo.description || 'No description provided.',
        github: `https://github.com/${repo.owner}/${repo.repo}`,
        live: repo.link || `https://github.com/${repo.owner}/${repo.repo}`,
      };
    });
    return NextResponse.json({ projects });
  } catch (e: any) {
    return NextResponse.json({ error: 'Unexpected error', details: e?.message || String(e) }, { status: 500 });
  }
}
