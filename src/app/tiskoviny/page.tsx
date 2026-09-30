import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Tiskoviny – vizitky, letáky, plakáty, obaly',
  description:
    'Tiskoviny od Jakuba Kozla: vizitky, letáky, brožury, plakáty, obaly a etikety. Grafický návrh i příprava tiskových dat se spadávkou a správnými barvami.',
  path: '/tiskoviny',
});

export default function Page() {
  return <ServicePage slug="tiskoviny" />;
}
