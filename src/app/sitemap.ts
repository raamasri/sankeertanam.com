import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/markdown";

const BASE_URL = "https://www.sankeertanam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleSlugs = getAllSlugs("articles");

  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/articles`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/videos`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/audio`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/tradition`, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${BASE_URL}/lineage`, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${BASE_URL}/krishnan-sisters`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/press`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${BASE_URL}/glossary`, changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const articlePages = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
