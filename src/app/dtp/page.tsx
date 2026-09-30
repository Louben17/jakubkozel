import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'DTP a sazba knih, časopisů a katalogů',
  description:
    'DTP a sazba od Jakuba Kozla: knihy, časopisy, katalogy, brožury a výroční zprávy s citem pro typografii. Tisková data připravená přesně pro tiskárnu.',
  path: '/dtp',
});

export default function Page() {
  return <ServicePage slug="dtp" />;
}
