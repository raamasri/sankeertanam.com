import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from performances, events, and the life of Thiruvaiyaru S R Krishnan.",
};

function getGalleryImages(): string[] {
  const manifestPath = path.join(
    process.cwd(),
    "content",
    "gallery-manifest.json"
  );
  if (!fs.existsSync(manifestPath)) return [];
  const raw = fs.readFileSync(manifestPath, "utf8");
  return JSON.parse(raw);
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Photographs from performances, events, and a life devoted to music and spirituality."
      />

      <section className="px-6 py-section">
        <div className="max-w-content mx-auto">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
