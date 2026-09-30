import About from '@/components/About';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'O mně – grafický designér',
  description:
    'Jsem Jakub Kozel, grafický designér s více než 10 lety praxe. Navrhuji loga a vizuální identity, sázím knihy a katalogy, stavím weby a připravuji tiskoviny.',
  path: '/o-mne',
});

export default function AboutPage() {
  return <About />;
}
