"use client";

import { useState, useEffect } from 'react';
import { Palette, Layout, Printer } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [connectionProgress, setConnectionProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionProgress(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "GRAFIKA",
      description: "Vizuální identity, loga, print design",
      color: "border-black hover:bg-black hover:text-white",
      position: { x: 20, y: 30 }
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "WEB DESIGN",
      description: "Moderní weby, UI/UX design",
      color: "border-black hover:bg-black hover:text-white",
      position: { x: 70, y: 20 }
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "DTP",
      description: "Sazba, katalogy, publikace",
      color: "border-black hover:bg-black hover:text-white",
      position: { x: 50, y: 70 }
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {/* Animated connection lines */}
          {services.map((service, index) => {
            const nextIndex = (index + 1) % services.length;
            const current = services[index];
            const next = services[nextIndex];
            
            return (
              <line
                key={index}
                x1={`${current.position.x}%`}
                y1={`${current.position.y}%`}
                x2={`${next.position.x}%`}
                y2={`${next.position.y}%`}
                stroke="black"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{
                  animation: `dash 2s linear infinite`,
                  animationDelay: `${index * 0.3}s`
                }}
              />
            );
          })}
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              cx={`${20 + i * 15}%`}
              cy={`${30 + Math.sin(connectionProgress * 0.01 + i) * 10}%`}
              r="2"
              fill="black"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with unique typography */}
        <header className="text-center py-20 px-4">
          <h1 
            className="text-8xl md:text-9xl font-black tracking-tighter leading-none mb-4"
            style={{ 
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
            }}
          >
            JAKUB
          </h1>
          <h2 
            className="text-4xl md:text-5xl font-thin tracking-widest"
            style={{ 
              fontFamily: 'Courier New, monospace',
              letterSpacing: '0.3em'
            }}
          >
            KOZEL
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mt-8 mb-4"></div>
          <p 
            className="text-sm tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            VISUAL COMMUNICATION
          </p>
        </header>

        {/* Interactive service circles */}
        <div className="relative h-screen px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${service.position.x}%`,
                top: `${service.position.y}%`,
                animation: `float ${3 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {/* Outer ring */}
              <div className="absolute inset-0 w-48 h-48 rounded-full border-2 border-black opacity-20 group-hover:opacity-60 transition-opacity duration-300 animate-spin-slow"></div>
              
              {/* Main circle */}
              <div className={`w-40 h-40 rounded-full border-4 ${service.color} transition-all duration-500 flex flex-col items-center justify-center p-6 bg-white hover:shadow-2xl`}>
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 
                  className="text-lg font-black tracking-wider mb-2 text-center"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-xs text-center leading-tight opacity-70"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Pulse effect */}
              <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-black opacity-0 group-hover:opacity-30 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 px-4">
          <div className="mb-8">
            <div className="w-px h-16 bg-black mx-auto mb-4"></div>
            <p 
              className="text-sm tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: 'Courier New, monospace' }}
            >
              CONTACT
            </p>
            <p 
              className="text-lg font-medium"
              style={{ fontFamily: 'Courier New, monospace' }}
            >
              jakub@jakubkozel.cz
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <p 
            className="text-xs tracking-[0.2em] uppercase opacity-50"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            © 2024 — ČESKÁ REPUBLIKA
          </p>
        </footer>
      </div>

      {/* Mouse follower */}
      <div 
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 opacity-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      ></div>
    </div>
  );
}