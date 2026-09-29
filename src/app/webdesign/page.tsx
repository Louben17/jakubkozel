import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Tvorba webů a e-shopů',
  description: 'Jakub Kozel – tvorba webů: responzivní weby, UI/UX design, e-shopy, landing pages a SEO.',
  path: '/webdesign',
});

export default function Page() {
  return <ServicePage slug="webdesign" />;
}
