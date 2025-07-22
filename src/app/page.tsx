"use client";

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);



  const getLetterColor = (index: number) => {
    const colors = [
      '#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', 
      '#C7CEEA', '#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFABAB'
    ];
    return colors[index % colors.length];
  };

  // Canvas brush efekt
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let animationId: number;
    let progress = 0;
    const duration = 4000; // 4 sekundy
    let startTime: number | null = null;

    const drawBrushStroke = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = Math.min((timestamp - startTime) / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Simulace brush stroke efektu
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Responsive font size - MUCH BIGGER!
      const fontSize = Math.min(canvas.width * 0.08, canvas.height * 0.12, 200);
      console.log('Canvas size:', canvas.width, canvas.height, 'Font size:', fontSize);

      // JAKUB
      const jakubText = 'JAKUB';
      const letterSpacing = fontSize * 1.2; // Bigger spacing
      const startX = centerX - (jakubText.length * letterSpacing) / 2;

      jakubText.split('').forEach((letter, i) => {
        const letterProgress = Math.max(0, Math.min(1, (progress - i * 0.1) * 2));
        if (letterProgress > 0) {
          drawAnimatedLetter(ctx, letter, startX + i * letterSpacing, centerY - fontSize * 0.8, letterProgress, getLetterColor(i), fontSize);
        }
      });

      // KOZEL
      const kozelText = 'KOZEL';
      const kozelStartX = centerX - (kozelText.length * letterSpacing) / 2;
      
      kozelText.split('').forEach((letter, i) => {
        const letterProgress = Math.max(0, Math.min(1, (progress - (i + 5) * 0.1) * 2));
        if (letterProgress > 0) {
          drawAnimatedLetter(ctx, letter, kozelStartX + i * letterSpacing, centerY + fontSize * 0.8, letterProgress, getLetterColor(i + 5), fontSize);
        }
      });

      if (progress < 1) {
        animationId = requestAnimationFrame(drawBrushStroke);
      } else {
        setAnimationComplete(true);
        setTimeout(() => setShowServices(true), 1000);
      }
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(drawBrushStroke);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const drawAnimatedLetter = (
    ctx: CanvasRenderingContext2D, 
    letter: string, 
    x: number, 
    y: number, 
    progress: number, 
    color: string,
    fontSize: number
  ) => {
    ctx.save();
    
    // Brush texture effect
    const gradient = ctx.createLinearGradient(x, y - fontSize/2, x, y + fontSize/2);
    gradient.addColorStop(0, color + 'ff');
    gradient.addColorStop(0.5, color + 'dd');
    gradient.addColorStop(1, color + 'aa');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    
    // Letter drawing with progress - BIGGER FONT SIZE
    ctx.font = `bold ${fontSize}px var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Brush stroke effect
    ctx.globalAlpha = progress;
    ctx.filter = `blur(${(1 - progress) * 3}px)`;
    
    // Drawing with shake effect for brush feel
    const shake = (1 - progress) * 4;
    const shakeX = (Math.random() - 0.5) * shake;
    const shakeY = (Math.random() - 0.5) * shake;
    
    ctx.strokeText(letter, x + shakeX, y + shakeY);
    ctx.fillText(letter, x + shakeX, y + shakeY);
    
    ctx.restore();
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      
      {/* Navigace */}
      <Navigation />

      {/* Canvas pro brush stroke animaci */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Jemné pozadí */}
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

      {/* Fallback text - SKRYTÉ během animace */}
      <div className={`flex items-center justify-center min-h-screen pt-20 transition-opacity duration-1000 ${animationComplete ? 'opacity-0' : 'opacity-0'}`}>
        <div className="relative text-center">
          <div className="relative mb-4">
            {'JAKUB'.split('').map((letter, index) => (
              <span
                key={`jakub-${index}`}
                className="inline-block font-black"
                style={{
                  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  color: getLetterColor(index),
                  marginRight: '0.1em',
                  fontWeight: '800'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          <div className="relative">
            {'KOZEL'.split('').map((letter, index) => (
              <span
                key={`kozel-${index}`}
                className="inline-block font-black"
                style={{
                  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 'clamp(3rem, 12vw, 8rem)',
                  color: getLetterColor(index + 5),
                  marginRight: '0.1em',
                  fontWeight: '800'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          <div className="mt-8">
            <p 
              className="text-lg tracking-widest text-gray-600"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}
            >
              VISUAL COMMUNICATION
            </p>
          </div>
        </div>
      </div>

      {/* Služby + kontakt */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-8">
        <div 
          className={`transition-all duration-1000 ${
            showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '700', color: '#FF9AA2' }}>
                GRAFIKA
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}>
                <p>Loga & vizuální identity</p>
                <p>Firemní materiály</p>
                <p>Plakáty & letáky</p>
                <p>Print design</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '700', color: '#B5EAD7' }}>
                WEB DESIGN
              </h3>
              <div className="text-sm text-gray-700 space-y-1" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '400' }}>
                <p>Responzivní weby</p>
                <p>UI/UX design</p>
                <p>E-commerce řešení</p>
                <p>Landing pages</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: '700', color: '#C7CEEA' }}>
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
              <a href="mailto:jakubkozel@seznam.cz" className="contact-link">
                <span className="contact-icon">✉</span>
                <span>jakubkozel@seznam.cz</span>
              </a>
              <div className="contact-divider"></div>
              <a href="tel:+420728890062" className="contact-link">
                <span className="contact-icon">📞</span>
                <span>728 890 062</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}