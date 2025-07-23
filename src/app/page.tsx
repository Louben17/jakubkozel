"use client";

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const jakubRef = useRef<HTMLDivElement>(null);
  const kozelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Načti GSAP z CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js';
    script.onload = () => {
      // GSAP je načtené, spusť animaci
      // @ts-expect-error - GSAP z CDN
      const gsap = window.gsap;
      
      if (!gsap) {
        console.log('GSAP se nenačetlo');
        return;
      }
      
      // Timeline s 300ms delay
      const tl = gsap.timeline({ delay: 0.3 });

      // Animace JAKUB - elegant bounce
      tl.fromTo(
        ".jakub-letter",
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          rotation: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(2)"
        }
      )
      // Animace KOZEL - elastic drop
      .fromTo(
        ".kozel-letter",
        {
          opacity: 0,
          y: -100,
          scale: 1.5,
          rotation: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.12,
          ease: "elastic.out(1, 0.4)"
        },
        "-=0.4"
      );

      // Hover efekty po dokončení
      setTimeout(() => {
        document.querySelectorAll('.letter').forEach((letter) => {
          letter.addEventListener('mouseenter', () => {
            gsap.to(letter, {
              scale: 1.3,
              rotation: Math.random() * 30 - 15,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          letter.addEventListener('mouseleave', () => {
            gsap.to(letter, {
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.4,
              ease: "elastic.out(1, 0.3)"
            });
          });
        });
      }, 3000);
    };
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const renderLetters = (word: string, className: string) => {
    return word.split('').map((letter, index) => (
      <span
        key={index}
        className={`letter ${className}`}
        style={{
          display: 'inline-block',
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          fontWeight: '900',
          margin: '0 0.5vw',
          cursor: 'pointer',
          background: className === 'jakub-letter' 
            ? 'linear-gradient(135deg, #FF9AA2, #FFB7B2, #FFDAC1)'
            : 'linear-gradient(135deg, #B5EAD7, #C7CEEA, #A2D2FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ isolation: 'isolate' }}>
      
      <Navigation />

      {/* GSAP Animovaný text */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 15,
        pointerEvents: 'none',
        gap: 'clamp(2rem, 8vh, 6rem)'
      }}>
        
        {/* JAKUB */}
        <div 
          ref={jakubRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'auto' // Povolit hover
          }}
        >
          {renderLetters('JAKUB', 'jakub-letter')}
        </div>

        {/* KOZEL */}
        <div 
          ref={kozelRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'auto' // Povolit hover
          }}
        >
          {renderLetters('KOZEL', 'kozel-letter')}
        </div>

      </div>

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