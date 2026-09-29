import Contact from '@/components/Contact';
import { pageMetadata } from '@/components/seo';

export const metadata = pageMetadata({
  title: 'Kontakt',
  description: 'Kontakt na Jakuba Kozela – grafika, DTP, weby a tiskoviny. E-mail jakubkozel@seznam.cz, telefon 728 890 062.',
  path: '/kontakt',
});

export default function KontaktPage() {
  return <Contact />;
}
