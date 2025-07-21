"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  const [showServices, setShowServices] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

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
  
  const navItems = [
    { href: '/', label: 'Domů' },
    { href: '/o-mne', label: 'O mně' },
    { href: '/sluzby', label: 'Služby' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/kontakt', label: 'Kontakt' }
  ];
  
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
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      
      {/* Navigace */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold no-underline"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                color: '#FF9AA2'
              }}
            >
              JAKUB KOZEL
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors no-underline ${
                    pathname === item.href
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors no-underline ${
                      pathname === item.href
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

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
      </div>

      {/* Vyčištěné služby + kontakt */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-8">
        <div 
          className={`transition-all duration-1000 ${
            showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '3500ms' }}
        >
          {/* Služby v jednom řádku - ČISTÉ BEZ RÁMEČKŮ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* GRAFIKA */}
            <div className="text-center">
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700',
                  color: '#FF9AA2'
                }}
              >
                GRAFIKA
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
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
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700',
                  color: '#B5EAD7'
                }}
              >
                WEB DESIGN
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
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
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700',
                  color: '#C7CEEA'
                }}
              >
                DTP
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
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
                href="mailto:jakub@jakubkozel.cz"
                className="contact-link"
              >
                <span className="contact-icon">✉</span>
                <span>jakub@jakubkozel.cz</span>
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
        
        .duration-3000 {
          transition-duration: 3s;
        }
      `}</style>
    </div>
  );
}