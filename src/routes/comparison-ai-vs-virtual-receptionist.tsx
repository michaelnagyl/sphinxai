import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { InlineLeadCTA } from "@/components/site/InlineLeadCTA";
import { Button } from "@/components/ui/button";
import { Check, X, Clock, Wallet, Zap, Languages, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/comparison-ai-vs-virtual-receptionist")({
  head: () => ({
    meta: [
      { title: "AI Receptionist vs Virtual Receptionist | SphinxAI" },
      { name: "description", content: "Compare AI receptionists and human virtual receptionist services. See cost, 24/7 availability, scaling, and quality differences with SphinxAI." },
      { property: "og:title", content: "AI Receptionist vs Virtual Receptionist | SphinxAI" },
      { property: "og:description", content: "AI answering service vs human virtual receptionist — cost, availability, and scale compared." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/comparison-ai-vs-virtual-receptionist" },
    ],
    links: [{ rel: "canonical", href: "/comparison-ai-vs-virtual-receptionist" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "AI Receptionist vs Virtual Receptionist",
          description: "Cost, availability, and quality comparison between AI voice agents and traditional virtual receptionist services.",
          author: { "@type": "Organization", name: "SphinxAI" },
        }),
      },
    ],
  }),
  component: ComparisonPage,
});

type Row = { label: string; ai: string; human: string; aiWins: boolean };

const rows: Row[] = [
  { label: "Availability", ai: "24/7, no breaks", human: "Business hours only", aiWins: true },
  { label: "Pickup speed", ai: "First ring, always", human: "Queue during peaks", aiWins: true },
  { label: "Monthly cost", ai: "Flat, predictable", human: "Per-minute or per-call billing", aiWins: true },
  { label: "Scaling", ai: "Unlimited concurrent calls", human: "1 call per agent", aiWins: true },
  { label: "Languages", ai: "Arabic + English, switch mid-call", human: "Usually one language", aiWins: true },
  { label: "Consistency", ai: "Same script every time", human: "Varies by agent and mood", aiWins: true },
  { label: "CRM logging", ai: "Auto-pushed, structured", human: "Manual entry, often skipped", aiWins: true },
  { label: "Empathy on complex cases", ai: "Routes to your team", human: "Handles emotional nuance", aiWins: false },
];

const highlights = [
  { icon: Clock, title: "24/7 availability", desc: "Answer every call instantly — including nights, weekends, and Eid." },
  { icon: Wallet, title: "Lower cost per call", desc: "Flat pricing replaces per-minute virtual receptionist billing." },
  { icon: Zap, title: "Instant scaling", desc: "Handle 1 or 1,000 simultaneous calls without hiring." },
  { icon: Languages, title: "Arabic + English", desc: "Native Egyptian Arabic and English in the same conversation." },
  { icon: ShieldCheck, title: "Consistent quality", desc: "Same answers, every call. No training drift or bad days." },
];

function ComparisonPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Comparison guide
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            AI Receptionist vs <span className="brand-gradient-text">Virtual Receptionist</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            How does an AI answering service like SphinxAI compare to a traditional human virtual
            receptionist? Here is the honest breakdown — where AI wins, and where humans still win.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Book a free demo <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/packages">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-page grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <h.icon className="h-4 w-4" />
              </div>
              <h3 className="font-display text-sm font-semibold text-ink">{h.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Side by side"
            title="AI voice agent vs human virtual receptionist"
            description="Every row reflects real-world performance — based on what clinics and SMBs actually report."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
            <div className="grid grid-cols-3 bg-brand-soft/60 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-brand">
              <div>Capability</div>
              <div>SphinxAI</div>
              <div>Human virtual receptionist</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-3 items-start gap-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
              >
                <div className="font-medium text-ink">{r.label}</div>
                <div className="flex items-start gap-2 text-ink">
                  {r.aiWins ? (
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 flex-none text-red-500" />
                  )}
                  <span>{r.ai}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  {r.aiWins ? (
                    <X className="mt-0.5 h-4 w-4 flex-none text-red-500" />
                  ) : (
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  )}
                  <span>{r.human}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <SectionHeader
            eyebrow="When to choose what"
            title="So — AI receptionist or virtual receptionist?"
            description="The honest answer depends on call volume, hours, and cost tolerance."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-soft to-white p-7">
              <h3 className="font-display text-lg font-semibold text-brand">Choose SphinxAI when</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" /> You miss calls after hours or during peak times.</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" /> You want predictable, flat monthly cost.</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" /> You need Arabic + English in the same call.</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" /> You want every call logged to your CRM automatically.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Stick with humans when</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-brand" /> Every call is highly emotional or sensitive.</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-brand" /> Volume is low enough that one person handles it.</li>
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-brand" /> Workflows change daily and can't be scripted.</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Most teams use both — SphinxAI handles tier-1 and after-hours, humans handle escalations.</p>
            </div>
          </div>
        </div>
      </section>

      <InlineLeadCTA
        eyebrow="See it on your own calls"
        title="Get a live demo on a real call flow"
        description="We'll model your current call volume and show you exactly what SphinxAI would handle vs escalate."
      />

      <CTASection />
    </SiteLayout>
  );
}