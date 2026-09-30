import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { SERVICES } from '@/components/services';

export const metadata = { title: 'Stránka nenalezena', robots: { index: false } };

export default function NotFound() {
  return (
    <div className="page">
      <Navigation />
      <section className="nf">
        <p className="nf-code" aria-hidden="true">
          404
        </p>
        <h1 className="nf-title">Tahle stránka se ztratila v tiskárně.</h1>
        <p className="nf-text">Adresa neexistuje nebo se přestěhovala. Zkuste některý z oborů:</p>
        <div className="others-list nf-links">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={s.href} className="other" style={{ background: s.bg }}>
              <span className="other-no" style={{ color: s.ink }}>
                {s.no}
              </span>
              <span className="other-title">{s.title}</span>
              <span className="other-arrow" style={{ background: s.accent }} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
        <Link href="/" className="nf-home">
          ← Zpět na úvod
        </Link>
      </section>
    </div>
  );
}
