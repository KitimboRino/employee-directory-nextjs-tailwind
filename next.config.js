/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['robohash.org', 'picsum.photos']
  }
}

module.exports = nextConfig
// module.exports = nextConfig, {
//   images: {
//     domains: ['robohash.org', 'picsum.photos']
//   }
// };
