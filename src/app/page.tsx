"use client";

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
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

    // Canvas setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let progress = 0;
    const duration = 3000;
    let startTime: number | null = null;

    const drawBrushStroke = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = Math.min((timestamp - startTime) / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // MASSIVE FONT SIZE
      const fontSize = Math.min(canvas.width * 0.12, 200);
      const letterSpacing = fontSize * 0.8;

      // JAKUB
      const jakubText = 'JAKUB';
      const startX = centerX - (jakubText.length * letterSpacing) / 2;

      jakubText.split('').forEach((letter, i) => {
        const letterProgress = Math.max(0, Math.min(1, (progress - i * 0.15) * 3));
        if (letterProgress > 0) {
          drawLetter(ctx, letter, startX + i * letterSpacing, centerY - 80, letterProgress, getLetterColor(i), fontSize);
        }
      });

      // KOZEL
      const kozelText = 'KOZEL';
      const kozelStartX = centerX - (kozelText.length * letterSpacing) / 2;
      
      kozelText.split('').forEach((letter, i) => {
        const letterProgress = Math.max(0, Math.min(1, (progress - (i + 5) * 0.15) * 3));
        if (letterProgress > 0) {
          drawLetter(ctx, letter, kozelStartX + i * letterSpacing, centerY + 80, letterProgress, getLetterColor(i + 5), fontSize);
        }
      });

      if (progress < 1) {
        animationId = requestAnimationFrame(drawBrushStroke);
      } else {
        setTimeout(() => setShowServices(true), 500);
      }
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(drawBrushStroke);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const drawLetter = (
    ctx: CanvasRenderingContext2D, 
    letter: string, 
    x: number, 
    y: number, 
    progress: number, 
    color: string,
    fontSize: number
  ) => {
    ctx.save();
    
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    
    // HUGE FONT
    ctx.font = `bold ${fontSize}px var(--font-inter), sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.globalAlpha = progress;
    ctx.filter = `blur(${(1 - progress) * 2}px)`;
    
    // Brush shake
    const shake = (1 - progress) * 3;
    const shakeX = (Math.random() - 0.5) * shake;
    const shakeY = (Math.random() - 0.5) * shake;
    
    ctx.fillText(letter, x + shakeX, y + shakeY);
    
    ctx.restore();
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      <Navigation />

      {/* ONLY CANVAS - nothing else! */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 15 }}
      />

      {/* Pozadí částice */}
      <div className="absolute inset-0 overflow-hidden opacity-20 -z-10">
        {[...Array(20)].map((_, i) => (
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

      {/* Služby + kontakt - POUZE když animace skončí */}
      {showServices && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-8">
          <div className="opacity-100 translate-y-0 transition-all duration-1000">
            
            {/* Služby */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#FF9AA2' }}>GRAFIKA</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Loga & vizuální identity</p>
                  <p>Firemní materiály</p>
                  <p>Print design</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#B5EAD7' }}>WEB DESIGN</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Responzivní weby</p>
                  <p>UI/UX design</p>
                  <p>E-commerce řešení</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#C7CEEA' }}>DTP</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Sazba knih & časopisů</p>
                  <p>Katalogy & brožury</p>
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
      )}

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}