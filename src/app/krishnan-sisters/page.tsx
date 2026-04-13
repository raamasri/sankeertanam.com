import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "The Krishnan Sisters",
  description:
    "Priya, Harini, and Subhapriya — the Krishnan Sisters (California Sisters), acclaimed Carnatic musicians trained by their father Thiruvaiyaru S R Krishnan.",
};

const sisters = [
  {
    name: "Priya Krishnan Parameswaran",
    detail:
      "The eldest of the three sisters, Priya is a Carnatic vocalist and a key force in bringing the family's musical traditions to new audiences. She was instrumental in co-producing the 2016 Bay Area staging of Sitayascharitam Mahat, her father's operatic retelling of the Ramayana, at Foothill College in Los Altos — supported by the Asian Art Museum of San Francisco. Her children, Kaanchana and Shankara, carry forward the family's artistic traditions.",
  },
  {
    name: "Harini Krishnan Vikas",
    detail:
      "Harini began singing and performing at the age of six and toured Europe and the United States with her sisters in 1979. She grew up in Europe during her early school years and received advanced training under the eminent musicologist Dr. S. Ramanathan, in addition to her foundational training under her father. She is an accomplished Carnatic vocalist, performer, and lecturer on South Indian classical music based in the San Francisco Bay Area. Her daughters, Janani Krishnan-Jha and Abhaya Krishnan-Jha, represent the next generation of the family.",
  },
  {
    name: "Subhapriya Krishnan Srivatsan",
    detail:
      "Subhapriya performs in both Carnatic and Hindustani styles, a versatility that reflects the breadth of her training under both parents — Radha and Thiruvaiyaru Krishnan. She currently serves as President of LOTUS, a Bay Area Carnatic music organization. She is married to Hemmige Srivatsan, a renowned vocalist and violinist. Their three sons — Raama Srivatsan, Keshavan Srivatsan, and Hari Srivatsan — are trained in Carnatic music, making theirs a four-generation musical lineage.",
  },
];

export default function KrishnanSistersPage() {
  return (
    <>
      <PageHeader
        title="The Krishnan Sisters"
        subtitle="Priya, Harini, and Subhapriya — internationally acclaimed Carnatic musicians"
      />

      <article className="px-6 py-section">
        <div className="prose max-w-article mx-auto">
          <p>
            Known as the <strong>&lsquo;Krishnan Sisters&rsquo;</strong> in
            Europe and the United States, and the{" "}
            <strong>&lsquo;California Sisters&rsquo;</strong> in India,{" "}
            <strong>
              Priya Krishnan Parameswaran, Harini Krishnan Vikas, and
              Subhapriya Krishnan Srivatsan
            </strong>{" "}
            are the prime disciples and daughters of Sangita Acharya
            Thiruvaiyaru S R Krishnan and Radha Krishnan.
          </p>

          <p>
            The three sisters began touring internationally as children in
            1979, performing Carnatic music across Europe and the United States.
            Trained from birth by their father in the traditions of Karnataka
            Sangeetam and Nama Sankeertanam, they are accomplished vocalists
            who have performed in prestigious venues across four continents.
            All three are settled in the San Francisco Bay Area, California.
          </p>

          <hr />

          {sisters.map((sister) => (
            <div key={sister.name}>
              <h2>{sister.name}</h2>
              <p>{sister.detail}</p>
            </div>
          ))}

          <hr />

          <h2>The Fourth Generation</h2>

          <p>
            The musical lineage now extends to a fourth generation. Each of the
            three sisters has children who carry the family&rsquo;s traditions
            forward: Priya&rsquo;s children{" "}
            <strong>Kaanchana</strong> and <strong>Shankara</strong>;
            Harini&rsquo;s daughters{" "}
            <strong>Janani Krishnan-Jha</strong> and{" "}
            <strong>Abhaya Krishnan-Jha</strong>; and Subhapriya&rsquo;s sons{" "}
            <strong>Raama Srivatsan</strong>,{" "}
            <strong>Keshavan Srivatsan</strong>, and{" "}
            <strong>Hari Srivatsan</strong>, who are trained in Carnatic music
            under both their parents.
          </p>

          <p>
            This four-generation arc &mdash; from{" "}
            <em>Gana-Bhushanam</em> Kumaramangalam Srinivasa-Raghavan
            (RagaSri) through Krishnan, through the Sisters, to their children
            &mdash; is a living embodiment of the <em>parampara</em> tradition
            that sustains Indian classical music.
          </p>

          <div className="mt-8">
            <Link
              href="/lineage"
              className="text-saffron hover:text-saffron-dark transition-colors"
            >
              View the full lineage &rarr;
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
