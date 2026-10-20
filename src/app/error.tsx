"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { SERVICES } from '@/components/services';

// Chyba ve stránce: patička z layoutu zůstane, místo obsahu se ukáže rozcestník se jménem
// a obory. Bez tohohle souboru Next.js vykreslí jen „Application error…“ a tenhle text
// pak Google zobrazoval ve výsledcích vyhledávání. Navigace tu schválně není – kdyby
// chyba vznikla v ní, spadla by i tahle stránka.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page">
      <section className="nf">
        <h1 className="nf-title">Jakub Kozel – grafický designér</h1>
        <p className="nf-text">
          Grafika a vizuální identita, DTP a sazba, tvorba webů a tiskoviny. Tuhle stránku se teď nepodařilo načíst.
        </p>
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
        <button type="button" className="nf-home nf-retry" onClick={reset}>
          Načíst znovu
        </button>
      </section>
    </div>
  );
}
