"use client";

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);

  const getLetterColor = (index: number) => {
    const colors = [
      '#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', 
      '#C7CEEA', '#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFABAB'
    ];
    return colors[index % colors.length];
  };

  // Video loading s fallback na CSS animaci
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Když se video načte
    const handleVideoLoad = () => {
      setVideoLoaded(true);
      setShowFallback(false);
      video.style.opacity = '1';
      video.play().catch(console.log);
    };

    // Pokud se video nenačte do 5s, zůstane CSS fallback
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        console.log('Video trvá dlouho, zůstává CSS animace');
      }
    }, 5000);

    video.addEventListener('canplaythrough', handleVideoLoad);

    return () => {
      video.removeEventListener('canplaythrough', handleVideoLoad);
      clearTimeout(fallbackTimer);
    };
  }, [videoLoaded]);, spusť CSS animaci
    const fallbackTimer = setTimeout(() => {
      if (video.style.opacity === '0') {
        console.log('Video se nenačetlo, používám CSS fallback');
        // Zde můžeš spustit původní CSS animaci
      }
    }, 3000);

    return () => {
      video.removeEventListener('canplaythrough', handleVideoLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);



      return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
      
      <Navigation />

      {/* CSS Fallback animace - zobrazí se první, pak ji nahradí video */}
      {showFallback && (
        <div 
          className="css-animation-fallback"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <div 
            style={{
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #FF9AA2, #FFB7B2, #FFDAC1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease 0.3s both',
            }}
          >
            JAKUB
          </div>
          <div 
            style={{
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #B5EAD7, #C7CEEA, #A2D2FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease 0.8s both',
            }}
          >
            KOZEL
          </div>
        </div>
      )}

      {/* HTML5 Video - nahrazuje CSS animaci když se načte */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 15,
          pointerEvents: 'none',
          objectFit: 'cover',
          opacity: videoLoaded ? '1' : '0',
          transition: 'opacity 0.5s ease',
        }}
      >
        <source src="/animace_jmeno.mov" type="video/quicktime" />
        <source src="/animace_jmeno.mp4" type="video/mp4" />
      </video>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

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