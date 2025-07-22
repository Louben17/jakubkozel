import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Grafika | Jakub Kozel - Grafický design',
  description: 'Grafický design - loga, vizuální identity, firemní materiály, plakáty a print design.',
};

export default function GrafikaPage() {
  return (
    <React.Fragment>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          
          <h1 
            className="text-6xl md:text-8xl font-bold mb-12"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              color: '#FF9AA2'
            }}
          >
            GRAFIKA
          </h1>
          
          <div 
            className="text-lg text-gray-700 space-y-4 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <p>Vytvářím loga a vizuální identity, které vaši značku odliší od konkurence.</p>
            <p>Navrhuji firemní materiály, plakáty, letáky a veškerý print design.</p>
            <p>Každý projekt řeším individuálně s důrazem na detail a kvalitu.</p>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}