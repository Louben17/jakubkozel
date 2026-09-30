import type { Metadata, Viewport } from "next";
import { jsonLd, NAME, SITE_URL } from "@/components/seo";
import Consent, { CookieSettings } from "@/components/Consent";
import { Inter } from 'next/font/google';
import "./globals.css";
import "./site.css";
import "./pages.css";


const inter = Inter({
 subsets: ['latin'],
 weight: ['300', '400', '500', '600', '700', '800', '900'],
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
  keywords: [
    'Jakub Kozel', 'grafik', 'grafický designér', 'grafický design', 'logo', 'vizuální identita',
    'DTP', 'sazba knih', 'tvorba webů', 'webdesign', 'tiskoviny', 'vizitky', 'letáky',
  ],
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
   <html lang="cs" className="scroll-smooth">
     <body className={`${inter.variable} antialiased overflow-x-clip`} style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}>
       <script
         type="application/ld+json"
         // eslint-disable-next-line react/no-danger
         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
       />
       <main>
         {children}
       </main>
       
      <footer className="site-footer">
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
 
