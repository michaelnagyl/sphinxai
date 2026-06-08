import { Quote, Star, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "SphinxAI answers every call within a second. We stopped losing leads after hours and our booking rate jumped almost 40% in the first month.",
    name: "Dr. Ahmed M.",
    role: "Founder",
    company: "Dental Clinic",
    city: "New Cairo",
  },
  {
    quote:
      "It feels like hiring five fluent receptionists overnight — except they never sleep, never quit, and they speak Arabic and English perfectly.",
    name: "Sarah K.",
    role: "Owner",
    company: "Beauty Center",
    city: "Sheikh Zayed",
  },
  {
    quote:
      "Our team finally focuses on closing deals. SphinxAI qualifies leads, books meetings, and pushes everything straight into our CRM.",
    name: "Mohamed A.",
    role: "Head of Sales",
    company: "Real Estate Agency",
    city: "Cairo",
  },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z\s.]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="Loved by operators"
          title="Egyptian businesses already growing with SphinxAI"
          description="Real results from clinics, beauty centers, and real estate teams across Cairo and beyond."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-premium"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-brand/25" />
                <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                </div>
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-[#1E2A4A] font-display text-sm font-bold text-white shadow-[0_4px_12px_-4px_rgba(60,84,143,0.45)]">
                  {initials(t.name)}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-ink">{t.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                  <div className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-brand">
                    <MapPin className="h-3 w-3" /> {t.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}