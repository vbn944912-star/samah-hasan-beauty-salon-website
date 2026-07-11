import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, ChevronDown, Award } from 'lucide-react';
import { TranslationDict } from '../types';
import OptimizedImage from './OptimizedImage';
import salonInterior from '../assets/images/salon_interior_1783742501063.jpg';

interface HeroProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
  onBookClick: () => void;
}

export default function Hero({ lang, t, onBookClick }: HeroProps) {
  // WhatsApp Link prefilled with an elegant greeting message
  const whatsappMsg = encodeURIComponent(
    lang === 'en'
      ? "Hello Samah Hasan Beauty Salon, I would like to inquire about booking a premium beauty session."
      : "مرحباً صالون سماح حسن للتجميل، أود الاستفسار عن حجز جلسة تجميلية فاخرة."
  );
  const whatsappUrl = `https://wa.me/201098878797?text=${whatsappMsg}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section
      id="home"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={salonInterior}
          alt="Samah Hasan Beauty Salon Interior"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite_alternate]"
          priority={true}
          customWidth={1200}
        />
        {/* Dual gradients for maximum typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />
      </div>

      {/* Floating Sparkles Background Micro-effects */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-gold/40 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gold/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gold/50 rounded-full animate-ping" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        {/* Highlight Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold/30 mb-6 bg-gold/10 text-cream text-xs md:text-sm font-semibold tracking-wider uppercase animate-bounce-slow"
        >
          <Award size={14} className="text-gold animate-pulse" />
          <span>{t.heroBadge}</span>
        </motion.div>

        {/* Brand Name Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-2"
        >
          <p className="font-serif text-gold text-sm md:text-base tracking-[0.3em] uppercase">
            {lang === 'en' ? 'S A M A H   H A S A N' : 'ص ا ل و ن   س م ا ح   ح س ن'}
          </p>
        </motion.div>

        {/* Main Luxurious Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-wide drop-shadow-md"
        >
          {lang === 'en' ? 'Luxury Beauty Experience' : 'تجربة جمال فاخرة'}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gold via-rosegold to-gold-light font-serif italic">
            {lang === 'en' ? 'in Mansoura' : 'في المنصورة'}
          </span>
        </motion.h1>

        {/* Subheadline Categories */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-beige/90 text-sm md:text-lg lg:text-xl font-medium max-w-2xl mb-10 tracking-widest leading-relaxed border-y border-gold/10 py-3.5 px-4"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Main Booking Form trigger */}
          <button
            onClick={onBookClick}
            className="group flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-white font-semibold tracking-wider text-sm md:text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <Calendar size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>{t.heroBookCTA}</span>
          </button>

          {/* Direct WhatsApp Booking Integration */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white font-semibold tracking-wider text-sm md:text-base px-8 py-4 rounded-full border border-white/30 hover:border-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <MessageSquare size={18} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>{t.heroWhatsAppCTA}</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 group cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-semibold">
            {lang === 'en' ? 'Explore Salon' : 'اكتشفي الفخامة'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} className="text-gold" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
