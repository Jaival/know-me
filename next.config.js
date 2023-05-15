/** @type {import('next').NextConfig} */
import('./env.mjs');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {},
};

module.exports = nextConfig;
