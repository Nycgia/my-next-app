/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/dummy-app',
  assetPrefix: '/dummy-app'
}

module.exports = nextConfig
