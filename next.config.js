/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.basePath ?? '/portfolio',
  eslint: {
    dirs: ['.']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
