"use client";

import { useState } from 'react';

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Domů' },
    { href: '/o-mne', label: 'O mně' },
    { href: '/sluzby', label: 'Služby' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-flex">
          {/* Logo */}
          <a href="/" className="nav-logo">
            JAKUB KOZEL
          </a>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}