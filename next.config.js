/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["grafs.no"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

// module.exports = {
//   compiler: {
//     // ssr and displayName are configured by default
//     styledComponents: true,
//   },
// };
