"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const pathname = usePathname();
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = useMemo(() => [
    { href: '/', label: 'Domů', color: '#FF9AA2', description: 'Hlavní stránka' },
    { href: '/grafika', label: 'Grafika', color: '#FFB7B2', description: 'Loga & Branding' },
    { href: '/webdesign', label: 'Web Design', color: '#B5EAD7', description: 'Moderní weby' },
    { href: '/dtp', label: 'DTP', color: '#C7CEEA', description: 'Sazba & Print' },
    { href: '/kontakt', label: 'Kontakt', color: '#A2D2FF', description: 'Spojme se' }
  ], []);

  // Funkce pro aktualizaci pozice indikátoru
  const updateIndicatorPosition = (index: number) => {
    const navItem = navItemsRef.current[index];
    if (navItem) {
      setIndicatorStyle({
        left: navItem.offsetLeft,
        width: navItem.offsetWidth
      });
    }
  };

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

  // Aktivní index na základě pathname + aktualizace pozice indikátoru
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.href === pathname);
    const newActiveIndex = currentIndex >= 0 ? currentIndex : 0;
    setActiveIndex(newActiveIndex);
    
    // Aktualizace pozice indikátoru po malém zpoždění (aby se komponenta stihla vykreslit)
    setTimeout(() => updateIndicatorPosition(newActiveIndex), 100);
  }, [pathname, navItems]);

  // Handle mouse enter/leave
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    updateIndicatorPosition(index);
  };

  const handleMouseLeave = () => {
    const currentIndex = navItems.findIndex(nav => nav.href === pathname);
    const newActiveIndex = currentIndex >= 0 ? currentIndex : 0;
    setActiveIndex(newActiveIndex);
    updateIndicatorPosition(newActiveIndex);
  };

  return (
    <>
      {/* Floating navigation - pill shape */}
      <nav className={`floating-nav ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-items-container">
          {/* Desktop: Animated background indicator - přesné pozicování */}
          <div
            className="nav-indicator desktop-only"
            style={{
              background: `linear-gradient(135deg, ${navItems[activeIndex]?.color}40, ${navItems[activeIndex]?.color}20)`,
              border: `1px solid ${navItems[activeIndex]?.color}60`,
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              borderRadius: '9999px'
            }}
          />

          {/* Desktop: Navigation items */}
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { navItemsRef.current[index] = el; }}
                className={`nav-item desktop-only ${isActive ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  textShadow: isActive ? `0 0 20px ${item.color}40` : 'none',
                  borderRadius: '9999px'
                }}
              >
                {item.label}
                
                {/* Tooltip */}
                <div className="nav-tooltip">
                  {item.description}
                </div>
              </Link>
            );
          })}



          {/* Mobile: Pouze sendvič button v krásném kolečku */}
          <button
            className={`mobile-menu-btn ${isNavOpen ? 'open' : ''}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
            style={{ 
              borderRadius: '9999px',
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                width: '1.5rem',
                height: '1.5rem',
                transition: 'transform 0.3s ease'
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* CTA Button - samostatně za menu */}
      <button
        className={`cta-button-separate ${isVisible ? 'visible' : 'hidden'}`}
        onClick={() => {/* zatím nic */}}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '6rem',
          padding: '0.5rem 1.2rem',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          color: '#333',
          border: '1px solid #FFB84D',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
          zIndex: '1000',
          opacity: isVisible ? '1' : '0',
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isVisible ? 'translateY(-1px)' : 'translateY(-20px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(-20px)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 215, 0, 0.3)';
        }}
      >
        Premium
      </button>

      {/* Mobile dropdown menu - pill shape */}
      {isNavOpen && (
        <div className="mobile-dropdown" style={{ borderRadius: '1.5rem' }}>
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
                  borderRadius: '0.75rem' // Pill shape pro mobile items
                }}
              >
                <div>{item.label}</div>
                <div className="mobile-nav-description">{item.description}</div>
              </Link>
            );
          })}

        </div>
      )}

      {/* Cursor follower */}
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