import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'O mně | Jakub Kozel - Grafický design',
  description: 'Poznáte mě lépe. Více než 10 let zkušeností v grafickém designu, webdesignu a DTP sazbě.',
};

export default function AboutPage() {
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
                color: '#FF9AA2'
              }}
            >
              O MNĚ
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Jsem grafický designér s vášní pro vizuální komunikaci a více než 10letou praxí
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div 
                  className="w-24 h-24 bg-gradient-to-br rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FF9AA2, #B5EAD7)' }}
                >
                  <span 
                    className="text-white text-3xl font-bold"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    JK
                  </span>
                </div>
                <p className="text-gray-500 text-sm">Vaše fotka zde</p>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#333'
                }}
              >
                Má cesta k designu
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Grafickému designu se věnuji více než 10 let. Začínal jsem jako freelancer 
                  a postupně jsem si vybudoval portfolio klientů od malých podniků 
                  až po větší společnosti.
                </p>
                
                <p>
                  Specializuji se na vytváření kompletních vizuálních identit, 
                  moderních webových stránek a precizní DTP sazbu. Každý projekt 
                  přistupujem s důrazem na detail a funkčnost.
                </p>
                
                <p>
                  Věřím, že dobrý design není jen o tom, jak něco vypadá, 
                  ale především o tom, jak to funguje a jak to pomáhá 
                  komunikovat správné poselství.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-center mb-8"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333'
              }}
            >
              Nástroje a dovednosti
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#FF9AA2'
                  }}
                >
                  Design Software
                </h3>
                <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>Adobe Creative Suite</p>
                  <p>Figma</p>
                  <p>Sketch</p>
                  <p>Adobe InDesign</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#B5EAD7'
                  }}
                >
                  Web Technologies
                </h3>
                <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>HTML & CSS</p>
                  <p>JavaScript</p>
                  <p>WordPress</p>
                  <p>Responsive Design</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#C7CEEA'
                  }}
                >
                  Specializace
                </h3>
                <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>Brand Identity</p>
                  <p>UI/UX Design</p>
                  <p>Typography</p>
                  <p>Print Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333'
              }}
            >
              Pojďme spolupracovat
            </h2>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Máte projekt nebo nápad? Rád si s vámi popovídám.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:jakub@jakubkozel.cz"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
              >
                Napište mi
              </a>
              <a 
                href="tel:+420728890062"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
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