import React from 'react';
import Navigation from '@/components/Navigation';
import { FaPenNib, FaPalette, FaPrint, FaBullhorn, FaFileAlt, FaBook } from 'react-icons/fa';

export const metadata = {
  title: 'Grafika | Jakub Kozel - Grafický design',
  description: 'Grafický design - loga, vizuální identity, firemní materiály, plakáty a print design.',
};

export default function GrafikaPage() {
  const services = [
    { title: 'Loga', description: 'Unikátní loga, která zanechají dojem.', icon: <FaPenNib /> },
    { title: 'Vizuální identity', description: 'Kompletní branding pro vaši značku.', icon: <FaPalette /> },
    { title: 'Firemní tiskoviny', description: 'Vizitky, hlavičkové papíry a další.', icon: <FaFileAlt /> },
    { title: 'Plakáty', description: 'Poutavé plakáty pro akce i kampaně.', icon: <FaBullhorn /> },
    { title: 'Print design', description: 'Kvalitní tiskoviny na míru.', icon: <FaPrint /> },
    { title: 'Katalogy', description: 'Profesionální katalogy a brožury.', icon: <FaBook /> },
  ];

  return (
    <div>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="max-w-5xl px-6">
          
          <h1
            className="text-6xl md:text-8xl font-bold mb-12 text-center"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: '800',
              color: '#FF9AA2',
            }}
          >
            GRAFIKA
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-2 border-gray-100 hover:border-pink-200"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <div 
                  className="text-4xl mb-4 flex justify-center"
                  style={{ color: '#FF9AA2' }}
                >
                  {service.icon}
                </div>
                <h2 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#FF9AA2' }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
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