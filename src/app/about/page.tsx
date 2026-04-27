import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography of Sangita Acharya Thiruvaiyaru S R Krishnan — Vakgeyakara, Vedic scholar, composer, and exponent of Nama Sankeertanam.",
};

const tocEntries = [
  { id: "intro", label: "Introduction" },
  { id: "acharyas-and-patrons", label: "Ach\u0101ry\u0101s & Patrons" },
  { id: "the-legacy", label: "Krishnan\u2019s Legacy" },
  { id: "kanchi-paramacharya", label: "Kanchi Paramacharya" },
  { id: "sitayascharitam-mahat", label: "Sit\u0101y\u0101scaritam Mahat" },
  { id: "theater-and-composition", label: "Theater & Compositions" },
  { id: "recognition", label: "Recognition" },
  { id: "radha-krishnan", label: "Radha Krishnan" },
  { id: "disciples-and-families", label: "Disciples & Music Families" },
  { id: "krishnan-siblings", label: "Krishnan Siblings" },
  { id: "beyond-music", label: "Beyond Music" },
  { id: "the-written-word", label: "The Written Word" },
  { id: "sat-sangam", label: "Sat-Sangam Discourses" },
  { id: "key-dates", label: "Key Dates" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="The life and legacy of Sangita Acharya Thiruvaiyaru S R Krishnan"
      />

      <article className="px-6 py-section">
        <div className="max-w-6xl mx-auto flex gap-10">
          <div className="w-40 flex-none self-start">
            <TableOfContents entries={tocEntries} />
          </div>
          <div className="prose max-w-article flex-1 min-w-0">
          <div className="w-full max-w-2xl mx-auto mb-12">
            <img
              src="/images/site/rs_09230.jpg"
              alt="Thiruvaiyaru S R Krishnan"
              className="w-full rounded-sm shadow-lg"
            />
          </div>

          <h1 id="intro" className="scroll-mt-24">Sangeetha Acharya Thiruvaiyaru S R Krishnan</h1>

          <p>
            <strong>Srinivasa Raghava Krishnan</strong>, aka, Sangeetha Acharya
            Thiruvaiyaru S R Krishnan (&ldquo;Krishnan&rdquo;) was born in
            Thiruvaiyaru, in Tamil Nadu, India, well-known due Saint Tyagaraja,
            the 18th Century composer, foremost amongst the Trinity of Karnataka
            Sang&icirc;tam.
          </p>

          <p>
            Krishnan is a Vedic scholar, V&atilde;kg&egrave;yak&atilde;ra,
            lyricist, composer, poet, journalist, spiritual writer, novelist,
            operatic playwright, and until recently an international fiduciary
            for several decades.
          </p>

          <hr />

          <h2 id="acharyas-and-patrons" className="scroll-mt-24">
            Ach&atilde;ry&atilde;s and Patrons
          </h2>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <img
              src="/images/site/krishnan_young_veena.png"
              alt="Young Krishnan with the veena"
              className="w-full rounded-sm shadow-lg"
            />
            <p className="text-sm text-ink-muted text-center mt-2 italic">
              1972, SK with Veena
            </p>
          </div>

          <p>
            Krishnan started training in Karnataka Sang&icirc;tam very young,
            under the tutelage of his father{" "}
            <em>G&atilde;na-Bh&ucirc;sha&#x1E47;am</em> Kum&atilde;ramangalam
            Srinivasa-Raghavan (KSR), a 20th century V&atilde;kg&egrave;yak&atilde;ra
            (musician-composer with mudra or signature,
            &lsquo;RagaSri&rsquo;). RagaSri compositions (in several Indian
            languages) number more than three hundred, blessed by HH Kanchi
            Paramacharya, Sri Chandrasekharendra Saraswati (aka
            Maha-Periav&atilde;) and applauded by contemporaries such as Tamiz
            Isaimani Adi-Seshayya, Tiruppugazh &lsquo;Appa&rsquo; (retired
            Chief Justice TM Krishnaswamy Iyer), Mahar&atilde;japuram
            Viswanatha Iyer, G N Balasubramaniam, and Maragatam amma (aka
            Aandavan Pichai).
          </p>

          <div className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-3 gap-4">
            <div>
              <img
                src="/images/site/ksr_military_portrait.png"
                alt="Gana-Bhushanam KSR (RagaSri) — an early portrait"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                KSR, RAF Pilot Officer, 1941
              </p>
            </div>
            <div>
              <img
                src="/images/site/ksr_squadron_leader.png"
                alt="KSR in uniform"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                Sq. Leader KSR, 1944
              </p>
            </div>
            <div>
              <img
                src="/images/site/ksr_with_spitfire.png"
                alt="KSR during his years of service"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                KSR, 1945, RAF
              </p>
            </div>
          </div>

          <p>
            KSR (RagaSri) translated all the 100 dasakams of Sriman
            Narayaneeyam into Tamil verses (in identical metrical formats)
            &mdash; which will soon be curated for digital preservation for
            posterity. Many of RagaSri&rsquo;s compositions on Lord
            Subrahmanya, Par&atilde;&#x015B;akti, Lord Krishna /
            Guruvayurappan were performed by Krishnan and his sister Bhooma
            Narayanan (aka Bhooma Srinivasa Raghavan), as offerings at the feet
            of Kanchi Paramacharya Sri Chandrasekharendra Saraswati in the
            1950s and 1960s. Krishnan also learned several rare compositions
            from legendary musicians, Sangeeta Kal&atilde;nidh&icirc;s
            Mahar&atilde;japuram Viswanatha Iyer, G.N. Balasubramaniam and
            Madurai Mani Iyer.
          </p>

          <p>
            Krishnan debuted in 1955 as a musician and since then has given
            numerous concerts in prestigious venues in India, Great Britain,
            Europe, Far East Asia, and the United States, accompanied by
            acclaimed instrumental musicians many of whom have later become
            legends in the world of Karnataka Sang&icirc;tam (Carnatic Music).
          </p>

          <hr />

          <h2 id="the-legacy" className="scroll-mt-24">Krishnan&rsquo;s Legacy</h2>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <img
              src="/images/site/family_sankeertanam_gathering.png"
              alt="A Sankeertanam gathering — left to right: VVS, Krishnan, Bhooma, and Vinayakaram"
              className="w-full rounded-sm shadow-lg"
            />
            <p className="text-sm text-ink-muted text-center mt-2 italic">
              1956, With Sri Adiseshayya
            </p>
          </div>

          <p>
            Krishnan is a celebrated exponent of{" "}
            <strong>Nama Sankeertanam &amp; Hari-Katha</strong>, two of the
            hoary musical and spiritual traditions of Bharat, which have been
            handed down to eminent disciples by great saints over the last ten
            centuries to the present-day purveyors of these exalted traditions.
          </p>

          <p>
            Hailing from a family of Bhagavatas, Krishnan has performed these
            ancient and divine forms of musical presentation for over six
            decades in hundreds of venues in four continents. His Gurus in
            this tradition included his father Brahmasri KSR, Brahmasri
            Nathamuni Narayana Iyengar (N&atilde;&#x1E47;&atilde;ji),
            Bhagavata-Sir&oacute;ma&#x1E47;i Narayana Sastri
            (abhanga-siromani), and HH Swami-Haridoss-Giri (popularly known as
            Guruji), a legendary name in this tradition with whom Krishnan had
            performed numerous Sankeertanams and
            &ldquo;divya-dampat&icirc;-viv&atilde;ham(s)&rdquo; since 1959.
            Krishnan&rsquo;s performance with Guruji in 1990 in the US can be
            seen on YouTube.
          </p>

          <p>
            Swami Haridoss Giri, the chief disciple of HH Swami Gnanananda
            Giri of Tap&oacute;vanam, a holy town in India, was adept in Sri
            Vidya worship; Guruji was instrumental in spreading the great
            tradition &mdash;{" "}
            <strong>
              Dakshina Bharata Sampradaya N&atilde;masankeertanam
            </strong>{" "}
            &mdash; throughout India and across two dozen countries in the
            world to hundreds of millions of spiritual followers. Guruji
            established the Panduranga Temple dedicated to Vitthala in
            Thennangur, southern India and had traveled globally, performing
            Harikatha on the Srimad Bh&atilde;gavatam, Devi Bhagavatam,
            Bhagavad Gita, and Ramayana.
          </p>

          <hr />

          <h2 id="kanchi-paramacharya" className="scroll-mt-24">A Disciple of Kanchi Paramacharya</h2>

          <p>
            A disciple of His Holiness Maha-Periav&atilde;, Krishnan continued
            training in the Vedas and scriptures in Sanskrit College, Madras,
            as part of a program conducted under the auspices of Kanchi
            Param&atilde;ch&atilde;rya. Krishnan wrote a book (in Tamil) on
            Maha-Periav&atilde; and more information on this book can be seen
            elsewhere in this write up.
          </p>

          <hr />

          <h2 id="sitayascharitam-mahat" className="scroll-mt-24">
            &ldquo;Sit&atilde;y&atilde;scaritam Mahat&rdquo; (Triveni Ramayan)
          </h2>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <img
              src="/images/site/krishnan_chief_justice_1965.png"
              alt="1965, Sir CPR Iyer, Triveni Ramayanam"
              className="w-full rounded-sm shadow-lg"
            />
            <p className="text-sm text-ink-muted text-center mt-2 italic">
              1965, Sir CPR Iyer, Triveni Ramayanam
            </p>
          </div>

          <p>
            Krishnan&rsquo;s earliest opera (debuted in 1966) &mdash; a
            musical in three languages, with poems and passages compiled from
            Sri Valmiki Ramayanam, Kampan&rsquo;s
            R&atilde;m&atilde;vat&atilde;ram, and Goswami Tulsi&rsquo;s Ram
            Carit Manas &mdash; titled{" "}
            <em>&ldquo;Sit&atilde;y&atilde;scaritam Mahat&rdquo;</em>, was set
            to musical score by Sangeeta Kalanidhi
            Mudiko&#x1E47;&#x1E0D;&atilde;n Ve&#x1E47;ka&#x1E6D;ar&atilde;ma
            Iyer and Padma Bhushan Musiri Subrahmanya Iyer and choreographed by
            Padma Bhushan Dr. V. Raghavan. The opera, blessed by Kanchi
            Param&atilde;ch&atilde;rya, debuted in 1965 and was acclaimed
            widely and honored by Sir C.P. Ramaswamy Iyer.
          </p>

          <p>
            Fifty years later, in late 2016, the opera was revived by Smt.
            Priya Krishnan Parameswaran and Dr. Parameswaran Gopi, completely
            reset to English dialogues to communicate with a western theatrical
            audience, staged at the Lohman Theatre, in San Francisco,
            California, and supported by the Asian Art Museum of San Francisco.
            The neo production of the opera retold the Epic of Ramayana through
            the lens of Sita, the Epitome of Virtue, juxtaposed to other
            characters including the bewildered Kaikeyi, the wretched Manthara,
            the vile S&ucirc;rpanakh&atilde;, and the sagacious
            Trija&#x1E6C;&atilde;, many of the principal characters of the
            Epic, Srimad Ramayana. Krishnan&rsquo;s daughter Priya Krishnan
            Parameswaran was the music director and co-producer with Dr.
            Parameswaran Gopi.
          </p>

          <hr />

          <h2 id="theater-and-composition" className="scroll-mt-24">
            Theater, Compositions, Recordings &amp; Ongoing Spiritual Work
          </h2>

          <p>
            A thespian since his collegiate years, Krishnan was invited to the
            prestigious National Festivals in Ujjain to play leading roles in
            many of Mahakavi Kalidasa&rsquo;s famed literary works. He has acted
            and directed plays in Indian languages, and his theatrical
            expositions have won acclaim in the Indian news media and awards
            from the internationally acclaimed Educational Trust, Bharatiya
            Vidya Bhavan. Krishnan also wrote, and composed to music, yet
            another musical/opera, &ldquo;Saranam Aiyappa&rdquo; on the Lord of
            Sabarimala with his own lyrics in five Indian languages.
          </p>

          <p>
            His performances for over 50 years in various continents have been
            primarily on divine subjects and rare compositions, including
            Abhang-Sankeertan, Srimad Ramayanam, Srimad Bhagavatam,
            N&atilde;l&atilde;yira-Divya-Prabhandam, Tiruppavai and
            G&oacute;d&atilde;-Prabh&atilde;vam, Saint Tyagaraja&rsquo;s
            R&atilde;m&atilde;yanam, Krishna Leela Tarangini, Tulsi-Ramayan
            (Ram Charit Manas), Bhadr&atilde;chala Ramadasa, Gopalakrishna
            Bharati &mdash; just to name a few. Krishnan has to his credit
            numerous music compositions in several languages including Sanskrit,
            Telugu, Tamil, Kannada, and Hindi. His music performances on the
            Musical Saints of India series (1990&ndash;2010) were popular, and
            Krishnan has performed globally for numerous fundraisers for Hindu
            temples, charitable causes, and divine missions.
          </p>

          <p>
            He has hundreds of live audio/video recordings available free online
            (through this website) and across two dedicated YouTube channels,{" "}
            <a
              href="https://www.youtube.com/@gurubhakti-tsrk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GuruBhakti
            </a>{" "}
            and{" "}
            <a
              href="https://www.youtube.com/@ragasri-narasimhan51"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ragasri
            </a>
            . Sri S. Lakshminarasimhan co-contributes and manages (from India)
            the Ragasri channel, which was named in tribute to their
            father&rsquo;s compositional signature. Among the most significant
            bodies of work on these two channels are (1) the complete{" "}
            <strong>Krishna Leela Tarangini</strong> (84 episodes) in Hari-Katha
            style and (2) the{" "}
            <strong>Sriman N&atilde;r&atilde;ya&#x1E47;eeyam</strong> series, a
            musical rendition of all the Dasakams of
            M&emacr;lputt&ucirc;r Narayana Bhattathiri&rsquo;s 1034-verse
            devotional poem which summarizes Srimad Bhagavatam. Every one of
            these hourly episodes &mdash; Tarangini or
            N&atilde;r&atilde;ya&#x1E47;eeyam &mdash; is a scholarly production
            and visual treat in HD-4K digital format. These YouTube channels are
            consciously kept as non-monetized channels &mdash; to promote
            Bhakti, and Sanatana Dharma concepts and scriptures with zero
            motivation towards any material advantage.
          </p>

          <hr />

          <h2 id="recognition" className="scroll-mt-24">Recognition</h2>

          <p>
            Krishnan was awarded the title of{" "}
            <strong>&lsquo;Sangeeta Acharya&rsquo;</strong> in 2008 by the
            Indian Fine Arts Academy (&ldquo;IFAA&rdquo;), United States of
            America, and was also recognized, in 2017, with the{" "}
            <strong>Lifetime Achievement Award</strong>, for his musical and
            artistic contributions to Indian Music over 60 years. He has been
            the patron Chief Guest at IFAA&rsquo;s annual and North American
            Youth festivals since inception (2008), and has contributed more
            than two dozen scholarly articles on various topics to IFAA&rsquo;s
            festival souvenirs, a sustained intellectual contribution. These
            souvenirs are shared with scores of US and international libraries
            and universities as educational material for their Indology students
            pursuing world music and arts.
          </p>

          <hr />

          <h2 id="radha-krishnan" className="scroll-mt-24">Radha Krishnan</h2>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <img
              src="/images/site/img_4570.jpg"
              alt="Krishnan and Radha"
              className="w-full rounded-sm shadow-lg"
            />
          </div>

          <p>
            Krishnan&rsquo;s wife <strong>Radha</strong>, a retired banker from
            the Reserve Bank of India, has been a musicologist. In 1966 &mdash;
            at a time when women mountaineers in India were exceptionally rare
            &mdash; she climbed one of the peaks of the Himalayas under training
            from Sherpa Tenzing Norgay, the record-holding pioneer who had
            conquered the summit of Mt. Everest just thirteen years earlier with
            Edmund Hillary. She was awarded the Silver Axe by the Chief of Army
            Staff in 1966 for her feat as a pioneering woman mountaineer.
          </p>

          <p>
            Krishnan and Radha, with their daughters (Priya, Harini, and
            Subhapriya &mdash; the Krishnan Sisters, the celebrated musicians),
            are involved in several philanthropic activities. Krishnan&rsquo;s
            music performances have been fundraisers for charities and
            philanthropy, and their recordings supplement the Krishnans&rsquo;
            support to various charities, homes for the mentally and physically
            challenged, and hospitals for the underprivileged.
          </p>

          <hr />

          <h2 id="disciples-and-families" className="scroll-mt-24">
            Disciples and Music Families
          </h2>

          <p>
            Krishnan has been teaching Karnataka Sang&icirc;tam for more than
            60 years in four continents and has scores of disciples in India,
            France, England, and in the United States, where he settled with
            his family in the 1980s.
          </p>

          <p>
            Many of his disciples in California (for music and spiritual
            followership) are accomplished musicians, institutional organizers
            and spiritual propagators in addition to being great achievers in
            their chosen fields of profession. To mention a few: (Chinmaya)
            Acharya Mahadevan-ji, Dr. Rukmini Raghunathan, MD., Professor R.
            Jayakrishnan (UCI), Dr. Hari Asuri, Dr. Parameswaran Gopi, Dr.
            Kodumudi S. Radhakrishnan, Dr. Shekar Viswanathan, Professor K R
            Subramanyam (USC), Sri Radhakrishnan Ramachandran and Sri Narayanan
            Srinivasan. Scores of popular musicians and music teachers from
            California and overseas &mdash; such as Pt. Vivek Datar, Pt. Ravi
            Gutala, Sankara Subramaniyam, G Srinivasan, Arjun Narayanan &mdash;
            have been accompanying Krishnan for more than 30 years, as musicians
            in their own right and as disciples and Krishnan family.
          </p>

          <p>
            Krishnan&rsquo;s daughters/disciples,{" "}
            <strong>
              Priya Krishnan Parameswaran, Harini Krishnan Vikas, and Subhapriya
              Krishnan Srivatsan
            </strong>
            , are acclaimed Carnatic musicians settled in the San Francisco Bay
            Area. Known as the &lsquo;Krishnan Sisters&rsquo; in Europe and the
            United States, and the &lsquo;California Sisters&rsquo; in India,
            the three began performing very young on AIR and Doordarshan, also
            touring internationally very young, releasing their first classical
            music album in 1982. The sisters had their initial training from
            their mother, Radha Krishnan, and were also trained under the
            eminent musicologist Dr. S. Ramanathan.
          </p>

          <p>
            <strong>Priya</strong> has been a writer, co-producer and co-director
            of several musicals, theatrical productions primarily from Valmiki
            Ramayana, Ram Charit Manas, Abhang-Sants and Varkari traditions and
            Devi Bhagavatam. Her Soundarya Lahari musicals and spiritual
            recitational teaching over YouTube have earned a large following of
            fans and devotees. She is also a Vainik and teaches vocal and
            instrumental classical music to a select few and runs a Samskriti
            group known as Siksha.
          </p>

          <p>
            <strong>Harini</strong> has been very active in the US political
            arena for more than a decade. She is the nationally acclaimed
            Democratic Community Organizer mobilizing South Asian &amp; AAPI,
            holding high offices in DNC, such as chair or co-chair of SAFA and
            AAPI. Her prime goal is to organize and motivate the
            citizens-at-large to bring about positive change in governance and
            public attitudes to help resurrect morality in governance, and
            respect and leadership of the US in the global arena. She is also
            active in the Indian music scene, invited by universities and
            state-wide art organizations for judging in music and arts
            competitions.
          </p>

          <p>
            <strong>Subhapriya</strong> is a renowned Indian Carnatic classical
            vocalist, guru, and musicologist. A versatile artist for over 30
            years, she performs both in Karnataka Sang&icirc;tam and Hindustani
            Bhakti Sang&icirc;tam. Subhapriya has been a founder member and
            principal coordinator of SVLOTUS for over 25 years and conducts
            regular workshops on classical music and spirituality and on
            Vishisht&atilde;dvaita concepts and scriptures. She collaborates as
            a music educator, curator of concerts and music festivals &mdash;
            along with her husband, Vidw&atilde;n Hemmige V. Srivatsan, a
            well-known violinist and vocalist (and disciple of Sangita
            Kalanidhi, Palghat Sri K V Narayanaswamy). Subhapriya is a mentor
            to the current generation of organic youth, teaching Karnataka
            Sang&icirc;tam and scriptural knowledge, and leading the spiritual
            organization SGM (Sad&atilde;c&atilde;ra Gny&atilde;na
            Ma&#x1E47;&#x1E0D;ali).
          </p>

          <p>
            While the sisters are highly academically qualified and well-known
            in their own chosen profession and pursuits, music has been their
            mainstay and hallmark. Their hoary music tradition now extends to the
            fourth generation through their children, all of whom are vocal and
            instrumental musicians, well-versed in Indian and other systems of
            global music with proficiency and acclaim.
          </p>

          <hr />

          <h2 id="krishnan-siblings" className="scroll-mt-24">Krishnan Siblings</h2>

          <div className="w-full max-w-2xl mx-auto mb-8">
            <img
              src="/images/site/krishnan_siblings_childhood.png"
              alt="The Krishnan siblings as children — left to right: VVS, Krishnan, Bhooma, and Vinayakaram"
              className="w-full rounded-sm shadow-lg"
            />
            <p className="text-sm text-ink-muted text-center mt-2 italic">
              With VVS and Vikku, 1956
            </p>
          </div>

          <p>
            Krishnan&rsquo;s sisters, Smt. Ramamani Ranganathan and Smt.
            Bhooma-Narayanan, and brothers, Sri S. Lakshminarasimhan (aka
            Ragasri &lsquo;Narasimhan&rsquo;) and
            &lsquo;Yog&atilde;ch&atilde;ry&atilde;&rsquo; Sri S. Sridharan,
            continue the family&rsquo;s Sankeertanam tradition in Chennai,
            India. Smt. Ramamani Ranganathan continues to train devotees in the
            Stotra recitation tradition in Hyderabad; Smt. Bhooma-Narayanan,
            Sri Sridharan and Sri Narasimhan, based in Chennai, carry forward
            the holy Nama-Sankeertana tradition originally led by Guru,
            P&ucirc;jya &#x015A;ri Nathamuni Narayana Iyengar, a tradition now
            sustained for about 75 years. The sisters are retired public
            servants, and the brothers are retired bankers.
          </p>

          <p>
            <strong>Ragasri Narasimhan</strong> is a vocalist and equally
            proficient in Harmonium and electronic Keyboard; he is the principal
            singer and curator of many of RagaSri&rsquo;s compositions,
            digitally preserving them in the{" "}
            <a
              href="https://www.youtube.com/@ragasri-narasimhan51"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ragasri
            </a>{" "}
            channel for more than a decade. <strong>Sri S. Sridharan</strong> is
            an internationally acclaimed Yoga-Acharya and Vice President of the
            Indian Yoga Association.
          </p>

          <hr />

          <h2 id="beyond-music" className="scroll-mt-24">Beyond Music</h2>

          <div className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-2 gap-4">
            <div>
              <img
                src="/images/site/jimmy_carter_1978.png"
                alt="Jimmy Carter, 1978"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                Jimmy Carter, 1978
              </p>
            </div>
            <div>
              <img
                src="/images/site/carter_buchwald_1978.png"
                alt="1978, With Pres. Carter & Buchwald"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                1978, With Pres. Carter &amp; Buchwald
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-2 gap-4">
            <div>
              <img
                src="/images/site/president_clinton_2000.png"
                alt="President Clinton, 2000"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                President Clinton, 2000
              </p>
            </div>
            <div>
              <img
                src="/images/site/clinton_2000_collage.png"
                alt="President Clinton, 2000 — Collage"
                className="w-full rounded-sm shadow-lg"
              />
              <p className="text-xs text-ink-muted text-center mt-2 italic">
                President Clinton, 2000 &mdash; Collage
              </p>
            </div>
          </div>

          <p>
            Krishnan, a gold medalist from University of Madras, one of the
            three oldest and renowned universities of India, had the distinction
            of becoming one of the youngest Fellows of the Royal Chartered
            Institute of Bankers (London), an Incorporated Certified Accountant,
            UK (ICA) and a Fellow of the Institute of Financial Accountants
            (London), when he was in his early thirties. Krishnan was one of the
            top rankers (Banking Law) in global ranking, published in{" "}
            <em>The Times</em> before his elevation to the highest Royal
            Fellowship.
          </p>

          <p>
            Krishnan has been a banker since 1965, initially with Reserve Bank
            of India and then with State Bank of India. He then held senior
            executive positions in international banks in Europe, Great Britain,
            and the United States. He has widely traveled the globe since 1978.
            He was one of the two co-founders and principal of two reputed US
            fiduciary and consulting corporations, which served for more than
            thirty years as court-appointed fiduciaries at the nomination of
            several US federal and state agencies, governmental regulators, and
            banks &mdash; also, as banking advisor to select regulators of
            foreign governments. Krishnan retired in 2023 as CEO and Chairman of
            those firms. Krishnan also served, until 2023, as the Special Deputy
            Commissioner of the California Department of Financial Protection
            and Innovation.
          </p>

          <hr />

          <h2 id="the-written-word" className="scroll-mt-24">The Written Word</h2>

          <p>
            Beyond the long banking and fiduciary career, music, and spiritual
            pursuits, Krishnan has been a prolific writer since he was 20 years
            of age. As a young aspirant, he contributed first as a journalist
            and then became a spiritual writer. Many of his short stories were
            published in weeklies and monthly magazines. Many of his operatic
            and scholarly articles &mdash; exploring the lives of musical
            saints, the philosophical traditions of Bhakti, and the history and
            current attitudes in Indian Music &mdash; have been published for
            decades, forming a body of work that spans varied subjects from
            Saint Tyagaraja and Narayana Teertha to Ramayana and Mahabharata
            and the legacy of Mahatma Gandhi, to mention a few. Some of them
            can be found in this website under the section titled Articles.
          </p>

          <p>
            His latest spiritual book (published in 2024 by the acclaimed GIRI
            Publishers, India) is a memoir on his direct personal interactions
            with HH Paramacharya Chandrasekharendra Saraswati (for over a
            decade in the 1950s and 1960s) &mdash; titled{" "}
            <em>
              &lsquo;Periav&atilde;
              K&atilde;laDiyilirundu&rsquo;
            </em>{" "}
            (from under the holy feet of the Acharya) &mdash; and was well
            received. He is currently working on its English translation for the
            book release in the third quarter of 2026. Krishnan is also working
            on his corporate and personal/musical memoirs and other spiritual
            books for 2026&ndash;2027 releases, God willing.
          </p>

          <hr />

          <h2 id="sat-sangam" className="scroll-mt-24">
            Sat-Sangam Discourses (2020&ndash;2026)
          </h2>

          <p>
            For more than six years, Krishnan has been giving weekly musical
            discourses (Hari Katha) &mdash; divine lectures/pravacanam &mdash;
            through online streaming sessions. Scores of families from India and
            the US regularly dial in and all those live sessions are posted
            (after the live-streaming) to one of the two YouTube channels
            dedicated for this purpose ({" "}
            <a
              href="https://www.youtube.com/@gurubhakti-tsrk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GuruBhakti
            </a>{" "}
            and{" "}
            <a
              href="https://www.youtube.com/@ragasri-narasimhan51"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ragasri
            </a>
            ).
          </p>

          <p className="text-center font-serif text-ink-light italic mt-8">
            &#x0927;&#x0930;&#x094D;&#x092E;&#x094B;
            &#x0930;&#x0915;&#x094D;&#x0937;&#x0924;&#x093F;
            &#x0930;&#x0915;&#x094D;&#x0937;&#x093F;&#x0924;&#x0903;
            &mdash; &ldquo;Dharma protects those who protect it.&rdquo;
          </p>

          <hr />

          <h2 id="key-dates" className="scroll-mt-24">Key Dates</h2>

          <ul>
            <li><strong>1955</strong> &mdash; Debut as a musician</li>
            <li>
              <strong>1959</strong> &mdash; Begins performing with Swami
              Haridoss Giri (Guruji)
            </li>
            <li>
              <strong>1965</strong> &mdash; Begins banking career with Reserve
              Bank of India
            </li>
            <li>
              <strong>1965&ndash;1966</strong> &mdash;{" "}
              <em>Sit&atilde;y&atilde;scaritam Mahat</em> debuts
            </li>
            <li>
              <strong>1979</strong> &mdash; International touring with
              daughters, the Krishnan Sisters
            </li>
            <li>
              <strong>1982</strong> &mdash; Krishnan Sisters release first
              classical music album
            </li>
            <li>
              <strong>1980s</strong> &mdash; Settles in the United States with
              family
            </li>
            <li>
              <strong>1990&ndash;2010</strong> &mdash; Musical Saints of India
              performance series
            </li>
            <li>
              <strong>2008</strong> &mdash; Awarded &lsquo;Sangeeta
              Acharya&rsquo; by Indian Fine Arts Academy, USA
            </li>
            <li>
              <strong>2016</strong> &mdash;{" "}
              <em>Sit&atilde;y&atilde;scaritam Mahat</em> revived at Lohman
              Theatre, San Francisco
            </li>
            <li>
              <strong>2017</strong> &mdash; Lifetime Achievement Award from IFAA
            </li>
            <li>
              <strong>2020&ndash;present</strong> &mdash; Weekly Sat-Sangam
              discourses via online streaming
            </li>
            <li>
              <strong>2023</strong> &mdash; Retires as CEO/Chairman; concludes
              service as Special Deputy Commissioner, California DFPI
            </li>
            <li>
              <strong>2024</strong> &mdash;{" "}
              <em>Periav&atilde; K&atilde;laDiyilirundu</em> published by GIRI
              Publishers
            </li>
          </ul>
          </div>
        </div>
      </article>
    </>
  );
}
