/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the line below when deploying to GitHub Pages:
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
