import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { InlineLeadCTA } from "@/components/site/InlineLeadCTA";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site-meta";
import {
  Stethoscope, Home, Sparkles, Headphones, TrendingUp, UtensilsCrossed, ArrowRight,
  AlertCircle, Bot, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => pageMeta({
    title: "Industries — SphinxAI Voice Agents for Every Business",
    description: "AI voice agents purpose-built for clinics, real estate, beauty centers, customer service, and sales teams.",
    path: "/industries",
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Stethoscope,
    name: "Clinics & Medical Centers",
    headline: "Never miss a patient.",
    pain: "Missed patient calls and manual booking.",
    solution: "AI answers patient calls and books appointments instantly.",
    outcome: "More bookings and faster patient response.",
  },
  {
    icon: Home,
    name: "Real Estate",
    headline: "Capture every lead instantly.",
    pain: "Hot buyer leads go cold before agents call back.",
    solution: "AI qualifies buyers, captures property needs, and routes leads to your sales team.",
    outcome: "Higher lead-to-meeting conversion and zero lost opportunities.",
  },
  {
    icon: Sparkles,
    name: "Beauty Clinics & Aesthetic Centers",
    headline: "Increase bookings automatically.",
    pain: "Receptionists overwhelmed by service questions and DMs.",
    solution: "AI explains services, books consultations, and follows up with prospects.",
    outcome: "Fuller calendars and happier clients with zero added staff.",
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
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            AI Voice Agents Built For <span className="brand-gradient-text">Every Business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            SphinxAI helps different industries answer calls, capture leads, book appointments, and
            automate customer communication.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
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