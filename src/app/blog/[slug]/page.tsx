import { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticleBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticleBySlug(slug, "blog");
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getArticleBySlug(slug, "blog");

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="pt-32 pb-12 px-6 border-b border-border-subtle bg-parchment">
        <div className="max-w-article mx-auto">
          <Link
            href="/blog"
            className="text-sm text-saffron hover:text-saffron-dark transition-colors"
          >
            &larr; All Posts
          </Link>
          <h1 className="font-serif text-display-sm md:text-display text-ink mt-6 animate-fade-in">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-muted animate-fade-in-delay">
            <span>By {post.author}</span>
            {post.date && (
              <>
                <span>&middot;</span>
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </>
            )}
          </div>
        </div>
      </div>

      <article className="px-6 py-section">
        <div
          className="prose max-w-article mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </>
  );
}
