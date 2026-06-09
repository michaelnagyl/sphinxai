import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { InlineLeadCTA } from "@/components/site/InlineLeadCTA";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Home, Sparkles, Headphones, TrendingUp, UtensilsCrossed, ArrowRight,
  AlertCircle, Bot, CheckCircle2, HeartPulse, Smile,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "AI Voice Agents For Clinics & Businesses | SphinxAI" },
      { name: "description", content: "See how SphinxAI helps clinics, real estate, sales, and customer service teams automate calls, bookings, and lead qualification." },
      { property: "og:title", content: "AI Voice Agents For Clinics & Businesses | SphinxAI" },
      { property: "og:description", content: "See how SphinxAI automates calls, bookings, and lead qualification across clinics, real estate, sales, and customer service." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI Voice Agents by Industry",
          provider: { "@type": "Organization", name: "SphinxAI" },
          areaServed: "MENA",
          description: "Industry-specific AI voice agents for clinics, dental, beauty centers, real estate, customer service, sales teams, and restaurants.",
        }),
      },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Stethoscope,
    name: "Clinics & Medical Centers",
    headline: "Never miss a patient call again.",
    pain: "Clinics lose bookings when calls are missed, reception teams are busy, or patients call after working hours.",
    solution: "SphinxAI answers patient calls instantly, collects patient information, answers common clinic questions, and supports appointment booking.",
    outcome: "More bookings, faster patient response, and less pressure on reception teams.",
    featured: true,
    cta: "Explore Clinic Automation",
  },
  {
    icon: Smile,
    name: "Dental Clinics",
    headline: "Answer every dental call instantly.",
    pain: "Dental clinics miss bookings during procedures, lunch breaks, and after hours.",
    solution: "SphinxAI answers dental calls, explains services, and books cleanings, check-ups, and consultations.",
    outcome: "Full schedules, fewer empty chairs, and happier patients.",
  },
  {
    icon: HeartPulse,
    name: "Beauty Clinics & Aesthetic Centers",
    headline: "Convert every inquiry into a booking.",
    pain: "Receptionists are overwhelmed by service questions, pricing, and DMs.",
    solution: "SphinxAI explains treatments, qualifies leads, books consultations, and follows up with prospects.",
    outcome: "Fuller calendars and higher revenue per booking — with zero added staff.",
  },
  {
    icon: Home,
    name: "Real Estate Companies",
    headline: "Capture every lead instantly.",
    pain: "Hot buyer leads go cold before agents call back.",
    solution: "AI qualifies buyers, captures property needs, and routes leads to your sales team.",
    outcome: "Higher lead-to-meeting conversion and zero lost opportunities.",
  },
  {
    icon: Headphones,
    name: "Customer Service Teams",
    headline: "Handle inquiries at scale.",
    pain: "Agents drown in repeated questions and long queues.",
    solution: "AI handles tier-1 inquiries and escalates only what needs a human.",
    outcome: "Faster resolution, lower cost per ticket, better CSAT.",
  },
  {
    icon: TrendingUp,
    name: "Sales Teams",
    headline: "Convert more prospects.",
    pain: "Reps waste hours on unqualified leads.",
    solution: "AI qualifies every prospect and routes only hot leads to reps.",
    outcome: "More pipeline, more closed deals, less wasted rep time.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    headline: "Never miss a reservation.",
    pain: "Phones ring during the rush — bookings get lost.",
    solution: "AI takes reservations, answers menu questions, and confirms bookings 24/7.",
    outcome: "More covers, fewer no-shows, and a calmer floor team.",
  },
] as const;

const clinicUseCases = [
  "Patient appointment booking",
  "Dental clinic call answering",
  "Medical center reception automation",
  "Follow-up call support",
  "Branch and schedule information",
  "Arabic and English patient support",
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Stethoscope className="h-3.5 w-3.5" /> Trusted by Clinics & Medical Centers
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            AI Voice Agents Built For <span className="brand-gradient-text">Every Business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            SphinxAI helps clinics, medical centers, dental clinics, beauty centers, real estate
            companies, customer service teams, and sales teams answer calls, capture leads, and
            automate customer communication.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-page">
          {industries[0] && (
            <div className="mb-8 overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand via-brand to-[#1E2A4A] p-8 text-white shadow-premium md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                    <Stethoscope className="h-3.5 w-3.5" /> Featured industry
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{industries[0].name}</h2>
                  <p className="mt-2 font-display text-lg text-gold">{industries[0].headline}</p>
                  <p className="mt-5 text-sm text-white/80 md:text-base">{industries[0].solution}</p>
                  <p className="mt-3 text-sm text-white/70 md:text-base"><span className="font-semibold text-white">Outcome:</span> {industries[0].outcome}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="gold" size="lg">
                      <Link to="/contact">Explore Clinic Automation <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-ink">
                      <Link to="/live-demo">See Live Demo</Link>
                    </Button>
                  </div>
                </div>
                <ul className="grid gap-2 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  {clinicUseCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-gold" /> {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.slice(1).map((ind) => (
              <div key={ind.name} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_25px_60px_-30px_rgba(60,84,143,0.45)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{ind.name}</h3>
                <p className="mt-1 font-display text-sm font-semibold text-brand">{ind.headline}</p>
                <dl className="mt-5 flex-1 space-y-3 text-sm">
                  <Row icon={AlertCircle} tone="red" label="Pain">{ind.pain}</Row>
                  <Row icon={Bot} tone="brand" label="SphinxAI">{ind.solution}</Row>
                  <Row icon={CheckCircle2} tone="emerald" label="Outcome">{ind.outcome}</Row>
                </dl>
                <Button asChild variant="ghostBrand" className="mt-6 w-fit -ml-3">
                  <Link to="/contact">Get this for my business <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineLeadCTA
        eyebrow="Built for your industry"
        title="Get a demo customized to your business"
        description="We will configure SphinxAI around your industry's real call flows and show you live results in 20 minutes."
      />

      <CTASection />
    </SiteLayout>
  );
}

function Row({
  icon: Icon, tone, label, children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone: "red" | "brand" | "emerald";
  label: string;
  children: React.ReactNode;
}) {
  const toneCls =
    tone === "red" ? "bg-red-50 text-red-500"
    : tone === "brand" ? "bg-brand-soft text-brand"
    : "bg-emerald-50 text-emerald-600";
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-md ${toneCls}`}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm leading-snug text-ink">{children}</div>
      </div>
    </div>
  );
}