/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.lorem.space", "picsum.photos"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
