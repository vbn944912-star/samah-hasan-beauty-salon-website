export interface ServiceItem {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: 'hair' | 'makeup' | 'nails' | 'skincare' | 'body' | 'packages';
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'hair' | 'treatments' | 'protein' | 'makeup' | 'bridal' | 'nails' | 'interior' | 'before_after' | 'skincare';
  image: string;
  titleEn: string;
  titleAr: string;
}

export interface ReviewItem {
  id: string;
  nameEn: string;
  nameAr: string;
  reviewEn: string;
  reviewAr: string;
  rating: number;
  date: string;
}

export interface StatItem {
  id: string;
  value: string;
  labelEn: string;
  labelAr: string;
}

export interface WhyChooseUsItem {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  iconName: string; // Lucide icon name
}

export interface TranslationDict {
  // Navigation
  navHome: string;
  navAbout: string;
  navServices: string;
  navGallery: string;
  navReviews: string;
  navContact: string;
  navBookNow: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroBookCTA: string;
  heroWhatsAppCTA: string;
  
  // About
  aboutSub: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutFeature1: string;
  aboutFeature2: string;
  aboutFeature3: string;
  aboutFeature4: string;
  aboutFeature5: string;
  aboutFeature6: string;
  aboutFeature7: string;
  aboutFeature8: string;
  
  // Why Choose Us
  whyTitle: string;
  whySubtitle: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  allCategories: string;
  catHair: string;
  catMakeup: string;
  catNails: string;
  catSkincare: string;
  catBody: string;
  catPackages: string;
  searchPlaceholder: string;
  noServicesFound: string;
  bookService: string;
  
  // Stats
  statsSubtitle: string;
  
  // Reviews
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsBasedOn: string;
  
  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  galAll: string;
  galHair: string;
  galTreatments: string;
  galProtein: string;
  galMakeup: string;
  galBridal: string;
  galNails: string;
  galInterior: string;
  galBeforeAfter: string;
  galSkincare: string;
  
  // Booking Form
  bookingTitle: string;
  bookingSubtitle: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formService: string;
  formDate: string;
  formTime: string;
  formRequests: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessText: string;
  formClose: string;
  selectServicePlaceholder: string;
  
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactHours: string;
  contactCallUs: string;
  contactWhatsAppUs: string;
  contactGetDirections: string;
  
  // Hours
  saturday: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  openDaily: string;
  
  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerServices: string;
  footerHours: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
}
