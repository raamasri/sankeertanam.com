"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface VideoItem {
  youtubeId: string;
  title: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > a")?.offsetWidth ?? 320;
    const gap = 24;
    const distance = (cardWidth + gap) * 2;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }

  if (videos.length === 0) return null;

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-10 h-10 rounded-full bg-ink/80 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-ink ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4l-6 6 6 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-10 h-10 rounded-full bg-ink/80 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-ink ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 4l6 6-6 6" />
        </svg>
      </button>

      {/* Fade edges */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video) => (
          <a
            key={video.youtubeId}
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-72 sm:w-80 group/card"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden bg-ink/5">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                  <path d="M19 15l14 9-14 9V15z" fill="white" />
                </svg>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink leading-snug line-clamp-2 group-hover/card:text-saffron transition-colors duration-200">
              {video.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
