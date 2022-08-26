/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

rewrites: async () => [
  {
    source: "/public/large-scale-structures.html",
    destination: "/pages/api/large-scale-structures.js",
  },
]