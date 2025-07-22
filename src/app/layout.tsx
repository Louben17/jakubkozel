import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Jakub Kozel | Grafický design, Web design, DTP",
  description: "Profesionální grafický design, webdesign a DTP služby. Vizuální identity, moderní weby a precizní sazba.",
  keywords: "grafický design, webdesign, DTP, vizuální identita, logo, sazba, Jakub Kozel",
  authors: [{ name: "Jakub Kozel" }],
  creator: "Jakub Kozel",
  openGraph: {
    title: "Jakub Kozel | Visual Communication",
    description: "Grafický design, Web design, DTP",
    url: "https://jakubkozel.cz",
    siteName: "Jakub Kozel",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${inter.variable} antialiased overflow-x-hidden`} style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}>
        <main>
          {children}
        </main>
        
        {/* Globální patička */}
        <footer className="bg-white border-t border-gray-100 py-6">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              © {currentYear} Jakub Kozel. Všechna práva vyhrazena.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}