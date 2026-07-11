import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, MessageSquare, CheckCircle2, User, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_ITEMS } from '../data';
import { TranslationDict } from '../types';

interface BookingFormProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
  preSelectedService: string;
  onClearPreSelected: () => void;
  inline?: boolean; // Can be used embedded in page or in a floating drawer
}

export default function BookingForm({ lang, t, preSelectedService, onClearPreSelected, inline = false }: BookingFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [requests, setRequests] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sync preSelectedService
  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService);
    }
  }, [preSelectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service || !date || !time) {
      alert(lang === 'en' ? 'Please fill out all required fields.' : 'الرجاء ملء جميع الحقول المطلوبة.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API response / local storage save
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Persist locally for user trust
      const existingBookings = JSON.parse(localStorage.getItem('salon_bookings') || '[]');
      existingBookings.push({
        id: Date.now(),
        name,
        phone,
        email,
        service,
        date,
        time,
        requests,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('salon_bookings', JSON.stringify(existingBookings));
    }, 1200);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    onClearPreSelected();
    // Clear form
    setName('');
    setPhone('');
    setEmail('');
    setService('');
    setDate('');
    setTime('');
    setRequests('');
  };

  // Generate WhatsApp Direct link with pre-filled beauty form content for instant booking dispatch!
  const getWhatsAppSubmitUrl = () => {
    const summary = lang === 'en'
      ? `✨ *Samah Hasan Salon Booking request* ✨\n\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Email:* ${email || 'N/A'}\n• *Service:* ${service}\n• *Date:* ${date}\n• *Time:* ${time}\n• *Special Request:* ${requests || 'None'}`
      : `✨ *طلب حجز في صالون سماح حسن* ✨\n\n• *الاسم:* ${name}\n• *الهاتف:* ${phone}\n• *البريد:* ${email || 'لا يوجد'}\n• *الخدمة:* ${service}\n• *التاريخ:* ${date}\n• *الوقت:* ${time}\n• *طلبات خاصة:* ${requests || 'لا يوجد'}`;
    
    return `https://wa.me/201098878797?text=${encodeURIComponent(summary)}`;
  };

  // Luxury time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  return (
    <section id="booking" className={`py-20 relative overflow-hidden ${inline ? 'bg-transparent py-0' : 'bg-white'}`}>
      
      {/* Background blur orbits */}
      {!inline && (
        <>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-rosegold/5 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className={`max-w-4xl mx-auto ${inline ? 'px-0' : 'px-6'}`}>
        
        {/* Section Heading */}
        {!inline && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
              {lang === 'en' ? 'Bespoke Reservation' : 'حجز جلسة خاصة'}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
              {t.bookingTitle}
            </h2>
            <p className="text-charcoal-light/85 text-xs md:text-sm leading-relaxed">
              {t.bookingSubtitle}
            </p>
          </div>
        )}

        {/* Main Glass Form */}
        <div className="bg-cream/40 rounded-[2.5rem] border border-gold/15 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold line ornamentation */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-rosegold to-gold" />

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <User size={14} className="text-gold" />
                  <span>{t.formName} *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Sarah Ahmed' : 'مثال: سارة أحمد'}
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <Phone size={14} className="text-gold" />
                  <span>{t.formPhone} *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. 01012345678' : 'مثال: 01012345678'}
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all text-start"
                />
              </div>
            </div>

            {/* Row 2: Email and Preferred Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <Mail size={14} className="text-gold" />
                  <span>{t.formEmail}</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all text-start"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <Sparkles size={14} className="text-gold" />
                  <span>{t.formService} *</span>
                </label>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all cursor-pointer"
                >
                  <option value="" disabled>{t.selectServicePlaceholder}</option>
                  {SERVICE_ITEMS.map((item) => (
                    <option key={item.id} value={lang === 'en' ? item.nameEn : item.nameAr}>
                      {lang === 'en' ? item.nameEn : item.nameAr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Preferred Date and Preferred Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <Calendar size={14} className="text-gold" />
                  <span>{t.formDate} *</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all cursor-pointer text-start"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  <span>{t.formTime} *</span>
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-5 py-3.5 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-xl text-sm transition-all cursor-pointer"
                >
                  <option value="" disabled>{lang === 'en' ? 'Select an hour slot...' : 'اختاري ساعة الموعد...'}</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Request Row */}
            <div className="flex flex-col items-start">
              <label className="text-xs md:text-sm font-semibold text-charcoal mb-2.5 flex items-center gap-2">
                <FileText size={14} className="text-gold" />
                <span>{t.formRequests}</span>
              </label>
              <textarea
                rows={4}
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                placeholder={lang === 'en' ? 'Details about hair length, makeup styles, skin concerns, or bridal arrangements...' : 'تفاصيل حول طول الشعر، نمط المكياج المفضل، حساسية البشرة، أو ترتيبات العروس...'}
                className="w-full px-5 py-4 bg-white text-charcoal border border-gold/15 focus:border-gold focus:outline-none rounded-2xl text-sm transition-all resize-none"
              />
            </div>

            {/* Gold Reservation Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 bg-gold hover:bg-gold-light disabled:bg-gold/50 text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-gold/20 transform active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest font-sans"
            >
              <span>{isSubmitting ? t.formSubmitting : t.formSubmit}</span>
              {!isSubmitting && <ArrowRight size={18} className="dir-rtl:rotate-180" />}
            </button>

          </form>
        </div>
      </div>

      {/* Booking Luxury Success Modal Slider Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2.5rem] border border-gold/30 p-8 md:p-12 max-w-xl w-full text-center shadow-2xl relative"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold mx-auto mb-6">
                <CheckCircle2 size={32} className="stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-charcoal mb-4">
                {t.formSuccessTitle}
              </h3>

              {/* Text content */}
              <p className="text-charcoal-light/95 text-xs md:text-sm leading-relaxed mb-8">
                {t.formSuccessText}
              </p>

              {/* Sub Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                {/* Instant dispatch WhatsApp confirmation */}
                <a
                  href={getWhatsAppSubmitUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-md text-xs md:text-sm tracking-wider w-full sm:w-auto cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>{lang === 'en' ? 'Send via WhatsApp' : 'إرسال التفاصيل عبر واتساب'}</span>
                </a>

                {/* Close button */}
                <button
                  onClick={handleCloseSuccess}
                  className="py-3.5 px-6 bg-cream hover:bg-gold/10 text-gold border border-gold/20 rounded-full font-semibold text-xs md:text-sm tracking-wider w-full sm:w-auto cursor-pointer"
                >
                  {t.formClose}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
