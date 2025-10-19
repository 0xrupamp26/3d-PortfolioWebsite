/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'cryptologos.cc' },
      { protocol: 'https', hostname: 'ui.shadcn.com' },
      { protocol: 'https', hostname: 'pyth.network' },
      { protocol: 'https', hostname: 'substrate.io' },
      { protocol: 'https', hostname: 'book.getfoundry.sh' },
      { protocol: 'https', hostname: 'docs.ethers.org' },
    ],
  },
};

export default nextConfig;
