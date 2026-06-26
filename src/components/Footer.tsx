"use client";

import { MoveUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-luxury-black border-t border-neutral-100 dark:border-neutral-900/60 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Brand Name */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.3em] uppercase text-luxury-black dark:text-white mb-8">
          {portfolioData.name}
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <button
            onClick={() => scrollToSection("about")}
            className="font-sans text-xs tracking-widest uppercase text-neutral-500 hover:text-gold-muted cursor-pointer transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="font-sans text-xs tracking-widest uppercase text-neutral-500 hover:text-gold-muted cursor-pointer transition-colors duration-300"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-sans text-xs tracking-widest uppercase text-neutral-500 hover:text-gold-muted cursor-pointer transition-colors duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-10 text-neutral-400">
          {portfolioData.socialLinks.instagram && (
            <a
              href={portfolioData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-muted transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          )}
          {portfolioData.socialLinks.facebook && (
            <a
              href={portfolioData.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-muted transition-colors duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          )}
          {portfolioData.socialLinks.youtube && (
            <a
              href={portfolioData.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-muted transition-colors duration-300"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 mb-10 text-neutral-450 hover:text-gold-muted transition-colors cursor-pointer"
          whileHover={{ y: -3 }}
        >
          <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-full group-hover:border-gold-muted transition-all duration-300">
            <MoveUp className="w-4 h-4 text-gold-muted" />
          </div>
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase font-bold">Back to top</span>
        </motion.button>

        {/* Copyright */}
        <div className="text-center font-sans text-[10px] tracking-wider text-neutral-400 leading-relaxed font-light">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="mt-1 uppercase text-[9px] tracking-[0.15em] text-neutral-450">Managed by Parents</p>
        </div>

      </div>
    </footer>
  );
}
