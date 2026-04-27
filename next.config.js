/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: '/ZoriWeb', // Let GitHub Actions handle this
};

module.exports = nextConfig;
