"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Pure SVG Line Icons (Stroke-based, modern line aesthetic)
function ClockLineIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WhatsAppLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ArrowUpRightLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ArrowUpLineIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function CopyLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckLineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FooterSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [logoHovered, setLogoHovered] = useState(false);

  // Prefilled WhatsApp query message
  const prefilledWhatsAppQuery =
    "Hi syspus.agency! I'm reaching out to inquire about working together on creative content and social-first campaigns. Could we discuss availability and pricing?";

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(prefilledWhatsAppQuery)}`;

  // Prefilled Email link
  const emailHref = `mailto:hello@syspus.agency?subject=${encodeURIComponent(
    "Project Inquiry | syspus.agency"
  )}&body=${encodeURIComponent(
    `Hi Syspus Team,\n\nI'd like to collaborate with syspus.agency on a new project.\n\n• Brand / Company:\n• Scope of Work (Social Reels, Branding, Full Production):\n• Target Timeline:\n• Budget Range:\n\nLooking forward to speaking with you!\n`
  )}`;

  const [year, setYear] = useState("2026");

  // Dynamic live clock for modern agency vibe
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@syspus.agency");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0b2b1b] text-white pt-16 sm:pt-20 md:pt-28 pb-6 sm:pb-8 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-t border-white/10 select-none">
      {/* Subtle organic green glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#197A50]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[#20FF92]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1680px] mx-auto flex flex-col justify-between min-h-[500px]">
        {/* TOP SECTION: Left (All rights & Socials) & Right (Nav & Back to top) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 sm:pb-20 border-b border-white/10">
          {/* ABOVE LEFT: All Rights & Brand concept */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#20FF92] animate-ping" />
                <span>ONLINE WORLDWIDE</span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1 text-[#20FF92]">
                  <ClockLineIcon className="w-3 h-3" />
                  {currentTime || "12:00:00 PM"}
                </span>
              </div>

              {/* All rights statement */}
              <h3 className="font-headline font-normal text-lg sm:text-xl md:text-2xl tracking-tight text-white uppercase">
                syspus.agency
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-normal tracking-wider uppercase mt-1">
                © {year} SYSPUS.AGENCY. ALL RIGHTS RESERVED.
              </p>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mt-2 max-w-sm">
                Social-first creative agency moving mountains for brands that refuse to be ignored.
                Crafted with relentless motion and uncompromising taste.
              </p>
            </div>

            {/* Quick copyright attribution footer line */}
            <div className="text-white/35 text-xs font-mono">
              <span>LAT: 40.7128° N, 74.0060° W</span>
              <span className="mx-2">•</span>
              <span>INDEPENDENT STUDIO</span>
            </div>
          </div>

          {/* LEFT SOCIAL LINKS: Email, Insta, WhatsApp with prefilled query msg */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <p className="text-white/50 text-xs font-mono uppercase tracking-wider">
              [ DIRECT CONNECT & INQUIRIES ]
            </p>

            <div className="flex flex-col gap-3">
              {/* 1. WHATSAPP with prefilled query msg */}
              <div className="group/wa relative">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-[#20FF92] text-white hover:text-black border border-white/10 hover:border-[#20FF92] transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover/wa:bg-black/10 flex items-center justify-center text-[#20FF92] group-hover/wa:text-black transition-colors">
                      <WhatsAppLineIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm tracking-wide uppercase">
                          WhatsApp Chat
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#20FF92]/20 group-hover/wa:bg-black/20 text-[#20FF92] group-hover/wa:text-black font-semibold">
                          PREFILLED
                        </span>
                      </div>
                      <p className="text-xs text-white/50 group-hover/wa:text-black/70">
                        Instant direct conversation
                      </p>
                    </div>
                  </div>
                  <ArrowUpRightLineIcon className="w-5 h-5 text-white/40 group-hover/wa:text-black transition-transform group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5" />
                </a>

                {/* Prefilled message preview tooltip on hover */}
                <div className="mt-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-white/50 flex items-center gap-1.5">
                  <span className="text-[#20FF92] font-mono shrink-0">MSG:</span>
                  <span className="truncate italic">"{prefilledWhatsAppQuery}"</span>
                </div>
              </div>

              {/* 2. EMAIL with prefilled mailto and copy button */}
              <div className="flex items-stretch gap-2">
                <a
                  href={emailHref}
                  className="flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 active:scale-[0.98] group/email"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover/email:bg-black/10 flex items-center justify-center text-white group-hover/email:text-black transition-colors">
                      <MailLineIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm tracking-wide uppercase">
                          Email Inquiry
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 group-hover/email:bg-black/20 text-white group-hover/email:text-black font-semibold">
                          PREFILLED
                        </span>
                      </div>
                      <p className="text-xs text-white/50 group-hover/email:text-black/70 truncate">
                        hello@syspus.agency
                      </p>
                    </div>
                  </div>
                  <ArrowUpRightLineIcon className="w-5 h-5 text-white/40 group-hover/email:text-black transition-transform group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5" />
                </a>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email address"
                  className="px-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all active:scale-95 cursor-pointer text-white/70 hover:text-white"
                >
                  {copiedEmail ? (
                    <CheckLineIcon className="w-5 h-5 text-[#20FF92]" />
                  ) : (
                    <CopyLineIcon className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* 3. INSTAGRAM */}
              <a
                href="https://instagram.com/syspus.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 active:scale-[0.98] group/insta"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover/insta:bg-black/10 flex items-center justify-center text-white group-hover/insta:text-black transition-colors">
                    <InstagramLineIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm tracking-wide uppercase">
                      Instagram
                    </span>
                    <p className="text-xs text-white/50 group-hover/insta:text-black/70">
                      @syspus.agency
                    </p>
                  </div>
                </div>
                <ArrowUpRightLineIcon className="w-5 h-5 text-white/40 group-hover/insta:text-black transition-transform group-hover/insta:translate-x-0.5 group-hover/insta:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* TOP RIGHT: Nav links & Back to Top */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-4">
                [ INDEX ]
              </p>
              <nav className="flex flex-col space-y-2.5 text-sm sm:text-base font-semibold">
                <a
                  href="#about"
                  className="text-white/70 hover:text-[#20FF92] transition-colors flex items-center justify-between group"
                >
                  <span>ABOUT SISYPHUS</span>
                  <span className="text-white/20 group-hover:text-[#20FF92] transition-colors">01</span>
                </a>
                <a
                  href="#work"
                  className="text-white/70 hover:text-[#20FF92] transition-colors flex items-center justify-between group"
                >
                  <span>SELECTED WORK</span>
                  <span className="text-white/20 group-hover:text-[#20FF92] transition-colors">02</span>
                </a>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-[#20FF92] transition-colors flex items-center justify-between group"
                >
                  <span>CONTACT / CTA</span>
                  <span className="text-white/20 group-hover:text-[#20FF92] transition-colors">03</span>
                </a>
              </nav>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group self-start sm:self-auto inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 transition-all duration-300 active:scale-95 cursor-pointer font-bold text-xs uppercase tracking-wider"
            >
              <span>BACK TO TOP</span>
              <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                <ArrowUpLineIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION: AGENCY LARGE NAME syspus.agency WITH LOGO */}
        <div
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="pt-10 sm:pt-14 md:pt-16 pb-2"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            {/* The Brand Mark Logo */}
            <div className="shrink-0 flex items-center gap-4">
              <a
                href="#"
                aria-label="syspus.agency Home"
                className="group relative block aspect-square w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-[22px] sm:rounded-[26px] md:rounded-[30px] border-[5px] sm:border-[6px] md:border-[7px] border-black bg-[#156642] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="w-full h-full relative flex items-center justify-center p-3 sm:p-3.5 md:p-4">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full transition-transform duration-500 group-hover:rotate-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Slope line */}
                    <line
                      x1="24"
                      y1="76"
                      x2="76"
                      y2="24"
                      stroke="white"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    {/* The Boulder with dynamic roll physics */}
                    <circle
                      cx={logoHovered ? "62" : "50"}
                      cy={logoHovered ? "28" : "38"}
                      r="10.5"
                      fill="white"
                      className="transition-all duration-500 ease-out"
                    />
                  </svg>
                </div>
              </a>

              <div className="hidden sm:block">
                <span className="block text-white/50 text-xs font-mono uppercase tracking-widest">
                  OFFICIAL LOGOMARK
                </span>
                <span className="block text-white font-extrabold text-sm uppercase tracking-wide">
                  THE SISYPHUS INCLINE
                </span>
              </div>
            </div>

            {/* Tagline snippet */}
            <div className="text-right hidden md:block">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
                DIGITAL • CULTURE • INFLUENCE
              </p>
              <p className="text-white/80 font-normal text-sm tracking-wide uppercase">
                MOVE MOUNTAINS OR DIE TRYING.
              </p>
            </div>
          </div>

          {/* MASSIVE AGENCY NAME: syspus.agency */}
          <div className="mt-4 sm:mt-6 overflow-hidden">
            <h2 className="mx-auto font-headline font-normal tracking-tighter uppercase leading-[0.82] select-none text-white text-[12vw] sm:text-[8.8vw] md:text-[8.8vw] lg:text-[10vw] transition-colors duration-500 hover:text-[#20FF92] cursor-default">
              syspus.agency
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
