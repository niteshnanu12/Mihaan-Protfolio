"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-beige-50 dark:bg-luxury-gray/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Endorsements
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Industry Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg mx-auto font-light">
            Words of appreciation from casting directors, runway trainers, and fashion houses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900/60 p-8 md:p-12 hover:border-gold-muted/30 transition-all duration-300 shadow-sm rounded-sm flex flex-col justify-between group"
            >
              {/* Luxury gold citation mark */}
              <div className="absolute top-8 right-8 text-gold-muted/15 group-hover:text-gold-muted/25 transition-colors duration-300">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              {/* Quote text */}
              <div className="mb-8">
                <p className="font-serif text-base md:text-lg leading-relaxed text-luxury-black dark:text-neutral-200 italic font-light">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="border-t border-neutral-100 dark:border-neutral-900/80 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm md:text-base uppercase tracking-wider text-luxury-black dark:text-white font-semibold mb-1">
                    {item.author}
                  </h4>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-450 dark:text-neutral-400">
                    {item.role}
                  </p>
                </div>
                {item.company && (
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-muted bg-beige-50 dark:bg-luxury-dark border border-gold-muted/15 py-1 px-3 rounded-sm font-bold">
                    {item.company}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
