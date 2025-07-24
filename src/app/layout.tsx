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
 return (
   <html lang="cs" className="scroll-smooth">
     <body className={`${inter.variable} antialiased overflow-x-hidden`} style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}>
       <main>
         {children}
       </main>
       
       <footer className="fixed bottom-4 left-4 z-10 pointer-events-none">
          <p className="text-xs text-gray-400 font-light">
            © 2025 / jakubkozel@seznam.cz / 728890062
          </p>
      </footer>
     </body>
   </html>
 );
} 
 
