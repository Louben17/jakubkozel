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
  }, [pathname, navItems]);

  return (
    <>
      {/* Floating navigation - používá CSS třídy z globals.css */}
      <nav className={`floating-nav ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-items-container">
          {/* Animated background indicator - používá CSS z globals.css */}
          <div
            className="nav-indicator"
            style={{
              background: `linear-gradient(135deg, ${navItems[activeIndex]?.color}40, ${navItems[activeIndex]?.color}20)`,
              transform: `translateX(${activeIndex * 85}px)`,
              border: `1px solid ${navItems[activeIndex]?.color}60`,
            }}
          />

          {/* Navigation items - používá CSS třídy z globals.css */}
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => {
                  const currentIndex = navItems.findIndex(nav => nav.href === pathname);
                  setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
                }}
                style={{
                  textShadow: isActive ? `0 0 20px ${item.color}40` : 'none',
                }}
              >
                {item.label}
                
                {/* Tooltip - používá CSS třídu z globals.css */}
                <div className="nav-tooltip">
                  {item.description}
                </div>
              </Link>
            );
          })}

          {/* Mobile menu button - používá CSS třídu z globals.css */}
          <button
            className={`mobile-menu-btn ${isNavOpen ? 'open' : ''}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu - používá CSS třídu z globals.css */}
      {isNavOpen && (
        <div className="mobile-dropdown">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsNavOpen(false)}
                style={{
                  background: isActive ? `${item.color}20` : 'transparent',
                  borderLeft: isActive ? `3px solid ${item.color}` : 'none',
                }}
              >
                <div>{item.label}</div>
                <div className="mobile-nav-description">{item.description}</div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Cursor follower - používá CSS třídu z globals.css */}
      <div
        className="cursor-follower"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          background: `radial-gradient(circle, ${navItems[activeIndex]?.color}60, transparent)`,
        }}
      />
    </>
  );
}