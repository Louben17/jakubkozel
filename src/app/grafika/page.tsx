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
      
      <main className="min-h-screen bg-white pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Hero s originálním designem */}
          <div className="text-center mb-20">
            <h1 
              className="grafika-hero mb-8"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              GRAFIKA
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p 
                className="grafika-subtitle text-gray-600"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Vytvářím vizuální identity, které vaší značce dodají jedinečnost a zapamatovatelnost
              </p>
            </div>
          </div>

          {/* Moderní grid s rámečky */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            {/* Levý sloupec - Co dělám */}
            <div className="grafika-card">
              <h2 className="grafika-card-title" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                CO VYTVÁŘÍM
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="grafika-service-icon">
                    <span>🎨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Loga & Vizuální Identity</h3>
                    <p className="text-gray-600 leading-relaxed">Komplexní vizuální systémy, které odlišují vaši značku</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="grafika-service-icon">
                    <span>📄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Firemní Materiály</h3>
                    <p className="text-gray-600 leading-relaxed">Vizitky, hlavičkové papíry, prezentace a kancelářské potřeby</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="grafika-service-icon">
                    <span>📢</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Propagační Materiály</h3>
                    <p className="text-gray-600 leading-relaxed">Plakáty, letáky, bannery a veškeré marketingové materiály</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="grafika-service-icon">
                    <span>🖨️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Print Design</h3>
                    <p className="text-gray-600 leading-relaxed">Vše připravené pro profesionální tisk ve vysoké kvalitě</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pravý sloupec - Můj přístup */}
            <div className="grafika-card grafika-card-alt">
              <h2 className="grafika-card-title" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                MŮJ PŘÍSTUP
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="font-bold text-lg text-gray-900">Analýza & Strategie</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">Pečlivě analyzuji vaše potřeby, cílovou skupinu a konkurenci</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                    <h3 className="font-bold text-lg text-gray-900">Kreativní Proces</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">Vytvářím návrhy, které nejen krásně vypadají, ale také efektivně komunikují</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                    <h3 className="font-bold text-lg text-gray-900">Precizní Realizace</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">Všechny návrhy připravuji s důrazem na detail a možnost budoucího rozvoje</p>
                </div>
                
                <div className="pt-4 border-t border-pink-100">
                  <p className="text-gray-700 font-medium italic">
                    &ldquo;Každý projekt je pro mě výzvou vytvořit něco jedinečného a funkčního&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Spodní zvýrazněná sekce */}
          <div className="grafika-cta">
            <h2 className="grafika-cta-title" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              PŘIPRAVEN NA VÁŠ PROJEKT?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pojďme společně vytvořit vizuální identitu, která vaši značku posune na další úroveň
            </p>
          </div>

        </div>
      </main>
    </React.Fragment>
  );
}