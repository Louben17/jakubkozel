import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Grafika – loga a vizuální identity',
  description: 'Jakub Kozel – grafický design: loga, vizuální identity, firemní materiály, plakáty a print design.',
  path: '/grafika',
});

export default function Page() {
  return <ServicePage slug="grafika" />;
}
