"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // All unique categories derived from data
  const categories = ["All", "Fashion", "Traditional", "Casual", "Formal", "Studio", "Outdoor", "Commercial", "Editorial", "Lifestyle", "Portrait"];

  const filteredItems = selectedCategory === "All"
    ? portfolioData.gallery
    : portfolioData.gallery.filter((item) =>
        item.categories.includes(selectedCategory)
      );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard events in Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white dark:bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Casting Catalog
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Portfolio Gallery
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg mx-auto font-light">
            Browse through various photoshoots categorized by style, location, and creative directions.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar pb-6 mb-12 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-2 md:gap-3 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-sans text-xs tracking-widest uppercase py-3 px-6 border transition-all duration-300 cursor-pointer rounded-sm ${
                  selectedCategory === category
                    ? "bg-luxury-black text-white border-luxury-black dark:bg-white dark:text-luxury-black dark:border-white font-medium"
                    : "bg-transparent text-neutral-500 border-neutral-200 dark:border-neutral-800 hover:border-gold-muted dark:hover:border-gold-muted hover:text-gold-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid mb-6 group relative overflow-hidden bg-neutral-100 dark:bg-luxury-gray cursor-pointer rounded-sm border border-neutral-100 dark:border-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                {/* Image Wrapper */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: index % 2 === 0 ? "4/5" : "3/4" }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover image-zoom-hover group-hover:brightness-95"
                  />
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-light bg-gold-muted/20 border border-gold-light/30 px-2.5 py-1 rounded-sm mb-3 inline-block font-semibold">
                        {item.categories[0]}
                      </span>
                      <h3 className="font-serif text-lg text-white tracking-wide mb-1.5">{item.title}</h3>
                      <div className="flex items-center gap-1.5 text-white/70 font-sans text-[10px] tracking-wider font-light">
                        <Camera className="w-3 h-3 text-gold-light" />
                        <span>By {item.photographer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 dark:bg-black/98 p-4 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white cursor-pointer bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all duration-300"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-40 text-white/70 hover:text-white cursor-pointer bg-white/5 p-3 rounded-full hover:bg-white/15 transition-all duration-300"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-40 text-white/70 hover:text-white cursor-pointer bg-white/5 p-3 rounded-full hover:bg-white/15 transition-all duration-300"
                aria-label="Next Image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Lightbox Content Container */}
              <div className="w-full max-w-6xl h-full flex flex-col lg:flex-row items-center justify-center gap-8 md:py-10">
                
                {/* Left side: Premium Image Display */}
                <div className="relative flex-1 w-full h-[50vh] lg:h-full max-h-[75vh] flex items-center justify-center">
                  <motion.div
                    key={filteredItems[lightboxIndex].id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={filteredItems[lightboxIndex].src}
                      alt={filteredItems[lightboxIndex].title}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </motion.div>
                </div>

                {/* Right side: Editorial Metadata panel */}
                <motion.div 
                  key={`meta-${filteredItems[lightboxIndex].id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-full lg:w-96 text-left flex flex-col justify-center text-white px-2 lg:px-6"
                >
                  {/* Category labels */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {filteredItems[lightboxIndex].categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-light border border-gold-light/40 py-1 px-3 rounded-sm font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl tracking-wide uppercase leading-snug mb-5 border-b border-white/10 pb-4">
                    {filteredItems[lightboxIndex].title}
                  </h3>

                  {/* Details Grid */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Camera className="w-4 h-4 text-gold-muted" />
                      <div>
                        <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-400">Photographer</p>
                        <p className="font-sans text-sm text-white/90">{filteredItems[lightboxIndex].photographer}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gold-muted" />
                      <div>
                        <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-400">Location</p>
                        <p className="font-sans text-sm text-white/90">{filteredItems[lightboxIndex].location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {filteredItems[lightboxIndex].description && (
                    <div className="border-t border-white/10 pt-5">
                      <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light italic">
                        &ldquo;{filteredItems[lightboxIndex].description}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Pagination Info */}
                  <div className="mt-8 text-neutral-500 font-sans text-xs tracking-[0.2em]">
                    IMAGE {lightboxIndex + 1} OF {filteredItems.length}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
