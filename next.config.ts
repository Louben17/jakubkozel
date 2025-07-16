/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Odstranil experimental.appDir - není potřeba v Next.js 15
}

module.exports = nextConfig