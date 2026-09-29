import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  // staré adresy oborů
  async redirects() {
    return [
      { source: '/sluzby', destination: '/#sluzby', permanent: true },
      { source: '/sluzby/grafika', destination: '/grafika', permanent: true },
      { source: '/sluzby/dtp', destination: '/dtp', permanent: true },
      { source: '/sluzby/webdesign', destination: '/webdesign', permanent: true },
    ];
  },
};

export default nextConfig;
