"use client";

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // PNG sekvence animace
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas
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

    // PNG sekvence settings
    const startFrame = 1007; // První frame
    const endFrame = 1197;   // Poslední frame
    const totalFrames = endFrame - startFrame + 1; // 191 snímků
    const frameRate = 60; // 60 FPS
    const frameDuration = 1000 / frameRate; // ms per frame
    
    let currentFrame = 0;
    let lastTime = 0;
    let animationId: number;

    // Preload všech obrázků
    const images: HTMLImageElement[] = [];
    let imagesLoaded = 0;

    const preloadImages = () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        const frameNumber = startFrame + i; // 1007, 1008, 1009, etc.
        img.src = `/animace/Comp ${frameNumber}.png`; // Tvoje názvy souborů
        
        img.onload = () => {
          imagesLoaded++;
          console.log(`Načten frame ${frameNumber} (${imagesLoaded}/${totalFrames})`);
          if (imagesLoaded === totalFrames) {
            console.log('Všechny PNG načteny, spouštím animaci');
            // Všechny obrázky načteny, spusť animaci po 300ms
            setTimeout(() => {
              setIsAnimating(true);
              animationId = requestAnimationFrame(animate);
            }, 300);
          }
        };
        
        img.onerror = () => {
          console.log(`Chyba při načítání: Comp ${frameNumber}.png`);
        };
        
        images[i] = img;
      }
    };

    const animate = (timestamp: number) => {
      if (timestamp - lastTime >= frameDuration) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Vykresli aktuální frame
        if (images[currentFrame] && images[currentFrame].complete) {
          // Vystředit obrázek
          const img = images[currentFrame];
          const x = (canvas.width - img.width) / 2;
          const y = (canvas.height - img.height) / 2;
          
          ctx.drawImage(img, x, y);
        }
        
        currentFrame++;
        lastTime = timestamp;
        
        // Opakovat animaci nebo zastavit
        if (currentFrame < totalFrames) {
          animationId = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
          console.log('Animace dokončena');
        }
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Spusť preload
    preloadImages();

    // Resize handler
    const handleResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
      
      <Navigation />

      {/* Canvas pro PNG sekvenci */}
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
        }}
      />

      {/* Loading indikátor s progress */}
      {!isAnimating && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 16,
          color: '#666',
          fontSize: '18px',
          textAlign: 'center'
        }}>
          <div>Načítám animaci...</div>
          <div style={{ fontSize: '14px', marginTop: '10px' }}>
            191 PNG snímků @ 60 FPS
          </div>
        </div>
      )}

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