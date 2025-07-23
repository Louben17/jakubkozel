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
        <div className="px-6 w-full">
          
          <h1 className="grafika-main-title">
            GRAFIKA
          </h1>
          
          <div className="grafika-services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="grafika-service-tile"
              >
                <div className="grafika-service-icon">
                  {service.icon}
                </div>
                <h2 className="grafika-service-title">
                  {service.title}
                </h2>
                <p className="grafika-service-description">
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