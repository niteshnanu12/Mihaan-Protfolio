"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Star, Camera, Eye, Zap, Footprints, Smile, Clock, Clapperboard, Heart, Award } from "lucide-react";

export default function Skills() {
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "camera confidence":
        return <Camera className="w-5 h-5" />;
      case "dynamic posing":
      case "posing":
        return <Eye className="w-5 h-5" />;
      case "expression control":
      case "expressions":
        return <Smile className="w-5 h-5" />;
      case "runway walk":
        return <Footprints className="w-5 h-5" />;
      case "patience & discipline":
      case "discipline":
        return <Clock className="w-5 h-5" />;
      case "quick learning":
        return <Zap className="w-5 h-5" />;
      case "acting":
        return <Clapperboard className="w-5 h-5" />;
      case "smile":
        return <Heart className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-beige-50 dark:bg-luxury-gray/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Core Talents
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Skills & Abilities
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg mx-auto font-light">
            Professional competencies that ensure high performance and efficiency during production days.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900/60 p-6 md:p-8 hover:border-gold-muted/40 transition-all duration-300 shadow-sm hover:shadow-md rounded-sm group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-beige-50 dark:bg-luxury-dark text-gold-muted border border-gold-muted/15 rounded-sm group-hover:bg-gold-muted group-hover:text-luxury-black transition-colors duration-300">
                    {getSkillIcon(skill.name)}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl uppercase tracking-wide text-luxury-black dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                {/* Rating Meter */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < skill.rating
                          ? "fill-gold-muted text-gold-muted"
                          : "text-neutral-200 dark:text-neutral-700"
                      }`}
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-light">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
