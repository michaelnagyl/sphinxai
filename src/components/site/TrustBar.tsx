import { ShieldCheck, Languages, Clock, Globe2, Star } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Globe2, label: "Built for Egyptian & MENA Businesses" },
    { icon: Languages, label: "Arabic & English Support" },
    { icon: Clock, label: "24/7 Availability" },
    { icon: ShieldCheck, label: "Enterprise Ready" },
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="container-page grid gap-6 py-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <div className="text-sm">
            <span className="font-semibold text-ink">Trusted by founders & operators</span>
            <span className="ml-1 text-muted-foreground">across Egypt & MENA</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:justify-self-end">
          {items.map((i) => (
            <div
              key={i.label}
              className="flex items-center gap-2 rounded-lg border border-border/70 bg-white px-3 py-2 text-[12px] font-semibold text-ink/80 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:border-brand/30 hover:text-ink"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                <i.icon className="h-3.5 w-3.5" />
              </span>
              {i.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}