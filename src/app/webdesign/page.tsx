import React from 'react';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Web Design | Jakub Kozel - Grafický design',
  description: 'Web design - responzivní weby, UI/UX design, e-commerce řešení a landing pages.',
};

export default function WebDesignPage() {
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
              color: '#B5EAD7'
            }}
          >
            WEB DESIGN
          </h1>
          
          <div 
            className="text-lg text-gray-700 space-y-4 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <p>Navrhuji moderní responzivní weby, které fungují na všech zařízeních.</p>
            <p>Specializuji se na UI/UX design a e-commerce řešení pro malé i velké firmy.</p>
            <p>Každý web optimalizuji pro rychlost a uživatelský zážitek.</p>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}