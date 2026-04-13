"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface YearEntry {
  year: string;
  count: number;
  months: string[];
}

interface ArticleTimelineProps {
  years: YearEntry[];
}

export function ArticleTimeline({ years }: ArticleTimelineProps) {
  const [activeYear, setActiveYear] = useState(years[0]?.year ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleClick = useCallback((year: string) => {
    const el = document.getElementById(`year-${year}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const sections = years
      .map((y) => document.getElementById(`year-${y.year}`))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.id.replace("year-", "");
          setActiveYear(id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observerRef.current!.observe(s));
    return () => observerRef.current?.disconnect();
  }, [years]);

  return (
    <nav aria-label="Article timeline" className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-4 font-medium">
          Timeline
        </p>
        <ol className="relative border-l border-border-subtle ml-1.5">
          {years.map((entry) => {
            const isActive = entry.year === activeYear;
            return (
              <li key={entry.year} className="ml-4 mb-5 last:mb-0">
                {/* Dot on the line */}
                <span
                  className={`absolute -left-[5px] w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                    isActive
                      ? "bg-saffron border-saffron"
                      : "bg-cream border-border-subtle"
                  }`}
                />
                <button
                  onClick={() => handleClick(entry.year)}
                  className={`block text-left transition-colors duration-200 group ${
                    isActive ? "text-saffron" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <span
                    className={`block text-sm font-medium leading-none ${
                      isActive ? "font-semibold" : ""
                    }`}
                  >
                    {entry.year}
                  </span>
                  <span className="block text-[11px] mt-1 text-ink-muted">
                    {entry.months.join(", ")}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
