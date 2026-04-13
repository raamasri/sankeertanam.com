import fs from "fs";
import path from "path";

export interface VideoEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  youtubeId: string;
  tags: string[];
  featured?: boolean;
  category: string;
}

export interface VideoCategory {
  slug: string;
  label: string;
  count: number;
}

const videosPath = path.join(process.cwd(), "content", "videos", "videos.json");

function deriveCategory(title: string, tags: string[]): string {
  const t = title.toLowerCase();
  if (t.includes("nārāyaneeyam") || t.includes("nārāyanīya") || t.includes("narayaneeyam") || t.includes("narayaniyam"))
    return "Nārāyaneeyam";
  if (t.includes("tarangini") || t.includes("krishna leela"))
    return "Krishna Leela Tarangini";
  if (t.includes("harikatha"))
    return "Harikatha";
  if (t.includes("tyagaraja") || t.includes("aradhana"))
    return "Tyagaraja";
  if (t.includes("abhanga"))
    return "Abhanga Sankeertanam";
  if (tags.includes("Sankeertanam") || t.includes("sankeertanam"))
    return "Sankeertanam";
  if (tags.includes("Bhakti Sangeet") || t.includes("bhakti"))
    return "Bhakti Sangeet";
  if (t.includes("concert") || tags.includes("concert"))
    return "Concerts";
  return "Other";
}

export function getAllVideos(): VideoEntry[] {
  if (!fs.existsSync(videosPath)) return [];
  const raw = fs.readFileSync(videosPath, "utf8");
  const videos: Omit<VideoEntry, "category">[] = JSON.parse(raw);
  return videos
    .map((v) => ({
      ...v,
      category: deriveCategory(v.title, v.tags),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getVideoCategories(videos: VideoEntry[]): VideoCategory[] {
  const counts = new Map<string, number>();
  for (const v of videos) {
    counts.set(v.category, (counts.get(v.category) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([label, count]) => ({
      slug: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      label,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getFeaturedVideo(): VideoEntry | null {
  const videos = getAllVideos();
  return videos.find((v) => v.featured) || videos[0] || null;
}
