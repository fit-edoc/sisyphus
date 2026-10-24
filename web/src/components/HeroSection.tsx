"use client";

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroScribble from "./HeroScribble";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#197A50] overflow-hidden">
      {/* Decorative SVG Scribble Background Layer */}
      <HeroScribble />

      {/* Main Top Navigation */}
      <Navbar />

      {/* Hero Headline, Subtitle, CTA, and Supporting text */}
      <Hero />
    </section>
  );
}