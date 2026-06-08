interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base text-muted-foreground md:text-lg lg:text-xl">{description}</p>
      )}
    </div>
  );
}