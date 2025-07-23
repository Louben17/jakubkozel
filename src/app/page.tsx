"use client";

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const getLetterColor = (index: number) => {
    const colors = [
      '#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', 
      '#C7CEEA', '#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFABAB'
    ];
    return colors[index % colors.length];
  };

  // Video auto-play efekt
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video po 300ms (stejně jako původní animace)
    const timer = setTimeout(() => {
      video.play().catch(console.log);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
      
      <Navigation />

      {/* Video animace - nahrazuje canvas */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 15,
          pointerEvents: 'none',
          objectFit: 'cover',
          isolation: 'isolate',
        }}
      >
        <source src="/animace.mov" type="video/quicktime" />
        <source src="/animace.mp4" type="video/mp4" />
      </video>

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