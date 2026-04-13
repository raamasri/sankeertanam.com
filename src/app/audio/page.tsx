import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AudioPlayer } from "@/components/AudioPlayer";
import { getAllAlbums } from "@/lib/audio";

export const metadata: Metadata = {
  title: "Audio",
  description:
    "Audio recordings and albums of Carnatic music performances, Sankeertanams, and Hari-Katha discourses.",
};

const playlists = [
  {
    title: "Ragasri Playlist",
    url: "https://youtube.com/playlist?list=PLRom1v9AoTDvWshZTMPkaStnTTiTbBpZJ",
  },
  {
    title: "GuruBhakti Playlist",
    url: "https://youtube.com/playlist?list=PLnbW4QyR8MykfzcG-VP6zMLEqMLMii4VO",
  },
];

export default function AudioPage() {
  const albums = getAllAlbums();

  return (
    <>
      <PageHeader
        title="Audio"
        subtitle="Recordings of Carnatic music performances, Sankeertanams, Hari-Katha discourses, and fundraiser concerts spanning decades."
      />

      {/* Playlists */}
      <section className="px-6 py-section-sm bg-cream">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-heading text-ink mb-6">
            Listen Online
          </h2>
          <p className="text-body text-ink-light mb-8 max-w-2xl">
            Hundreds of live recordings are available free on our YouTube
            channels. Browse the playlists below or visit the channels directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {playlists.map((pl) => (
              <a
                key={pl.title}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border-subtle rounded-sm text-sm text-ink hover:border-saffron/30 hover:text-saffron transition-all bg-cream"
              >
                {pl.title} &rarr;
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Album Archive with Player */}
      <section className="px-6 py-section bg-parchment">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-display-sm text-ink mb-3">
            Album Archive
          </h2>
          <p className="text-body text-ink-light mb-10 max-w-2xl">
            {albums.length} albums from live performances spanning decades.
            Click an album to expand and play tracks directly.
          </p>
          <AudioPlayer albums={albums} />
        </div>
      </section>
    </>
  );
}
