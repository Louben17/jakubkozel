import React from 'react';
import Navigation from '@/components/Navigation';
import { FaBook, FaNewspaper, FaFileAlt, FaFont, FaLayerGroup, FaPrint } from 'react-icons/fa';

export const metadata = {
  title: 'DTP | Jakub Kozel - Grafický design',
  description: 'DTP - sazba knih a časopisů, katalogy, brožury, výroční zprávy a typografie.',
};

export default function DTPPage() {
  const services = [
    { title: 'Sazba knih', description: 'Profesionální sazba knih s důrazem na typografii.', icon: <FaBook /> },
    { title: 'Časopisy', description: 'Kompletní sazba časopisů a periodik.', icon: <FaNewspaper /> },
    { title: 'Katalogy', description: 'Atraktivní katalogy produktů a služeb.', icon: <FaLayerGroup /> },
    { title: 'Brožury', description: 'Informační brožury a prezentační materiály.', icon: <FaFileAlt /> },
    { title: 'Výroční zprávy', description: 'Reprezentativní zpracování výročních zpráv.', icon: <FaPrint /> },
    { title: 'Typografie', description: 'Odborná úprava textu a typografické řešení.', icon: <FaFont /> },
  ];

  return (
    <div>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="px-6 w-full">
          
          <h1 className="dtp-main-title">
            DTP
          </h1>
          
          <div className="dtp-services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="dtp-service-tile"
              >
                <div className="dtp-service-icon">
                  {service.icon}
                </div>
                <h2 className="dtp-service-title">
                  {service.title}
                </h2>
                <p className="dtp-service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
} 