import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Calendar, Sparkles, ArrowUp, Check } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { TRANSLATIONS } from './data';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar'); // Default to Arabic for native Egyptian target audience, switchable to English
  const [loading, setLoading] = useState(true);
  const [preSelectedService, setPreSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync translation dict
  const t = TRANSLATIONS[lang];

  // Set page layout direction dynamically
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Loading Screen simulation for premium entrance feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookService = (serviceName: string) => {
    setPreSelectedService(serviceName);
    const element = document.getElementById('booking');
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

  const handleQuickBook = () => {
    const element = document.getElementById('booking');
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

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Pre-filled WhatsApp URLs for floating badges
  const floatWhatsappUrl = `https://wa.me/201098878797?text=${encodeURIComponent(
    lang === 'en'
      ? "Hello Samah Hasan Beauty Salon, I would like to reserve a customized beauty session."
      : "مرحباً صالون سماح حسن للتجميل، أود حجز جلسة تجميلية فاخرة مخصصة."
  )}`;

  return (
    <div className={`min-h-screen bg-cream selection:bg-gold selection:text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* 1. Luxurious Entrance Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center text-center"
          >
            {/* Elegant rotating loader orbit */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full border-2 border-gold/10 animate-[spin_4s_linear_infinite]" />
              <div className="absolute w-20 h-20 rounded-full border-t-2 border-r-2 border-gold animate-[spin_1.5s_linear_infinite]" />
              <Sparkles className="absolute text-gold animate-pulse" size={28} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-charcoal">
                {lang === 'en' ? 'SAMAH HASAN' : 'سماح حسن'}
              </h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                {lang === 'en' ? 'Luxury Beauty Salon' : 'صالون تجميل فاخر'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Loaded only after loading or in background smoothly) */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Elegant top warning/info bar for rating */}
          <div className="bg-charcoal text-white/90 text-[11px] md:text-xs py-2 px-4 flex items-center justify-center gap-2 select-none border-b border-gold/10 relative z-50">
            <span className="flex items-center gap-1">
              <Check size={12} className="text-gold" />
              <span>{lang === 'en' ? 'Mansoura’s Leading Luxury Salon' : 'الوجهة الفاخرة الأولى للتجميل بالمنصورة'}</span>
            </span>
            <span className="opacity-30">|</span>
            <span className="text-gold font-bold">⭐ 4.7/5 ({lang === 'en' ? '446+ Reviews' : 'أكثر من 446 تقييم'})</span>
          </div>

          {/* Sticky Navigation Header */}
          <Header
            lang={lang}
            setLang={setLang}
            t={t}
            onBookClick={handleQuickBook}
          />

          {/* Full Screen Hero Section */}
          <Hero
            lang={lang}
            t={t}
            onBookClick={handleQuickBook}
          />

          {/* About Us Narrative Block */}
          <About
            lang={lang}
            t={t}
          />

          {/* Counter Legacy statistics */}
          <Stats
            lang={lang}
            t={t}
          />

          {/* 10 Reason Value Grid */}
          <WhyChooseUs
            lang={lang}
            t={t}
          />

          {/* 25 Luxury Services with Filter/Search */}
          <Services
            lang={lang}
            t={t}
            onBookService={handleBookService}
          />

          {/* Masonry Category Portfolio Art Gallery with Lightbox */}
          <Gallery
            lang={lang}
            t={t}
          />

          {/* Guest Reviews & Ratings Analysis */}
          <Reviews
            lang={lang}
            t={t}
          />

          {/* Interactive Reservation Form */}
          <BookingForm
            lang={lang}
            t={t}
            preSelectedService={preSelectedService}
            onClearPreSelected={() => setPreSelectedService('')}
          />

          {/* Contact Details & Google Maps */}
          <Contact
            lang={lang}
            t={t}
          />

          {/* Multi sitemap luxury dark footer */}
          <Footer
            lang={lang}
            t={t}
          />

          {/* 2. Quick Mobile Floating Action Console (Call & WhatsApp) */}
          <div className="fixed bottom-6 left-6 dir-rtl:left-auto dir-rtl:right-6 z-40 flex flex-col gap-3.5 select-none pointer-events-auto">
            {/* Pulsing Green WhatsApp Bubble */}
            <a
              href={floatWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
              title="Chat on WhatsApp"
            >
              {/* Pulsing visual halo */}
              <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
              <MessageSquare size={26} className="relative z-10" />
            </a>

            {/* Direct Dial Call Bubble */}
            <a
              href="tel:01098878797"
              className="w-14 h-14 rounded-full bg-gold hover:bg-gold-light text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
              title="Call Salon"
            >
              <Phone size={24} />
            </a>

            {/* Sticky Calendar Booking Button */}
            <button
              onClick={handleQuickBook}
              className="w-14 h-14 rounded-full bg-charcoal hover:bg-charcoal-light text-gold border border-gold/30 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              title="Quick Book Slot"
            >
              <Calendar size={22} />
            </button>
          </div>

          {/* 3. Back To Top Indicator (Appears when scrolled down) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleBackToTop}
                className="fixed bottom-6 right-6 dir-rtl:right-auto dir-rtl:left-6 z-40 w-11 h-11 rounded-full bg-white text-gold border border-gold/25 hover:bg-gold hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
                title="Scroll to Top"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}
