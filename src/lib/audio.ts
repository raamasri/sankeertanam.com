import fs from "fs";
import path from "path";

export interface Album {
  folder: string;
  title: string;
  tracks: string[];
}

const manifestPath = path.join(process.cwd(), "content", "audio-manifest.json");

function formatAlbumTitle(folder: string): string {
  return folder
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getAllAlbums(): Album[] {
  if (!fs.existsSync(manifestPath)) return [];
  const raw = fs.readFileSync(manifestPath, "utf8");
  const data: { folder: string; tracks: string[] }[] = JSON.parse(raw);
  return data.map((d) => ({
    folder: d.folder,
    title: formatAlbumTitle(d.folder),
    tracks: d.tracks,
  }));
}
