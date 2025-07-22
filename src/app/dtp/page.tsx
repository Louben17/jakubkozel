import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'DTP | Jakub Kozel - Grafický design',
  description: 'DTP - sazba knih a časopisů, katalogy, brožury, výroční zprávy a typografie.',
};

export default function DTPPage() {
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
              color: '#C7CEEA'
            }}
          >
            DTP
          </h1>
          
          <div 
            className="text-lg text-gray-700 space-y-4 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <p>Sazbou knih, časopisů a katalogů se zabývám s důrazem na typografii.</p>
            <p>Připravuji brožury, výroční zprávy a další tiskoviny pro tisk.</p>
            <p>Dbám na správnou úpravu textu a harmonii celkového vzhledu.</p>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}