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
      {/* Floating navigation - konzistentní 1rem border-radius */}
      <nav 
        className={`floating-nav ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderRadius: '1rem', // Konzistentní zakulacení
          padding: '0.75rem',
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          transition: 'all 0.5s ease-out'
        }}
      >
        <div 
          className="nav-items-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            position: 'relative'
          }}
        >
          {/* Animated background indicator - přesně stejné zakulacení */}
          <div
            className="nav-indicator"
            style={{
              position: 'absolute',
              height: '3rem',
              width: '80px',
              borderRadius: '0.75rem', // Stejné jako nav-item
              transition: 'all 0.3s ease-out',
              zIndex: 1,
              background: `linear-gradient(135deg, ${navItems[activeIndex]?.color}40, ${navItems[activeIndex]?.color}20)`,
              transform: `translateX(${activeIndex * 85}px)`,
              border: `1px solid ${navItems[activeIndex]?.color}60`,
            }}
          />

          {/* Navigation items - přesně stejné zakulacení */}
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => {
                  const currentIndex = navItems.findIndex(nav => nav.href === pathname);
                  setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
                }}
                style={{
                  position: 'relative',
                  zIndex: 10,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem', // Konzistentní s nav-indicator
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#111827' : '#6b7280',
                  display: 'block',
                  textShadow: isActive ? `0 0 20px ${item.color}40` : 'none',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {item.label}
                
                {/* Tooltip */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '0.5rem',
                    backgroundColor: '#111827',
                    color: 'white',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem', // Menší zakulacení pro tooltip
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    fontFamily: 'Inter, sans-serif',
                    zIndex: 100
                  }}
                  className="nav-tooltip"
                >
                  {item.description}
                </div>
              </Link>
            );
          })}

          {/* Mobile menu button - stejné zakulacení */}
          <button
            className={`mobile-menu-btn ${isNavOpen ? 'open' : ''}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
            style={{
              display: 'none',
              marginLeft: '0.5rem',
              padding: '0.5rem',
              borderRadius: '0.75rem', // Konzistentní zakulacení
              color: '#6b7280',
              transition: 'all 0.3s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <svg 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                width: '1.25rem',
                height: '1.25rem',
                transition: 'transform 0.3s ease'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu - konzistentní zakulacení */}
      {isNavOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 40,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem', // Stejné jako hlavní nav
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            minWidth: '200px',
            animation: 'fadeInUp 0.2s ease-out'
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem', // Konzistentní menší zakulacení
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  marginBottom: '0.25rem',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#111827' : '#6b7280',
                  background: isActive ? `${item.color}20` : 'transparent',
                  borderLeft: isActive ? `3px solid ${item.color}` : 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div>{item.label}</div>
                <div 
                  style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    marginTop: '0.25rem'
                  }}
                >
                  {item.description}
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Cursor follower */}
      <div
        className="cursor-follower"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 30,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          opacity: 0.6,
          transition: 'all 0.15s ease-out',
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          background: `radial-gradient(circle, ${navItems[activeIndex]?.color}60, transparent)`,
        }}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          
          .nav-item {
            display: none !important;
          }
          
          .nav-indicator {
            display: none !important;
          }
        }

        .nav-item:hover .nav-tooltip {
          opacity: 1 !important;
        }

        .mobile-menu-btn:hover {
          color: #111827 !important;
        }

        .mobile-menu-btn.open svg {
          transform: rotate(90deg) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}