"use client";

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video auto-play efekt
  useEffect(() => {
    console.log('useEffect started');
    const video = videoRef.current;
    console.log('Video element:', video);
    
    if (!video) {
      console.log('No video element found!');
      return;
    }

    // Start video po 300ms (stejně jako původní animace)
    const timer = setTimeout(() => {
      console.log('Trying to play video...');
      video.play().catch((error) => {
        console.log('Video play error:', error);
      });
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
        onError={(e) => console.log('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
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
        Tvůj prohlížeč nepodporuje video.
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