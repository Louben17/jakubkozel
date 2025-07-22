import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Kontakt | Jakub Kozel - Grafický design',
  description: 'Spojte se s námi. Email: jakubkozel@seznam.cz, Telefon: 728 890 062. Rádi si s vámi popovídáme o vašem projektu.',
};

export default function KontaktPage() {
  return (
    <React.Fragment>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Hlavní nadpis */}
          <div className="text-center mb-24">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-8"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #FF9AA2, #A2D2FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              KONTAKT
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pojďme si popovídat o vašem projektu
            </p>
          </div>

          {/* Kontaktní informace - čistý design */}
          <div className="flex justify-center mb-32">
            <div className="contact-pill">
              
              {/* Email */}
              <a 
                href="mailto:jakubkozel@seznam.cz"
                className="contact-link group"
              >
                <span className="contact-icon">✉</span>
                <span className="group-hover:scale-105 transition-transform">
                  jakubkozel@seznam.cz
                </span>
              </a>

              {/* Oddělovač */}
              <div className="contact-divider"></div>

              {/* Telefon */}
              <a 
                href="tel:+420728890062"
                className="contact-link group"
              >
                <span className="contact-icon">📞</span>
                <span className="group-hover:scale-105 transition-transform">
                  728 890 062
                </span>
              </a>
              
            </div>
          </div>

          {/* Služby přehled - tři sloupce ve skleněném designu */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 services-grid">
            
            {/* Grafika */}
            <div className="service-glass service-card">
              <h3 
                className="text-2xl font-bold mb-6 text-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#FF9AA2'
                }}
              >
                GRAFIKA
              </h3>
              <div className="text-gray-700 space-y-3 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-sm leading-relaxed">Loga & vizuální identity</p>
                <p className="text-sm leading-relaxed">Firemní materiály</p>
                <p className="text-sm leading-relaxed">Plakáty & letáky</p>
                <p className="text-sm leading-relaxed">Print design</p>
              </div>
            </div>

            {/* Web Design */}
            <div className="service-glass service-card">
              <h3 
                className="text-2xl font-bold mb-6 text-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#B5EAD7'
                }}
              >
                WEB DESIGN
              </h3>
              <div className="text-gray-700 space-y-3 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-sm leading-relaxed">Responzivní weby</p>
                <p className="text-sm leading-relaxed">UI/UX design</p>
                <p className="text-sm leading-relaxed">E-commerce řešení</p>
                <p className="text-sm leading-relaxed">Landing pages</p>
              </div>
            </div>

            {/* DTP */}
            <div className="service-glass service-card">
              <h3 
                className="text-2xl font-bold mb-6 text-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#C7CEEA'
                }}
              >
                DTP
              </h3>
              <div className="text-gray-700 space-y-3 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-sm leading-relaxed">Sazba knih & časopisů</p>
                <p className="text-sm leading-relaxed">Katalogy & brožury</p>
                <p className="text-sm leading-relaxed">Výroční zprávy</p>
                <p className="text-sm leading-relaxed">Typografie</p>
              </div>
            </div>
            
          </div>

          {/* Jednoduchý CTA */}
          <div className="text-center">
            <p 
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Máte projekt na mysli? Napište nebo zavolejte.
            </p>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}