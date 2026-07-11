import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { TranslationDict, GalleryItem } from '../types';
import OptimizedImage from './OptimizedImage';

interface GalleryProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
}

type GalleryCatType = 'all' | 'hair' | 'treatments' | 'protein' | 'makeup' | 'bridal' | 'nails' | 'interior' | 'before_after' | 'skincare';

export default function Gallery({ lang, t }: GalleryProps) {
  const [selectedCat, setSelectedCat] = useState<GalleryCatType>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t.galAll },
    { id: 'bridal', label: t.galBridal },
    { id: 'makeup', label: t.galMakeup },
    { id: 'hair', label: t.galHair },
    { id: 'nails', label: t.galNails },
    { id: 'protein', label: t.galProtein },
    { id: 'treatments', label: t.galTreatments },
    { id: 'skincare', label: t.galSkincare },
    { id: 'interior', label: t.galInterior },
    { id: 'before_after', label: t.galBeforeAfter },
  ];

  // Filter gallery items based on category
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCat === 'all' || item.category === selectedCat
  );

  const getOptimizedSrc = (src: string, width: number = 600) => {
    if (src.includes('unsplash.com')) {
      try {
        const urlObj = new URL(src);
        urlObj.searchParams.set('auto', 'format');
        urlObj.searchParams.set('fm', 'webp');
        urlObj.searchParams.set('w', width.toString());
        urlObj.searchParams.set('q', '70');
        return urlObj.toString();
      } catch (e) {
        return src;
      }
    }
    return src;
  };

  const openLightbox = (itemIndex: number) => {
    // Find index of the item in the filtered list
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
            {lang === 'en' ? 'Our Showcase' : 'معرض الإبداع الفني'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
            {t.galleryTitle}
          </h2>
          <p className="text-charcoal-light/85 text-sm md:text-base leading-relaxed">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Gallery Filter Pills */}
        <div className="w-full overflow-x-auto no-scrollbar mb-12 flex justify-center">
          <div className="flex gap-2 px-4 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id as GalleryCatType);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-gold text-white border-gold shadow-md shadow-gold/20'
                    : 'bg-white text-charcoal border-gold/10 hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid Display */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative rounded-[2rem] overflow-hidden group cursor-pointer border border-gold/10 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Frame */}
              <OptimizedImage
                src={item.image}
                alt={lang === 'en' ? item.titleEn : item.titleAr}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-[2rem]"
                customWidth={500}
              />

              {/* Hover Dark/Gold Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 rounded-[2rem]">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-start">
                  
                  {/* Category Stamp */}
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30 mb-2.5 inline-block">
                    {item.category.replace('_', ' ')}
                  </span>
                  
                  {/* Title */}
                  <h4 className="font-serif text-white text-base md:text-lg font-bold mb-2">
                    {lang === 'en' ? item.titleEn : item.titleAr}
                  </h4>
                  
                  {/* Action prompt */}
                  <div className="flex items-center gap-1 text-[10px] text-gold font-semibold uppercase tracking-wider">
                    <Eye size={12} />
                    <span>{lang === 'en' ? 'Inspect Artwork' : 'عرض العمل الفني'}</span>
                  </div>

                </div>
              </div>

              {/* Minimal Zoom Indicator Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center text-charcoal opacity-100 group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
                <ZoomIn size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Slider (Renders conditionally via AnimatePresence) */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors cursor-pointer z-50"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Slider Image Container */}
              <div className="relative max-w-4xl w-full h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                
                {/* Image */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={getOptimizedSrc(filteredItems[lightboxIndex].image, 1000)}
                  alt={lang === 'en' ? filteredItems[lightboxIndex].titleEn : filteredItems[lightboxIndex].titleAr}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />

                {/* Left navigation arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all cursor-pointer hidden md:block"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all cursor-pointer hidden md:block"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Info footer box */}
              <div
                className="mt-6 text-center max-w-xl text-white px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-gold font-semibold uppercase text-xs tracking-widest mb-1.5">
                  {filteredItems[lightboxIndex].category.toUpperCase().replace('_', ' ')}
                </p>
                <h4 className="font-serif text-lg md:text-xl font-bold mb-3">
                  {lang === 'en' ? filteredItems[lightboxIndex].titleEn : filteredItems[lightboxIndex].titleAr}
                </h4>
                
                {/* Mobile indicators & swipes */}
                <div className="flex items-center justify-center gap-6 mt-4 md:hidden">
                  <button onClick={prevImage} className="p-2 text-white/70 hover:text-white">
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-xs text-white/50 font-semibold">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <button onClick={nextImage} className="p-2 text-white/70 hover:text-white">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
