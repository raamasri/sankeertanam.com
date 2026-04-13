"use client";

import { useState } from "react";

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((filename, i) => (
          <button
            key={filename}
            onClick={() => setLightbox(i)}
            className="block w-full overflow-hidden rounded-sm cursor-pointer group"
          >
            <img
              src={`/images/gallery/${filename}`}
              alt={`Gallery photo ${i + 1}`}
              className="w-full block transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>

          {lightbox > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none"
              aria-label="Previous"
            >
              &lsaquo;
            </button>
          )}

          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none"
              aria-label="Next"
            >
              &rsaquo;
            </button>
          )}

          <img
            src={`/images/gallery/${images[lightbox]}`}
            alt={`Gallery photo ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
