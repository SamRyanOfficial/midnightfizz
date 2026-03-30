/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com', pathname: '/**' },
    ],
  },
  experimental: {
    // Prevent Next.js from looking for package.json in parent directories
    serverComponentsExternalPackages: [],
  },
  // Explicitly set the project root
  distDir: '.next',
}

module.exports = nextConfig 