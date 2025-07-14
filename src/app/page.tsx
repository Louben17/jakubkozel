"use client";

import { useState, useEffect } from 'react';
import { Palette, Layout, Printer, Mail } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const services = [
    {
      icon: <Palette className="w-16 h-16" />,
      title: "GRAFIKA",
      subtitle: "Visual Identity",
      description: "Loga • Branding • Print design",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Layout className="w-16 h-16" />,
      title: "WEB DESIGN", 
      subtitle: "Digital Experience",
      description: "UI/UX • Responsive • Modern",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Printer className="w-16 h-16" />,
      title: "DTP",
      subtitle: "Typography",
      description: "Sazba • Katalogy • Publikace",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dynamické pozadí */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      ></div>

      {/* Hlavní obsah */}
      <div className="relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-start p-8 lg:p-12">
          <div>
            <h1 
              className="text-4xl lg:text-6xl font-black tracking-tighter leading-none"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              JAKUB
              <br />
              KOZEL
            </h1>
            <div className="mt-4 text-gray-400">
              <p 
                className="text-sm tracking-[0.3em] font-mono"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                VISUAL COMMUNICATION
              </p>
            </div>
          </div>
          
          <div className="text-right text-sm font-mono text-gray-500">
            <p>{currentTime.toLocaleDateString('cs-CZ')}</p>
            <p>{currentTime.toLocaleTimeString('cs-CZ')}</p>
            <p className="text-xs mt-2">HRADEC KRÁLOVÉ</p>
          </div>
        </header>

        {/* Hero sekce */}
        <section className="px-8 lg:px-12 py-20">
          <div className="max-w-4xl">
            <h2 
              className="text-7xl lg:text-9xl font-black leading-none mb-8"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              DESIGN
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MATTERS
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Vytvářím vizuální komunikaci, která zaujme, 
              <span className="text-white font-semibold"> zapůsobí</span> a 
              <span className="text-white font-semibold"> funguje</span>.
            </p>
          </div>
        </section>

        {/* Služby - karty */}
        <section className="px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 bg-gradient-to-br from-gray-900 to-black hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="relative z-10">
                  <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-2"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-gray-400 text-sm mb-4 font-mono tracking-wider"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* O mně sekce */}
        <section className="px-8 lg:px-12 py-20 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 
                className="text-5xl lg:text-6xl font-black mb-8"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                VÍCE NEŽ
                <br />
                <span className="text-gray-500">10 LET</span>
                <br />
                ZKUŠENOSTÍ
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Specializuji se na grafický design, webdesign a DTP. 
                  Každý projekt je pro mě příležitost vytvořit něco jedinečného.
                </p>
                <p>
                  Věřím, že dobrý design dokáže změnit způsob, jakým lidé vnímají 
                  značku, produkt nebo službu.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                {['ADOBE CC', 'FIGMA', 'SKETCH', 'INDESIGN'].map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-gray-700 text-sm font-mono bg-gray-900/50"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span 
                      className="text-white text-4xl font-black"
                      style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                    >
                      JK
                    </span>
                  </div>
                  <p 
                    className="text-gray-400 font-mono text-sm"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    GRAPHIC DESIGNER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="px-8 lg:px-12 py-20 border-t border-gray-800">
          <div className="text-center">
            <h3 
              className="text-5xl lg:text-7xl font-black mb-8"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              POJĎME SI
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                POPOVÍDAT
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Máte projekt nebo nápad? Napište mi a společně vytvoříme něco výjimečného.
            </p>
            
            <a 
              href="mailto:jakub@jakubkozel.cz"
              className="group inline-flex items-center space-x-4 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-black"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <Mail className="w-6 h-6" />
              <span>JAKUB@JAKUBKOZEL.CZ</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 lg:px-12 py-8 border-t border-gray-800">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p style={{ fontFamily: 'Courier New, monospace' }}>
              © 2024 JAKUB KOZEL
            </p>
            <p style={{ fontFamily: 'Courier New, monospace' }}>
              MADE WITH ❤️ IN CZECHIA
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}