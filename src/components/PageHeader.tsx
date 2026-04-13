interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-6 border-b border-border-subtle bg-parchment">
      <div className="max-w-content mx-auto">
        <h1 className="font-serif text-display text-ink animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-body-lg text-ink-light max-w-2xl animate-fade-in-delay">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
