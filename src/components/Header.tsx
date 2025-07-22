import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isLegacy = location.pathname === '/legacy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'E-Magazine', href: 'https://emagazine.exposition.lk/' },
    { name: 'Event Structure', href: '#structure' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // ✅ Unified return
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-amber-600/30 shadow-2xl shadow-amber-600/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20 min-h-0">
          {/* Logo or Legacy Title */}
          <div className="flex items-center space-x-2 sm:space-x-4 group flex-shrink-0">
            {isLegacy ? (
              <p className="text-lg text-white font-semibold">Legacy Page</p>
            ) : (
              <div className="relative">
                <img
                  src="/assets/logo.png"
                  alt="Exposition Logo"
                  className="h-[80px] sm:h-[120px] lg:h-[150px] xl:h-[170px] w-auto group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#f1b759] to-amber-400 bg-clip-text text-transparent">
                  Exposition
                </span>
              </div>
            )}
          </div>

          {/* Navigation */}
          {isLegacy ? (
            <button
              onClick={() => navigate('/')}
              className="bg-[#f1b759] text-black px-4 py-2 rounded-md hover:bg-amber-400 transition-all"
            >
              Back to Home
            </button>
          ) : (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-0.5 xl:space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-2 lg:px-3 xl:px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium group text-xs lg:text-sm xl:text-base whitespace-nowrap"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-[#f1b759]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f1b759] group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden flex-shrink-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-1.5 sm:p-2 text-white hover:text-[#f1b759] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#f1b759]/50 rounded-lg"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMenuOpen}
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                    <span
                      className={`absolute inset-0 transition-all duration-300 ${
                        isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                      }`}
                    >
                      <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span
                      className={`absolute inset-0 transition-all duration-300 ${
                        isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                      }`}
                    >
                      <X className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {!isLegacy && (
          <div
            className={`lg:hidden fixed inset-0 top-14 sm:top-16 lg:top-20 transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div
              className={`relative bg-black/95 backdrop-blur-xl border-t border-[#f1b759]/20 transform transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <div className="px-4 sm:px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-4 text-white/90 hover:text-white hover:bg-[#f1b759]/10 rounded-lg transition-all duration-300 transform hover:translate-x-2 text-lg font-medium"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen ? 'slideInFromLeft 0.6s ease-out forwards' : 'none',
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <div className="w-2 h-2 bg-[#f1b759] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </button>
                ))}
                <div className="pt-6 mt-6 border-t border-[#f1b759]/20">
                  <p className="text-center text-white/60 text-sm">Exposition 2024</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
