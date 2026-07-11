import { useState } from 'react';
import { Search, Sparkles, Filter, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_ITEMS } from '../data';
import { TranslationDict, ServiceItem } from '../types';
import OptimizedImage from './OptimizedImage';

interface ServicesProps {
  lang: 'en' | 'ar';
  t: TranslationDict;
  onBookService: (serviceName: string) => void;
}

type CategoryType = 'all' | 'hair' | 'makeup' | 'nails' | 'skincare' | 'body' | 'packages';

export default function Services({ lang, t, onBookService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'hair', label: t.catHair },
    { id: 'makeup', label: t.catMakeup },
    { id: 'nails', label: t.catNails },
    { id: 'skincare', label: t.catSkincare },
    { id: 'body', label: t.catBody },
    { id: 'packages', label: t.catPackages },
  ];

  // Filter logic for both category selection and search bar (supports AR and EN keywords)
  const filteredServices = SERVICE_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const nameEn = item.nameEn.toLowerCase();
    const nameAr = item.nameAr.toLowerCase();
    const descEn = item.descriptionEn.toLowerCase();
    const descAr = item.descriptionAr.toLowerCase();

    const matchesSearch =
      query === '' ||
      nameEn.includes(query) ||
      nameAr.includes(query) ||
      descEn.includes(query) ||
      descAr.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
            {lang === 'en' ? 'Our Menu' : 'قائمة الدلال والجمال'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-charcoal-light/85 text-sm md:text-base leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Search & Filters Container */}
        <div className="mb-12 flex flex-col gap-6 items-center">
          
          {/* Luxury Search Bar */}
          <div className="relative w-full max-w-lg group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-6 py-4 pl-12 pr-6 dir-rtl:pl-6 dir-rtl:pr-12 text-sm text-charcoal bg-white rounded-full border border-gold/20 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all duration-300 shadow-md shadow-gold/2 placeholder-charcoal-light/50"
            />
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-115 transition-transform duration-300 dir-rtl:left-auto dir-rtl:right-5"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-charcoal-light/50 hover:text-gold cursor-pointer dir-rtl:right-auto dir-rtl:left-5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Premium Category Filter Pills */}
          <div className="w-full overflow-x-auto no-scrollbar py-2 flex justify-center items-center">
            <div className="flex gap-2.5 px-4 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gold text-white border-gold shadow-md shadow-gold/20'
                      : 'bg-white text-charcoal border-gold/10 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
              >
                {/* Service Card Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                  <OptimizedImage
                    src={service.image}
                    alt={lang === 'en' ? service.nameEn : service.nameAr}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    customWidth={500} // Cards are small, 500px is more than enough and ultra fast to download!
                  />
                  {/* Subtle Elegant Gradient Over Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Stamp */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider text-gold px-3 py-1 rounded-full uppercase border border-gold/20">
                    {lang === 'en' ? service.category : (service.category === 'hair' ? 'شعر' : service.category === 'makeup' ? 'مكياج' : service.category === 'nails' ? 'أظافر' : service.category === 'skincare' ? 'بشرة' : service.category === 'body' ? 'جسم' : 'باقات')}
                  </span>
                </div>

                {/* Card Text Description Content */}
                <div className="p-7 flex flex-col flex-grow text-start">
                  <h3 className="font-serif text-lg md:text-xl font-extrabold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {lang === 'en' ? service.nameEn : service.nameAr}
                  </h3>
                  <p className="text-charcoal-light/90 text-xs md:text-sm leading-relaxed mb-6 font-normal flex-grow">
                    {lang === 'en' ? service.descriptionEn : service.descriptionAr}
                  </p>

                  {/* Immediate Book Now Action Button */}
                  <button
                    onClick={() => onBookService(lang === 'en' ? service.nameEn : service.nameAr)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-cream hover:bg-gold hover:text-white text-gold border border-gold/20 hover:border-gold rounded-xl font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer group-hover:shadow-md"
                  >
                    <CalendarCheck size={16} />
                    <span>{t.bookService}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-gold/10 shadow-sm max-w-xl mx-auto mt-8 px-6"
          >
            <Sparkles size={32} className="text-gold/40 mx-auto mb-4 animate-pulse" />
            <p className="text-charcoal font-serif font-bold text-lg mb-2">
              {lang === 'en' ? 'Bespoke Beauty Consultation' : 'طلب جلسة مخصصة بالكامل'}
            </p>
            <p className="text-charcoal-light text-sm leading-relaxed">
              {t.noServicesFound}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
