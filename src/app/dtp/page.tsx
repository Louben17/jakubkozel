import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'DTP a sazba knih, časopisů a katalogů',
  description: 'Jakub Kozel – DTP: sazba knih a časopisů, katalogy, brožury, výroční zprávy a typografie.',
  path: '/dtp',
});

export default function Page() {
  return <ServicePage slug="dtp" />;
}
