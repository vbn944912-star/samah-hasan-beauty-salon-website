import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TranslationDict } from '../types';

interface HeaderProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  t: TranslationDict;
  onBookClick: () => void;
}

export default function Header({ lang, setLang, t, onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: '#home' },
    { name: t.navAbout, href: '#about' },
    { name: t.navServices, href: '#services' },
    { name: t.navGallery, href: '#gallery' },
    { name: t.navReviews, href: '#reviews' },
    { name: t.navContact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar-main"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 dark:bg-charcoal/90 backdrop-blur-md shadow-lg py-4 border-b border-gold/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex flex-col items-start transition-transform duration-300 hover:scale-102"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-charcoal dark:text-cream">
              {lang === 'en' ? 'SAMAH HASAN' : 'سماح حسن'}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-gold font-medium mt-0.5">
              {lang === 'en' ? 'Beauty Salon' : 'صالون تجميل فاخر'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 dir-ltr:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold-light`}
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Action Tools (Lang Switcher & Book Now CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Direct Call Quick Action */}
            <a
              href="tel:01098878797"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold dark:text-gold-light hover:text-charcoal dark:hover:text-cream transition-colors duration-300 px-3 py-1.5 border border-gold/20 rounded-full bg-gold/5"
            >
              <PhoneCall size={13} />
              <span>010 98878797</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold border border-charcoal/10 dark:border-cream/10 rounded-full hover:border-gold dark:hover:border-gold transition-all duration-300 cursor-pointer"
              title="Switch Language"
            >
              <Globe size={14} className="text-gold" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Book Now Button */}
            <button
              onClick={onBookClick}
              className="bg-gold hover:bg-gold-light text-white font-medium text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wider cursor-pointer font-sans"
            >
              {t.navBookNow}
            </button>
          </div>

          {/* Mobile Buttons (Hamburger, Call, Lang) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Call Mobile */}
            <a
              href="tel:01098878797"
              className="p-2 text-gold hover:text-gold-light transition-colors"
              title="Call Salon"
            >
              <PhoneCall size={18} />
            </a>

            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="p-2 text-charcoal dark:text-cream hover:text-gold transition-colors"
              title="Change Language"
            >
              <Globe size={18} className="text-gold" />
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal dark:text-cream hover:text-gold transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-cream/95 dark:bg-charcoal/95 backdrop-blur-lg border-b border-gold/10 shadow-xl py-6 px-6 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium tracking-wide text-charcoal dark:text-cream hover:text-gold py-2 border-b border-charcoal/5 dark:border-cream/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="tel:01098878797"
                  className="flex items-center justify-center gap-2 py-3 border border-gold/30 rounded-full text-gold font-semibold text-sm"
                >
                  <PhoneCall size={16} />
                  <span>010 98878797</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-gold hover:bg-gold-light text-white font-medium text-center py-3 rounded-full shadow-md text-sm transition-all duration-300"
                >
                  {t.navBookNow}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
