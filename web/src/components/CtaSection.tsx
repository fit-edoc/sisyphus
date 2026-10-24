"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// Pure SVG Line Icons (Stroke-based, modern line aesthetic)
function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
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

function MailLineIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function CopyLineIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function CheckLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// 4x4 Bayer dither threshold matrix
const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const animFrameId = useRef<number | null>(null);
  const timeRef = useRef(0);

  // Clean prefilled query messages
  const prefilledWhatsAppQuery =
    "Hi syspus.agency! I'd like to collaborate on a new project. Could we schedule a quick call to discuss scope, timeline, and pricing?";

  const prefilledEmailHref = `mailto:hello@syspus.agency?subject=${encodeURIComponent(
    "New Project Inquiry — syspus.agency"
  )}&body=${encodeURIComponent(
    `Hi syspus.agency team,\n\nI'd like to discuss a new creative project.\n\n• Company / Brand:\n• Target Timeline:\n• Estimated Budget:\n\nLooking forward to speaking with you!\n`
  )}`;

  // Clean uniform dither animation without any circular cyclone
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = Math.floor(canvas.offsetWidth / 3));
    let height = (canvas.height = Math.floor(canvas.offsetHeight / 3));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = Math.floor(canvas.offsetWidth / 3);
      height = canvas.height = Math.floor(canvas.offsetHeight / 3);
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      // Speed up subtly when hovered, otherwise smooth continuous drift
      const speed = isHovered ? 0.032 : 0.012;
      timeRef.current += speed;
      const t = timeRef.current;

      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      const step = 2; // Step size for clean pixel dither texture
      for (let y = 0; y < height; y += step) {
        const bayerRow = (y >> 1) & 3;
        for (let x = 0; x < width; x += step) {
          const bayerCol = (x >> 1) & 3;
          const threshold = (BAYER_4X4[bayerRow][bayerCol] / 16) * 255;

          // Uniform linear directional flow (NO circular distance or cyclone)
          const wave1 = Math.sin(x * 0.035 + t * 0.8) * Math.cos(y * 0.035 + t * 0.6);
          const wave2 = Math.sin((x * 0.02 + y * 0.02) + t * 0.5);

          const rawVal = 120 + wave1 * 60 + wave2 * 45;

          if (rawVal > threshold) {
            const alpha = Math.min(230, Math.max(60, Math.floor(rawVal * 0.9)));
            for (let dy = 0; dy < step; dy++) {
              for (let dx = 0; dx < step; dx++) {
                const py = y + dy;
                const px = x + dx;
                if (px < width && py < height) {
                  const idx = (py * width + px) * 4;
                  data[idx] = 255; // White R
                  data[idx + 1] = 255; // White G
                  data[idx + 2] = 255; // White B
                  data[idx + 3] = alpha; // Alpha
                }
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isHovered]);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@syspus.agency");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-16 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#156642] select-none transition-colors duration-700"
    >
      {/* Moving white dither canvas layer (uniform, no cyclone) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-500 will-change-transform"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Streamlined, high-impact CTA card with clockwise traveling border line */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="group/card relative rounded-[32px] sm:rounded-[40px] md:rounded-[44px] bg-black/50 backdrop-blur-xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Subtle static card inner border */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[32px] sm:rounded-[40px] md:rounded-[44px] border border-white/15 pointer-events-none"
          />

          {/* SVG BORDER LINE MOVING CLOCKWISE */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none rounded-[32px] sm:rounded-[40px] md:rounded-[44px] overflow-visible"
          >
            <defs>
              <linearGradient id="clockwiseBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#20FF92" stopOpacity="1" />
                <stop offset="30%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="60%" stopColor="#20FF92" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#20FF92" stopOpacity="0" />
              </linearGradient>

              <filter id="borderGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            {/* Glowing blur trail moving clockwise */}
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="36"
              ry="36"
              fill="none"
              stroke="#20FF92"
              strokeWidth="3.5"
              strokeDasharray="20 80"
              pathLength={100}
              filter="url(#borderGlow)"
              className={isHovered ? "animate-border-clockwise-fast opacity-90" : "animate-border-clockwise opacity-50"}
            />

            {/* Sharp core beam traveling clockwise */}
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="36"
              ry="36"
              fill="none"
              stroke="url(#clockwiseBorderGradient)"
              strokeWidth="2.5"
              strokeDasharray="18 82"
              pathLength={100}
              className={isHovered ? "animate-border-clockwise-fast" : "animate-border-clockwise"}
            />
          </svg>

          {/* Punchy, clear headline conveying the message */}
          <div className="max-w-3xl">
            <h2 className="font-headline font-normal text-white tracking-[-0.035em] uppercase text-[36px] xs:text-[44px] sm:text-[54px] md:text-[66px] lg:text-[74px] leading-[0.94] mb-5">
              <span className="block">LET'S BUILD</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#20FF92]">
                SOMETHING RELENTLESS.
              </span>
            </h2>

            <p className="font-body text-white/80 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10">
              Have a project or vision to bring to life? We partner with ambitious brands to create
              social-first work that moves mountains.
            </p>
          </div>

          {/* Clean, simplified CTA action buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary WhatsApp Direct CTA */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(prefilledWhatsAppQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start chat on WhatsApp"
              className="inline-flex items-center justify-center gap-3 bg-[#20FF92] hover:bg-[#2eff9e] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded-full active:scale-95 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(32,255,146,0.5)] cursor-pointer"
            >
              <WhatsAppLineIcon className="w-5 h-5 text-black" />
              <span>START A CONVERSATION</span>
              <span className="w-6 h-6 rounded-full bg-black text-[#20FF92] flex items-center justify-center ml-1">
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Direct Email CTA */}
            <a
              href={prefilledEmailHref}
              aria-label="Send project inquiry email"
              className="inline-flex items-center justify-center gap-2.5 bg-black/70 hover:bg-black text-white font-extrabold text-sm sm:text-base tracking-wider uppercase px-6 py-4 rounded-full border border-white/20 hover:border-white/40 active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
            >
              <MailLineIcon className="w-4 h-4 text-[#20FF92]" />
              <span>HELLO@SYSPUS.AGENCY</span>
            </a>

            {/* Copy Email Helper Button */}
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wide px-5 py-4 rounded-full border border-white/15 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <CheckLineIcon className="w-4 h-4 text-[#20FF92]" />
                  <span className="text-[#20FF92] font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <CopyLineIcon className="w-4 h-4 text-white/70" />
                  <span className="text-white/80">COPY</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
