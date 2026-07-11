import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { TranslationDict } from '../types';
import OptimizedImage from './OptimizedImage';
import bridalLook from '../assets/images/bridal_look_1783742513922.jpg';

interface AboutProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

export default function About({ lang, t }: AboutProps) {
  const features = [
    t.aboutFeature1,
    t.aboutFeature2,
    t.aboutFeature3,
    t.aboutFeature4,
    t.aboutFeature5,
    t.aboutFeature6,
    t.aboutFeature7,
    t.aboutFeature8,
  ];

  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Storytelling Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3">
              {t.aboutSub}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal leading-tight mb-8">
              {t.aboutTitle}
            </h2>
            
            <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {t.aboutP1}
            </p>
            <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {t.aboutP2}
            </p>
            <p className="text-charcoal-light/90 text-sm md:text-base leading-relaxed mb-10 font-normal">
              {t.aboutP3}
            </p>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-gold/15 pt-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-charcoal text-sm md:text-base font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Visual Overlays */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Decorative Gold Solid Rings */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border border-gold/15 pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full border border-gold/10 pointer-events-none" />
            
            {/* Main Portrait Frame with Soft Shadow */}
            <div className="relative z-10 w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
              <OptimizedImage
                src={bridalLook}
                alt="Samah Hasan Bridal Showcase"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              {/* Warm Rose Gold Overlay Blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float Badge Experience */}
            <div className="absolute bottom-8 right-0 sm:-right-4 z-20 bg-white/90 dark:bg-charcoal/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-gold/20 flex flex-col items-center max-w-[150px] text-center">
              <span className="text-3xl font-serif font-extrabold text-gold leading-none">
                4.7★
              </span>
              <span className="text-[10px] text-charcoal font-bold tracking-wider mt-1 uppercase">
                {lang === 'en' ? 'Top Rated' : 'الأعلى تقييماً'}
              </span>
              <span className="text-[9px] text-charcoal-light mt-0.5">
                {lang === 'en' ? 'In Mansoura' : 'في المنصورة'}
              </span>
            </div>

            {/* Float badge 2: Genuine Products */}
            <div className="absolute top-12 left-0 sm:-left-4 z-20 bg-gold/90 text-white backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2 max-w-[170px]">
              <div className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-[11px] font-semibold tracking-wider uppercase">
                {lang === 'en' ? '100% Original Products' : 'منتجات أصلية 100٪'}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
