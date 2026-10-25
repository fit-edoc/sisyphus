"use client";

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroScribble from "./HeroScribble";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#197A50] overflow-hidden">
      {/* Background Image Layer from public/images/footer.jpg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <img
          src="/images/footer.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Forest green tint overlay to preserve the brand color scheme and guarantee text readability */}
        <div className="absolute inset-0 bg-[#197A50]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#197A50]/60 via-transparent to-[#197A50]/90" />
      </div>

      {/* Decorative SVG Scribble Background Layer */}
      <HeroScribble />

      {/* Main Top Navigation */}
      <Navbar />

      {/* Hero Headline, Subtitle, CTA, and Supporting text */}
      <Hero />
    </section>
  );
}