"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, Tag, Camera } from "lucide-react";

export default function Featured() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-beige-50 dark:bg-luxury-gray/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24 text-left">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Campaign Highlights
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Featured Campaigns
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg font-light">
            Highlighting premium collaborations with top kids fashion brands and editorial houses.
          </p>
        </div>

        {/* Editorial Cards List */}
        <div className="space-y-24 md:space-y-36">
          {portfolioData.featuredShoots.map((shoot, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={shoot.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Column */}
                <motion.div
                  className="w-full lg:w-[55%] relative"
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  {/* Decorative backdrop box for luxury depth */}
                  <div className={`absolute inset-0 bg-neutral-200/50 dark:bg-luxury-dark/50 -z-10 translate-y-3 ${
                    isEven ? "translate-x-3" : "-translate-x-3"
                  } rounded-sm`} />
                  <div className="relative aspect-[16/10] w-full overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-900 rounded-sm bg-neutral-200">
                    <Image
                      src={shoot.src}
                      alt={shoot.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover image-zoom-hover"
                    />
                  </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                  className="w-full lg:w-[45%] flex flex-col justify-center align-start"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-gold-muted font-sans text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{shoot.year}</span>
                    </div>
                    {shoot.brand && (
                      <div className="flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        <span>{shoot.brand}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3.5xl uppercase tracking-wide text-luxury-black dark:text-white mb-5 leading-tight">
                    {shoot.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-[1px] bg-gold-muted mb-6" />

                  {/* Description */}
                  <p className="font-sans text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-light mb-8 max-w-md">
                    {shoot.description}
                  </p>

                  {/* Production Crew info */}
                  <div className="border-t border-neutral-200/50 dark:border-neutral-800/80 pt-6 flex items-center gap-3">
                    <div className="p-2 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-full shadow-sm">
                      <Camera className="w-4 h-4 text-gold-muted" />
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-neutral-400 font-semibold">Photographer</p>
                      <p className="font-sans text-xs text-luxury-black dark:text-neutral-200 font-medium">{shoot.photographer}</p>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
