"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 2000); // Začne beztíže po 2s
    const timer2 = setTimeout(() => setShowServices(true), 4000); // Služby po 4s
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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

  // Vesmírné pozice pro beztíže
  const getSpacePosition = (letter: string, index: number, isKozel: boolean = false) => {
    if (animationStage === 0) {
      return { x: 0, y: 0, rotation: 0 };
    }
    
    const spacePositions: Record<string, { x: number; y: number; rotation: number }> = {
      'J': { x: -40, y: -30, rotation: 45 },
      'A': { x: -25, y: -45, rotation: -30 },
      'K': { x: -10, y: 35, rotation: 60 },
      'U': { x: 15, y: -40, rotation: -45 },
      'B': { x: 35, y: -20, rotation: 90 },
      'K2': { x: -35, y: 25, rotation: -60 },
      'O': { x: -15, y: 40, rotation: 120 },
      'Z': { x: 20, y: 35, rotation: -90 },
      'E': { x: 40, y: -10, rotation: 30 },
      'L': { x: 25, y: 45, rotation: -120 }
    };
    
    const key = isKozel && letter === 'K' ? 'K2' : letter;
    return spacePositions[key] || { x: 0, y: 0, rotation: 0 };
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center">
      
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
            const pos = getSpacePosition(letter, index);
            return (
              <span
                key={`jakub-${index}`}
                className="inline-block font-black transition-all duration-3000 ease-out"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  color: getLetterColor(letter, index),
                  transform: `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rotation}deg)`,
                  transitionDelay: `${index * 200}ms`,
                  marginRight: animationStage === 0 ? '0.1em' : '0',
                  fontWeight: '800'
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
            const pos = getSpacePosition(letter, index, true);
            return (
              <span
                key={`kozel-${index}`}
                className="inline-block font-black transition-all duration-3000 ease-out"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  color: getLetterColor(letter, index + 5),
                  transform: `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rotation}deg)`,
                  transitionDelay: `${(index + 5) * 200}ms`,
                  marginRight: animationStage === 0 ? '0.1em' : '0',
                  fontWeight: '800'
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        
        {/* Subtitle při začátku */}
        <div 
          className={`mt-8 transition-opacity duration-1000 ${
            animationStage === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p 
            className="text-lg tracking-widest text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
          >
            VISUAL COMMUNICATION
          </p>
        </div>
      </div>

      {/* Vylepšené sloupce služeb */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-5xl px-8">
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${
            showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '3500ms' }}
        >
          {/* GRAFIKA */}
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-100">
            <h3 
              className="text-3xl font-bold tracking-wide mb-6"
              style={{ 
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '700',
                color: '#FF9AA2'
              }}
            >
              GRAFIKA
            </h3>
            <div className="text-sm text-gray-700 space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              <p>• Loga & vizuální identity</p>
              <p>• Firemní materiály</p>
              <p>• Plakáty & letáky</p>
              <p>• Print design</p>
            </div>
          </div>
          
          {/* WEB DESIGN */}
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-100">
            <h3 
              className="text-3xl font-bold tracking-wide mb-6"
              style={{ 
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '700',
                color: '#B5EAD7'
              }}
            >
              WEB DESIGN
            </h3>
            <div className="text-sm text-gray-700 space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              <p>• Responzivní weby</p>
              <p>• UI/UX design</p>
              <p>• E-commerce řešení</p>
              <p>• Landing pages</p>
            </div>
          </div>
          
          {/* DTP */}
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-100">
            <h3 
              className="text-3xl font-bold tracking-wide mb-6"
              style={{ 
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '700',
                color: '#C7CEEA'
              }}
            >
              DTP
            </h3>
            <div className="text-sm text-gray-700 space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
              <p>• Sazba knih & časopisů</p>
              <p>• Katalogy & brožury</p>
              <p>• Výroční zprávy</p>
              <p>• Typografie</p>
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
        
        .duration-3000 {
          transition-duration: 3s;
        }
      `}</style>
    </div>
  );
}