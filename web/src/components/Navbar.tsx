"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-30 w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-5 sm:pt-7 md:pt-9 flex items-center justify-between">
      {/* Brand Mark Logo: Sisyphus boulder & incline inside black squircle */}
      <a
        href="#"
        aria-label="Sisyphus Home"
        className="group relative block shrink-0 aspect-square w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-[18px] sm:rounded-[22px] md:rounded-[24px] border-[5px] sm:border-[6px] md:border-[7px] border-black bg-[#186640] shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <div className="w-full h-full relative flex items-center justify-center p-2.5 sm:p-3">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full transition-transform duration-300 group-hover:rotate-3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The diagonal ramp / mountain slope */}
            <line
              x1="26"
              y1="74"
              x2="74"
              y2="26"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* The Sisyphus boulder resting on the slope */}
            <circle
              cx="52"
              cy="36"
              r="9.5"
              fill="white"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </svg>
        </div>
      </a>

      {/* Desktop Navigation Pill */}
      <nav
        aria-label="Primary Navigation"
        className="hidden md:flex items-center bg-black/70 rounded-full px-5 shadow-md h-[46px] md:h-[48px] max-w-[800px]"
      >
        <div className="flex items-center gap-1.5 h-full">
          {/* ABOUT Tab */}
          <a
            href="#about"
            className="group relative overflow-hidden h-[32px] px-4 flex items-center justify-center rounded-full text-white hover:text-black font-normal text-[12px] lg:text-[13px] tracking-wider uppercase transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] origin-center pointer-events-none"
            />
            <span className="relative z-10">ABOUT</span>
          </a>

          {/* CONTACT Tab */}
          <a
            href="#contact"
            className="group relative overflow-hidden h-[32px] px-4 flex items-center justify-center rounded-full text-white hover:text-black font-normal text-[12px] lg:text-[13px] tracking-wider uppercase transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] origin-center pointer-events-none"
            />
            <span className="relative z-10">CONTACT</span>
          </a>

          {/* WORK Mint Pill CTA with expanding white bubble hover effect */}
          <a
            href="#work"
            className="group relative overflow-hidden h-[32px] pl-5 pr-1.5 flex items-center gap-2.5 rounded-full bg-[#20FF92] text-black active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-sm"
          >
            {/* Expanding white circle: smoothly scales up from the arrow badge */}
            <span
              aria-hidden="true"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white scale-100 group-hover:scale-[10] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] pointer-events-none origin-center will-change-transform"
            />

            <span className="relative z-10 font-normal text-[12px] lg:text-[13px] tracking-wider uppercase text-black transition-colors duration-500">
              WORK
            </span>

            <span className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-black pointer-events-none">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger / Menu Trigger */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="bg-black text-white px-4 py-2 rounded-full font-normal text-xs tracking-wider uppercase flex items-center gap-2 shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
          <span className="w-4 h-4 flex flex-col justify-center items-center gap-1">
            <span
              className={`block w-3.5 h-[2px] bg-white transition-transform duration-200 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-3.5 h-[2px] bg-white transition-transform duration-200 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer / Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-5 right-5 mt-3 p-4 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 md:hidden z-50 flex flex-col gap-2.5"
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#E2E4E3] text-black font-normal text-sm tracking-wider text-center uppercase active:bg-white transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#E2E4E3] text-black font-normal text-sm tracking-wider text-center uppercase active:bg-white transition-colors"
            >
              CONTACT
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative overflow-hidden w-full py-3 px-4 rounded-xl bg-[#20FF92] text-black font-normal text-sm tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
            >
              {/* Expanding white circle */}
              <span
                aria-hidden="true"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white scale-100 group-hover:scale-[25] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] pointer-events-none origin-center"
              />
              <span className="relative z-10 font-normal uppercase">WORK</span>
              <span className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center text-black pointer-events-none">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
