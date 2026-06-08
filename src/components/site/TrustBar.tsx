import { ShieldCheck, Lock, Server, Globe2, Star } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Enterprise security" },
    { icon: Lock, label: "GDPR-ready data" },
    { icon: Server, label: "99.9% uptime SLA" },
    { icon: Globe2, label: "MENA-native AI" },
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="container-page grid gap-6 py-8 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 md:justify-self-end">
          {items.map((i) => (
            <div key={i.label} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <i.icon className="h-4 w-4 text-brand" />
              {i.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}