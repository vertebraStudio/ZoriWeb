const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? '/ZoriWeb' : '',
  assetPrefix: isGitHubPages ? '/ZoriWeb/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? '/ZoriWeb' : '',
  },
};

module.exports = nextConfig;
