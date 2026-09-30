import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Tvorba webů a e-shopů na míru',
  description:
    'Tvorba webů na míru – Jakub Kozel: moderní responzivní weby, e-shopy a landing pages s UI/UX designem a technickým SEO. Rychlé na mobilu i počítači.',
  path: '/webdesign',
});

export default function Page() {
  return <ServicePage slug="webdesign" />;
}
