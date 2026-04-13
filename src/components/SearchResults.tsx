"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

interface SearchItem {
  type: "article" | "video";
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
}

interface SearchResultsProps {
  items: SearchItem[];
}

export function SearchResults({ items }: SearchResultsProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "article" | "video">("all");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const terms = query.toLowerCase().split(/\s+/);
    return items
      .filter((item) => {
        if (filter !== "all" && item.type !== filter) return false;
        const haystack =
          `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
        return terms.every((t) => haystack.includes(t));
      })
      .slice(0, 50);
  }, [query, filter, items]);

  return (
    <>
      <PageHeader title="Search" subtitle="Find articles, videos, and more" />

      <section className="px-6 py-section">
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mb-10">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, topic, or tag..."
              autoFocus
              className="w-full px-5 py-3.5 bg-cream border border-border-subtle rounded-sm text-ink text-base focus:outline-none focus:border-saffron transition-colors"
            />
            <div className="mt-3 flex gap-2">
              {(["all", "article", "video"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                    filter === f
                      ? "bg-saffron text-white border-saffron"
                      : "bg-cream text-ink-muted border-border-subtle hover:border-saffron/30"
                  }`}
                >
                  {f === "all" ? "All" : f === "article" ? "Articles" : "Videos"}
                </button>
              ))}
            </div>
          </div>

          {query.trim() && (
            <p className="text-sm text-ink-muted mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} for
              &ldquo;{query}&rdquo;
            </p>
          )}

          <div className="space-y-4">
            {results.map((item) => {
              const isExternal = item.href.startsWith("http");
              const className =
                "block border border-border-subtle rounded-sm p-5 bg-cream hover:border-saffron/30 transition-colors group";

              const inner = (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest text-saffron font-medium">
                      {item.type === "article" ? "Article" : "Video"}
                    </span>
                    {item.date && (
                      <time className="text-xs text-ink-muted">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </time>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-ink group-hover:text-saffron transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1.5 text-sm text-ink-light line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </>
              );

              return isExternal ? (
                <a
                  key={`${item.type}-${item.href}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={`${item.type}-${item.href}`}
                  href={item.href}
                  className={className}
                >
                  {inner}
                </Link>
              );
            })}
          </div>

          {query.trim() && results.length === 0 && (
            <p className="text-ink-muted text-center py-12">
              No results found. Try a different search term.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
