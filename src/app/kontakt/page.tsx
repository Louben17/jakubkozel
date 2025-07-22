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
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 
              className="text-5xl font-bold mb-6"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                color: '#A2D2FF'
              }}
            >
              KONTAKT
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pojďme si popovídat o vašem projektu. Napište nebo zavolejte!
            </p>
          </div>

          {/* Kontaktní informace */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            {/* Email */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #A2D2FF, #BDB2FF)' }}
              >
                <span className="text-white text-2xl">✉</span>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#333'
                }}
              >
                Email
              </h3>
              <a 
                href="mailto:jakubkozel@seznam.cz"
                className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none'
                }}
              >
                jakubkozel@seznam.cz
              </a>
              <p className="text-gray-600 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Odpovídám obvykle do 24 hodin
              </p>
            </div>

            {/* Telefon */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #B5EAD7, #A2D2FF)' }}
              >
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#333'
                }}
              >
                Telefon
              </h3>
              <a 
                href="tel:+420728890062"
                className="text-lg text-green-600 hover:text-green-800 transition-colors"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none'
                }}
              >
                728 890 062
              </a>
              <p className="text-gray-600 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Volejte v pracovní dny 9-18h
              </p>
            </div>
          </div>

          {/* Služby overview */}
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333'
              }}
            >
              Co pro vás můžu udělat
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Grafika */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#FF9AA2'
                  }}
                >
                  GRAFIKA
                </h3>
                <div className="text-gray-600 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• Loga & vizuální identity</p>
                  <p>• Firemní materiály</p>
                  <p>• Plakáty & letáky</p>
                  <p>• Print design</p>
                </div>
              </div>

              {/* Web Design */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#B5EAD7'
                  }}
                >
                  WEB DESIGN
                </h3>
                <div className="text-gray-600 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• Responzivní weby</p>
                  <p>• UI/UX design</p>
                  <p>• E-commerce řešení</p>
                  <p>• Landing pages</p>
                </div>
              </div>

              {/* DTP */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#C7CEEA'
                  }}
                >
                  DTP
                </h3>
                <div className="text-gray-600 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>• Sazba knih & časopisů</p>
                  <p>• Katalogy & brožury</p>
                  <p>• Výroční zprávy</p>
                  <p>• Typografie</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333'
              }}
            >
              Máte projekt na mysli?
            </h2>
            <p className="text-gray-600 mb-8 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rád si s vámi popovídám o vašich potřebách a najdeme společně to nejlepší řešení.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:jakubkozel@seznam.cz"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Napište email
              </a>
              
              <a 
                href="tel:+420728890062"
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Zavolejte
              </a>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}