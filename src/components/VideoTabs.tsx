"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
  date: string;
  description: string;
  youtubeId: string;
  category: string;
}

interface Category {
  slug: string;
  label: string;
  count: number;
}

interface VideoTabsProps {
  videos: Video[];
  categories: Category[];
}

export function VideoTabs({ videos, categories }: VideoTabsProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? videos
      : videos.filter(
          (v) => v.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === activeTab
        );

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 text-sm rounded-sm border transition-colors ${
            activeTab === "all"
              ? "bg-saffron text-white border-saffron"
              : "bg-cream text-ink-light border-border-subtle hover:border-saffron/30"
          }`}
        >
          All ({videos.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveTab(cat.slug)}
            className={`px-4 py-2 text-sm rounded-sm border transition-colors ${
              activeTab === cat.slug
                ? "bg-saffron text-white border-saffron"
                : "bg-cream text-ink-light border-border-subtle hover:border-saffron/30"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((video) => (
          <div key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-video rounded-sm overflow-hidden bg-ink/5 mb-3 group"
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-ink ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </a>
            <span className="text-xs uppercase tracking-widest text-saffron font-medium">
              {video.category}
            </span>
            <h3 className="font-serif text-base text-ink mt-1">
              {video.title}
            </h3>
            {video.date && (
              <time className="text-xs text-ink-muted">
                {new Date(video.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">
          No videos in this category yet.
        </p>
      )}
    </>
  );
}
