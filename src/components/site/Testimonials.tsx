import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "SphinxAI answers every call within a second. We stopped losing leads after hours and our booking rate jumped almost 40% in the first month.",
    name: "Omar Hassan",
    role: "Founder, Cairo Dental Group",
  },
  {
    quote:
      "It feels like hiring five fluent receptionists overnight — except they never sleep, never quit, and they speak Arabic and English perfectly.",
    name: "Salma El-Sayed",
    role: "COO, Nile Real Estate",
  },
  {
    quote:
      "Our team finally focuses on closing deals. SphinxAI qualifies leads, books meetings, and pushes everything straight into our CRM.",
    name: "Ahmed Farouk",
    role: "Head of Sales, MENA SaaS Co.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="Loved by operators"
          title="What teams say after switching to SphinxAI"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-premium"
            >
              <Quote className="h-7 w-7 text-brand/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}