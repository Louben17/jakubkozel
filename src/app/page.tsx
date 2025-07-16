"use client";

import { useState, useEffect } from 'react';
import { Palette, Layout, Printer } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Service {
  icon: React.ReactNode;
  text: string;
  color: string;
  description: string;
  details: string[];
}

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
  
  const services = [
    { icon: <Palette className="w-6 h-6" />, text: "GRAFIKA", color: "blue" },
    { icon: <Layout className="w-6 h-6" />, text: "WEB DESIGN", color: "green" },
    { icon: <Printer className="w-6 h-6" />, text: "DTP", color: "purple" }
  ];

  const getSpacePosition = (letter: string, index: number, isKozel: boolean = false) => {
    if (animationStage === 0) {
      return { x: 0, y: 0, rotation: 0 };
    }
    
    // Různé směry do vesmíru
    const spacePositions: { [key: string]: { x: number; y: number; rotation: number } } = {
      // JAKUB
      'J': { x: -40, y: -30, rotation: 45 },
      'A': { x: -25, y: -45, rotation: -30 },
      'K': { x: -10, y: 35, rotation: 60 },
      'U': { x: 15, y: -40, rotation: -45 },
      'B': { x: 35, y: -20, rotation: 90 },
      // KOZEL  
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      
      {/* Vesmírné pozadí - hvězdy */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
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
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  transform: `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rotation}deg)`,
                  textShadow: '0 0 30px rgba(255,255,255,0.5)',
                  transitionDelay: `${index * 200}ms`,
                  marginRight: animationStage === 0 ? '0.1em' : '0'
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
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  transform: `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.rotation}deg)`,
                  textShadow: '0 0 30px rgba(255,255,255,0.5)',
                  transitionDelay: `${(index + 5) * 200}ms`,
                  marginRight: animationStage === 0 ? '0.1em' : '0'
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
            className="text-lg tracking-widest text-gray-400"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            VISUAL COMMUNICATION
          </p>
        </div>
      </div>

      {/* Barevné segmenty služeb - FLIP KARTY */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex gap-8 z-20">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`flip-card transition-all duration-1000 ${
                showServices ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                transitionDelay: `${3500 + index * 300}ms`,
                width: '200px',
                height: '200px',
                perspective: '1000px'
              }}
            >
              <div className="flip-card-inner">
                {/* Přední strana */}
                <div className={`flip-card-front service-circle-large ${service.color}`}>
                  <div className="text-white mb-4 transform scale-125">
                    {service.icon}
                  </div>
                  <h3 
                    className="text-white text-lg font-bold text-center leading-tight"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {service.text}
                  </h3>
                </div>

                {/* Zadní strana */}
                <div className={`flip-card-back service-circle-large ${service.color}`}>
                  <h3 
                    className="text-white text-sm font-bold mb-3 text-center"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {service.text}
                  </h3>
                  <p 
                    className="text-white text-xs text-center mb-4 leading-relaxed"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  <div className="text-center">
                    {(service.details || []).map((detail, idx) => (
                      <div
                        key={idx}
                        className="text-white text-xs py-1 border-b border-white/20 last:border-b-0"
                        style={{ fontFamily: 'Courier New, monospace' }}
                      >
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS animace */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5); 
          }
        }
        
        .duration-3000 {
          transition-duration: 3s;
        }
      `}</style>
    </div>
  );
}