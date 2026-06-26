"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Award, Briefcase, Sparkles, BookOpen } from "lucide-react";

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Runway":
        return <Sparkles className="w-5 h-5 text-gold-muted" />;
      case "Magazine Feature":
        return <BookOpen className="w-5 h-5 text-gold-muted" />;
      case "Brand Collaboration":
        return <Briefcase className="w-5 h-5 text-gold-muted" />;
      default:
        return <Award className="w-5 h-5 text-gold-muted" />;
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white dark:bg-luxury-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Milestones
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Career Timeline
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg mx-auto font-light">
            A chronological journey of campaigns, runways, and media features.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-[50%] -translate-x-[50%] top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

          {/* Left Line (Mobile Only) */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800 md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {portfolioData.achievements.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-stretch md:justify-between w-full"
                >
                  {/* Timeline Node Connector Dot */}
                  {/* Desktop Dot */}
                  <motion.div
                    className="absolute left-[50%] -translate-x-[50%] top-6 z-10 w-10 h-10 rounded-full bg-white dark:bg-luxury-dark border border-gold-muted flex items-center justify-center shadow-md hidden md:flex"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {getIcon(item.category)}
                  </motion.div>

                  {/* Mobile Dot */}
                  <motion.div
                    className="absolute left-6 -translate-x-[50%] top-6 z-10 w-9 h-9 rounded-full bg-white dark:bg-luxury-dark border border-gold-muted flex items-center justify-center shadow-md md:hidden"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {getIcon(item.category)}
                  </motion.div>

                  {/* Left Side Content Container */}
                  <div className={`w-full md:w-[44%] pl-14 md:pl-0 flex flex-col justify-center ${
                    isLeft ? "md:text-right" : "md:order-last md:text-left"
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    >
                      {/* Year Indicator */}
                      <span className="font-serif text-3xl md:text-4xl text-gold-muted/40 font-bold block mb-2">
                        {item.year}
                      </span>
                      
                      {/* Category */}
                      <span className={`font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-gold-muted mb-2 block ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}>
                        {item.category}
                      </span>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-lg md:text-xl uppercase tracking-wide text-luxury-black dark:text-white mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-450 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alignment */}
                  <div className="hidden md:block w-[44%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
