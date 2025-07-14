"use client";

import { useState } from 'react';
import { Palette, Layout, Printer, Mail, ArrowRight } from 'lucide-react';

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "GRAFIKA",
      description: "Vizuální identity • Loga • Print design",
      details: "Vytváření ucelených vizuálních identit, návrhů log a tiskových materiálů s důrazem na originalitu a funkčnost."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "WEB DESIGN",
      description: "Moderní weby • UI/UX • Responzivní design",
      details: "Návrh a realizace moderních webových stránek s perfektní uživatelskou zkušeností na všech zařízeních."
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "DTP",
      description: "Sazba • Katalogy • Publikace",
      details: "Profesionální sazba knih, časopisů, katalogů a dalších publikací s precizním zpracováním typografie."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 
                className="text-3xl font-black tracking-tight"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                JAKUB KOZEL
              </h1>
              <p 
                className="text-sm tracking-widest text-gray-600 mt-1"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                VISUAL COMMUNICATION
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">|</span>
              <a 
                href="mailto:jakub@jakubkozel.cz" 
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                <Mail className="w-4 h-4" />
                <span>KONTAKT</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              className="text-6xl lg:text-7xl font-black leading-none mb-8"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              DESIGN
              <br />
              <span className="text-gray-400">KTERÝ</span>
              <br />
              FUNGUJE
            </h2>
            <p 
              className="text-lg leading-relaxed text-gray-600 mb-8"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Specializuji se na vytváření vizuální komunikace, která nejen vypadá dobře, 
              ale především plní svůj účel. Každý projekt přistupuji s důrazem na detail 
              a funkčnost.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-black"></div>
              <span 
                className="text-xs tracking-widest text-gray-500"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                SLUŽBY
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-gray-50 border border-gray-200"></div>
              <div className="h-32 bg-black"></div>
              <div className="h-32 bg-black"></div>
              <div className="h-32 bg-gray-50 border border-gray-200"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                <span 
                  className="text-xl font-black"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  JK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="border-2 border-gray-200 hover:border-black transition-all duration-300 bg-white">
                {/* Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-black group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 
                    className="text-xl font-black tracking-wide mb-3"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    {service.description}
                  </p>
                </div>
                
                {/* Expandable content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredService === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white border-2 border-gray-200 p-12 text-center">
                <div className="w-24 h-24 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span 
                    className="text-white text-2xl font-black"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    JK
                  </span>
                </div>
                <h4 
                  className="text-lg font-black tracking-wide mb-2"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  JAKUB KOZEL
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  GRAPHIC DESIGNER
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 
                className="text-4xl font-black leading-tight mb-8"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                O MNĚ
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Věnuji se grafickému designu více než 10 let. Má vášeň pro vizuální 
                  komunikaci mě vedla k specializaci na branding, webdesign a DTP sazbu.
                </p>
                <p>
                  Věřím, že dobrý design není jen o tom, jak něco vypadá, ale především 
                  o tom, jak to funguje. Každý projekt řeším s důrazem na detail a snažím 
                  se najít to nejlepší řešení.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 text-center">
                  <span 
                    className="text-sm font-black"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    ADOBE CC
                  </span>
                </div>
                <div className="bg-white border border-gray-200 p-4 text-center">
                  <span 
                    className="text-sm font-black"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    FIGMA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 
              className="text-5xl font-black leading-tight mb-8"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              POJĎME
              <br />
              SPOLUPRACOVAT
            </h3>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Máte projekt nebo jen nápad? Rád si s vámi popovídám o tom, 
              jak můžeme společně vytvořit něco výjimečného.
            </p>
            
            <div className="border-2 border-black bg-white p-8 inline-block">
              <a 
                href="mailto:jakub@jakubkozel.cz"
                className="flex items-center space-x-4 text-xl font-black hover:bg-black hover:text-white transition-colors duration-300 p-4 -m-4"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                <Mail className="w-6 h-6" />
                <span>JAKUB@JAKUBKOZEL.CZ</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p style={{ fontFamily: 'Courier New, monospace' }}>
              © 2024 JAKUB KOZEL
            </p>
            <p style={{ fontFamily: 'Courier New, monospace' }}>
              ČESKÁ REPUBLIKA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}