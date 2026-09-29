import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Tiskoviny – vizitky, letáky, plakáty',
  description: 'Jakub Kozel – tiskoviny: vizitky, letáky, plakáty, obaly a etikety včetně přípravy tiskových dat.',
  path: '/tiskoviny',
});

export default function Page() {
  return <ServicePage slug="tiskoviny" />;
}
