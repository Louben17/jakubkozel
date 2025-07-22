"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [paintingStage, setPaintingStage] = useState(0); // 0 = nic, 1-10 = písmena postupně
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    // Postupné "malování" písmen každých 300ms
    const timers: NodeJS.Timeout[] = [];
    
    // Spuštění malování po 500ms
    timers.push(setTimeout(() => setPaintingStage(1), 500));
    
    // Každé další písmeno po 300ms
    for (let i = 2; i <= 10; i++) {
      timers.push(setTimeout(() => setPaintingStage(i), 500 + (i - 1) * 300));
    }
    
    // Služby po dokončení malování + 1s
    timers.push(setTimeout(() => setShowServices(true), 500 + 10 * 300 + 1000));
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const jakub = "JAKUB".split('');
  const kozel = "KOZEL".split('');
  
  // Pastelové barvy pro písmena
  const getLetterColor = (letter: string, index: number) => {
    const pastelColors = [
      '#FF9AA2', // růžová
      '#FFB7B2', // lososová  
      '#FFDAC1', // meruňková
      '#E2F0CB', // světle zelená
      '#B5EAD7', // mentolová
      '#C7CEEA', // levandulová
      '#A2D2FF', // světle modrá
      '#BDB2FF', // fialová
      '#FFC6FF', // magenta
      '#FFABAB'  // korálová
    ];
    
    return pastelColors[index % pastelColors.length];
  };

  // Kontrola, zda má být písmeno viditelné (namalované)
  const isLetterPainted = (letterIndex: number) => {
    return paintingStage > letterIndex;
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      
      {/* Navigace jako komponenta */}
      <Navigation />

      {/* Hlavní obsah s paddingem pro navigaci */}
      <div className="flex items-center justify-center min-h-screen pt-20">
        {/* Jemné pozadí - decentní vzor */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fade ${3 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Hlavní jméno */}
        <div className="relative text-center">
          
          {/* JAKUB - první řádek */}
          <div className="relative mb-4">
            {jakub.map((letter, index) => {
              const isPainted = isLetterPainted(index);
              return (
                <span
                  key={`jakub-${index}`}
                  className="inline-block font-black painting-letter"
                  style={{
                    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    color: getLetterColor(letter, index),
                    marginRight: '0.1em',
                    fontWeight: '800',
                    opacity: isPainted ? 1 : 0,
                    transform: isPainted ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(-10deg)',
                    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '0s',
                    filter: isPainted ? 'blur(0px)' : 'blur(2px)',
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
          
          {/* KOZEL - druhý řádek */}
          <div className="relative">
            {kozel.map((letter, index) => {
              const isPainted = isLetterPainted(index + 5); // KOZEL začíná po JAKUB (index 5)
              return (
                <span
                  key={`kozel-${index}`}
                  className="inline-block font-black painting-letter"
                  style={{
                    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    color: getLetterColor(letter, index + 5),
                    marginRight: '0.1em',
                    fontWeight: '800',
                    opacity: isPainted ? 1 : 0,
                    transform: isPainted ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(10deg)',
                    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '0s',
                    filter: isPainted ? 'blur(0px)' : 'blur(2px)',
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
          
          {/* Subtitle při začátku */}
          <div 
            className={`mt-8 transition-all duration-1000 ${
              paintingStage >= 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <p 
              className="text-lg tracking-widest text-gray-600"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}
            >
              VISUAL COMMUNICATION
            </p>
          </div>
        </div>
      </div>

      {/* Vyčištěné služby + kontakt */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-8">
        <div 
          className={`transition-all duration-1000 ${
            showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {/* Služby v jednom řádku - ČISTÉ BEZ RÁMEČKŮ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* GRAFIKA */}
            <div className="text-center">
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: '700',
                  color: '#FF9AA2'
                }}
              >
                GRAFIKA
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}>
                <p>Loga & vizuální identity</p>
                <p>Firemní materiály</p>
                <p>Plakáty & letáky</p>
                <p>Print design</p>
              </div>
            </div>
            
            {/* WEB DESIGN */}
            <div className="text-center">
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: '700',
                  color: '#B5EAD7'
                }}
              >
                WEB DESIGN
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}>
                <p>Responzivní weby</p>
                <p>UI/UX design</p>
                <p>E-commerce řešení</p>
                <p>Landing pages</p>
              </div>
            </div>
            
            {/* DTP */}
            <div className="text-center">
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: '700',
                  color: '#C7CEEA'
                }}
              >
                DTP
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}>
                <p>Sazba knih & časopisů</p>
                <p>Katalogy & brožury</p>
                <p>Výroční zprávy</p>
                <p>Typografie</p>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div className="text-center">
            <div className="contact-pill">
              <a 
                href="mailto:jakubkozel@seznam.cz"
                className="contact-link"
              >
                <span className="contact-icon">✉</span>
                <span>jakubkozel@seznam.cz</span>
              </a>
              
              <div className="contact-divider"></div>
              
              <a 
                href="tel:+420728890062"
                className="contact-link"
              >
                <span className="contact-icon">📞</span>
                <span>728 890 062</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animace */}
      <style jsx>{`
        @keyframes fade {
          0%, 100% { 
            opacity: 0.2; 
          }
          50% { 
            opacity: 0.6; 
          }
        }
        
        .painting-letter {
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}