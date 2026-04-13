import Link from "next/link";

interface ContentCardProps {
  href: string;
  title: string;
  date?: string;
  description: string;
  tag?: string;
}

export function ContentCard({
  href,
  title,
  date,
  description,
  tag,
}: ContentCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="border border-border-subtle rounded-sm p-6 transition-all duration-300 hover:border-saffron/30 hover:shadow-sm bg-cream">
        <div className="flex items-start justify-between gap-4 mb-3">
          {tag && (
            <span className="text-xs uppercase tracking-widest text-saffron font-medium">
              {tag}
            </span>
          )}
          {date && (
            <time className="text-xs text-ink-muted whitespace-nowrap">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
        <h3 className="font-serif text-xl text-ink group-hover:text-saffron transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-ink-light leading-relaxed line-clamp-3">
          {description}
        </p>
      </article>
    </Link>
  );
}
