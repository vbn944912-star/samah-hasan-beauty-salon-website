import React from 'react';
import {
  UserCheck,
  Sparkles,
  Flame,
  Heart,
  Users,
  Smile,
  Wand2,
  ShieldCheck,
  Cpu,
  MessageSquare,
  LucideProps
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_ITEMS } from '../data';
import { TranslationDict } from '../types';

interface WhyChooseUsProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

// Explicit mapping of icons to resolve them securely at runtime
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  FlameKindling: Flame,
  Heart: Heart,
  Users: Users,
  Smile: Smile,
  Wand2: Wand2,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  MessageSquareCheck: MessageSquare,
};

export default function WhyChooseUs({ lang, t }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Absolute Decorative Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rosegold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
            {lang === 'en' ? 'Our Distinctions' : 'مميزاتنا الاستثنائية'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
            {t.whyTitle}
          </h2>
          <p className="text-charcoal-light/85 text-sm md:text-base leading-relaxed">
            {t.whySubtitle}
          </p>
        </div>

        {/* 10 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-cream/50 hover:bg-cream border border-gold/10 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 flex flex-col items-start text-start relative"
              >
                {/* Number Indicator */}
                <span className="absolute top-4 right-4 text-[10px] font-mono text-gold/30 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white border border-gold/15 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <IconComponent size={20} className="stroke-[1.8]" />
                </div>

                {/* Text Content */}
                <h3 className="font-serif text-base font-bold text-charcoal mb-2.5 tracking-wide group-hover:text-gold transition-colors duration-300">
                  {lang === 'en' ? item.titleEn : item.titleAr}
                </h3>
                
                <p className="text-charcoal-light/90 text-xs md:text-sm leading-relaxed mt-auto font-normal">
                  {lang === 'en' ? item.descriptionEn : item.descriptionAr}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
