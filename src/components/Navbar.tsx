'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'glass-card border-b border-[var(--glass-border)] py-3'
          : 'bg-transparent border-none py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[#64d2ff] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
            K
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block">
            Kritthapath
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 rounded-lg hover:bg-[var(--border-color)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1 border-t border-[var(--border-color)] mt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--border-color)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
