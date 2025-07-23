"use client";

import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getLetterColor = (index: number) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    return colors[index % colors.length];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '15';
      canvas.style.pointerEvents = 'none';
    };

    setupCanvas();

    let animationId: number;
    let progress = 0;
    const duration = 3500;
    let startTime: number | null = null;

    const drawBrushStroke = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = Math.min((timestamp - startTime) / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Responsive font sizing
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;
      
      let baseFontSize, letterSpacing, lineSpacing;
      
      if (isMobile) {
        baseFontSize = Math.min(window.innerWidth * 0.12, 60);
        letterSpacing = window.innerWidth * 0.15;
        lineSpacing = window.innerHeight * 0.15;
      } else if (isTablet) {
        baseFontSize = Math.min(window.innerWidth * 0.08, 80);
        letterSpacing = window.innerWidth * 0.12;
        lineSpacing = window.innerHeight * 0.12;
      } else {
        baseFontSize = Math.min(window.innerWidth * 0.06, 120);
        letterSpacing = window.innerWidth * 0.1;
        lineSpacing = window.innerHeight * 0.1;
      }

      // JAKUB - první řádek
      const jakubText = 'JAKUB';
      const jakubWidth = jakubText.length * letterSpacing;
      const jakubStartX = centerX - jakubWidth / 2 + letterSpacing / 2;

      jakubText.split('').forEach((letter, i) => {
        const letterStart = i * 0.12;
        const letterDuration = 0.6;
        const letterProgress = Math.max(0, Math.min(1, (progress - letterStart) / letterDuration));
        
        if (letterProgress > 0) {
          drawLetter(
            ctx, 
            letter, 
            jakubStartX + i * letterSpacing, 
            centerY - lineSpacing/2, 
            letterProgress, 
            getLetterColor(i), 
            baseFontSize
          );
        }
      });

      // KOZEL - druhý řádek
      const kozelText = 'KOZEL';
      const kozelWidth = kozelText.length * letterSpacing;
      const kozelStartX = centerX - kozelWidth / 2 + letterSpacing / 2;
      const kozelDelay = 0.4;
      
      kozelText.split('').forEach((letter, i) => {
        const letterStart = kozelDelay + i * 0.12;
        const letterDuration = 0.6;
        const letterProgress = Math.max(0, Math.min(1, (progress - letterStart) / letterDuration));
        
        if (letterProgress > 0) {
          drawLetter(
            ctx, 
            letter, 
            kozelStartX + i * letterSpacing, 
            centerY + lineSpacing/2, 
            letterProgress, 
            getLetterColor(i + 5), 
            baseFontSize
          );
        }
      });

      if (progress < 1) {
        animationId = requestAnimationFrame(drawBrushStroke);
      }
    };

    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(drawBrushStroke);
    }, 300);

    const handleResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
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
    
    // Hlavní text s gradientem
    const gradient = ctx.createLinearGradient(x - fontSize/2, y - fontSize/2, x + fontSize/2, y + fontSize/2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, adjustBrightness(color, -20));
    
    ctx.fillStyle = gradient;
    ctx.font = `900 ${fontSize}px 'Arial Black', Impact, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Animační efekty
    const scale = 0.3 + (progress * 0.7);
    const rotation = (1 - progress) * 0.1;
    
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.scale(scale, scale);
    ctx.globalAlpha = progress;
    
    // Stín
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    ctx.fillText(letter, 0, 0);
    
    // Světelný efekt
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = `rgba(255, 255, 255, ${progress * 0.3})`;
    ctx.fillText(letter, -1, -1);
    
    ctx.restore();
  };

  const adjustBrightness = (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Navigation placeholder */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-lg font-semibold text-slate-700">Portfolio</div>
          <div className="hidden md:flex space-x-6 text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">O mně</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projekty</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Canvas pro animaci */}
      <canvas
        ref={canvasRef}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 15,
          pointerEvents: 'none',
        }}
      />

      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                transform: `scale(${0.5 + Math.random() * 1.5})`
              }}
            />
          </div>
        ))}
        
        {/* Larger accent shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${12 + Math.random() * 6}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
            }}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full blur-sm"
            />
          </div>
        ))}
      </div>

      {/* Jemný overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-slate-500 animate-bounce">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(-3deg); 
          }
          75% { 
            transform: translateY(-15px) rotate(2deg); 
          }
        }
      `}</style>
    </div>
  );
}