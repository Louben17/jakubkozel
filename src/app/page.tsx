"use client";

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
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

    // HIGH DPI canvas setup
    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };

    // Set canvas to full window
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    setupCanvas();

    let animationId: number;
    let progress = 0;
    const duration = 5000; // Delší animace pro všechna písmena
    let startTime: number | null = null;

    const drawBrushStroke = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = Math.min((timestamp - startTime) / duration, 1);

      // Clear with proper DPI
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // OBŘÍ FONT - fixed velikost
      const baseFontSize = Math.min(window.innerWidth / 8, 180);
      console.log('Font size:', baseFontSize); // Debug
      
      // Optimalizované spacing
      const letterSpacing = baseFontSize * 0.9;
      const lineSpacing = baseFontSize * 1.2;

      // JAKUB - první řádek
      const jakubText = 'JAKUB';
      const jakubStartX = centerX - (jakubText.length * letterSpacing) / 2;

      jakubText.split('').forEach((letter, i) => {
        // Pomalejší, plynulejší progress pro každé písmeno
        const letterStart = i * 0.08; // Menší delay mezi písmeny
        const letterDuration = 0.4; // Delší kreslení každého písmene
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

      // KOZEL - druhý řádek s pozdějším startem
      const kozelText = 'KOZEL';
      const kozelStartX = centerX - (kozelText.length * letterSpacing) / 2;
      const kozelDelay = 0.4; // Start KOZEL až po části JAKUB
      
      kozelText.split('').forEach((letter, i) => {
        const letterStart = kozelDelay + i * 0.08;
        const letterDuration = 0.4;
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

    // Start animace po 300ms
    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(drawBrushStroke);
    }, 300);

    // Resize handler
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
    
    // Gradient pro brush efekt
    const gradient = ctx.createLinearGradient(x, y - fontSize/2, x, y + fontSize/2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.5, color + 'dd');
    gradient.addColorStop(1, color + 'aa');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, fontSize / 30);
    
    // OBŘÍ FONT s fallback
    ctx.font = `bold ${fontSize}px var(--font-inter), Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Smooth brush efekt
    ctx.globalAlpha = Math.pow(progress, 0.5); // Rychlejší fade-in
    ctx.filter = `blur(${(1 - progress) * 1.5}px)`;
    
    // Jemný brush shake
    const shake = (1 - progress) * 2;
    const shakeX = (Math.random() - 0.5) * shake;
    const shakeY = (Math.random() - 0.5) * shake;
    
    // Stroke i fill pro plnější vzhled
    ctx.strokeText(letter, x + shakeX, y + shakeY);
    ctx.fillText(letter, x + shakeX, y + shakeY);
    
    ctx.restore();
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      <Navigation />

      {/* Full screen canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 15 }}
      />

      {/* Jemné pozadí */}
      <div className="absolute inset-0 overflow-hidden opacity-15 -z-10">
        {[...Array(25)].map((_, i) => (
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

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}