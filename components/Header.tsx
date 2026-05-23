import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { useScrollObserver } from '../hooks/useScrollObserver';
import CodeIcon from './icons/CodeIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollObserver(NAV_LINKS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Match scroll-padding-top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
        padding: isScrolled ? '0' : '10px 0'
      }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105"
            style={{ color: 'var(--text-main)', fontFamily: "'Poppins', sans-serif" }}
          >
            <CodeIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
            <span>Sujan P</span>
          </a>

          {/* Controls & Nav Wrapper */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name} className="relative">
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="font-technical text-[10px] font-bold tracking-widest transition-colors"
                        style={{
                          color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = isActive ? 'var(--primary)' : 'var(--text-muted)'}
                      >
                        {link.name}
                      </a>
                      {/* Active Indicator Dot */}
                      <span
                        className="absolute left-1/2 bottom-[-12px] transform -translate-x-1/2 transition-all duration-300"
                        style={{
                          width: isActive ? '4px' : '0',
                          height: isActive ? '4px' : '0',
                          borderRadius: '0%',
                          backgroundColor: 'var(--primary)',
                          opacity: isActive ? 1 : 0
                        }}
                      ></span>
                    </li>
                  );
                })}
              </ul>
            </nav>



            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center transition-colors font-technical text-[10px] font-bold tracking-widest gap-2"
              style={{ color: isMenuOpen ? 'var(--primary)' : 'var(--text-main)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Collapse */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isMenuOpen ? '450px' : '0',
          opacity: isMenuOpen ? 1 : 0,
          background: 'var(--surface)',
          borderBottom: '2px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <div className="px-6 py-6 space-y-4">
          <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 px-4 rounded font-technical text-xs font-bold text-center transition-all duration-200"
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                      backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent',
                      border: isActive ? '2px solid var(--primary)' : '2px solid transparent'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
