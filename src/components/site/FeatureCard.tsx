import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_60px_-25px_rgba(60,84,143,0.45)] md:p-8">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}