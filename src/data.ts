import { ServiceItem, GalleryItem, ReviewItem, StatItem, WhyChooseUsItem, TranslationDict } from './types';

// Let's use the local generated assets where appropriate, and highly premium Unsplash imagery for others.
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'hair-styling',
    nameEn: 'Hair Styling',
    nameAr: 'تصفيف الشعر',
    descriptionEn: 'Redefine your style with precision styling, blowouts, and elegant updos suited for any occasion.',
    descriptionAr: 'أعيدي تحديد مظهرك مع تصفيف دقيق، سيشوار، وتسريحات راقية تناسب جميع المناسبات.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-protein',
    nameEn: 'Hair Protein Treatment',
    nameAr: 'معالجة الشعر بالبروتين',
    descriptionEn: 'Advanced organic protein therapy to eliminate frizz, restore elasticity, and add mirror-like shine.',
    descriptionAr: 'علاج متطور بالبروتين العضوي للتخلص من التقصف، واستعادة مرونة ولمعان الشعر الفائق.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'keratin-treatment',
    nameEn: 'Keratin Treatment',
    nameAr: 'جلسات الكيراتين',
    descriptionEn: 'Premium keratin smoothing formula that reconstructs damaged fibers and delivers ultra-smooth results.',
    descriptionAr: 'تركيبة الكيراتين الفاخرة لتنعيم الشعر وإعادة بناء الألياف التالفة لنتائج فائقة النعومة.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-repair',
    nameEn: 'Hair Repair Treatment',
    nameAr: 'ترميم وإصلاح الشعر',
    descriptionEn: 'Deep structural hair recovery targeting breakage, dryness, and chemical damage from the inside out.',
    descriptionAr: 'ترميم عميق لبنية الشعر يستهدف التقصف، الجفاف، والتلف الكيميائي من الداخل إلى الخارج.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-extensions',
    nameEn: 'Premium Hair Extensions',
    nameAr: 'تركيب خصلات شعر طبيعي',
    descriptionEn: '100% natural, ethically sourced virgin hair extensions for seamless length, volume, and texture.',
    descriptionAr: 'خصلات شعر طبيعي 100٪ من مصادر موثوقة تمنحك طولًا، وكثافة، ومظهرًا طبيعيًا جذابًا.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-spa',
    nameEn: 'Luxury Hair Spa & Detox',
    nameAr: 'سبا ديتوكس الشعر',
    descriptionEn: 'Rejuvenating scalp treatment featuring essential oil massage, micro-mist hydration, and deep nutrition.',
    descriptionAr: 'جلسة تجديد فروة الرأس تشمل التدليك بالزيوت الأساسية، الترطيب الدقيق، والتغذية العميقة.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bridal-hair',
    nameEn: 'Bridal Hair Styling',
    nameAr: 'تسريحات شعر عرايس',
    descriptionEn: 'Exquisite, long-lasting luxury updos and crown placements tailor-made for your special wedding night.',
    descriptionAr: 'تسريحات شعر راقية وتثبيت التيجان الفاخرة تدوم طويلاً، مصممة خصيصاً لليلة زفافك المميزة.',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bridal-makeup',
    nameEn: 'Bridal Makeup Artistry',
    nameAr: 'مكياج عرايس ملكي',
    descriptionEn: 'Royal wedding makeup styling utilizing high-end luxury products to make you look glowing and photogenic.',
    descriptionAr: 'مكياج زفاف ملكي مخصص بالكامل باستخدام مستحضرات تجميل عالمية فاخرة ليمنحك إطلالة ساحرة ومشرقة.',
    category: 'makeup',
    image: '/src/assets/images/bridal_look_1783742513922.jpg'
  },
  {
    id: 'party-makeup',
    nameEn: 'Glamorous Party Makeup',
    nameAr: 'مكياج سواريه راقي',
    descriptionEn: 'Flawless makeup styled to accent your outfits and sparkle at evening parties and formal celebrations.',
    descriptionAr: 'مكياج خالٍ من العيوب مصمم ليبرز ملامحك ويتناسق مع فستانك ليتألق في الحفلات والسهرات.',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'facials',
    nameEn: 'Luxury Custom Facials',
    nameAr: 'جلسات العناية بالوجه والفيشيال',
    descriptionEn: 'Bespoke facial treatments designed for your skin type to promote cell regeneration and radiant skin.',
    descriptionAr: 'جلسات علاجية مخصصة لنوع بشرتك تعمل على تحفيز خلايا الجلد ومنحك بشرة نضرة ومشدودة.',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deep-cleansing',
    nameEn: 'Deep Skin Cleansing',
    nameAr: 'تنظيف البشرة العميق',
    descriptionEn: 'Multi-step premium skin extraction, blackhead removal, steam, and vitamin-infused therapy.',
    descriptionAr: 'تنظيف بشرة متكامل يتضمن إزالة الرؤوس السوداء، البخار، وتقشير وتغذية الجلد بالفيتامينات.',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hydra-facial',
    nameEn: 'Premium Hydra Facial',
    nameAr: 'جلسة الهايدرافيشيال المميزة',
    descriptionEn: 'Non-invasive, state-of-the-art skin resurfacing using vortex suction to clean, exfoliate, and hydrate.',
    descriptionAr: 'أحدث تقنيات تجميل البشرة باستخدام الشفط الدوامي لتنظيف الخلايا الميتة، وتقشير وترطيب الجلد.',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'eyebrow-shaping',
    nameEn: 'Luxury Eyebrow Shaping',
    nameAr: 'تحديد ورسم الحواجب',
    descriptionEn: 'Expert brow architectural mapping, threading, tinting, and laminating to perfect your facial frame.',
    descriptionAr: 'تخطيط ورسم وتنسيق الحواجب بااحترافية، التفتيح، والترتيب لمنح عينيك تحديدًا رائعًا.',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waxing',
    nameEn: 'Premium Soft Waxing',
    nameAr: 'إزالة الشعر بالواكس الفاخر',
    descriptionEn: 'Gentle, skin-safe organic wax system for smooth, hair-free skin with minimal discomfort.',
    descriptionAr: 'إزالة لطيفة للشعر باستخدام شمع عضوي مهدئ للبشرة يمنحك نعومة فائقة مع تقليل الألم لأدنى حد.',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pedicure',
    nameEn: 'Luxury Spa Pedicure',
    nameAr: 'باديكير سبا للأقدام',
    descriptionEn: 'Warm herbal footbath, calloused skin smoothing, botanical mask, and relaxing hot stone calf massage.',
    descriptionAr: 'حمام أقدام عشبي دافئ، تنعيم وتقشير كعب القدم، قناع طبيعي، ومساج مريح للأرجل بالأحجار الدافئة.',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=800'
  },

  {
    id: 'nail-art',
    nameEn: 'Luxury Hand-painted Nail Art',
    nameAr: 'رسم أظافر فني فاخر',
    descriptionEn: 'Bespoke hand-crafted nail designs ranging from luxury gold lines to sophisticated modern geometry.',
    descriptionAr: 'تصاميم ورسومات أظافر يدوية مذهلة تتنوع بين الخطوط الذهبية الفاخرة والأشكال الهندسية الراقية.',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'body-care',
    nameEn: 'Luxury Body Care & Massage',
    nameAr: 'العناية بالجسم والمساج',
    descriptionEn: 'Therapeutic and relaxation full-body treatment utilizing organic lavender, jasmine oil, and deep skin scrub.',
    descriptionAr: 'علاج وجلسات استرخاء كاملة للجسم باستخدام زيت الخزامى والياسمين العضوي مع صنفرة وتقشير كامل.',
    category: 'body',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'beauty-packages',
    nameEn: 'Signature Beauty Packages',
    nameAr: 'باقات الجمال المتكاملة',
    descriptionEn: 'Curated beauty packages combining professional hair treatments, nails, and premium skin glow therapies.',
    descriptionAr: 'باقات متكاملة منسقة خصيصاً تجمع بين علاجات الشعر الاحترافية، الأظافر، والفيشيال لتوهج كامل.',
    category: 'packages',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vip-services',
    nameEn: 'Royal VIP Services',
    nameAr: 'الخدمات الملكية الـ VIP',
    descriptionEn: 'Private salon suite experience, customized high-end treatments, refreshments, and dedicated expert attention.',
    descriptionAr: 'تجربة صالون في جناح ملكي خاص، علاجات فاخرة مخصصة بالكامل، مشروبات فاخرة واهتمام مكثف من كبار الخبراء.',
    category: 'packages',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: 'experts',
    titleEn: 'Professional Beauty Experts',
    titleAr: 'خبراء تجميل محترفون',
    descriptionEn: 'Our certified salon therapists and hair artists possess years of premium styling experience.',
    descriptionAr: 'فريق عملنا يضم أخصائيات تجميل معتمدات ومصففي شعر يتمتعون بسنوات طويلة من الخبرة الفاخرة.',
    iconName: 'UserCheck'
  },
  {
    id: 'products',
    titleEn: 'Original Premium Products',
    titleAr: 'منتجات أصلية عالمية',
    descriptionEn: 'We strictly use 100% original, luxury products imported from leading Parisian and Italian brands.',
    descriptionAr: 'نلتزم تماماً باستخدام منتجات تجميل أصلية 100٪ مستوردة من كبرى العلامات الفرنسية والإيطالية.',
    iconName: 'Sparkles'
  },
  {
    id: 'hair-tech',
    titleEn: 'Luxury Hair Treatments',
    titleAr: 'معالجة متقدمة للشعر',
    descriptionEn: 'Revolutionary safe protein and keratin techniques formulated to reconstruct hair naturally.',
    descriptionAr: 'تقنيات متطورة وآمنة تماماً لفرد وترميم وتغذية ألياف الشعر بالبروتين والكيراتين العضوي.',
    iconName: 'FlameKindling'
  },
  {
    id: 'atmosphere',
    titleEn: 'Comfortable Environment',
    titleAr: 'بيئة مريحة وراقية',
    descriptionEn: 'A tranquil atmosphere, soft golden lightning, and luxurious seating designed for ultimate relaxation.',
    descriptionAr: 'أجواء هادئة وإضاءة ذهبية دافئة ومقاعد مريحة للغاية صممت خصيصاً لتمنحك الراحة والاسترخاء.',
    iconName: 'Heart'
  },
  {
    id: 'team',
    titleEn: 'Friendly Devoted Team',
    titleAr: 'فريق ودود ومتعاون',
    descriptionEn: 'We greet you with warm smiles and unmatched hospitality, treating you like a member of our family.',
    descriptionAr: 'نستقبلك بابتسامات دافئة وضيافة لا مثيل لها، ونعاملك كجزء عزيز من عائلتنا الكبيرة.',
    iconName: 'Users'
  },
  {
    id: 'care',
    titleEn: 'Outstanding Customer Care',
    titleAr: 'خدمة عملاء استثنائية',
    descriptionEn: 'Your ultimate satisfaction is our priority. We monitor and attend to every small detail of your visit.',
    descriptionAr: 'رضاك التام هو أولويتنا القصوى، حيث نعتني بأدق تفاصيل زيارتك لتكون تجربة لا تُنسى.',
    iconName: 'Smile'
  },
  {
    id: 'techniques',
    titleEn: 'Advanced Beauty Techniques',
    titleAr: 'تقنيات تجميل حديثة',
    descriptionEn: 'We employ state-of-the-art beauty machinery, skin tools, and modern styling methods.',
    descriptionAr: 'نطبق أحدث تقنيات الجمال وأجهزة العناية بالبشرة المبتكرة وأساليب التصفيف العالمية.',
    iconName: 'Wand2'
  },
  {
    id: 'hygiene',
    titleEn: 'Excellent Hygiene Standards',
    titleAr: 'أعلى معايير التعقيم والنظافة',
    descriptionEn: 'Strict, hospital-grade sanitation of tools, chairs, and environments between every single client.',
    descriptionAr: 'تعقيم طبي صارم ومستمر للأدوات، والمقاعد، والغرف قبل وبعد كل عميلة لضمان سلامتك التامة.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'equipment',
    titleEn: 'Modern Equipment',
    titleAr: 'أجهزة ومعدات متطورة',
    descriptionEn: 'Fully automated styling chairs, high-tech UV drying stations, and advanced micro-steamers.',
    descriptionAr: 'كراسي تصفيف آلية بالكامل، وأجهزة تجفيف بالـ UV متطورة، وأجهزة بخار دقيق للبشرة والشعر.',
    iconName: 'Cpu'
  },
  {
    id: 'consultation',
    titleEn: 'Personalized Consultations',
    titleAr: 'استشارات جمالية مخصصة',
    descriptionEn: 'Receive a private initial evaluation to match hair and skincare services to your exact physical metrics.',
    descriptionAr: 'احصلي على جلسة تقييم مجانية مخصصة لتحديد نوع العلاجات المناسبة لبشرتك وشعرك بدقة.',
    iconName: 'MessageSquareCheck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'interior',
    image: '/src/assets/images/salon_interior_1783742501063.jpg',
    titleEn: 'Luxury Salon Architecture',
    titleAr: 'التصميم الداخلي الفاخر للصالون'
  },
  {
    id: 'g2',
    category: 'bridal',
    image: '/src/assets/images/bridal_look_1783742513922.jpg',
    titleEn: 'Royal Bridal Signature Look',
    titleAr: 'الإطلالة الملكية لعرايس سماح حسن'
  },
  {
    id: 'g3',
    category: 'nails',
    image: '/src/assets/images/luxury_nails_1783742527853.jpg',
    titleEn: 'Luxury Gold-Line Manicure',
    titleAr: 'رسم أظافر فني بالخطوط الذهبية'
  },
  {
    id: 'g4',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Perfect Silk Wave Blowout',
    titleAr: 'تموجات الشعر الحريرية الجذابة'
  },
  {
    id: 'g5',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Golden Glamour Evening Makeup',
    titleAr: 'مكياج سهرة برونزي دافئ وجذاب'
  },
  {
    id: 'g6',
    category: 'protein',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Organic Protein Hair Gloss',
    titleAr: 'نتائج فرد الشعر بالبروتين العضوي اللامع'
  },
  {
    id: 'g7',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Hydra Cleansing Facial Mask',
    titleAr: 'قناع النضارة والترطيب المكثف للبشرة'
  },
  {
    id: 'g8',
    category: 'before_after',
    image: 'https://images.unsplash.com/photo-1605497746444-130650193858?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Balayage Hair Transformation',
    titleAr: 'تحول لون الشعر بتقنية البالاج الراقي'
  },
  {
    id: 'g9',
    category: 'treatments',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    titleEn: 'Deep Botanical Hair Repair',
    titleAr: 'جلسة ترميم الشعر بالزيوت والأعشاب الطبيعية'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    nameEn: 'Nour El-Ghandour',
    nameAr: 'نور الغندور',
    rating: 5,
    date: '2026-06-25',
    reviewEn: "Very professional team. The pedicure and protein hair treatment were amazing. I've been coming here for years and always return. The atmosphere feels like family.",
    reviewAr: "فريق عمل محترف للغاية. الباديكير وعلاج البروتين للشعر كانا مذهلين. آتي إلى هنا منذ سنوات وسأظل أعود دائمًا. الأجواء تشعرك كأنك في بيتك ووسط عائلتك."
  },
  {
    id: 'r2',
    nameEn: 'Sarah Mahmoud',
    nameAr: 'سارة محمود',
    rating: 5,
    date: '2026-07-02',
    reviewEn: "Beautiful place and outstanding services. Skin cleansing and makeup were far beyond my expectations, and my daughter's hair styled by them came out breathtaking.",
    reviewAr: "مكان جميل والخدمات رائعة. تنظيف البشرة والميكب كانوا فوق التوقعات، وشعر بنتي طلع رائع وخيالي."
  },
  {
    id: 'r3',
    nameEn: 'Mariam Aly',
    nameAr: 'مريم علي',
    rating: 5,
    date: '2026-07-09',
    reviewEn: "Excellent hospitality, 100% original premium products, very collaborative team, and abnormal comfort. A premium luxury experience I will keep repeating forever.",
    reviewAr: "خدمة ممتازة، منتجات أصلية 100٪، فريق متعاون، وراحة غير طبيعية. تجربة فاخرة سأكررها دائمًا بالتأكيد."
  },
  {
    id: 'r4',
    nameEn: 'Yasmin Sabry',
    nameAr: 'ياسمين صبري',
    rating: 5,
    date: '2026-06-18',
    reviewEn: "The absolute best bridal salon in Mansoura! They made me feel like a royalty queen on my big night. The attention to the smallest detail was stunning.",
    reviewAr: "أفضل صالون تجميل للعرائس في المنصورة بلا منازع! جعلوني أشعر كالملكة المتوجة في ليلة زفافي. الاهتمام بأدق التفاصيل كان مذهلاً حقاً."
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'reviews',
    value: '446+',
    labelEn: 'Happy Reviews',
    labelAr: 'تقييمات سعيدة'
  },
  {
    id: 'services',
    value: '20+',
    labelEn: 'Beauty Services',
    labelAr: 'خدمة تجميلية'
  },
  {
    id: 'specialists',
    value: '15+',
    labelEn: 'Beauty Specialists',
    labelAr: 'أخصائية تجميل'
  },
  {
    id: 'rating',
    value: '4.7★',
    labelEn: 'Customer Rating',
    labelAr: 'تقييم العملاء'
  }
];

