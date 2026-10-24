"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Flame,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  client: string;
  views: string;
  video: string;
  tag: string;
}

const REELS: ReelItem[] = [
  {
    id: "1",
    title: "The Mountain Drop",
    client: "Apex Athletics",
    views: "3.4M",
    video: "/video/work1.mp4",
    tag: "Viral TikTok",
  },
  {
    id: "2",
    title: "Unfiltered Stories",
    client: "Kin Coffee Co.",
    views: "1.8M",
    video: "/video/work2.mp4",
    tag: "Brand Reel",
  },
  {
    id: "3",
    title: "Midnight Routine",
    client: "Luma Skincare",
    views: "5.1M",
    video: "/video/work3.mp4",
    tag: "Organic Hook",
  },
  {
    id: "4",
    title: "Culture Over Clutter",
    client: "Mono Audio",
    views: "2.9M",
    video: "/video/work1.mp4",
    tag: "Campaign Reel",
  },
  {
    id: "5",
    title: "Behind the Grid",
    client: "Sisyphus Lab",
    views: "4.2M",
    video: "/video/work2.mp4",
    tag: "Docu-Series",
  },
  {
    id: "6",
    title: "Raw Momentum",
    client: "Pulse Energy",
    views: "6.7M",
    video: "/video/work3.mp4",
    tag: "Creator Collab",
  },
];

export default function WorkSection() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Drag-to-slide & scroll reference
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedReel(null);
    };
    if (selectedReel) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedReel]);

  // Modal play/pause toggle
  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (isModalPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const setIsPlaying = (state: boolean) => {
    setIsModalPlaying(state);
  };

  // Modal mute toggle
  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !isModalMuted;
    setIsModalMuted(!isModalMuted);
  };

  // Desktop slide arrow controls
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  // Mouse Drag to Slide handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
    setDragDistance(Math.abs(walk));
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (reel: ReelItem) => {
    // Only open modal if user clicked without dragging
    if (dragDistance < 8) {
      setSelectedReel(reel);
      setIsModalPlaying(true);
      setIsModalMuted(false);
    }
  };

  return (
    <section
      id="work"
      className="relative w-full bg-[#165d3a] text-white py-24 sm:py-32 md:py-40 overflow-hidden"
    >
      {/* Background Subtle Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#197A50] via-[#165d3a] to-[#124d30] pointer-events-none" />

      {/* TOP LEFT HEADER & SLIDER CONTROLS */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 mb-10 sm:mb-14 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff] animate-pulse" />
          <span className="font-normal text-xs sm:text-sm tracking-[0.25em] uppercase text-[#000000]">
            02 / SELECTED REELS & WORK
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-headline font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.04em] uppercase leading-[0.92] text-white max-w-3xl">
            WORK WE ARE PROUD OF
          </h2>

          {/* Desktop Slide Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={slideLeft}
              aria-label="Slide left"
              className="w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#20ff92] border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={slideRight}
              aria-label="Slide right"
              className="w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#20ff92] border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* SLIDABLE REEL CARDS TRACK (Desktop Drag + Trackpad & Mobile Touch Snap) */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Subtle Edge Gradients for Desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#165d3a] to-transparent z-20 pointer-events-none" />
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#165d3a] to-transparent z-20 pointer-events-none" />

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-6 overflow-x-auto scroll-smooth px-6 sm:px-10 md:px-14 lg:px-20 pb-8 pt-2 no-scrollbar snap-x select-none ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => handleCardClick(reel)}
              className="group relative shrink-0 w-[280px] sm:w-[300px] md:w-[320px] h-[490px] sm:h-[530px] rounded-[28px] overflow-hidden bg-black/60 border border-white/15 cursor-pointer shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#20ff92]/60 hover:shadow-[#20ff92]/10 snap-center"
            >
              {/* Autoplaying Preview Video */}
              <video
                src={reel.video}
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/50 transition-opacity duration-300 group-hover:via-black/10 pointer-events-none" />

              {/* Top Meta: Client & Views */}
              <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white border border-white/10">
                  {reel.client}
                </span>

                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#20ff92] text-black text-[11px] font-black tracking-wide shadow-sm">
                  <Flame className="w-3 h-3 fill-black stroke-black" />
                  <span>{reel.views}</span>
                </span>
              </div>

              {/* Center Play Button on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-[#20ff92] group-hover:text-black transition-all duration-300 shadow-xl">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Reel Info */}
              <div className="absolute bottom-5 inset-x-5 z-10 pointer-events-none">
                <span className="text-[11px] font-normal text-[#20ff92] tracking-wider uppercase block mb-1">
                  {reel.tag}
                </span>
                <h3 className="font-headline font-normal text-lg text-white leading-tight uppercase group-hover:text-[#20ff92] transition-colors">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Drag / Swipe Helper Prompt */}
        <div className="flex items-center justify-center gap-2 pt-2 text-xs font-semibold text-white/60 uppercase tracking-widest">
          <span>← Drag or use arrows to slide through work →</span>
        </div>
      </div>

      {/* FULLSCREEN REEL MODAL */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedReel(null)}
          >
            {/* Modal Reel Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] aspect-[9/16] max-h-[88vh] rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/20 flex flex-col justify-between"
            >
              {/* Playing Video */}
              <video
                ref={modalVideoRef}
                src={selectedReel.video}
                playsInline
                autoPlay
                loop
                muted={isModalMuted}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

              {/* Top Modal Bar */}
              <div className="relative z-20 p-5 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#20ff92] animate-pulse" />
                  <span className="text-white text-xs font-extrabold uppercase tracking-wider">
                    {selectedReel.client}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReel(null)}
                  aria-label="Close modal"
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Click to Pause Center Area */}
              <div
                onClick={toggleModalPlay}
                className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
              >
                {!isModalPlaying && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </motion.div>
                )}
              </div>

              {/* Bottom Controls */}
              <div className="relative z-20 p-6 flex flex-col gap-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-normal text-[#20ff92] tracking-wider uppercase block mb-1">
                      {selectedReel.tag}
                    </span>
                    <h3 className="font-headline font-normal text-xl sm:text-2xl text-white leading-tight uppercase">
                      {selectedReel.title}
                    </h3>
                  </div>

                  <span className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#20ff92] text-black text-xs font-black">
                    <Flame className="w-3.5 h-3.5 fill-black stroke-black" />
                    <span>{selectedReel.views}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={toggleModalPlay}
                    className="flex-1 py-2.5 px-4 rounded-full bg-white hover:bg-neutral-100 text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    {isModalPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-black stroke-black" />
                        <span>PAUSE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-black stroke-black" />
                        <span>PLAY</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleModalMute}
                    aria-label={isModalMuted ? "Unmute reel" : "Mute reel"}
                    className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md hover:bg-black text-white hover:text-[#20ff92] border border-white/20 flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    {isModalMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#20ff92]" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
