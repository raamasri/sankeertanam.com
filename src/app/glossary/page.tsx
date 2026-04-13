import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "A glossary of terms used in Carnatic music, Nama Sankeertanam, and the Vedic traditions featured on this site.",
};

interface GlossaryEntry {
  term: string;
  transliteration?: string;
  definition: string;
}

const glossary: GlossaryEntry[] = [
  {
    term: "Abhanga",
    definition:
      "A form of devotional poetry in Marathi, associated with the Varkari saints of Maharashtra such as Tukaram, Namadev, and Gnaneswar. Abhangas are sung in processions to the temple of Vitthala at Pandharpur.",
  },
  {
    term: "Ankitam",
    definition:
      "A composer's signature or pen name embedded in their compositions, identifying the work as theirs. Also called mudra.",
  },
  {
    term: "Aradhana",
    definition:
      "A commemorative celebration honoring a saint or musician, typically held on the anniversary of their passing. The Tyagaraja Aradhana at Thiruvaiyaru is the largest annual gathering of Carnatic musicians.",
  },
  {
    term: "Bhagavata",
    transliteration: "Bhāgavata",
    definition:
      "A devotee of the Lord; also one who performs or narrates from the Bhagavata Purana. A performer of Hari-Katha is often called a Bhagavatar.",
  },
  {
    term: "Bhakti",
    definition:
      "Devotion; loving surrender to God. The Bhakti movement across India emphasized personal devotion and the singing of divine names as the most accessible path to liberation.",
  },
  {
    term: "Dakshina Sampradaya",
    definition:
      "The southern tradition of Nama Sankeertanam, distinct from northern traditions. Shaped by saints including Bodhendra Saraswathi, Sridhara Ayyaval, and Marudhanallur Sadguru Swamigal in the Cauvery Delta region.",
  },
  {
    term: "Dasakam",
    transliteration: "Daśakam",
    definition:
      "A group of ten verses. The Narayaneeyam by Melpathur Narayana Bhattathiri consists of 100 Dasakams (1,034 verses total), each summarizing a portion of the Srimad Bhagavatam.",
  },
  {
    term: "Divya-dampati-vivaham",
    definition:
      "A divine wedding ceremony performed as part of the Sankeertana tradition, re-enacting the celestial marriage of a deity.",
  },
  {
    term: "Gana-Bhushanam",
    transliteration: "Gāna-Bhūṣaṇam",
    definition:
      "An honorific title meaning 'ornament of music,' bestowed on accomplished musicians.",
  },
  {
    term: "Hari-Katha",
    transliteration: "Hari-Kathā",
    definition:
      "The musical narration of divine stories from the epics and Puranas. A Hari-Katha performance weaves together narrative discourse, poetry, devotional songs, and classical music. Also known as Harikatha-kalakshepam.",
  },
  {
    term: "Jalasamadhi",
    transliteration: "Jalasamādhi",
    definition:
      "A conscious, meditative departure from life by immersion in a sacred river. Swami Haridoss Giri took Jalasamadhi in the Alaknanda river in 1994.",
  },
  {
    term: "Karnataka Sangeetam",
    transliteration: "Karnāṭaka Saṅgītam",
    definition:
      "The classical music tradition of South India, also known as Carnatic music. One of the two major systems of Indian classical music, alongside Hindustani music.",
  },
  {
    term: "Keertanam",
    transliteration: "Kīrtanam",
    definition:
      "A devotional song or hymn, typically in praise of a deity. Keertanams form the core of Nama Sankeertanam and are also a major component of the Carnatic concert repertoire.",
  },
  {
    term: "Kriti",
    transliteration: "Kṛti",
    definition:
      "A structured Carnatic music composition with three sections: pallavi (refrain), anupallavi (second section), and charanam (final verse). The primary concert form of Carnatic music.",
  },
  {
    term: "Mudra",
    transliteration: "Mudrā",
    definition:
      "A composer's signature embedded within their compositions. For example, Kumaramangalam Srinivasa-Raghavan's mudra was 'RagaSri.'",
  },
  {
    term: "Nama Sankeertanam",
    transliteration: "Nāma Saṅkīrtanam",
    definition:
      "The practice of congregational chanting of the divine names and sacred expressions of God. Considered the yuga dharma (spiritual practice of the age) for the Kali Yuga according to the Bhagavata Purana.",
  },
  {
    term: "Narayaneeyam",
    transliteration: "Nārāyaṇīyam",
    definition:
      "A 1,034-verse devotional poem in Sanskrit by Melpathur Narayana Bhattathiri (16th century), summarizing the Srimad Bhagavatam. Composed at the Guruvayur temple in Kerala.",
  },
  {
    term: "Parampara",
    transliteration: "Paramparā",
    definition:
      "An unbroken chain of knowledge transmission from guru to disciple. The fundamental mode of preserving and passing on spiritual and artistic traditions in India.",
  },
  {
    term: "Raga",
    transliteration: "Rāga",
    definition:
      "A melodic framework in Indian classical music, defined by specific ascending and descending note patterns, characteristic phrases, and an emotional mood. There are hundreds of ragas in the Carnatic system.",
  },
  {
    term: "Sangeeta Acharya",
    transliteration: "Saṅgīta Ācārya",
    definition:
      "An honorific title meaning 'master teacher of music.' Awarded to Thiruvaiyaru S R Krishnan in 2008 by the Indian Fine Arts Academy, USA.",
  },
  {
    term: "Sangeeta Kalanidhi",
    transliteration: "Saṅgīta Kalānidhi",
    definition:
      "The highest honor in Carnatic music, conferred annually by The Music Academy, Madras. Literally 'treasure of the art of music.'",
  },
  {
    term: "Vakgeyakara",
    transliteration: "Vāggeyakāra",
    definition:
      "A musician-composer who both writes the lyrics (vak) and sets them to music (geya). The highest designation for a Carnatic composer. Both Krishnan and his father hold this title.",
  },
  {
    term: "Yuga Dharma",
    transliteration: "Yuga Dharma",
    definition:
      "The prescribed spiritual practice for a particular cosmic age. For the Kali Yuga (the present age), the yuga dharma is Nama Sankeertanam — the chanting of the divine names.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        title="Glossary"
        subtitle="Terms from the world of Carnatic music, Nama Sankeertanam, and Vedic tradition"
      />

      <section className="px-6 py-section">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {glossary.map((entry) => (
              <div
                key={entry.term}
                id={entry.term.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                <h3 className="font-serif text-lg text-ink">
                  {entry.term}
                  {entry.transliteration && (
                    <span className="text-sm text-ink-muted font-sans ml-2">
                      ({entry.transliteration})
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-ink-light leading-relaxed">
                  {entry.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
