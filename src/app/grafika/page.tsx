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
    <div>
      <Navigation />
      
      <main className="min-h-screen bg-white pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
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

          <div className="flex items-center justify-center min-h-[60vh] px-4">
            <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
              
              <div className="grafika-card w-80 flex-shrink-0">
                <h2 className="grafika-card-title text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  CO VYTVÁŘÍM
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="grafika-service-icon">
                      <span>🎨</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">Loga & Vizuální Identity</h3>
                      <p className="text-pink-100 leading-relaxed">Komplexní vizuální systémy, které odlišují vaši značku</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="grafika-service-icon">
                      <span>📄</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">Firemní Materiály</h3>
                      <p className="text-pink-100 leading-relaxed">Vizitky, hlavičkové papíry, prezentace a kancelářské potřeby</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="grafika-service-icon">
                      <span>📢</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">Propagační Materiály</h3>
                      <p className="text-pink-100 leading-relaxed">Plakáty, letáky, bannery a veškeré marketingové materiály</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="grafika-service-icon">
                      <span>🖨️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">Print Design</h3>
                      <p className="text-pink-100 leading-relaxed">Vše připravené pro profesionální tisk ve vysoké kvalitě</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grafika-card grafika-card-alt w-80 flex-shrink-0">
                <h2 className="grafika-card-title text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  MŮJ PŘÍSTUP
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="grafika-step-number">1</div>
                      <h3 className="font-bold text-lg text-white">Analýza & Strategie</h3>
                    </div>
                    <p className="text-pink-100 leading-relaxed pl-11">Pečlivě analyzuji vaše potřeby, cílovou skupinu a konkurenci</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="grafika-step-number">2</div>
                      <h3 className="font-bold text-lg text-white">Kreativní Proces</h3>
                    </div>
                    <p className="text-pink-100 leading-relaxed pl-11">Vytvářím návrhy, které nejen krásně vypadají, ale také efektivně komunikují</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="grafika-step-number">3</div>
                      <h3 className="font-bold text-lg text-white">Precizní Realizace</h3>
                    </div>
                    <p className="text-pink-100 leading-relaxed pl-11">Všechny návrhy připravuji s důrazem na detail a možnost budoucího rozvoje</p>
                  </div>
                  
                  <div className="pt-4 border-t border-pink-200">
                    <p className="text-pink-100 font-medium italic">
                      &ldquo;Každý projekt je pro mě výzvou vytvořit něco jedinečného a funkčního&rdquo;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
} 