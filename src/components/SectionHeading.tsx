interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {label && (
        <span className="text-xs uppercase tracking-widest text-saffron font-medium block mb-3">
          {label}
        </span>
      )}
      <h2 className="font-serif text-display-sm text-ink mb-3">{title}</h2>
      {description && (
        <p className="text-body text-ink-light max-w-xl">{description}</p>
      )}
    </div>
  );
}
