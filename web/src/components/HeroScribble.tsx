"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HeroScribble() {
  return (
    <motion.div
    initial={{clipPath:"inset(0 0 100% 0)"}}
    animate={{clipPath:"inset(0 0 0 0)"}}
    transition={{duration:0.8,delay:0.3}}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Top center loop sweeping across upper edge */}
      <div
        className="absolute -top-36 sm:-top-48 md:-top-64 left-1/2 -translate-x-[48%] w-[850px] sm:w-[1100px] md:w-[1450px] lg:w-[1600px] animate-scribble-drift opacity-80"
        style={{ animationDuration: "16s" }}
      >
        <img
          src="/images/sribble.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Left organic curve looping inward from left edge */}
      <div
        className="absolute top-[8%] sm:top-[12%] -left-[280px] sm:-left-[380px] md:-left-[480px] lg:-left-[540px] w-[750px] sm:w-[950px] md:w-[1250px] lg:w-[1400px] -rotate-[78deg] opacity-75"
      >
        <img
          src="/images/sribble.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. Upper-right / right edge loop entering from right */}
      <div
        className="absolute top-[6%] sm:top-[10%] -right-[260px] sm:-right-[360px] md:-right-[460px] lg:-right-[520px] w-[800px] sm:w-[1000px] md:w-[1300px] lg:w-[1450px] rotate-[105deg] scale-y-[-1] opacity-75"
      >
        <img
          src="/images/sribble.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 4. Bottom-left loop rising from bottom corner */}
      <div
        className="absolute -bottom-[200px] sm:-bottom-[280px] md:-bottom-[380px] lg:-bottom-[420px] -left-[200px] sm:-left-[280px] md:-left-[360px] lg:-left-[420px] w-[750px] sm:w-[950px] md:w-[1200px] lg:w-[1350px] rotate-[25deg] scale-y-[-1] opacity-70"
      >
        <img
          src="/images/sribble.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 5. Bottom-right loop rising from bottom-right corner */}
      <div
        className="absolute -bottom-[180px] sm:-bottom-[250px] md:-bottom-[340px] lg:-bottom-[400px] -right-[160px] sm:-right-[240px] md:-right-[320px] lg:-right-[380px] w-[750px] sm:w-[950px] md:w-[1200px] lg:w-[1350px] rotate-[165deg] opacity-75"
      >
        <img
          src="/images/sribble.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>
    </motion.div>
  );
}
