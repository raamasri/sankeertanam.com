import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Lineage & Parampara",
  description:
    "The spiritual and musical lineage of Thiruvaiyaru S R Krishnan — from Swami Gnanananda Giri and Gana-Bhushanam RagaSri through four generations of musicians.",
};

interface LineageNode {
  name: string;
  title?: string;
  detail: string;
  era?: string;
  highlight?: boolean;
}

const spiritualLineage: LineageNode[] = [
  {
    name: "Swami Gnanananda Giri",
    title: "Spiritual Master",
    detail:
      "Revered sage of Thapovanam near Thiruvannamalai. Root guru of the lineage.",
  },
  {
    name: "Swami Haridoss Giri",
    title: "Guruji",
    detail:
      "Chief disciple of Gnanananda Giri. Spread Dakshina Sampradaya Namasankeertanam across India and the world. Built the Panduranga Temple at Thennangur. Took Jalasamadhi in 1994.",
    era: "Thennangur, Tamil Nadu",
  },
  {
    name: "Thiruvaiyaru S R Krishnan",
    title: "Sangita Acharya",
    detail:
      "Performing Nama Sankeertanam and Hari-Katha since 1959 under Guruji's guidance. Carries the tradition across four continents.",
    highlight: true,
  },
];

const musicalLineage: LineageNode[] = [
  {
    name: "Gana-Bhushanam Brahmasri Kumaramangalam Srinivasa-Raghavan",
    title: "Vakgeyakara · Mudra: 'RagaSri'",
    detail:
      "20th-century composer and musician. Father and first guru of Krishnan. The YouTube channel 'Ragasri' is named in tribute to his compositional mudra.",
  },
  {
    name: "Thiruvaiyaru S R Krishnan",
    title: "Sangita Acharya",
    detail:
      "Performing since 1955. Also trained under Maharajapuram Viswanatha Iyer, Madurai Mani Iyer, and GN Balasubramaniam.",
    highlight: true,
  },
  {
    name: "The Krishnan Sisters",
    title: "Priya · Harini · Subhapriya",
    detail:
      "Touring internationally since 1979. Known as the 'California Sisters' in India. Acclaimed Carnatic vocalists settled in the San Francisco Bay Area.",
  },
  {
    name: "The Fourth Generation",
    title: "Kaanchana · Shankara · Janani · Abhaya · Raama · Keshavan · Hari",
    detail:
      "The children of all three Krishnan Sisters: Priya's children Kaanchana and Shankara; Harini's daughters Janani Krishnan-Jha and Abhaya Krishnan-Jha; and Subhapriya's sons Raama Srivatsan, Keshavan Srivatsan, and Hari Srivatsan — trained in Carnatic music and carrying the tradition into its fourth generation.",
  },
];

function LineageTree({ nodes, label }: { nodes: LineageNode[]; label: string }) {
  return (
    <div className="mb-16 last:mb-0">
      <h2 className="font-serif text-2xl text-ink mb-8">{label}</h2>
      <div className="relative pl-8 border-l-2 border-saffron/30">
        {nodes.map((node, i) => (
          <div key={node.name} className="relative mb-10 last:mb-0">
            <span
              className={`absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full border-2 ${
                node.highlight
                  ? "bg-saffron border-saffron"
                  : "bg-cream border-saffron/40"
              }`}
            />
            {i < nodes.length - 1 && (
              <svg
                className="absolute -left-[calc(2rem-2px)] top-4 text-saffron/30"
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 0v14m0 0l-4-4m4 4l4-4" />
              </svg>
            )}
            <div
              className={`p-5 rounded-sm border transition-colors ${
                node.highlight
                  ? "bg-saffron/5 border-saffron/20"
                  : "bg-cream border-border-subtle"
              }`}
            >
              <h3 className="font-serif text-lg text-ink leading-snug">
                {node.name}
              </h3>
              {node.title && (
                <p className="text-xs uppercase tracking-widest text-saffron font-medium mt-1">
                  {node.title}
                </p>
              )}
              {node.era && (
                <p className="text-xs text-ink-muted mt-1">{node.era}</p>
              )}
              <p className="text-sm text-ink-light mt-2 leading-relaxed">
                {node.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LineagePage() {
  return (
    <>
      <PageHeader
        title="Lineage & Parampara"
        subtitle="The spiritual and musical lines of transmission"
      />

      <section className="px-6 py-section">
        <div className="max-w-3xl mx-auto">
          <p className="text-body text-ink-light mb-12 max-w-2xl">
            In the Indian tradition, knowledge is transmitted through{" "}
            <em>parampara</em> &mdash; an unbroken chain of guru and disciple.
            Thiruvaiyaru S R Krishnan stands at the intersection of two such
            chains: a spiritual lineage rooted in the Sankeertana tradition,
            and a musical lineage now spanning four generations.
          </p>

          <LineageTree
            nodes={spiritualLineage}
            label="Spiritual Lineage"
          />
          <LineageTree
            nodes={musicalLineage}
            label="Musical Lineage"
          />
        </div>
      </section>
    </>
  );
}
