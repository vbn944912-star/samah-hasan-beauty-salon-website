import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // Set to true for above-the-fold images like Hero background to load eagerly
  customWidth?: number; // Force a custom optimized width for Unsplash images
}

/**
 * OptimizedImage component that ensures lightning-fast image loading by:
 * 1. Overriding Unsplash image URLs to request modern WebP format, responsive sizing, and optimal compression.
 * 2. Providing elegant skeleton placeholder and smooth fade-in transitions once fully loaded.
 * 3. Enforcing native lazy loading for below-the-fold content.
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  customWidth,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  useEffect(() => {
    if (!src) return;

    // Check if it's an Unsplash image
    if (src.includes('unsplash.com')) {
      try {
        const urlObj = new URL(src);
        // Remove or override parameters to maximize performance
        urlObj.searchParams.set('auto', 'format');
        urlObj.searchParams.set('fm', 'webp'); // WebP is extremely fast and lightweight

        // Adjust resolution dynamically based on context or explicit customWidth
        const targetWidth = customWidth ? customWidth.toString() : '600';
        urlObj.searchParams.set('w', targetWidth);
        urlObj.searchParams.set('q', '65'); // 65% quality is visually indistinguishable but 5x lighter than 100%
        urlObj.searchParams.set('fit', 'crop');

        setOptimizedSrc(urlObj.toString());
      } catch (e) {
        // Fallback to original src if URL parsing fails
        setOptimizedSrc(src);
      }
    } else {
      setOptimizedSrc(src);
    }
  }, [src, customWidth]);

  return (
    <div className={`relative overflow-hidden bg-cream-dark/30 ${className}`}>
      {/* Premium Minimalist Shimmer/Pulse Skeleton Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-cream-dark/10 via-cream-dark/20 to-cream-dark/10 animate-[pulse_1.5s_infinite] flex items-center justify-center">
          {/* Small luxurious loading indicator */}
          <div className="w-6 h-6 rounded-full border border-gold/20 border-t-gold animate-spin" />
        </div>
      )}

      <img
        src={optimizedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer"
        className={`transition-all duration-700 ease-out object-cover ${
          loaded 
            ? 'opacity-100 scale-100 blur-0' 
            : 'opacity-0 scale-102 blur-sm'
        } ${className}`}
        {...props}
      />
    </div>
  );
}
