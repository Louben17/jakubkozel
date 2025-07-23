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
          
          {/* Desktop layout - horizontální */}
          <div className="contact-pill hidden md:flex">
            
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

          {/* Mobile layout - vertikální */}
          <div className="md:hidden flex flex-col gap-6">
            
            {/* Email - mobile */}
            <a 
              href="mailto:jakubkozel@seznam.cz"
              className="contact-link-mobile group"
            >
              <span className="contact-icon text-2xl mb-2">✉</span>
              <span className="group-hover:scale-105 transition-transform text-lg">
                jakubkozel@seznam.cz
              </span>
            </a>

            {/* Telefon - mobile */}
            <a 
              href="tel:+420728890062"
              className="contact-link-mobile group"
            >
              <span className="contact-icon text-2xl mb-2">📞</span>
              <span className="group-hover:scale-105 transition-transform text-lg">
                728 890 062
              </span>
            </a>
            
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-pill {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          padding: 20px 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #333;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: #000;
        }

        .contact-link-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 25px;
          padding: 30px 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          min-width: 280px;
        }

        .contact-link-mobile:hover {
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        }

        .contact-icon {
          font-size: 20px;
          opacity: 0.8;
        }

        .contact-divider {
          width: 1px;
          height: 30px;
          background: rgba(0, 0, 0, 0.2);
          margin: 0 30px;
        }
      `}</style>
    </React.Fragment>
  );
}