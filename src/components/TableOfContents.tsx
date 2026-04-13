"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TocEntry {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  entries: TocEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const sections = entries
      .map((e) => document.getElementById(e.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observerRef.current!.observe(s));
    return () => observerRef.current?.disconnect();
  }, [entries]);

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-4 font-medium">
          On this page
        </p>
        <ol className="relative border-l border-border-subtle ml-1.5 space-y-1">
          {entries.map((entry) => {
            const isActive = entry.id === activeId;
            return (
              <li key={entry.id} className="ml-4">
                <span
                  className={`absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                    isActive
                      ? "bg-saffron border-saffron"
                      : "bg-cream border-border-subtle"
                  }`}
                />
                <button
                  onClick={() => handleClick(entry.id)}
                  className={`block text-left py-1 text-[13px] leading-snug transition-colors duration-200 ${
                    isActive
                      ? "text-saffron font-medium"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {entry.label}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
