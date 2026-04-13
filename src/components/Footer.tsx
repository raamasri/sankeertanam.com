import Link from "next/link";
import { SubscribeForm } from "@/components/SubscribeForm";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/videos", label: "Videos" },
  { href: "/audio", label: "Audio" },
  { href: "/gallery", label: "Gallery" },
];

const youtubeLinks = [
  {
    href: "https://www.youtube.com/@ragasri-narasimhan51",
    label: "Ragasri",
  },
  {
    href: "https://www.youtube.com/@gurubhakti-tsrk",
    label: "GuruBhakti",
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-3">
              Sankeertanam
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              The works, writings, and musical legacy of Sangita Acharya
              Thiruvaiyaru S R Krishnan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* YouTube */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              YouTube Channels
            </h4>
            <div className="flex flex-col gap-2">
              {youtubeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mailing List */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">
            Stay Updated
          </h4>
          <p className="text-sm text-white/50 mb-4 max-w-sm">
            Subscribe for updates on new articles, performances, and recordings.
          </p>
          <div className="max-w-md">
            <SubscribeForm variant="inline" />
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sankeertanam. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Dedicated to the Sankeertana tradition
          </p>
        </div>
      </div>
    </footer>
  );
}
