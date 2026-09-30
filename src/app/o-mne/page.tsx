import About from '@/components/About';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'O mně – grafický designér Jakub Kozel',
  description:
    'Jsem Jakub Kozel, grafický designér s více než 10 lety praxe. Loga a vizuální identity, DTP sazba, tvorba webů a tiskoviny.',
  path: '/o-mne',
});

export default function AboutPage() {
  return <About />;
}
