"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative z-10 flex-1 flex flex-col justify-between w-full max-w-[1680px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 min-h-[calc(100svh-110px)]">
      {/* Central Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center -mt-6 sm:-mt-10 md:-mt-14">
        {/* Animated Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-hero-headline text-white tracking-[-0.035em] leading-[0.93] uppercase select-none text-[30px] xs:text-[46px] sm:text-[62px] md:text-[76px] lg:text-[90px] xl:text-[102px] 2xl:text-[112px] max-w-[1300px]"
        >
          <span className="block whitespace-nowrap">GOOD STORIES</span>
          <span className="block whitespace-nowrap">MOVE MOUNTAINS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/85 text-xs sm:text-sm md:text-base lg:text-[17px] font-normal tracking-wide mt-3.5 sm:mt-5 max-w-lg px-4"
        >
          Modern and suitable for a social-first creative agency.
        </motion.p>

        {/* CONNECT Pill Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-7 md:mt-8"
        >
          <a
            href="#connect"
            aria-label="Connect with Sisyphus"
            className="group relative overflow-hidden inline-flex items-center gap-3.5 sm:gap-4 bg-black active:scale-95 pl-6 sm:pl-7 pr-2 py-2 rounded-full shadow-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-500 ease-out"
          >
            {/* Expanding white circle: smooth, fluid, luxurious expansion */}
            <span
              aria-hidden="true"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white scale-100 group-hover:scale-[11] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] pointer-events-none origin-center will-change-transform"
            />

            {/* CONNECT Text: smoothly transitions to black as white wave spreads */}
            <span className="relative z-10 font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
              CONNECT
            </span>

            {/* Arrow badge: black arrow icon on white background */}
            <span className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-black pointer-events-none">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-1 group-hover:scale-120 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Supporting Text Blocks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full flex items-end justify-between pointer-events-none select-none pt-8"
      >
        {/* Bottom Left Supporting Text */}
        <div className="font-body text-white text-xs sm:text-sm md:text-[16px] lg:text-[18px] font-normal leading-[1.38] tracking-tight max-w-[280px]">
          <p>Human, memorable, and</p>
          <p>connected to the</p>
          <p>Sisyphus brand concept.</p>
        </div>

        {/* Bottom Right Supporting Text - Casual & Social-First */}
        <div className="font-body text-white text-xs sm:text-sm md:text-[16px] lg:text-[18px] font-normal leading-[1.38] tracking-tight text-right max-w-[300px] hidden sm:block">
          <p>Made for the internet.</p>
          <p>Less corporate fluff,</p>
          <p>more stuff people actually love.</p>
        </div>
      </motion.div>
    </div>
  );
}
