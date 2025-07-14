"use client";

import { useState, useEffect } from 'react';
import { Palette, Layout, Printer, Mail } from 'lucide-react';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 1000); // Start spreading
    const timer2 = setTimeout(() => setShowServices(true), 3000); // Show services
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const name = "JAKUBKOZEL";
  const letters = name.split('');
  
  const services = [
    { icon: <Palette className="w-6 h-6" />, text: "GRAFIKA", color: "blue" },
    { icon: <Layout className="w-6 h-6" />, text: "WEB DESIGN", color: "green" },
    { icon: <Printer className="w-6 h-6" />, text: "DTP", color: "purple" }
  ];

  const getLetterPosition = (index: number) => {
    if (animationStage === 0) {
      return { x: 0, y: 0 };
    }
    
    // Rozložení písmen po celé šířce
    const totalWidth = 90; // procenta šířky obrazovky
    const startOffset = (100 - totalWidth) / 2;
    const spacing = totalWidth / (letters.length - 1);
    
    return {
      x: startOffset + (index * spacing) - 50, // -50 pro vycentrování
      y: 0
    };
  };

  const getServicePosition = (serviceIndex: number) => {
    if (!showServices) return { opacity: 0, scale: 0 };
    
    // Pozice služeb mezi písmeny
    const positions = [
      { x: -25, y: 15 }, // Mezi JAKUB a KOZEL
      { x: 25, y: -15 },  // Vpravo nahoře
      { x: 0, y: 25 }     // Dole uprostřed
    ];
    
    return {
      opacity: 1,
      scale: 1,
      x: positions[serviceIndex]?.x || 0,
      y: positions[serviceIndex]?.y || 0
    };
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Hlavní animace jména */}
      <div className="relative">
        {/* Písmena */}
        <div className="relative flex items-center justify-center">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block font-black name-animation no-select"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                fontSize: 'clamp(4rem, 15vw, 20rem)', // Responzivní velikost
                transform: `translate(${getLetterPosition(index).x}vw, ${getLetterPosition(index).y}vh)`,
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
                transitionDelay: `${index * 100}ms`,
                lineHeight: '1'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Barevné segmenty služeb */}
        {services.map((service, index) => {
          const pos = getServicePosition(index);
          return (
            <div
              key={index}
              className={`service-circle service-animation ${service.color}`}
              style={{
                transform: `translate(${pos.x}vw, ${pos.y}vh) scale(${pos.scale})`,
                opacity: pos.opacity,
                transitionDelay: `${2000 + index * 300}ms`
              }}
            >
              {service.icon}
              <span>{service.text}</span>
            </div>
          );
        })}
      </div>

      {/* PATIČKA - TRVALE DOLE */}
      <footer 
        className={`fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm border-t border-gray-800 py-4 px-6 text-center transition-all duration-1000 z-50 ${
          showServices ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '4000ms' }}
      >
        <p 
          className="text-sm tracking-widest text-gray-400 mb-3"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          VISUAL COMMUNICATION
        </p>
        
        <a 
          href="mailto:jakub@jakubkozel.cz"
          className="inline-flex items-center space-x-2 border border-gray-600 hover:border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 text-sm"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <Mail className="w-4 h-4" />
          <span>JAKUB@JAKUBKOZEL.CZ</span>
        </a>
      </footer>

      {/* Pozadí - jemné částice */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 sparkle-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}