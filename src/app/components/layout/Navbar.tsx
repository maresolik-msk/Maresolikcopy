import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SciFiButton } from '../ui/SciFiButton';
import imgMskV3W1 from "figma:asset/2be49c27e2213382a244bb910beb7652e051b5c1.png";
import imgLogoLight from "figma:asset/21b022a1f8cde4cc1f2c70f786de3ab7f639e359.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Impact', href: '/impact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[90%] lg:w-[1100px] rounded-full bg-[#F2F5FA]/80 backdrop-blur-md border border-[#021020]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 px-4 md:px-6' 
            : 'top-0 left-0 right-0 w-full bg-transparent border-transparent py-6 px-6'
        }`}
      >
        <div className={`flex items-center justify-between ${!isScrolled ? 'container mx-auto' : 'w-full'}`}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
           <img 
  src={!isScrolled && isHome 
    ? "/logo-light.png" 
    : "/logo-dark.png"} 
  alt="MARESOLIK Logo" 
  className="w-full h-full object-contain"
/>
              />
            </div>
            <span 
              className={`text-xl font-light tracking-[0.15em] uppercase transition-opacity duration-300 ${isScrolled ? 'hidden lg:block' : 'block'} ${!isScrolled && isHome ? 'text-white' : 'text-[#021020]'}`}
              style={{ 
                fontFamily: '"Aquire", sans-serif'
              }}
            >
              MARESOLIK
            </span>
          </Link>

          {/* Desktop Navigation - Centered in Floating Mode */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const textColor = !isScrolled && isHome ? 'text-white/80 hover:text-white' : 'text-[#021020]';
              const activeColor = !isScrolled && isHome ? 'text-white' : 'text-indigo-600';
              
              return (
              <Link
                key={link.name}
                to={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors z-10 ${isActive ? activeColor : textColor}`}
              >
                {hoveredLink === link.name && (
                   <motion.div
                     layoutId="nav-pill"
                     className={`absolute inset-0 rounded-full z-[-1] ${!isScrolled && isHome ? 'bg-white/10' : 'bg-[#021020]/5'}`}
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                )}
                {link.name}
              </Link>
            )})}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">

            <Link to="/contact">
              <SciFiButton 
                variant={isHome && !isScrolled ? 'secondary' : 'primary'} 
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </SciFiButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${!isScrolled && isHome ? 'text-white' : 'text-[#021020]'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#F2F5FA]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-[#021020] hover:bg-[#021020]/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-light text-[#021020] tracking-widest uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
