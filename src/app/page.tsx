import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";
import { getFeaturedVideo } from "@/lib/videos";
import { ContentCard } from "@/components/ContentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function Home() {
  const articles = getAllArticles("articles").slice(0, 3);
  const featuredVideo = getFeaturedVideo();

  return (
    <>
      {/* Hero — portrait pushed right, gradient fades into solid bg behind text */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink">
        {/* Background image — pushed to the right so the face is visible */}
        <div className="absolute top-0 right-0 h-full w-[70%] sm:w-[60%] lg:w-[50%]">
          <img
            src="/images/site/rs_09230.jpg"
            alt="Thiruvaiyaru S R Krishnan"
            className="h-full w-full object-cover object-top"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 20%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)" }}
          />
        </div>

        {/* Bottom gradient for text area */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 via-25% to-transparent" />

        {/* Text content — pinned left, clear of the portrait */}
        <div className="relative z-10 max-w-content mx-auto w-full px-6 pb-24 pt-64">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 animate-fade-in">
            Sangita Acharya
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl text-white animate-fade-in">
            Thiruvaiyaru
            <br />
            S R Krishnan
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed animate-fade-in-delay">
            Vakgeyakara, Vedic scholar, poet, composer, and exponent of the
            ancient traditions of Nama Sankeertanam and Hari-Katha &mdash;
            performing and teaching Karnataka Sangeetam across four continents
            since 1955.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-white text-ink text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
            >
              Learn more
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-sm hover:border-white/50 transition-colors"
            >
              Read writings
            </Link>
          </div>
        </div>

        {/* Bottom fade into cream page background */}
        <div className="absolute -bottom-1 left-0 right-0 h-12 bg-gradient-to-t from-cream to-transparent z-10" />
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="px-6 pt-24 pb-section bg-cream">
          <div className="max-w-content mx-auto">
            <SectionHeading
              label="Latest"
              title="Today&rsquo;s Sankeertanam"
              description="Daily devotional music and discourse."
            />
            <div className="max-w-4xl">
              <VideoEmbed
                youtubeId={featuredVideo.youtubeId}
                title={featuredVideo.title}
              />
              <div className="mt-4">
                <h3 className="font-serif text-heading text-ink">
                  {featuredVideo.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/videos"
                className="text-sm text-saffron hover:text-saffron-dark transition-colors"
              >
                View all videos &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Articles */}
      {articles.length > 0 && (
        <section className="px-6 py-section bg-parchment">
          <div className="max-w-content mx-auto">
            <SectionHeading
              label="Writings"
              title="Articles"
              description="Explorations of the Vedas, Carnatic music, saints, and the philosophical traditions of India."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ContentCard
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  title={article.title}
                  date={article.date}
                  description={article.description}
                  tag="Article"
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/articles"
                className="text-sm text-saffron hover:text-saffron-dark transition-colors"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="px-6 py-section bg-ink text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-display-sm text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/60 mb-8">
            Subscribe for updates on new articles, performances, recordings,
            and daily Sankeertanam videos.
          </p>
          <div className="max-w-md mx-auto">
            <SubscribeForm variant="inline" />
          </div>
        </div>
      </section>

      {/* Quote — SJA-style centered text block */}
      <section className="px-6 py-section bg-parchment">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-display-sm text-ink leading-snug">
            &ldquo;In Kali Yuga, the Lord resides wherever His devotees sing His
            name.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-ink-muted uppercase tracking-widest">
            From the tradition of Nama Sankeertanam
          </p>
        </div>
      </section>
    </>
  );
}
