"use client";

import { useEffect } from 'react';

// Poslední záchrana při chybě v kořenovém layoutu: nahrazuje celý dokument, proto má vlastní
// <html>, <body> a styly. Místo výchozí hlášky „Application error…“ ukáže jméno, obory a kontakt,
// takže ani v nejhorším případě se do výsledků vyhledávání nedostane technická chyba.
const LINKS: [string, string][] = [
  ['/grafika', 'Grafika a vizuální identita'],
  ['/dtp', 'DTP a sazba'],
  ['/webdesign', 'Tvorba webů'],
  ['/tiskoviny', 'Tiskoviny'],
  ['/poradna', 'Poradna'],
  ['/kontakt', 'Kontakt'],
];

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="cs">
      <head>
        <title>Jakub Kozel – grafik, DTP, tvorba webů a tiskoviny</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: '120px 16px 80px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          color: '#1d1d24',
          background: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: '0 auto 1rem', maxWidth: '18ch', fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Jakub Kozel – grafický designér
        </h1>
        <p style={{ margin: '0 auto 2rem', maxWidth: '52ch', fontSize: '1.1rem', lineHeight: 1.6, color: '#5d6070' }}>
          Grafika a vizuální identita, DTP a sazba, tvorba webů a tiskoviny. Stránku se teď nepodařilo načíst.
        </p>
        <nav aria-label="Obory" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ padding: '0.6rem 1rem', borderRadius: 999, background: '#F4F4F8', color: '#1d1d24', fontWeight: 600, textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </nav>
        <p style={{ color: '#5d6070' }}>jakubkozel@seznam.cz · 728 890 062</p>
        <button
          type="button"
          onClick={reset}
          style={{ marginTop: '1rem', padding: '0.7rem 1.3rem', border: 'none', borderRadius: 999, background: '#1d1d24', color: '#fff', font: 'inherit', fontWeight: 700, cursor: 'pointer' }}
        >
          Načíst znovu
        </button>
      </body>
    </html>
  );
}
