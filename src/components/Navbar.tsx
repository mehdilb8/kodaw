import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar Commercial */}
      

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-xl py-3 mt-0'
            : 'bg-white/95 backdrop-blur-lg py-4 mt-10'
        }`}
      >
        <div className="container-padding flex justify-between items-center">
          {/* LOGO PROFESSIONNEL */}
          <a 
            href="/" 
            className="flex items-center group relative transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden rounded-xl p-3 bg-gradient-to-br from-white via-blue-50/40 to-white shadow-lg border border-blue-100/60 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-white/40 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <img 
                src="/images/logo-agence-web.png" 
                alt="WebKoda - Agence Web Professionnelle" 
                className={`
                  transition-all duration-300 ease-out
                  ${isScrolled 
                    ? 'h-10 w-auto' 
                    : 'h-12 w-auto'
                  }
                  max-w-[150px] md:max-w-[200px]
                  object-contain 
                  filter brightness-100 contrast-110 saturate-110
                  group-hover:brightness-105 
                  group-hover:scale-[1.02]
                  drop-shadow-lg
                  relative z-10
                `}
                style={{
                  imageRendering: 'crisp-edges'
                } as React.CSSProperties}
                loading="eager"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12 rounded-xl"></div>
            </div>
            
            {/* Badge Premium */}
            <div className="flex ml-4 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-xs font-bold rounded-full opacity-100 transition-all duration-300 shadow-lg">
              ⭐ Agence Certifiée
            </div>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {isHomePage ? (
              <a href="#about" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#about" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
            {isHomePage ? (
              <a href="#services" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#services" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
            <Link to="/blog" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {isHomePage ? (
              <a href="#portfolio" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#portfolio" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#contact" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group py-2">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* CTA Secondaire */}
            <a href="tel:+33123456789" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 group">
              <Phone size={16} className="group-hover:animate-pulse" />
              <span className="hidden xl:inline">Appelez-nous</span>
            </a>
            
            {/* CTA Principal */}
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span>Devis Gratuit</span>
              <Zap size={16} className="animate-pulse" />
            </a>
          </div>

          {/* MENU MOBILE TOGGLE */}
          <button
            className="lg:hidden text-gray-800 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-2xl border-t border-gray-100">
            <div className="container-padding py-6 flex flex-col space-y-4">
              {/* Contact Info Mobile */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} className="text-blue-600" />
                    <span className="text-gray-700">+33 1 23 45 67 89</span>
                  </div>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Appel gratuit
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              {[
                { label: 'Accueil', href: '/', isRoute: true },
                { label: 'À propos', href: isHomePage ? '#about' : '/#about', isRoute: !isHomePage },
                { label: 'Services', href: isHomePage ? '#services' : '/#services', isRoute: !isHomePage },
                { label: 'Blogs', href: '/blog', isRoute: true },
                { label: 'Portfolio', href: isHomePage ? '#portfolio' : '/#portfolio', isRoute: !isHomePage },
                { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', isRoute: !isHomePage }
              ].map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="font-semibold text-gray-800 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 last:border-b-0 flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-semibold text-gray-800 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 last:border-b-0 flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-gray-400">→</span>
                  </a>
                )
              ))}
              
              {/* CTA Mobile */}
              <div className="space-y-3 pt-4">
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={16} />
                  <span>Appeler maintenant</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Devis Gratuit</span>
                  <Zap size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;