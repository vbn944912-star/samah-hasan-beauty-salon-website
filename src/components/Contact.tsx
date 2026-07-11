import { MapPin, Phone, MessageSquare, Clock, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { TranslationDict } from '../types';

interface ContactProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

export default function Contact({ lang, t }: ContactProps) {
  const whatsappMsg = encodeURIComponent(
    lang === 'en'
      ? "Hello, I am looking to book an appointment at your beauty salon in Mansoura."
      : "مرحباً، أود حجز موعد في صالون التجميل الخاص بكم في المنصورة."
  );
  const whatsappUrl = `https://wa.me/201098878797?text=${whatsappMsg}`;

  const scheduleDays = [
    { day: t.saturday, hours: '9:00 AM – 9:00 PM' },
    { day: t.sunday, hours: '9:00 AM – 9:00 PM' },
    { day: t.monday, hours: '9:00 AM – 9:00 PM' },
    { day: t.tuesday, hours: '9:00 AM – 9:00 PM' },
    { day: t.wednesday, hours: '9:00 AM – 9:00 PM' },
    { day: t.thursday, hours: '9:00 AM – 9:00 PM' },
    { day: t.friday, hours: '9:00 AM – 9:00 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-cream/30 relative overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
            {lang === 'en' ? 'Reservations & Direction' : 'موقعنا وساعات العمل'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
            {t.contactTitle}
          </h2>
          <p className="text-charcoal-light/85 text-sm md:text-base leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Cards & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Quick Details Box */}
            <div className="bg-white rounded-[2rem] border border-gold/10 p-8 shadow-xl text-start flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-gold tracking-widest font-bold">
                  {lang === 'en' ? 'Premium Destination' : 'وجهة دلالك في المنصورة'}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-extrabold text-charcoal mt-1 mb-6">
                  {lang === 'en' ? 'Samah Hasan Beauty Salon' : 'صالون سماح حسن للتجميل'}
                </h3>
                
                <div className="space-y-6">
                  {/* Address Detail */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        {lang === 'en' ? 'Our Location' : 'عنوان الصالون'}
                      </h4>
                      <p className="text-charcoal-light/90 text-sm mt-1">
                        {t.contactAddress}
                      </p>
                    </div>
                  </div>

                  {/* Phone Detail */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
                        {lang === 'en' ? 'Direct Telephone' : 'الاتصال المباشر'}
                      </h4>
                      <p className="text-charcoal-light/90 text-sm mt-1 dir-ltr text-start">
                        010 98878797
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Call & Message CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gold/10">
                <a
                  href="tel:01098878797"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone size={14} />
                  <span>{t.contactCallUs}</span>
                </a>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-transparent hover:bg-emerald-500 hover:text-white text-emerald-600 border border-emerald-400 rounded-xl text-xs tracking-wider uppercase transition-all duration-300"
                >
                  <MessageSquare size={14} />
                  <span>{t.contactWhatsAppUs}</span>
                </a>
              </div>
            </div>

            {/* Elegant Opening Hours Schedule */}
            <div className="bg-charcoal text-white rounded-[2rem] p-8 shadow-xl text-start">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-gold" />
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  {t.contactHours}
                </h3>
              </div>

              <div className="space-y-3.5">
                {scheduleDays.map((sched, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs md:text-sm border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-beige">{sched.day}</span>
                    <span className="font-mono text-gold-light font-bold">{sched.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-beige/50 italic mt-4 text-center">
                {t.openDaily}
              </p>
            </div>

          </div>

          {/* Right Side: Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-full min-h-[400px] rounded-[2.5rem] overflow-hidden border border-gold/15 shadow-2xl bg-white flex flex-col">
              
              {/* Maps Header / Action prompt */}
              <div className="bg-cream/50 px-6 py-4 border-b border-gold/10 flex items-center justify-between text-start">
                <div className="flex items-center gap-2.5 text-charcoal">
                  <Map size={16} className="text-gold" />
                  <span className="text-xs md:text-sm font-semibold tracking-wider">
                    {lang === 'en' ? 'Interactive GPS Directions' : 'خرائط جوجل التفاعلية'}
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Tar'a%20Street,%20Mansoura,%20Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase font-bold text-gold hover:text-gold-light tracking-widest transition-colors"
                >
                  {t.contactGetDirections} →
                </a>
              </div>

              {/* Map Iframe Integration */}
              <div className="flex-grow relative h-[380px] lg:h-auto">
                <iframe
                  title="Samah Hasan Beauty Salon Location Map"
                  src="https://maps.google.com/maps?q=Tar'a%20Street,%20Mansoura,%20Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
