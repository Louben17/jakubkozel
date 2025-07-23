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

    // Jednoduchý canvas setup - FORCE OVERRIDES
    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // FORCE canvas styles
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
    const duration = 4000; // Delší animace pro oba řádky
    let startTime: number | null = null;

    const drawBrushStroke = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = Math.min((timestamp - startTime) / duration, 1);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // MENŠÍ FONT S VELKÝMI MEZERAMI
      const baseFontSize = 40; // Malý font jak chcete
      console.log('MALÝ Font Canvas:', canvas.width, 'x', canvas.height, 'Font:', baseFontSize);
      
      const letterSpacing = 150; // Velké mezery jak chcete
      const lineSpacing = 80;

      // JAKUB - první řádek - PŘESNĚ VYSTŘEDĚNÝ
      const jakubText = 'JAKUB';
      const jakubWidth = jakubText.length * letterSpacing;
      const jakubStartX = centerX - jakubWidth / 2 + letterSpacing / 2; // Kompenzace pro center align

      jakubText.split('').forEach((letter, i) => {
        // KLASICKÁ ANIMACE - písmeno po písmenu zleva doprava
        const letterStart = i * 0.15; // Kratší delay mezi písmeny
        const letterDuration = 0.5; // Kratší kreslení písmene
        const letterProgress = Math.max(0, Math.min(1, (progress - letterStart) / letterDuration));
        
        console.log(`JAKUB ${i} (${letter}): start=${letterStart}, progress=${progress}, letterProgress=${letterProgress}`);
        
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

      // KOZEL - druhý řádek - PŘESNĚ VYSTŘEDĚNÝ
      const kozelText = 'KOZEL';
      const kozelWidth = kozelText.length * letterSpacing;
      const kozelStartX = centerX - kozelWidth / 2 + letterSpacing / 2; // Kompenzace pro center align
      const kozelDelay = 0.3; // Rychlejší start KOZEL
      
      kozelText.split('').forEach((letter, i) => {
        const letterStart = kozelDelay + i * 0.15; // Kratší delay
        const letterDuration = 0.5; // Kratší kreslení
        const letterProgress = Math.max(0, Math.min(1, (progress - letterStart) / letterDuration));
        
        console.log(`KOZEL ${i} (${letter}): start=${letterStart}, progress=${progress}, letterProgress=${letterProgress}`);
        
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
    
    // MASSIVE FONT with NO CSS dependencies
    ctx.font = `900 ${fontSize}px Arial Black, Impact, Helvetica, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // FORCE font load test
    console.log('Drawing letter:', letter, 'size:', fontSize, 'font loaded:', ctx.font);
    
    // Smooth appear efekt - bez zbytečného blur a shake
    ctx.globalAlpha = progress;
    
    // Stroke i fill pro plný vzhled
    ctx.strokeText(letter, x, y);
    ctx.fillText(letter, x, y);
    
    ctx.restore();
  };

      return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
      
      <Navigation />

      {/* ISOLATED Canvas - COMPLETE CSS ISOLATION */}
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
          isolation: 'isolate',
          contain: 'layout style paint size',
          transform: 'translateZ(0)',
          willChange: 'auto'
        }}
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