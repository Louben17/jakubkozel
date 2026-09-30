import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jakub Kozel – grafika, DTP, weby a tiskoviny',
    short_name: 'Jakub Kozel',
    description: 'Grafický designér – loga a vizuální identity, DTP sazba, tvorba webů a tiskoviny.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: 'cs',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
