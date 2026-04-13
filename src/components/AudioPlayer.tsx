"use client";

import { useState } from "react";

interface AudioPlayerProps {
  albums: {
    folder: string;
    title: string;
    tracks: string[];
  }[];
}

function formatTrackName(filename: string): string {
  return filename
    .replace(/\.mp3$/, "")
    .replace(/^\d+\s*/, "")
    .replace(/_/g, " ")
    .trim();
}

export function AudioPlayer({ albums }: AudioPlayerProps) {
  const [openAlbum, setOpenAlbum] = useState<string | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {albums.map((album) => {
        const isOpen = openAlbum === album.folder;
        return (
          <div
            key={album.folder}
            className="border border-border-subtle rounded-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenAlbum(isOpen ? null : album.folder)}
              className="w-full flex items-center justify-between px-5 py-4 bg-cream hover:bg-parchment transition-colors text-left"
            >
              <div>
                <h3 className="font-serif text-base text-ink">
                  {album.title}
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  {album.tracks.length} track
                  {album.tracks.length !== 1 ? "s" : ""}
                </p>
              </div>
              <svg
                className={`w-4 h-4 text-ink-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="border-t border-border-subtle bg-parchment/50">
                <ul className="divide-y divide-border-subtle">
                  {album.tracks.map((track) => {
                    const trackPath = `https://raw.githubusercontent.com/raamasri/sankeertanam.com/main/public/audio/${encodeURIComponent(album.folder)}/${encodeURIComponent(track)}`;
                    const isPlaying = playing === trackPath;
                    return (
                      <li key={track} className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              setPlaying(isPlaying ? null : trackPath)
                            }
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron/10 hover:bg-saffron/20 flex items-center justify-center transition-colors"
                            aria-label={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? (
                              <svg
                                className="w-3.5 h-3.5 text-saffron"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                              </svg>
                            ) : (
                              <svg
                                className="w-3.5 h-3.5 text-saffron ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                              </svg>
                            )}
                          </button>
                          <span className="text-sm text-ink-light truncate">
                            {formatTrackName(track)}
                          </span>
                        </div>
                        {isPlaying && (
                          <audio
                            src={trackPath}
                            autoPlay
                            controls
                            onEnded={() => setPlaying(null)}
                            className="w-full mt-2 h-8"
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
