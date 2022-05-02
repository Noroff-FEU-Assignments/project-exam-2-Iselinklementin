/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["grafs.no"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
