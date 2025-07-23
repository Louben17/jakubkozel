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
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight"
              style={{ 
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: '900',
                color: '#FF9AA2',
                lineHeight: '0.9'
              }}
            >
              GRAFIKA
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p 
                className="text-xl md:text-2xl text-gray-600 font-light tracking-wide"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  letterSpacing: '0.02em'
                }}
              >
                Vytvářím vizuální identity, které vaší značce dodají jedinečnost a zapamatovatelnost
              </p>
            </div>
          </div>

          {/* Moderní grid s rámečky */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            {/* Levý sloupec - Co dělám */}
            <div 
              className="p-8 md:p-12 rounded-3xl border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                borderColor: '#FF9AA2',
                background: 'linear-gradient(135deg, rgba(255, 154, 162, 0.05), rgba(255, 154, 162, 0.02))'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-black mb-8 tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  color: '#FF9AA2'
                }}
              >
                CO VYTVÁŘÍM
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Loga & Vizuální Identity</h3>
                    <p className="text-gray-600 leading-relaxed">Komplexní vizuální systémy, které odlišují vaši značku</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Firemní Materiály</h3>
                    <p className="text-gray-600 leading-relaxed">Vizitky, hlavičkové papíry, prezentace a kancelářské potřeby</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📢</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Propagační Materiály</h3>
                    <p className="text-gray-600 leading-relaxed">Plakáty, letáky, bannery a veškeré marketingové materiály</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🖨️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Print Design</h3>
                    <p className="text-gray-600 leading-relaxed">Vše připravené pro profesionální tisk ve vysoké kvalitě</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pravý sloupec - Můj přístup */}
            <div 
              className="p-8 md:p-12 rounded-3xl border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ 
                borderColor: '#FF9AA2',
                background: 'linear-gradient(135deg, rgba(255, 154, 162, 0.02), rgba(255, 154, 162, 0.05))'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-black mb-8 tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  color: '#FF9AA2'
                }}
              >
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
          <div 
            className="text-center p-8 md:p-12 rounded-3xl border-2"
            style={{ 
              borderColor: '#FF9AA2',
              background: 'linear-gradient(135deg, rgba(255, 154, 162, 0.08), rgba(255, 154, 162, 0.03))'
            }}
          >
            <h2 
              className="text-2xl md:text-3xl font-black mb-4 tracking-tight"
              style={{ 
                fontFamily: 'var(--font-inter), sans-serif',
                color: '#FF9AA2'
              }}
            >
              PŘIPRAVEN NA VÁŠ PROJEKT?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pojďme společně vytvořit vizuální identitu, která vaši značku posune na další úroveň
            </p>
          </div>

        </div>
      </main>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        
        .hover\\:-translate-y-2:hover {
          transform: translateY(-8px) !important;
        }
        
        .transition-all {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .tracking-tight {
          letter-spacing: -0.025em !important;
        }
        
        .tracking-wide {
          letter-spacing: 0.025em !important;
        }
        
        .rounded-3xl {
          border-radius: 1.5rem !important;
        }
        
        .font-black {
          font-weight: 900 !important;
        }
        
        .font-light {
          font-weight: 300 !important;
        }
        
        .leading-relaxed {
          line-height: 1.625 !important;
        }
        
        .flex-shrink-0 {
          flex-shrink: 0 !important;
        }
        
        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important;
        }
        
        .from-pink-100 {
          --tw-gradient-from: #fce7f3 !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(252, 231, 243, 0)) !important;
        }
        
        .to-pink-200 {
          --tw-gradient-to: #fbcfe8 !important;
        }
        
        .from-pink-400 {
          --tw-gradient-from: #f472b6 !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 114, 182, 0)) !important;
        }
        
        .to-pink-500 {
          --tw-gradient-to: #ec4899 !important;
        }
        
        .border-pink-100 {
          border-color: #fce7f3 !important;
        }
      `}</style>
    </React.Fragment>
  );
}