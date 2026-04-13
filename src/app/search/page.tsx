import { Metadata } from "next";
import { getAllArticles } from "@/lib/markdown";
import { getAllVideos } from "@/lib/videos";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Search",
  description: "Search articles, videos, and content on Sankeertanam.",
};

export default function SearchPage() {
  const articles = getAllArticles("articles").map((a) => ({
    type: "article" as const,
    title: a.title,
    description: a.description,
    href: `/articles/${a.slug}`,
    date: a.date,
    tags: a.tags,
  }));

  const videos = getAllVideos().map((v) => ({
    type: "video" as const,
    title: v.title,
    description: v.description,
    href: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    date: v.date,
    tags: v.tags,
  }));

  const allItems = [...articles, ...videos];

  return <SearchResults items={allItems} />;
}
