import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const slideLogo = '/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'E-Magazine', href: '#magazine' },
    { name: 'Event Structure', href: '#structure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-amber-600/30 shadow-2xl shadow-amber-600/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src={slideLogo} 
                alt="Exposition Logo" 
                className="h-[170px] w-auto group-hover:scale-110 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                }}
              />
              {/* <span className="hidden text-3xl font-bold bg-[#f1b759] bg-clip-text text-transparent">
                Exposition
              </span> */}

            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-[#f1b759]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f1b759] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-white hover:text-[#f1b759] transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <Menu className="h-6 w-6" />
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
                  <X className="h-6 w-6" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-black/95 backdrop-blur-xl border-t border-[#f1b759]/20 rounded-b-2xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-[#f1b759]/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;