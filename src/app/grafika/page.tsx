import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Grafika – loga a vizuální identity',
  description:
    'Grafický designér Jakub Kozel: návrh loga, vizuální identita a manuál značky, firemní tiskoviny, plakáty i katalogy. Od první skici po data pro tisk.',
  path: '/grafika',
});

export default function Page() {
  return <ServicePage slug="grafika" />;
}
