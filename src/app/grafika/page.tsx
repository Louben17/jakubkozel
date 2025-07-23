import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Grafický design | Loga, vizuální identity, print design | Jakub Kozel',
  description: 'Profesionální grafický design v Hradci Králové. Vytvářím loga, vizuální identity, firemní materiály, plakáty a print design. Každý projekt individuálně s důrazem na kvalitu.',
  keywords: 'grafický design, logo, vizuální identita, firemní materiály, plakáty, letáky, print design, Hradec Králové',
  openGraph: {
    title: 'Grafický design | Jakub Kozel',
    description: 'Profesionální grafický design - loga, vizuální identity, print design',
    type: 'website'
  }
};

export default function GrafikaPage() {
  return (
    <React.Fragment>
      <Navigation />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Hero sekce */}
          <header className="text-center mb-16 pt-8 sm:pt-16">
            <h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8"
              style={{ 
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: '800',
                color: '#FF9AA2'
              }}
            >
              GRAFIKA
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Profesionální grafický design, který vaší značce dodá jedinečnost
            </p>
          </header>

          {/* Hlavní obsah */}
          <section className="space-y-12">
            
            {/* Co dělám */}
            <div className="text-center">
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Co vytvářím
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                
                <div className="p-4">
                  <div className="text-3xl mb-3">🎨</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Loga & Identity</h3>
                  <p className="text-sm text-gray-600">Vizuální identity, které odlišují vaši značku</p>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl mb-3">📄</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Firemní materiály</h3>
                  <p className="text-sm text-gray-600">Vizitky, hlavičkové papíry, prezentace</p>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl mb-3">📢</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Plakáty & Letáky</h3>
                  <p className="text-sm text-gray-600">Propagační materiály pro vaše akce</p>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl mb-3">🖨️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Print Design</h3>
                  <p className="text-sm text-gray-600">Vše připravené pro profesionální tisk</p>
                </div>
                
              </div>
            </div>

            {/* Můj přístup */}
            <div className="text-center">
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Můj přístup
              </h2>
              
              <div 
                className="text-base sm:text-lg text-gray-700 space-y-4 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <p>Každý projekt začíná pečlivou analýzou vašich potřeb a cílové skupiny.</p>
                <p>Vytvářím design, který nejen krásně vypadá, ale také efektivně komunikuje.</p>
                <p>Všechny návrhy připravuji s důrazem na detail a možnost budoucího rozvoje.</p>
              </div>
            </div>

          </section>

        </div>
      </main>
    </React.Fragment>
  );
}