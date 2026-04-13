import { Metadata } from "next";
import { getAllVideos, getVideoCategories, getFeaturedVideo } from "@/lib/videos";
import { PageHeader } from "@/components/PageHeader";
import { VideoEmbed } from "@/components/VideoEmbed";
import { VideoTabs } from "@/components/VideoTabs";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Video recordings of Sankeertanam performances, Hari-Katha discourses, and musical presentations by Thiruvaiyaru S R Krishnan.",
};

export default function VideosPage() {
  const featured = getFeaturedVideo();
  const allVideos = getAllVideos();
  const archiveVideos = allVideos.filter((v) => v.id !== featured?.id);
  const categories = getVideoCategories(archiveVideos);

  return (
    <>
      <PageHeader
        title="Videos"
        subtitle="Performances, discourses, and musical presentations."
      />

      {/* Featured / Daily Video */}
      {featured && (
        <section className="px-6 py-section-sm bg-cream">
          <div className="max-w-content mx-auto">
            <span className="text-xs uppercase tracking-widest text-saffron font-medium block mb-4">
              Featured
            </span>
            <div className="max-w-4xl">
              <VideoEmbed
                youtubeId={featured.youtubeId}
                title={featured.title}
              />
              <div className="mt-4">
                <h2 className="font-serif text-heading text-ink">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm text-ink-light">
                  {featured.description}
                </p>
                {featured.date && (
                  <time className="mt-2 block text-xs text-ink-muted">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Archive with Tabs */}
      <section className="px-6 py-section bg-parchment">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-display-sm text-ink mb-8">Archive</h2>
          <VideoTabs videos={archiveVideos} categories={categories} />

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
