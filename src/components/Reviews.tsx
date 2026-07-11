import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS_DATA } from '../data';
import { TranslationDict } from '../types';

interface ReviewsProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

export default function Reviews({ lang, t }: ReviewsProps) {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-rosegold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
            {lang === 'en' ? 'Guest Book' : 'ماذا يقول عشاق دلالنا؟'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
            {t.reviewsTitle}
          </h2>
          <p className="text-charcoal-light/85 text-sm md:text-base leading-relaxed">
            {t.reviewsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Overall Rating Billboard */}
          <div className="lg:col-span-4 bg-cream/70 rounded-[2rem] p-8 border border-gold/15 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold" />
            
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4 uppercase tracking-wider">
              {lang === 'en' ? 'Overall Rating' : 'التقييم العام للصالون'}
            </h3>
            
            <span className="text-6xl md:text-7xl font-serif font-extrabold text-gold leading-none">
              4.7
            </span>
            <span className="text-sm font-bold text-charcoal-light mt-2">
              / 5.0
            </span>

            {/* Stars display */}
            <div className="flex gap-1.5 my-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < 4 ? 'fill-gold text-gold animate-[pulse_2s_infinite]' : 'fill-gold/20 text-gold/30'}
                />
              ))}
            </div>

            <p className="text-charcoal text-base font-semibold mt-1">
              {t.reviewsBasedOn}
            </p>

            {/* Rating breakdown details */}
            <div className="w-full mt-8 pt-6 border-t border-gold/10 space-y-3">
              {[
                { stars: 5, pct: '88%', count: '392' },
                { stars: 4, pct: '9%', count: '40' },
                { stars: 3, pct: '2%', count: '9' },
                { stars: 2, pct: '1%', count: '3' },
                { stars: 1, pct: '0%', count: '2' },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-3 text-charcoal font-bold">{row.stars}★</span>
                  <div className="flex-grow h-2 bg-white rounded-full overflow-hidden border border-gold/5">
                    <div
                      className="h-full bg-gold rounded-full"
                      style={{ width: row.pct }}
                    />
                  </div>
                  <span className="w-8 text-charcoal-light/80 text-end">{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Guest Testimonials list */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-7 rounded-[2rem] border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quote Icon Background ornament */}
                <MessageSquareQuote
                  size={64}
                  className="absolute right-6 top-6 text-gold/5 pointer-events-none dir-rtl:right-auto dir-rtl:left-6"
                />

                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < review.rating ? 'fill-gold text-gold' : 'fill-gold/10 text-gold/20'}
                    />
                  ))}
                </div>

                <p className="text-charcoal-light/95 text-xs md:text-sm leading-relaxed italic mb-6 font-medium text-start">
                  "{lang === 'en' ? review.reviewEn : review.reviewAr}"
                </p>

                <div className="flex items-center justify-between border-t border-gold/10 pt-4 mt-auto">
                  <div className="text-start">
                    <p className="font-serif text-sm font-bold text-charcoal">
                      {lang === 'en' ? review.nameEn : review.nameAr}
                    </p>
                    <p className="text-[10px] text-charcoal-light/60 mt-0.5">
                      {lang === 'en' ? 'Verified Booking Guest' : 'عميلة حجز معتمدة'}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-gold font-bold bg-gold/5 px-2.5 py-1 rounded-full border border-gold/10">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
