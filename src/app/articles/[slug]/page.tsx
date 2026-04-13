import { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticleBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("articles");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, "articles");
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, "articles");

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="pt-32 pb-12 px-6 border-b border-border-subtle bg-parchment">
        <div className="max-w-article mx-auto">
          <Link
            href="/articles"
            className="text-sm text-saffron hover:text-saffron-dark transition-colors"
          >
            &larr; All Articles
          </Link>
          <h1 className="font-serif text-display-sm md:text-display text-ink mt-6 animate-fade-in">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-muted animate-fade-in-delay">
            <span>By {article.author}</span>
            {article.date && (
              <>
                <span>&middot;</span>
                <time>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </>
            )}
          </div>
          {article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 animate-fade-in-delay-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-widest text-saffron bg-saffron/5 px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <article className="px-6 py-section">
        <div className="prose max-w-article mx-auto">
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          {article.pdfUrl && (
            <div className="mt-12 pt-8 border-t border-border-subtle">
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-cream text-sm font-medium rounded-sm hover:bg-ink-light transition-colors no-underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Article (PDF)
              </a>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
