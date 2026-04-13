import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Press & Reviews",
  description:
    "Press coverage, reviews, and media mentions of Thiruvaiyaru S R Krishnan and the Krishnan Sisters.",
};

interface PressItem {
  title: string;
  source: string;
  date: string;
  url?: string;
  excerpt: string;
  type: "review" | "feature" | "mention";
}

const pressItems: PressItem[] = [
  {
    title: "Sitayascharitam Mahat — Indeed!",
    source: "Narthaki",
    date: "2016-12-09",
    url: "https://narthaki.com/info/rev16/rev1978.html",
    excerpt:
      "\"This production, based on original operatic work of Tiruvaiyaru S.R. Krishnan, was beautifully tailored to give a wholesome portrayal of Ramayana, giving dimensions from significant female characters... Sitayascharitam Mahat — Great is the glory of Sita. Indeed!\"",
    type: "review",
  },
  {
    title: "World Renown Vocalists Share 3,500-Year-Old Music",
    source: "The Guardsman",
    date: "2016-01-01",
    url: "https://theguardsman.com/world-renown-vocalists-share-3500-year-old-music/",
    excerpt:
      "\"Harini Krishnan started singing and performing at age six and toured Europe and the United States in 1979 with her sisters... She is primarily a disciple of her father, Thiruvaiyaru Krishnan.\"",
    type: "feature",
  },
  {
    title: "San Diego's Indian Fine Arts Celebrates Youth",
    source: "India West",
    date: "2023-10-01",
    url: "https://indiawest.com/san-diegos-indian-fine-arts-celebrates-youth/",
    excerpt:
      "\"Chief Guest Sangita Acharya T.S.R. Krishnan was honored at the event and spoke about the organization's commitment to developing young artists and connoisseurs of Indian classical music and dance.\"",
    type: "mention",
  },
  {
    title: "Violin Duet — Hemmige V. Srivatsan & Keshavan Srivatsan",
    source: "Carnatic America",
    date: "2024-05-25",
    url: "https://carnaticamerica.com/event/violin-duet-170/",
    excerpt:
      "Father-son violin duet performance featuring Hemmige V. Srivatsan and Keshavan Srivatsan, continuing the four-generation Krishnan family musical lineage.",
    type: "mention",
  },
];

const typeLabels: Record<string, string> = {
  review: "Review",
  feature: "Feature",
  mention: "Mention",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        title="Press & Reviews"
        subtitle="Coverage, reviews, and media mentions"
      />

      <section className="px-6 py-section">
        <div className="max-w-content mx-auto">
          <div className="grid gap-6">
            {pressItems.map((item) => (
              <article
                key={item.title}
                className="border border-border-subtle rounded-sm p-6 bg-cream hover:border-saffron/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-saffron font-medium">
                    {typeLabels[item.type]}
                  </span>
                  <span className="text-xs text-ink-muted">{item.source}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <time className="text-xs text-ink-muted">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                </div>
                <h2 className="font-serif text-xl text-ink mb-3">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-saffron transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h2>
                <blockquote className="text-sm text-ink-light leading-relaxed border-l-2 border-saffron/20 pl-4 italic">
                  {item.excerpt}
                </blockquote>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-saffron hover:text-saffron-dark transition-colors"
                  >
                    Read full article &rarr;
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
