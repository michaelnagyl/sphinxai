import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, CheckCircle2 } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function InlineLeadCTA({
  eyebrow = "See it on your business",
  title = "Get a free 20-minute demo tailored to your use case",
  description = "We will show you exactly how SphinxAI handles your calls, books your appointments, and pushes leads to your CRM.",
}: Props) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white via-brand-soft to-white p-8 shadow-premium md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                {eyebrow}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">{title}</h3>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">{description}</p>
              <ul className="mt-5 grid gap-2 text-sm text-ink sm:grid-cols-2">
                {["Live walkthrough", "Built around your call flows", "ROI estimate included", "No commitment"].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild variant="hero" size="xl" className="w-full md:w-auto">
                <a href="tel:+201286590009"><CalendarCheck className="h-4 w-4" /> Book Free Demo</a>
              </Button>
              <Button asChild variant="outlineBrand" size="xl" className="w-full md:w-auto">
                <a href="tel:+201039799207"><PhoneCall className="h-4 w-4" /> Talk To AI Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}