import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for performance inquiries, event invitations, or questions about the musical legacy of Thiruvaiyaru S R Krishnan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Inquiries, invitations, and correspondence"
      />

      <section className="px-6 py-section">
        <div className="max-w-2xl mx-auto">
          <p className="text-body text-ink-light mb-10">
            For performance inquiries, event invitations, or questions about
            the musical legacy and archives of Sangita Acharya Thiruvaiyaru S R
            Krishnan, please use the form below.
          </p>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-cream border border-border-subtle rounded-sm text-ink text-sm focus:outline-none focus:border-saffron transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-cream border border-border-subtle rounded-sm text-ink text-sm focus:outline-none focus:border-saffron transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-cream border border-border-subtle rounded-sm text-ink text-sm focus:outline-none focus:border-saffron transition-colors"
              >
                <option value="general">General Inquiry</option>
                <option value="performance">Performance / Event Invitation</option>
                <option value="teaching">Teaching / Workshops</option>
                <option value="media">Media / Press</option>
                <option value="archives">Archives / Recordings</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-cream border border-border-subtle rounded-sm text-ink text-sm focus:outline-none focus:border-saffron transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-ink text-cream text-sm font-medium rounded-sm hover:bg-ink-light transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 pt-8 border-t border-border-subtle">
            <h2 className="font-serif text-xl text-ink mb-4">
              YouTube Channels
            </h2>
            <p className="text-sm text-ink-light mb-4">
              Hundreds of live recordings are available free on our dedicated
              channels:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.youtube.com/@ragasri-narasimhan51"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-border-subtle rounded-sm text-sm text-ink hover:border-saffron/30 hover:text-saffron transition-all"
              >
                Ragasri Channel &rarr;
              </a>
              <a
                href="https://www.youtube.com/@gurubhakti-tsrk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-border-subtle rounded-sm text-sm text-ink hover:border-saffron/30 hover:text-saffron transition-all"
              >
                GuruBhakti Channel &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
