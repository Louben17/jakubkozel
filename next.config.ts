import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // základní bezpečnostní hlavičky (Lighthouse „Best practices“)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  // staré adresy oborů
  async redirects() {
    return [
      { source: '/sluzby', destination: '/#sluzby', permanent: true },
      { source: '/sluzby/grafika', destination: '/grafika', permanent: true },
      { source: '/sluzby/dtp', destination: '/dtp', permanent: true },
      { source: '/sluzby/webdesign', destination: '/webdesign', permanent: true },
      // zrušené stránky v přípravě
      { source: '/portfolio', destination: '/#sluzby', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
