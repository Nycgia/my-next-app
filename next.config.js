/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '/my-next-app',
  basePath: '/my-next-app'
}

module.exports = nextConfig
