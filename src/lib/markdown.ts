import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  pdfUrl?: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

function getMarkdownFiles(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".md"));
}

export function getAllArticles(dir: string = "articles"): ArticleMeta[] {
  const files = getMarkdownFiles(dir);

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(contentDirectory, dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      author: data.author || "Thiruvaiyaru S R Krishnan",
      tags: data.tags || [],
      pdfUrl: data.pdfUrl,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(
  slug: string,
  dir: string = "articles"
): Promise<Article | null> {
  const filePath = path.join(contentDirectory, dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    author: data.author || "Thiruvaiyaru S R Krishnan",
    tags: data.tags || [],
    pdfUrl: data.pdfUrl,
    contentHtml,
  };
}

export function getAllSlugs(dir: string = "articles"): string[] {
  return getMarkdownFiles(dir).map((f) => f.replace(/\.md$/, ""));
}
