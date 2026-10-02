import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import ServiceStack from '@/components/home/ServiceStack';
import Process from '@/components/home/Process';
import Cta from '@/components/home/Cta';
import Link from 'next/link';
import ArticleCards from '@/components/poradna/ArticleCards';
import { articleBySlug } from '@/content/articles';

// výběr z poradny na úvod – nejhledanější témata
const FEATURED = ['formaty-papiru', 'rozmer-vizitky', 'tiskova-data'].map((s) => articleBySlug(s)!);

export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Marquee />
      <ServiceStack />
      <Process />
      <section className="svc-articles home-articles">
        <div className="section-head">
          <p className="eyebrow">Poradna</p>
          <h2 className="section-title">Rady, které ušetří tisk.</h2>
        </div>
        <ArticleCards articles={FEATURED} />
        <p className="home-articles-more">
          <Link href="/poradna">Všechny články v poradně →</Link>
        </p>
      </section>
      <Cta />
    </div>
  );
}
