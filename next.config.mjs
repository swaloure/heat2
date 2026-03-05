/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heat2',
  assetPrefix: '/heat2',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
