import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import ServiceStack from '@/components/home/ServiceStack';
import Process from '@/components/home/Process';
import Cta from '@/components/home/Cta';

export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Marquee />
      <ServiceStack />
      <Process />
      <Cta />
    </div>
  );
}
