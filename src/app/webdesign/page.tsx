import React from 'react';
import Navigation from '@/components/Navigation';
import { FaLaptopCode, FaMobile, FaShoppingCart, FaRocket, FaUsers, FaSearch } from 'react-icons/fa';

export const metadata = {
  title: 'Web Design | Jakub Kozel - Grafický design',
  description: 'Web design - responzivní weby, UI/UX design, e-commerce řešení a landing pages.',
};

export default function WebDesignPage() {
  const services = [
    { title: 'Responzivní weby', description: 'Weby, které perfektně fungují na všech zařízeních.', icon: <FaLaptopCode /> },
    { title: 'UI/UX Design', description: 'Intuitivní rozhraní zaměřené na uživatele.', icon: <FaUsers /> },
    { title: 'E-commerce', description: 'Online obchody, které skutečně prodávají.', icon: <FaShoppingCart /> },
    { title: 'Landing Pages', description: 'Stránky s vysokou mírou konverze.', icon: <FaRocket /> },
    { title: 'Mobilní optimalizace', description: 'Perfektní zobrazení na mobilních zařízeních.', icon: <FaMobile /> },
    { title: 'SEO optimalizace', description: 'Weby připravené pro vyhledávače.', icon: <FaSearch /> },
  ];

  return (
    <div>
      <Navigation />
      
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="px-6 w-full">
          
          <h1 className="webdesign-main-title">
            WEB DESIGN
          </h1>
          
          <div className="webdesign-services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="webdesign-service-tile"
              >
                <div className="webdesign-service-icon">
                  {service.icon}
                </div>
                <h2 className="webdesign-service-title">
                  {service.title}
                </h2>
                <p className="webdesign-service-description">
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