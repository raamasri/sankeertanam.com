import { Metadata } from "next";
import { getAllArticles, ArticleMeta } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { ArticleTimeline } from "@/components/ArticleTimeline";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writings on the Vedas, Carnatic music, Indian philosophy, and the lives of musical saints by Thiruvaiyaru S R Krishnan.",
};

function groupByYear(articles: ArticleMeta[]) {
  const map = new Map<string, ArticleMeta[]>();
  for (const a of articles) {
    const year = a.date ? new Date(a.date).getFullYear().toString() : "Undated";
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(a);
  }
  return Array.from(map.entries()).map(([year, items]) => ({ year, items }));
}

function getTimelineData(groups: { year: string; items: ArticleMeta[] }[]) {
  return groups.map(({ year, items }) => {
    const monthSet = new Set(
      items
        .filter((a) => a.date)
        .map((a) =>
          new Date(a.date).toLocaleDateString("en-US", { month: "short" })
        )
    );
    return {
      year,
      count: items.length,
      months: Array.from(monthSet),
    };
  });
}

export default function ArticlesPage() {
  const articles = getAllArticles("articles");
  const groups = groupByYear(articles);
  const timelineYears = getTimelineData(groups);

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
            <div className="flex gap-10">
              {/* Timeline sidebar */}
              <div className="w-32 flex-none self-start">
                <ArticleTimeline years={timelineYears} />
              </div>

              {/* Article groups by year */}
              <div className="flex-1 min-w-0">
                {groups.map(({ year, items }) => (
                  <div key={year} id={`year-${year}`} className="mb-14 last:mb-0">
                    <h2 className="font-serif text-2xl text-ink mb-6 border-b border-border-subtle pb-3">
                      {year}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {items.map((article) => (
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
