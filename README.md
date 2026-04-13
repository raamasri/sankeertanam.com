# Sankeertanam — sankeertanam.com

The official website of **Sangita Acharya Thiruvaiyaru S R Krishnan** — Vakgeyakara, Vedic scholar, composer, and exponent of Nama Sankeertanam & Hari-Katha. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

**Live site:** https://www.sankeertanam.com  
**Repository:** https://github.com/raamasri/sankeertanam.com  
**Hosting:** Vercel (auto-deploys from `main` branch)

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js (App Router, Turbopack) | 16.2.3 |
| React / React DOM | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (via `@tailwindcss/postcss`) |
| gray-matter | ^4.0.3 |
| remark / remark-html / unified | Latest |
| ESLint + eslint-config-next | ^9 / 16.2.3 |

## Project Structure

```
sankeertanam website v3.0/
├── content/                    # All content data (markdown, JSON)
│   ├── articles/               # 18 markdown articles (2011–2026)
│   ├── videos/
│   │   └── videos.json         # 358 YouTube video entries
│   ├── audio-manifest.json     # 17 albums, 412 MP3 track references
│   └── gallery-manifest.json   # 51 gallery image filenames
├── public/
│   ├── favicon.ico             # Generated from site logo
│   ├── favicon-16x16.png       # Generated from site logo
│   ├── favicon-32x32.png       # Generated from site logo
│   ├── icon.png                # 192x192, generated from site logo
│   ├── apple-touch-icon.png    # 180x180, generated from site logo
│   ├── images/
│   │   ├── site/               # 3 files: logo.png (WebP), rs_09230.jpg, img_4570.jpg
│   │   └── gallery/            # 54 gallery images
│   ├── pdfs/                   # 23 article PDF files
│   └── tracks/                 # 19 album folders with MP3 files
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # 14 React components
│   └── lib/                    # 3 utility modules
├── next.config.ts              # images: { unoptimized: true }
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Pages (Routes)

### Main Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home: hero with portrait, featured video embed, YouTube video carousel (last 10), latest 3 articles, quote block |
| `/about` | `src/app/about/page.tsx` | Full biography with sticky table of contents sidebar. Sections: Introduction, The Legacy, Guru Parampara, Sitayascharitam Mahat, Theater & Composition, Kanchi Paramacharya, Krishnan Sisters, Lakshminarasimhan, Radha Krishnan, Beyond Music, The Written Word, Key Dates |
| `/tradition` | `src/app/tradition/page.tsx` | Educational page: What is Nama Sankeertanam, the Bhakti movement, Dakshina Sampradaya, Hari-Katha, Carnatic connection, living tradition |
| `/articles` | `src/app/articles/page.tsx` | Articles grouped by year with sticky timeline sidebar on left. Uses `ArticleTimeline` + `ContentCard` |
| `/articles/[slug]` | `src/app/articles/[slug]/page.tsx` | Individual article: header with tags, markdown body, embedded PDF viewer (iframe, 80vh) with download button. Uses `generateStaticParams` |
| `/videos` | `src/app/videos/page.tsx` | Latest from channels (2 embeds), featured Narayaneeyam collection (71 Dasakams, 10 thumbnails shown), full archive with category tabs, YouTube channel links |
| `/audio` | `src/app/audio/page.tsx` | YouTube playlist links + album archive with expandable track lists and HTML5 audio player |
| `/gallery` | `src/app/gallery/page.tsx` | Masonry grid with lightbox. Images from `gallery-manifest.json` |

### Secondary Pages (under "More" dropdown)

| Route | File | Description |
|-------|------|-------------|
| `/lineage` | `src/app/lineage/page.tsx` | Visual parampara with two tree diagrams: spiritual lineage (Gnanananda Giri → Haridoss Giri → Krishnan) and musical lineage (RagaSri → Krishnan → Krishnan Sisters → 7 fourth-generation children) |
| `/krishnan-sisters` | `src/app/krishnan-sisters/page.tsx` | Dedicated page: Priya, Harini, Subhapriya bios with children's names, fourth generation section |
| `/press` | `src/app/press/page.tsx` | Press items: Narthaki review, Guardsman feature, IndiaWest mention, Carnatic America listing |
| `/glossary` | `src/app/glossary/page.tsx` | 22 terms (Abhanga through Yuga Dharma) with transliterations and definitions |
| `/contact` | `src/app/contact/page.tsx` | Contact form (Formspree placeholder) with subject dropdown, YouTube channel links |
| `/search` | `src/app/search/page.tsx` | Full-text client-side search across all articles (18) + videos (358), with type filter buttons |

### SEO / Meta Routes

| Route | File | Description |
|-------|------|-------------|
| `/sitemap.xml` | `src/app/sitemap.ts` | Auto-generated: 12 static pages + 18 article slugs |
| `/robots.txt` | `src/app/robots.ts` | Allow all, points to sitemap |
| `/icon.png` | `src/app/icon.png` | Favicon (Next.js auto-route) |
| `/apple-icon.png` | `src/app/apple-icon.png` | Apple touch icon (Next.js auto-route) |

---

## Components

| Component | Client? | Description |
|-----------|---------|-------------|
| `Header.tsx` | Yes | Fixed top nav. 7 main links + "More" dropdown (6 links) with click-outside-to-close. Mobile hamburger shows all 13 links. Logo: `/images/site/logo.png` |
| `Footer.tsx` | No | 3-column grid: brand, 11 explore links (2-col grid), YouTube channels. Subscribe form. Copyright bar |
| `PageHeader.tsx` | No | Large serif title (`text-5xl` → `text-7xl` responsive) + subtitle on parchment background. Used by most pages |
| `SectionHeading.tsx` | No | Label + title + description block for home page sections |
| `ContentCard.tsx` | No | Article preview card: tag, date, title, description with hover effects |
| `VideoEmbed.tsx` | No | Responsive YouTube iframe embed |
| `VideoCarousel.tsx` | Yes | Horizontal scrolling carousel with left/right arrow buttons, fade edges, hover play overlay. Shows YouTube thumbnails |
| `VideoTabs.tsx` | Yes | Tabbed video grid by category |
| `ArticleTimeline.tsx` | Yes | Sticky vertical timeline for articles page. Year entries with month labels, IntersectionObserver scroll tracking, click to jump |
| `TableOfContents.tsx` | Yes | Sticky vertical TOC for about page. Scroll spy via IntersectionObserver, smooth scroll on click. Max-height with overflow scroll |
| `SearchResults.tsx` | Yes | Search UI: text input, All/Articles/Videos filter buttons, result cards with type badges |
| `AudioPlayer.tsx` | Yes | Expandable album list with HTML5 `<audio>` player for MP3 tracks |
| `GalleryGrid.tsx` | Yes | Masonry column layout with click-to-lightbox navigation |
| `SubscribeForm.tsx` | Yes | Email subscribe form, POSTs to Google Apps Script endpoint. `inline` and `stacked` variants |

---

## Data Layer

### Articles (`src/lib/markdown.ts`)

- Reads `.md` files from `content/articles/`
- Frontmatter: `title`, `date`, `description`, `author`, `tags[]`, optional `pdfUrl`
- Body → HTML via `remark` + `remark-html`
- Sorted by date descending
- Exports: `getAllArticles()`, `getArticleBySlug()`, `getAllSlugs()`

### Videos (`src/lib/videos.ts`)

- Reads `content/videos/videos.json`
- Each entry: `id`, `title`, `date`, `description`, `youtubeId`, `tags[]`, optional `featured`
- `category` derived from first tag
- Exports: `getAllVideos()`, `getVideoCategories()`, `getLatestVideos(count)`, `getFeaturedVideo()`

### Audio (`src/lib/audio.ts`)

- Reads `content/audio-manifest.json`
- Each album: `{ folder, tracks[] }`
- Track URLs: `/tracks/${folder}/${track}`
- Exports: `getAllAlbums()`

### Gallery

- `content/gallery-manifest.json` — array of 51 filenames
- Image URLs: `/images/gallery/${filename}`
- Read directly in the gallery page component

---

## Design System

### Theme (`globals.css` `@theme`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#EDE4D3` | Page background |
| `--color-parchment` | `#E2D6C1` | Section backgrounds, page headers |
| `--color-ink` | `#2A1810` | Primary text, dark buttons |
| `--color-ink-light` | `#3E3528` | Body text |
| `--color-ink-muted` | `#7A6F60` | Secondary/meta text |
| `--color-saffron` | `#B8491F` | Accent, links, active states |
| `--color-saffron-dark` | `#943A18` | Hover accent |
| `--color-maroon` | `#7A2E2E` | Unused accent |
| `--color-border-subtle` | `#D4C9B5` | Borders, dividers |

