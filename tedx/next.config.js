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
  swcMinify: true, // Use SWC for minification
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Production optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
}

module.exports = nextConfig
