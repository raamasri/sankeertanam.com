import { Metadata } from "next";
import { getAllArticles } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writings on the Vedas, Carnatic music, Indian philosophy, and the lives of musical saints by Thiruvaiyaru S R Krishnan.",
};

export default function ArticlesPage() {
  const articles = getAllArticles("articles");

  return (
    <>
      <PageHeader
        title="Articles"
        subtitle="Explorations of the Vedas, Carnatic music, the great epics, and the saints and philosophers of India."
      />

      <section className="px-6 py-section">
        <div className="max-w-content mx-auto">
          {articles.length === 0 ? (
            <p className="text-ink-muted text-center py-12">
              Articles coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ContentCard
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  title={article.title}
                  date={article.date}
                  description={article.description}
                  tag={article.tags[0]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