### Fonts

- **Serif:** Playfair Display (headings, titles) — loaded via `next/font/google`
- **Sans:** Inter (body text) — loaded via `next/font/google`

### Spacing

- `--spacing-section`: `5rem` (section padding)
- `--spacing-section-sm`: `3rem` (compact section padding)

### Custom Utilities

- `.scrollbar-hide::-webkit-scrollbar { display: none }` — used by carousels and sticky sidebars
- `.prose` — custom article typography (max-width 42rem, heading styles, blockquote with saffron border, link styles)
- `.animate-fade-in`, `.animate-fade-in-delay`, `.animate-fade-in-delay-2` — staggered entrance animations

---

## About Page Content Structure

The about page (`/about`) is the most content-rich page. Its sections, in order:

1. **Introduction** — Thiruvaiyaru significance, bio summary, father's 300+ kritis and performances (1956–60), musical training, Sangeeta Acharya award (2008), IFAASD ongoing role
2. **The Legacy** — Nama Sankeertanam & Hari-Katha tradition, guru lineage
3. **The Guru Parampara** — Swami Haridoss Giri (Guruji), Gnanananda Giri lineage, Jalasamadhi 1994
4. **Sitayascharitam Mahat** — Original opera + 2016 Bay Area staging at Foothill College
5. **Theater and Composition** — Ujjain festivals, Kalidasa plays, Sabarimala opera, YouTube channels (co-contributed with Lakshminarasimhan), Narayaneeyam series
6. **A Disciple of Kanchi Paramacharya** — Vedic training, 50+ years teaching
7. **The Krishnan Sisters** — Priya, Harini, Subhapriya. 1979 touring. Fourth generation: Kaanchana, Shankara, Janani Krishnan-Jha, Abhaya Krishnan-Jha, Raama Srivatsan, Keshavan Srivatsan, Hari Srivatsan
8. **Ragasri S. Lakshminarasimhan** — Krishnan's younger brother (nicknamed Chinga). Co-contributor to Ragasri and GuruBhakti YouTube channels. Maintains the Ragasri blog (ragasri-narasimhan.blogspot.com). Translated all 100 Narayaneeyam Dasakams into Tamil
9. **The Siblings** — Smt. Bhooma-Narayanan (continues Nathamuni Narayana Iyengar's Nama Sankeertanam), Smt. Ramamani Ranganathan (daily Paduka Sahasra Parayanam in Hyderabad)
10. **Radha Krishnan** — Wife, RBI banker, musicologist, 1966 Himalayan mountaineer trained by Tenzing Norgay, Silver Axe award
11. **Beyond Music** — Gold medalist University of Madras, FRCIB/FFA London, banking career since 1965, founder of two US fiduciary corporations, Special Deputy Commissioner of California DFPI
12. **The Written Word** — Journalist, novelist, IFAASD souvenir articles since 2011
13. **Key Dates** — Timeline: 1955, 1959, 1965, 1979, 1980s, 2008, 2011–present, 2016, 2023

---

## Key People Referenced

| Person | Relationship | Notes |
|--------|-------------|-------|
| Kumaramangalam Srinivasa-Raghavan | Father | Vakgeyakara, mudra "RagaSri", 300+ kritis. Gana-Bhushanam |
| Radha Krishnan | Wife | RBI banker, musicologist, Himalayan mountaineer (1966) |
| Ragasri S. Lakshminarasimhan | Younger brother | Co-contributor to YouTube channels, Ragasri blog, Narayaneeyam Tamil translator. Nicknamed "Chinga" |
| Smt. Bhooma-Narayanan | Sister | Continues Nama Sankeertanam in India |
| Smt. Ramamani Ranganathan | Sister | Daily Paduka Sahasra Parayanam in Hyderabad |
| Priya Krishnan Parameswaran | Daughter | Krishnan Sisters. Co-produced Sitayascharitam Mahat 2016. Children: Kaanchana, Shankara |
| Harini Krishnan Vikas | Daughter | Krishnan Sisters. Trained under Dr. S. Ramanathan. Children: Janani Krishnan-Jha, Abhaya Krishnan-Jha |
| Subhapriya Krishnan Srivatsan | Daughter | Krishnan Sisters. President of LOTUS. Married to Hemmige Srivatsan. Sons: Raama, Keshavan, Hari Srivatsan |
| Swami Haridoss Giri | Spiritual guru | "Guruji". Dakshina Sampradaya Namasankeertanam. Jalasamadhi 1994 |
| Swami Gnanananda Giri | Root guru | Thapovanam, Thiruvannamalai |
| Kanchi Paramacharya | Spiritual master | 68th Pontiff of Adi Shankara Order |

---

## YouTube Channels

| Channel | URL | Content |
|---------|-----|---------|
| Ragasri | https://www.youtube.com/@ragasri-narasimhan51 | Named after father's mudra. Carnatic performances, compositions |
| GuruBhakti | https://www.youtube.com/@gurubhakti-tsrk | Sankeertanam, Narayaneeyam Dasakams, discourses |

Both channels are co-contributed by Krishnan and his brother Lakshminarasimhan.

---

## External Services

| Service | Usage |
|---------|-------|
| Vercel | Hosting + auto-deploy from GitHub `main` |
| YouTube | Video embeds + thumbnail images (`img.youtube.com/vi/{id}/hqdefault.jpg`) |
| Google Apps Script | Subscribe form endpoint |
| Formspree | Contact form (placeholder action URL — needs real endpoint) |

---

## Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build (production)
npm run build

# Start production server
npm start
```

### Adding Content

**New article:** Create `content/articles/YYYY-slug-name.md` with frontmatter:
```yaml
---
title: "Article Title"
date: "YYYY-MM-DD"
description: "Short description"
author: "Thiruvaiyaru S R Krishnan"
tags: ["Tag1", "Tag2"]
pdfUrl: "/pdfs/filename.pdf"  # optional
---
Article body in markdown...
```

**New video:** Add entry to `content/videos/videos.json`:
```json
{
  "id": "359",
  "title": "Video Title",
  "date": "2026-01-01",
  "description": "Description",
  "youtubeId": "YouTube_ID",
  "tags": ["Category", "Source"],
  "featured": false
}
```

**New audio album:** Add to `content/audio-manifest.json` and place MP3s in `public/tracks/{folder}/`.

**New gallery image:** Add filename to `content/gallery-manifest.json` and place image in `public/images/gallery/`.

---

## Git History (This Session)

The following commits were made during the April 13, 2026 development session:

1. `7c92252` — Add video carousel, article timeline, enriched about page, and new site sections (home carousel, articles timeline, download button fix, 7 new pages, SEO, search, glossary, contact)
2. `2bb819a` — Fix TypeScript error in SearchResults component
3. `e12b2a9` — Embed PDF viewer in article pages instead of download button
4. `e1d33d5` — Increase page header title size across all pages
5. `9577c11` — Increase article page title size to match page headers
6. `102c5d0` — Reduce article title size slightly, still responsive scaling
7. `3783547` — Add Lakshminarasimhan section, expand father's legacy, credit YouTube co-contribution
8. `8f07976` — Add sticky table of contents sidebar to about page
9. `fb759bf` — Fix sticky sidebars: add self-start and scrollable overflow
10. `d9e52cb` — Replace favicons with site logo across all sizes

---

## Known Issues / Future Work

- **Contact form:** Uses a Formspree placeholder URL (`https://formspree.io/f/placeholder`). Needs a real Formspree form ID or alternative backend.
- **logo.png is WebP:** The file at `/images/site/logo.png` is actually a WebP image with a `.png` extension. Works in browsers but may cause issues with tools expecting true PNG.
- **Gallery captions:** `gallery-manifest.json` contains only filenames — no titles or descriptions. Adding captions would make the gallery meaningful.
- **Audio album descriptions:** `audio-manifest.json` has folder names but no liner notes or descriptions per album.
- **Blog route:** No `/blog` exists. The `/articles` section serves as the site's journal.
- **Video dates:** All 358 videos have the same date (`2024-01-01`). The "latest" videos are determined by array position (last entries = newest).
- **Sitemap completeness:** `/search` is not listed in the sitemap.
