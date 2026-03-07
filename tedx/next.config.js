/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Production optimizations
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig
