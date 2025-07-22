import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Kontakt | Jakub Kozel - Grafický design',
  description: 'Spojte se s námi. Email: jakubkozel@seznam.cz, Telefon: 728 890 062.',
};

export default function KontaktPage() {
  return (
    <React.Fragment>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="text-center">
          
          {/* Pouze email a telefon */}
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
      </div>
    </React.Fragment>
  );
}