export const TRANSLATIONS: { en: TranslationDict; ar: TranslationDict } = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navGallery: 'Gallery',
    navReviews: 'Reviews',
    navContact: 'Contact',
    navBookNow: 'Book Now',
    
    heroTitle: 'Luxury Beauty Experience in Mansoura',
    heroSubtitle: 'Hair • Makeup • Nails • Skincare • Protein • Beauty Treatments',
    heroBadge: '⭐ Rated 4.7/5 by Hundreds of Happy Clients',
    heroBookCTA: 'Book Appointment',
    heroWhatsAppCTA: 'WhatsApp Booking',
    
    aboutSub: 'SAMAH HASAN BEAUTY SALON',
    aboutTitle: 'Crafting Timeless Confidence & Elegant Grace',
    aboutP1: 'Step into a world where premium quality meets exquisite personal care. Established in the heart of Mansoura, Samah Hasan Beauty Salon is highly regarded as one of the region’s premier destinations for women looking to elevate their visual confidence.',
    aboutP2: 'We offer a warm, elegant sanctuary designed to isolate you from daily noise while our certified specialists work their magic. Using only 100% genuine, world-class beauty products, we ensure that every treatment preserves the health and natural architecture of your hair, skin, and nails.',
    aboutP3: 'From magnificent bridal makeup that radiates royalty to custom organic hair restorations and luxury manicures, our focus on outstanding customer service has helped us cultivate long-term, family-like relationships with hundreds of amazing women.',
    aboutFeature1: 'Professional beauty specialists',
    aboutFeature2: 'Comfortable atmosphere',
    aboutFeature3: 'Original premium products',
    aboutFeature4: 'Family-friendly environment',
    aboutFeature5: 'Attention to every detail',
    aboutFeature6: 'Outstanding customer care',
    aboutFeature7: 'Long-term customer relationships',
    aboutFeature8: 'Luxury beauty experience',
    
    whyTitle: 'Why Choose Us',
    whySubtitle: 'Discover the exquisite standard that places Samah Hasan Beauty Salon at the absolute pinnacle of luxury service in Mansoura.',
    
    servicesTitle: 'Our Premium Services',
    servicesSubtitle: 'Meticulously crafted treatments customized to highlight your natural elegance and deliver unforgettable confidence.',
    allCategories: 'All Services',
    catHair: 'Haircare',
    catMakeup: 'Professional Makeup',
    catNails: 'Nail Art & Spa',
    catSkincare: 'Skincare Therapy',
    catBody: 'Body Wellness',
    catPackages: 'VIP & Packages',
    searchPlaceholder: 'Search for a luxury service (e.g. Protein, Facial, Acrylic)...',
    noServicesFound: 'No services match your request. Please contact us for specialized bespoke packages.',
    bookService: 'Book Treatment',
    
    statsSubtitle: 'Our Legacy of Luxury in Numbers',
    
    reviewsTitle: 'Guest Testimonials',
    reviewsSubtitle: 'Hear the authentic experiences of women who entrust their elegance, confidence, and wedding nights to our professional team.',
    reviewsBasedOn: 'Based on 446+ Google Reviews',
    
    galleryTitle: 'Our Visual Showcase',
    gallerySubtitle: 'Explore a gallery of flawless hairstyles, royal bridal makeups, sophisticated nail designs, and our elegant salon interior.',
    galAll: 'All Showcase',
    galHair: 'Hairstyles',
    galTreatments: 'Repair Treatments',
    galProtein: 'Protein Work',
    galMakeup: 'Makeup Artistry',
    galBridal: 'Bridal Royalty',
    galNails: 'Nail Masterpieces',
    galInterior: 'Salon Vibe',
    galBeforeAfter: 'Before & After',
    galSkincare: 'Glowing Skin',
    
    bookingTitle: 'Reserve Your Experience',
    bookingSubtitle: 'Choose your desired service, date, and hour. Our concierge will contact you immediately to customize your appointment details.',
    formName: 'Full Name',
    formPhone: 'Phone Number (WhatsApp)',
    formEmail: 'Email Address (Optional)',
    formService: 'Preferred Beauty Service',
    formDate: 'Preferred Date',
    formTime: 'Preferred Time Hour',
    formRequests: 'Special Requests & Aesthetic Needs',
    formSubmit: 'Confirm Luxury Reservation',
    formSubmitting: 'Reserving Your Slot...',
    formSuccessTitle: 'Reservation Requested Successfully!',
    formSuccessText: 'Thank you for choosing Samah Hasan Beauty Salon. We have locked in your details. Our guest concierge will call or message you on WhatsApp within minutes to confirm your luxury appointment.',
    formClose: 'Close Window',
    selectServicePlaceholder: 'Select a premium service...',
    
    contactTitle: 'Find & Visit Us',
    contactSubtitle: 'Located in the active heart of Mansoura, Egypt, ready to welcome you with hot herbal drinks and world-class care.',
    contactAddress: 'Tar\'a Street, Mansoura, Dakahlia, Egypt',
    contactHours: 'Opening Hours',
    contactCallUs: 'Click to Call Salon',
    contactWhatsAppUs: 'WhatsApp Guest Support',
    contactGetDirections: 'View on Google Maps',
    
    saturday: 'Saturday',
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    openDaily: 'Open every day from 9:00 AM to 9:00 PM',
    
    footerDesc: 'Luxury Beauty. Timeless Confidence. Experience the premier standard of luxury hair, skin, and nail treatments in Mansoura.',
    footerQuickLinks: 'Quick Links',
    footerServices: 'Main Categories',
    footerHours: 'Our Hours',
    footerRights: 'All Rights Reserved. Made with love for premium beauty.',
    footerPrivacy: 'Privacy Protection',
    footerTerms: 'Terms of Luxury Service'
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navGallery: 'معرض الصور',
    navReviews: 'آراء العميلات',
    navContact: 'اتصلي بنا',
    navBookNow: 'احجزي الآن',
    
    heroTitle: 'تجربة جمال فاخرة في المنصورة',
    heroSubtitle: 'شعر • مكياج • أظافر • عناية بالبشرة • بروتين • علاجات التجميل المتقدمة',
    heroBadge: '⭐ تقييم 4.7/5 بواسطة مئات العميلات السعيدات',
    heroBookCTA: 'احجزي موعداً الآن',
    heroWhatsAppCTA: 'الحجز عبر واتساب',
    
    aboutSub: 'صالون سماح حسن للتجميل',
    aboutTitle: 'نصنع الجمال الخالد والجمال المفعم بالثقة',
    aboutP1: 'خطوة إلى عالم يجتمع فيه الجمال الفاخر مع العناية الشخصية الاستثنائية. تأسس صالون سماح حسن للتجميل في قلب مدينة المنصورة، ليصبح سريعًا الوجهة الأولى والأرقى لكل امرأة تبحث عن الارتقاء بجمالها وأناقتها.',
    aboutP2: 'نقدم لكِ ملاذًا دافئًا ومريحًا، صُمم خصيصًا ليفصلك عن ضغوط الحياة اليومية، بينما تعمل خبيراتنا المعتمدات على تقديم أفضل ما لديهن. بالاعتماد الحصري على مستحضرات تجميل أصلية 100٪ من ماركات عالمية، نضمن حماية وصحة شعرك وبشرتك وأظافرك كأولوية قصوى.',
    aboutP3: 'من المكياج الملكي للعرائس الذي يفيض فخامة، إلى علاجات الشعر العضوية المبتكرة والباديكير الفاخر، ساعدنا اهتمامنا البالغ برضا العميلات على بناء علاقات متينة وطويلة الأمد مع مئات العميلات الرائعات في المنصورة.',
    aboutFeature1: 'أخصائيات تجميل محترفات',
    aboutFeature2: 'أجواء مريحة وهادئة',
    aboutFeature3: 'منتجات أصلية وفاخرة',
    aboutFeature4: 'بيئة عائلية مريحة',
    aboutFeature5: 'الاهتمام بأدق التفاصيل',
    aboutFeature6: 'خدمة عملاء ممتازة',
    aboutFeature7: 'علاقات عملاء طويلة الأمد',
    aboutFeature8: 'تجربة جمال فاخرة متكاملة',
    
    whyTitle: 'لماذا تختارين صالوننا؟',
    whySubtitle: 'اكتشفي المعايير الاستثنائية التي تجعل صالون سماح حسن في قمة الفخامة والاحترافية بمدينة المنصورة.',
    
    servicesTitle: 'خدماتنا الراقية',
    servicesSubtitle: 'جلسات تجميل وعلاجات مصممة بدقة فائقة لتبرز ملامح جمالك الطبيعي وتمنحك ثقة لا تقاوم.',
    allCategories: 'جميع الخدمات',
    catHair: 'العناية بالشعر',
    catMakeup: 'المكياج والجمال',
    catNails: 'العناية بالأظافر والسبا',
    catSkincare: 'جلسات تجميل البشرة',
    catBody: 'العناية بالجسم والاسترخاء',
    catPackages: 'الباقات والـ VIP',
    searchPlaceholder: 'ابحثي عن خدمة راقية (مثال: بروتين، تنظيف بشرة، أكريليك)...',
    noServicesFound: 'لم يتم العثور على خدمات تطابق بحثك. يرجى الاتصال بنا للاستفسار عن الباقات المخصصة.',
    bookService: 'احجزي الخدمة',
    
    statsSubtitle: 'مسيرة الفخامة بالأرقام والنتائج',
    
    reviewsTitle: 'آراء العميلات السعيدات',
    reviewsSubtitle: 'استمعي إلى تجارب حقيقية كتبتها عشيقات الفخامة والعرائس اللواتي ائتمن فريقنا على إطلالاتهن البهية.',
    reviewsBasedOn: 'بناءً على أكثر من 446 تقييم حقيقي على جوجل',
    
    galleryTitle: 'معرض أعمالنا الفاخر',
    gallerySubtitle: 'شاهدي لمسات من الفن في تسريحات الشعر الرائعة، المكياج الملكي، تصاميم الأظافر المبتكرة، وبيئة صالوننا الفخمة.',
    galAll: 'جميع أعمالنا',
    galHair: 'تسريحات شعر',
    galTreatments: 'علاج وترميم',
    galProtein: 'فرد بالبروتين',
    galMakeup: 'مكياج سهرات',
    galBridal: 'عرائس ملكية',
    galNails: 'فن الأظافر',
    galInterior: 'أجواء الصالون',
    galBeforeAfter: 'قبل وبعد',
    galSkincare: 'نضارة البشرة',
    
    bookingTitle: 'احجزي جلستك الخاصة',
    bookingSubtitle: 'اختاري الخدمة المطلوبة، التاريخ، والوقت المناسب. سيتصل بك فريق الاستقبال فوراً لتأكيد الحجز وتنسيق التفاصيل.',
    formName: 'الاسم بالكامل',
    formPhone: 'رقم الهاتف (واتساب)',
    formEmail: 'البريد الإلكتروني (اختياري)',
    formService: 'الخدمة التجميلية المطلوبة',
    formDate: 'التاريخ المفضل',
    formTime: 'الوقت المفضل',
    formRequests: 'طلبات خاصة أو استفسارات تجميلية',
    formSubmit: 'تأكيد طلب الحجز الفاخر',
    formSubmitting: 'جاري تسجيل حجزك الفاخر...',
    formSuccessTitle: 'تم إرسال طلب الحجز بنجاح!',
    formSuccessText: 'شكرًا لاختيارك صالون سماح حسن للتجميل. لقد تم تسجيل تفاصيل حجزك بنجاح. ستقوم مسؤولة علاقات العميلات بالاتصال بكِ أو مراسلتكِ عبر واتساب خلال دقائق معدودة لتأكيد موعدكِ الفاخر.',
    formClose: 'إغلاق النافذة',
    selectServicePlaceholder: 'الرجاء اختيار الخدمة الراقية...',
    
    contactTitle: 'زورينا واستمتعي بالدلال',
    contactSubtitle: 'يقع صالوننا في قلب مدينة المنصورة النابض، ومستعد تماماً لاستقبالك بمشروبات دافئة مهدئة وخدمة عالمية.',
    contactAddress: 'شارع الترعة، المنصورة، الدقهلية، مصر',
    contactHours: 'أوقات العمل',
    contactCallUs: 'اضغطي للاتصال الهاتفي بالصالون',
    contactWhatsAppUs: 'خدمة العميلات عبر واتساب',
    contactGetDirections: 'عرض الموقع على خرائط جوجل',
    
    saturday: 'السبت',
    sunday: 'الأحد',
    monday: 'الاثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    openDaily: 'نستقبلكم بكل حب يومياً من الساعة 9:00 صباحاً وحتى 9:00 مساءً',
    
    footerDesc: 'فخامة الجمال. ثقة تدوم. استمتعي بأعلى معايير الرقي والرفاهية لتصفيف الشعر، العناية بالبشرة، والباديكير في المنصورة.',
    footerQuickLinks: 'روابط سريعة',
    footerServices: 'فئات رئيسية',
    footerHours: 'ساعات العمل',
    footerRights: 'جميع الحقوق محفوظة لصالح صالون سماح حسن للتجميل.',
    footerPrivacy: 'سياسة الخصوصية',
    footerTerms: 'شروط الخدمة الفاخرة'
  }
};
