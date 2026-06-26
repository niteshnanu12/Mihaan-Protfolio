"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Featured from "@/components/Featured";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import BehindScenes from "@/components/BehindScenes";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate luxury slow load to showcase typography intro
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium preloader animation */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black text-white"
          >
            {/* Elegant letter tracking reveal */}
            <motion.div
              initial={{ letterSpacing: "0.2em", opacity: 0, y: 15 }}
              animate={{ 
                letterSpacing: "0.5em", 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
              }}
              className="font-serif text-4xl md:text-6xl uppercase text-white font-medium"
            >
              MIHAAN
            </motion.div>

            {/* Subtle subline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.5,
                transition: { delay: 0.8, duration: 1 }
              }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase mt-4 text-gold-light"
            >
              Professional Portfolio
            </motion.div>

            {/* Minimal loader line */}
            <div className="absolute bottom-20 w-32 h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ 
                  x: "100%",
                  transition: { repeat: Infinity, duration: 1.5, ease: "linear" }
                }}
                className="w-full h-full bg-gold-muted"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main website layout, loaded once preloader finishes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col min-h-screen"
      >
        <ThemeToggle />
        <main className="flex-grow">
          <Hero />
          <About />
          <Gallery />
          <Featured />
          <Achievements />
          <Skills />
          <BehindScenes />
          <Testimonials />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
