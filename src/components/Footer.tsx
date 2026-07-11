import { MapPin, Phone, MessageSquare, Globe, ArrowUp } from 'lucide-react';
import { TranslationDict } from '../types';

interface FooterProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

export default function Footer({ lang, t }: FooterProps) {
  const scrollSection = (id: string) => {
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

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-charcoal text-white pt-20 pb-12 relative overflow-hidden border-t border-gold/20">
      {/* Delicate top gold line ornament */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-start relative z-10">
        
        {/* Column 1: Brand & Desc */}
        <div className="flex flex-col items-start justify-between">
          <div>
            <span className="font-serif text-2xl font-extrabold tracking-wider text-white">
              {lang === 'en' ? 'SAMAH HASAN' : 'سماح حسن'}
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mt-1.5">
              {lang === 'en' ? 'Luxury Beauty Salon' : 'صالون تجميل فاخر'}
            </span>
            <p className="text-beige/70 text-xs md:text-sm leading-relaxed mt-6 mb-8 max-w-xs">
              {t.footerDesc}
            </p>
          </div>
          
          <div className="flex gap-4">
            {/* Quick direct social circles if any (represented with click actions) */}
            <a
              href="https://wa.me/201098878797"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              title="WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
            <a
              href="tel:01098878797"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              title="Call Phone"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://maps.google.com/?q=Tar'a%20Street,%20Mansoura,%20Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              title="Google Map Directions"
            >
              <MapPin size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-gold border-b border-white/10 pb-3 mb-6">
            {t.footerQuickLinks}
          </h3>
          <ul className="space-y-3.5">
            {[
              { label: t.navHome, id: 'home' },
              { label: t.navAbout, id: 'about' },
              { label: t.navServices, id: 'services' },
              { label: t.navGallery, id: 'gallery' },
              { label: t.navReviews, id: 'reviews' },
              { label: t.navContact, id: 'contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollSection(link.id)}
                  className="text-beige/80 hover:text-gold text-xs md:text-sm font-semibold transition-colors cursor-pointer block"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Main Category Quick Filters */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-gold border-b border-white/10 pb-3 mb-6">
            {t.footerServices}
          </h3>
          <ul className="space-y-3.5">
            {[
              t.catHair,
              t.catMakeup,
              t.catNails,
              t.catSkincare,
              t.catBody,
              t.catPackages
            ].map((catName, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollSection('services')}
                  className="text-beige/80 hover:text-gold text-xs md:text-sm font-semibold transition-colors cursor-pointer text-start"
                >
                  {catName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Hours Info */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-gold border-b border-white/10 pb-3 mb-6">
            {t.footerHours}
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-xs md:text-sm text-beige/80 border-b border-white/5 pb-2">
              <span>{t.saturday} – {t.friday}</span>
              <span className="font-mono text-gold font-bold">9am – 9pm</span>
            </li>
            <li className="text-[11px] text-beige/50 italic leading-relaxed pt-2">
              {t.openDaily}
            </li>
          </ul>

          {/* Back to top indicator inside foot */}
          <button
            onClick={handleBackToTop}
            className="flex items-center gap-2 mt-8 py-2.5 px-4 rounded-xl border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 w-full justify-center text-xs uppercase tracking-widest font-bold cursor-pointer"
          >
            <span>{lang === 'en' ? 'Back To Top' : 'الرجوع للأعلى'}</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      {/* Footer Bottom copyright and Terms */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-xs text-beige/50 font-normal relative z-10">
        <p>
          © {new Date().getFullYear()} {lang === 'en' ? 'Samah Hasan Beauty Salon' : 'صالون سماح حسن للتجميل'}. {t.footerRights}
        </p>
        
        <div className="flex gap-6">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollSection('about'); }} className="hover:text-gold transition-colors">
            {t.footerPrivacy}
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollSection('about'); }} className="hover:text-gold transition-colors">
            {t.footerTerms}
          </a>
        </div>
      </div>
    </footer>
  );
}
