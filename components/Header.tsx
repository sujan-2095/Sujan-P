
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#262626]/80 backdrop-blur-lg border-b border-[#ACBFA4]/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 text-2xl font-bold text-[#E2E8CE] transition-transform hover:scale-105">
            <CodeIcon className="w-6 h-6 text-[#FF7F11]" />
            <span>Sujan P</span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`group relative text-sm font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-[#FF7F11]' : 'text-[#ACBFA4] hover:text-[#FF7F11]'}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF7F11] transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden text-[#ACBFA4] hover:text-[#FF7F11]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="bg-black/70 backdrop-blur-lg pt-2 pb-4 px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-2 text-center rounded-md text-base font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-[#FF7F11] bg-[#ACBFA4]/10' : 'text-[#E2E8CE] hover:text-white hover:bg-[#ACBFA4]/5'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
