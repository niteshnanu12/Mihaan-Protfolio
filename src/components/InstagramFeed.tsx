"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Heart, MessageCircle } from "lucide-react";

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

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white dark:bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
            Social Canvas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
            Instagram Feed
          </h2>
          <div className="w-12 h-[1px] bg-gold-muted mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-neutral-500 dark:text-neutral-400 tracking-wider max-w-lg mx-auto font-light">
            Stay updated with daily snapshots, casual lookbooks, and behind-the-scene captures.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {portfolioData.instagramFeed.map((post, index) => (
            <motion.a
              key={post.id}
              href={portfolioData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-full overflow-hidden bg-neutral-200 dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900 group rounded-sm shadow-sm hover:shadow-lg block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            >
              <Image
                src={post.src}
                alt={`Instagram post by ${portfolioData.name}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover image-zoom-hover"
              />

              {/* Instagram Glass Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1.5 font-sans text-sm font-semibold">
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 font-sans text-sm font-semibold">
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <motion.a
            href={portfolioData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-bold text-gold-muted hover:text-luxury-black dark:hover:text-white border border-gold-muted/30 py-3.5 px-8 hover:border-gold-muted transition-all duration-300 rounded-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <InstagramIcon className="w-4 h-4 stroke-[2]" />
            Follow @{portfolioData.name}
          </motion.a>
        </div>

      </div>
    </section>
  );
}
