import { Metadata } from "next";
import { getAllVideos, getVideoCategories } from "@/lib/videos";
import { PageHeader } from "@/components/PageHeader";
import { VideoEmbed } from "@/components/VideoEmbed";
import { VideoTabs } from "@/components/VideoTabs";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Video recordings of Sankeertanam performances, Hari-Katha discourses, and musical presentations by Thiruvaiyaru S R Krishnan.",
};

const latestFromChannels = [
  {
    channel: "GuruBhakti",
    youtubeId: "zGsOyl4yLnc",
    title: "Sri Rama Caritam — Part 04 — Narayaneeyam Dasakam 34",
    description:
      "Part 4 of the Sri Rama Caritam series from the Narayaneeyam Dasakam 34, by Thiruvaiyaru S R Krishnan.",
    date: "2026-04-05",
  },
  {
    channel: "Ragasri",
    youtubeId: "AfIY8s1ZGxk",
    title: "Vava Bala Vela Gunaseela — வா வா பாலா வேலா குணசீலா",
    description:
      "A Kavadi song in Raaga Saama by Ragasri Srinivasa Raghavan, composed in devotion to Lord Muruga.",
    date: "2025-11-29",
  },
];

export default function VideosPage() {
  const allVideos = getAllVideos();
  const categories = getVideoCategories(allVideos);

  return (
    <>
      <PageHeader
        title="Videos"
        subtitle="Performances, discourses, and musical presentations."
      />

      {/* Latest from Each Channel */}
      <section className="px-6 py-section-sm bg-cream">
        <div className="max-w-content mx-auto">
          <span className="text-xs uppercase tracking-widest text-saffron font-medium block mb-6">
            Latest from our channels
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {latestFromChannels.map((video) => (
              <div key={video.youtubeId}>
                <VideoEmbed
                  youtubeId={video.youtubeId}
                  title={video.title}
                />
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-widest text-ink-muted font-medium">
                    {video.channel}
                  </span>
                  <h2 className="font-serif text-xl text-ink mt-1">
                    {video.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-light">
                    {video.description}
                  </p>
                  <time className="mt-2 block text-xs text-ink-muted">
                    {new Date(video.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Archive with Tabs */}
      <section className="px-6 py-section bg-parchment">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-display-sm text-ink mb-8">Archive</h2>
          <VideoTabs videos={allVideos} categories={categories} />

          {/* YouTube Channel Links */}
          <div className="mt-16 pt-8 border-t border-border-subtle">
            <h3 className="font-serif text-heading text-ink mb-4">
              YouTube Channels
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@ragasri-narasimhan51"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border-subtle rounded-sm text-sm text-ink hover:border-saffron/30 hover:text-saffron transition-all bg-cream"
              >
                Ragasri Channel &rarr;
              </a>
              <a
                href="https://www.youtube.com/@gurubhakti-tsrk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border-subtle rounded-sm text-sm text-ink hover:border-saffron/30 hover:text-saffron transition-all bg-cream"
              >
                GuruBhakti Channel &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
