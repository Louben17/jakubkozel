import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        {/* Preload Inter font pro lepší výkon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}