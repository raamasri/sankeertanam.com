import { Metadata } from "next";
import { getAllArticles } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog posts, reflections, and updates from Sankeertanam.",
};

export default function BlogPage() {
  const posts = getAllArticles("blog");

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Reflections, updates, and writings."
      />

      <section className="px-6 py-section">
        <div className="max-w-content mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ink-muted mb-2">Blog posts coming soon.</p>
              <p className="text-sm text-ink-muted">
                Check back for reflections, updates, and new writings.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ContentCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  tag="Blog"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
