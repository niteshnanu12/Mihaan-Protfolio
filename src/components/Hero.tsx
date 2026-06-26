"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for the hero image and overlay text
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-900"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src={portfolioData.heroImage}
          alt={`${portfolioData.name} - ${portfolioData.subtitle}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-85 brightness-[0.75] dark:brightness-[0.65]"
        />
      </motion.div>

      {/* Luxury Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />

      {/* Floating Logo/Name on top left */}
      <div className="absolute top-6 left-6 md:left-12 z-40">
        <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-white drop-shadow-sm">
          {portfolioData.name}
        </span>
      </div>

      {/* Content Overlay */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-tight mb-4 drop-shadow-md">
          {portfolioData.title}
        </h1>
        <p className="font-sans text-sm md:text-lg tracking-[0.3em] uppercase text-gold-light mb-12 drop-shadow-sm font-medium">
          {portfolioData.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="group relative overflow-hidden bg-white text-luxury-black font-sans text-xs md:text-sm tracking-[0.2em] uppercase py-4 px-8 border border-white hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <span className="absolute inset-0 bg-luxury-black transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 -z-10" />
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative overflow-hidden bg-transparent text-white font-sans text-xs md:text-sm tracking-[0.2em] uppercase py-4 px-8 border border-white/60 hover:border-white transition-all duration-500 cursor-pointer"
          >
            <span className="absolute inset-0 bg-white transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 -z-10 group-hover:text-luxury-black" />
            <span className="group-hover:text-luxury-black transition-colors duration-500">Contact</span>
          </button>
        </div>
      </motion.div>

      {/* Subtle Bouncing Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => scrollToSection("about")}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
