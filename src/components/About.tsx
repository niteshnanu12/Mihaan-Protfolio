"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Calendar, Ruler, MapPin, Globe, Award, Sparkles } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-beige-50 dark:bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait Image */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Elegant double-border frame effect */}
            <div className="absolute -inset-4 border border-gold-muted/30 -z-10 translate-x-2 translate-y-2 rounded-sm" />
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group rounded-sm bg-neutral-200">
              <Image
                src={portfolioData.aboutImage}
                alt={`About ${portfolioData.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover image-zoom-hover"
              />
            </div>
            
            {/* Soft decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-luxury-gray border border-gold-muted/20 px-4 py-3 shadow-md flex items-center gap-2 rounded-sm">
              <Sparkles className="w-4 h-4 text-gold-muted animate-pulse" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-luxury-black dark:text-white">
                Aspiring Talent
              </span>
            </div>
          </motion.div>

          {/* Right Column: Copy & Statistics */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              variants={itemVariants} 
              className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block"
            >
              The Model
            </motion.span>
            
            <motion.h2 
              variants={itemVariants} 
              className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6 leading-tight"
            >
              About {portfolioData.name}
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="w-12 h-[1px] bg-gold-muted mb-8"
            />

            <motion.p 
              variants={itemVariants} 
              className="font-sans text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl font-light"
            >
              {portfolioData.aboutText}
            </motion.p>

            {/* Statistics Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10"
            >
              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Age</span>
                </div>
                <p className="font-serif text-lg text-luxury-black dark:text-white font-medium">{portfolioData.stats.age}</p>
              </div>

              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Height</span>
                </div>
                <p className="font-serif text-lg text-luxury-black dark:text-white font-medium">{portfolioData.stats.height}</p>
              </div>

              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Location</span>
                </div>
                <p className="font-serif text-sm text-luxury-black dark:text-white font-medium line-clamp-1">{portfolioData.stats.location}</p>
              </div>

              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Languages</span>
                </div>
                <p className="font-serif text-sm text-luxury-black dark:text-white font-medium truncate">{portfolioData.stats.languages.join(", ")}</p>
              </div>

              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Hair Color</span>
                </div>
                <p className="font-serif text-lg text-luxury-black dark:text-white font-medium">{portfolioData.stats.hairColor}</p>
              </div>

              <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 p-4 rounded-sm hover:border-gold-muted/40 transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gold-muted" />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">Eye Color</span>
                </div>
                <p className="font-serif text-lg text-luxury-black dark:text-white font-medium">{portfolioData.stats.eyeColor}</p>
              </div>
            </motion.div>

            {/* Available For Tags */}
            <motion.div variants={itemVariants}>
              <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4 font-bold">
                Available For:
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.availableFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="font-sans text-xs tracking-wider text-neutral-600 dark:text-neutral-300 bg-white dark:bg-luxury-dark border border-neutral-200/60 dark:border-neutral-800 py-2 px-4 hover:border-gold-muted hover:text-gold-muted transition-colors rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
