import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { jsonLd, NAME, SITE_URL } from "@/components/seo";
import Consent, { CookieSettings } from "@/components/Consent";
import { CONSENT_BOOT, SIG_BOOT } from "@/components/consentKey";
import { Inter } from 'next/font/google';
import "./globals.css";
import "./site.css";
import "./pages.css";


const inter = Inter({
 subsets: ['latin', 'latin-ext'],
 weight: ['300', '400', '500', '600', '700', '800'],
 variable: '--font-inter',
});

const DESCRIPTION =
  'Jakub Kozel – grafický designér. Loga a vizuální identity, DTP sazba knih a katalogů, tvorba webů a tiskoviny. Přes 10 let praxe.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jakub Kozel – grafik, DTP, tvorba webů a tiskoviny',
    template: '%s | Jakub Kozel',
  },
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: SITE_URL,
    siteName: NAME,
    title: 'Jakub Kozel – grafik, DTP, tvorba webů a tiskoviny',
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Kozel – grafik, DTP, tvorba webů a tiskoviny',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: true, email: true },
  // ověření vlastnictví webu ve vyhledávačích
  verification: {
    other: { 'seznam-wmt': 'OmHOZpT5tIz1UG5Uz4399dygt5wOII6e' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="cs" suppressHydrationWarning>
     <head>
       <script dangerouslySetInnerHTML={{ __html: CONSENT_BOOT + SIG_BOOT }} />
     </head>
     <body className={inter.variable} style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}>
       <script
         type="application/ld+json"
         // eslint-disable-next-line react/no-danger
         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
       />
       <main>
         {children}
       </main>
       
      <footer className="site-footer">
        <nav aria-label="Patička">
          <ul className="footer-nav">
            {[
              ['/grafika', 'Grafika'],
              ['/dtp', 'DTP a sazba'],
              ['/webdesign', 'Tvorba webů'],
              ['/tiskoviny', 'Tiskoviny'],
              ['/o-mne', 'O mně'],
              ['/kontakt', 'Kontakt'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>
          © {new Date().getFullYear()} Jakub Kozel – grafika, DTP, weby a tiskoviny / jakubkozel@seznam.cz / 728 890 062
          {' / '}
          <CookieSettings />
        </p>
      </footer>
      <Consent />
     </body>
   </html>   
 );
} 
 
