"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { MoveLeft, MoveRight } from "lucide-react";

export default function BehindScenes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      // Run once on load
      checkScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white dark:bg-luxury-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="text-left mb-6 md:mb-0">
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
              Candid & Real
            </span>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-4">
              Behind the Scenes
            </h2>
            <div className="w-12 h-[1px] bg-gold-muted mb-4" />
            <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-md font-light">
              A look into the camera setup, interactions on set, and raw moments during shoots.
            </p>
          </div>

          {/* Luxury Arrow Navigation (Desktop Only) */}
          <div className="flex gap-3 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!showLeftArrow}
              className={`p-3 rounded-full border cursor-pointer transition-all duration-300 ${
                showLeftArrow
                  ? "border-gold-muted text-gold-muted hover:bg-gold-muted hover:text-luxury-black"
                  : "border-neutral-200 dark:border-neutral-800 text-neutral-350 cursor-not-allowed opacity-40"
              }`}
              aria-label="Scroll left"
            >
              <MoveLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!showRightArrow}
              className={`p-3 rounded-full border cursor-pointer transition-all duration-300 ${
                showRightArrow
                  ? "border-gold-muted text-gold-muted hover:bg-gold-muted hover:text-luxury-black"
                  : "border-neutral-200 dark:border-neutral-800 text-gold-muted hover:bg-gold-muted hover:text-luxury-black"
              }`}
              aria-label="Scroll right"
            >
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-8 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {portfolioData.behindTheScenes.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[380px] snap-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {/* Film Strip Border */}
              <div className="bg-neutral-100 dark:bg-luxury-gray border border-neutral-200 dark:border-neutral-900 p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-neutral-200 rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 280px, 380px"
                    className="object-cover image-zoom-hover brightness-[0.98] group-hover:brightness-100"
                  />
                </div>
                
                {/* Caption */}
                <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed min-h-[36px] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drag Helper Message for Touch Devices */}
        <div className="text-center mt-4 md:hidden">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-bold animate-pulse">
            ← Swipe to explore →
          </span>
        </div>

      </div>
    </section>
  );
}
