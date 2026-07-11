import { motion } from 'motion/react';
import { STATS_DATA } from '../data';
import { TranslationDict } from '../types';

interface StatsProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

export default function Stats({ lang, t }: StatsProps) {
  return (
    <section id="stats" className="py-16 bg-charcoal relative overflow-hidden">
      {/* Abstract light particles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl glass-dark border border-white/5 hover:border-gold/20 transition-all duration-300 group"
            >
              {/* Animated Stat Number */}
              <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-rosegold to-gold-light tracking-wide group-hover:scale-105 transition-transform duration-500 leading-none">
                {stat.value}
              </span>
              
              {/* Stat Label */}
              <span className="text-xs md:text-sm font-semibold tracking-widest text-beige/80 uppercase mt-4 block">
                {lang === 'en' ? stat.labelEn : stat.labelAr}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
