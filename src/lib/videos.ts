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

export function getAllVideos(): VideoEntry[] {
  if (!fs.existsSync(videosPath)) return [];
  const raw = fs.readFileSync(videosPath, "utf8");
  const videos: Omit<VideoEntry, "category">[] = JSON.parse(raw);
  return videos.map((v) => ({
    ...v,
    category: v.tags[0] || "Other",
  }));
}

export function getVideoCategories(videos: VideoEntry[]): VideoCategory[] {
  const seen = new Map<string, number>();
  const order: string[] = [];
  for (const v of videos) {
    if (!seen.has(v.category)) {
      order.push(v.category);
      seen.set(v.category, 0);
    }
    seen.set(v.category, seen.get(v.category)! + 1);
  }
  return order.map((label) => ({
    slug: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    count: seen.get(label)!,
  }));
}

export function getFeaturedVideo(): VideoEntry | null {
  const videos = getAllVideos();
  return videos.find((v) => v.featured) || videos[0] || null;
}
