"use client";

import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = useMemo(() => [
    { href: '/', label: 'Domů', color: '#FF9AA2', description: 'Hlavní stránka' },
    { href: '/grafika', label: 'Grafika', color: '#FFB7B2', description: 'Loga & Branding' },
    { href: '/webdesign', label: 'Web Design', color: '#B5EAD7', description: 'Moderní weby' },
    { href: '/dtp', label: 'DTP', color: '#C7CEEA', description: 'Sazba & Print' },
    { href: '/kontakt', label: 'Kontakt', color: '#A2D2FF', description: 'Spojme se' }
  ], []);

  // Auto-hide navigace při scrollování
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Mouse tracking pro interaktivní efekty
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Aktivní index na základě pathname
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.href === pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [pathname, navItems]); // Přidána závislost navItems

  return (
    <>
      {/* Floating navigation */}
      <nav 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '0.75rem',
        }}
      >
        <div className="flex items-center gap-2 relative">
          {/* Animated background indicator */}
          <div
            className="absolute h-12 rounded-xl transition-all duration-300 ease-out"
            style={{
              background: `linear-gradient(135deg, ${navItems[activeIndex]?.color}40, ${navItems[activeIndex]?.color}20)`,
              width: '80px',
              transform: `translateX(${activeIndex * 85}px)`,
              border: `1px solid ${navItems[activeIndex]?.color}60`,
            }}
          />

          {/* Navigation items */}
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative z-10 group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => {
                  const currentIndex = navItems.findIndex(nav => nav.href === pathname);
                  setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
                }}
              >
                <div 
                  className={`
                    px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                    ${isActive 
                      ? 'text-gray-900 scale-105' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    textShadow: isActive ? `0 0 20px ${item.color}40` : 'none',
                  }}
                >
                  {item.label}
                  
                  {/* Tooltip */}
                  <div 
                    className={`
                      absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                      bg-gray-900 text-white text-xs py-1 px-2 rounded
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      pointer-events-none whitespace-nowrap
                    `}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Mobile menu button - pouze na malých obrazovkách */}
          <button
            className="md:hidden ml-2 p-2 rounded-xl text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isNavOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isNavOpen && (
        <div 
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            minWidth: '200px',
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="block"
                onClick={() => setIsNavOpen(false)}
              >
                <div 
                  className={`
                    px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 mb-1
                    ${isActive 
                      ? 'text-gray-900 scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: isActive ? `${item.color}20` : 'transparent',
                    borderLeft: isActive ? `3px solid ${item.color}` : 'none',
                  }}
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Cursor follower - luxusní efekt */}
      <div
        className="fixed pointer-events-none z-30 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          width: '12px',
          height: '12px',
          background: `radial-gradient(circle, ${navItems[activeIndex]?.color}60, transparent)`,
          borderRadius: '50%',
          opacity: 0.6,
        }}
      />

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            padding: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
}