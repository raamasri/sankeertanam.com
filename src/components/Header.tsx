"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tradition", label: "Tradition" },
  { href: "/articles", label: "Articles" },
  { href: "/videos", label: "Videos" },
  { href: "/audio", label: "Audio" },
  { href: "/gallery", label: "Gallery" },
];

const moreLinks = [
  { href: "/lineage", label: "Lineage" },
  { href: "/krishnan-sisters", label: "Krishnan Sisters" },
  { href: "/press", label: "Press & Reviews" },
  { href: "/glossary", label: "Glossary" },
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
];

const allLinks = [...mainLinks, ...moreLinks];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border-subtle">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/site/logo.png"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="font-serif text-xl tracking-tight text-ink">
            Sankeertanam
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-light hover:text-saffron transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-sm text-ink-light hover:text-saffron transition-colors duration-200 flex items-center gap-1"
            >
              More
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-border-subtle rounded-sm shadow-lg py-2">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-ink-light hover:text-saffron hover:bg-parchment/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-b border-border-subtle/80">
          <div className="px-6 py-4 flex flex-col gap-4">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-ink-light hover:text-saffron transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
