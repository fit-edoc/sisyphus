"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Quote } from "lucide-react";

// Word-by-word scroll-linked text color fill reveal component
interface TextFillRevealProps {
  text: string;
  className?: string;
}

function TextFillReveal({ text, className = "" }: TextFillRevealProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <WordFill key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </WordFill>
        );
      })}
    </p>
  );
}

function WordFill({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative inline-block mr-[0.28em] my-[0.05em] select-none">
      <motion.span style={{ opacity }} className="text-[#197A50] transition-colors duration-150">
        {children}
      </motion.span>
    </span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets
  const topTextY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const videoY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  // Video playback toggles
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const storyParagraph1 =
    "Sisyphus is a modern social-first creative agency built for the sheer speed and wild energy of modern internet culture. We don't believe in boring pitch decks, slow quarterly turnarounds, or generic corporate advertising that gets immediately swiped away.";

  const storyParagraph2 =
    "Instead, we engineer thumb-stopping organic moments, sharp editorial campaigns, and cultural hooks that give your brand unstoppable gravity. We take your heaviest message and push it to the top of the cultural mountain—until people genuinely want to share it.";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-white text-[#197A50] py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* TOP: Oversized Headline "ABOUT" with Parallax Float */}
        <div className="relative mb-12 sm:mb-16 md:mb-20 select-none">
          

          <motion.h2
            style={{ y: topTextY }}
            className="font-headline text-[#197A50] font-normal tracking-[-0.04em] uppercase leading-[0.88] text-[16vw] sm:text-[14vw] lg:text-[150px] xl:text-[100px] 2xl:text-[180px] pointer-events-none"
          >
            ABOUT
          </motion.h2>
        </div>

        {/* 2-COLUMN GRID: Left Video + Quote | Right About Us Story in 1 text size semibold */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Video Only + Tagline / Quote */}
          <motion.div
            style={{ y: videoY }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* The Video Player Card */}
            <div className="relative group w-full aspect-[4/3] sm:aspect-[16/10] rounded overflow-hidden bg-black shadow-2xl border border-[#197A50]/15">
              <video
                ref={videoRef}
                src="/video/about.mp4"
                playsInline
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              {/* Floating Controls Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between z-20">
                {/* Status pill */}
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-bold tracking-wider uppercase">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isPlaying ? "bg-[#20ff92] animate-pulse" : "bg-neutral-400"
                    }`}
                  />
                  <span>{isPlaying ? "PLAYING" : "PAUSED"}</span>
                </div>

                {/* Control Buttons: Play/Pause & Mute/Unmute */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="group/btn relative overflow-hidden flex items-center gap-2 bg-white hover:bg-neutral-100 text-black px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-black stroke-black" />
                        <span>PAUSE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-black stroke-black" />
                        <span>PLAY</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#20ff92] border border-white/20 active:scale-95 transition-all cursor-pointer shadow-lg"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#20ff92]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Tagline / Quote directly after the video */}
            <div className="relative p-6 sm:p-8 rounded bg-[#197A50]/[0.04] border border-[#197A50]/15">
              <Quote className="w-8 h-8 text-[#197A50]/30 mb-3" />
              <blockquote className="font-headline font-normal text-lg sm:text-xl md:text-2xl text-[#197A50] leading-snug tracking-tight">
                “If a story doesn’t move people to stop their thumb and act, it’s just expensive digital noise.”
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs tracking-widest uppercase font-normal text-[#197A50]/70">
                <span>The Sisyphus Rulebook</span>
                <span>Vol. 2026</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: About Us in 1 Text Size with Fill Color Reveal */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-6 flex flex-col gap-10 lg:pl-4"
          >
            {/* Story in 1 uniform text size with word-by-word color fill reveal */}
            <div className="space-y-8 font-normal text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-[1.38] tracking-[-0.015em]">
              <TextFillReveal text={storyParagraph1} />
              <TextFillReveal text={storyParagraph2} />
            </div>

            {/* Supporting Micro-Pillars in Forest Green */}
            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#197A50]/15">
              <div>
                <p className="font-headline font-normal text-xs uppercase tracking-wider text-[#197A50]/60 mb-1">
                  Speed to Feed
                </p>
                <p className="font-headline font-normal text-sm sm:text-base text-[#197A50]">
                  Internet Pace, Studio Polish
                </p>
              </div>
              <div>
                <p className="font-headline font-normal text-xs uppercase tracking-wider text-[#197A50]/60 mb-1">
                  Cultural Resonance
                </p>
                <p className="font-headline font-normal text-sm sm:text-base text-[#197A50]">
                  Human Stories That Stick
                </p>
              </div>
            </div>

            {/* Bottom Interactive CTA Pill Button with Expanding White Bubble */}
            <div className="pt-2 flex items-center gap-5">
              <a
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center gap-3.5 bg-[#197A50] hover:bg-[#156240] text-white pl-7 pr-2 py-2.5 rounded-full shadow-xl active:scale-95 transition-all duration-300"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white scale-100 group-hover:scale-[14] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] pointer-events-none origin-center"
                />
                <span className="relative z-10 font-headline font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-[#197A50] transition-colors duration-500">
                  LET’S TALK STORIES
                </span>
                <span className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-black pointer-events-none">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.8] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
                </span>
              </a>

              <a
                href="#work"
                className="font-headline font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#197A50] hover:underline underline-offset-4 px-3 py-2"
              >
                EXPLORE WORK →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
