import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import {
  Check, Sparkles, PhoneCall, CalendarCheck, Crown, Rocket, Zap, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "SphinxAI Packages | AI Voice Agent Plans & Pricing" },
      { name: "description", content: "Compare Sphinx Lite, Pro, and Elite — AI voice agent plans for clinics, real estate, sales, and customer service teams in Arabic and English." },
      { property: "og:title", content: "SphinxAI Packages | AI Voice Agent Plans & Pricing" },
      { property: "og:description", content: "Compare Sphinx Lite, Pro, and Elite AI voice agent plans for clinics, real estate, sales, and customer service teams." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

type Plan = {
  name: string;
  label: string;
  icon: typeof Rocket;
  description: string;
  features: string[];
  bestFor: string;
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Sphinx Lite",
    label: "Essential AI Call Automation",
    icon: Rocket,
    description:
      "A simple and efficient AI voice agent package for businesses that want to start answering calls automatically and reduce missed opportunities.",
    features: [
      "Inbound calls only",
      "Single AI voice agent",
      "Predefined call script",
      "One language support",
      "Essential call analytics",
      "Scheduled operating hours",
      "Basic lead capture",
      "FAQ answering",
      "Simple customer data collection",
      "Call summary after each conversation",
    ],
    bestFor:
      "Small businesses, clinics, solo practices, and customer support teams starting with AI call automation.",
    cta: { label: "Book Lite Demo", href: "tel:+201286590009" },
    secondary: { label: "Contact Sales", href: "tel:+201286590009" },
  },
  {
    name: "Sphinx Pro",
    label: "Smart AI Calling & Booking",
    icon: Zap,
    badge: "Most Popular",
    highlighted: true,
    description:
      "A powerful AI voice package for businesses that need smarter conversations, appointment booking, lead qualification, and Arabic & English support.",
    features: [
      "Inbound and outbound calling",
      "Intelligent conversation flows",
      "Arabic and English support",
      "Lead qualification and summaries",
      "Appointment booking workflows",
      "Clinic, dental, and beauty use cases",
      "CRM-ready data export",
      "Call scheduling controls",
      "Customer intent detection",
      "Better analytics and reporting",
      "Follow-up ready workflows",
      "Google Sheets / CRM-ready structure",
    ],
    bestFor:
      "Clinics, dental clinics, beauty clinics, real estate companies, sales teams, and growing businesses that want to automate bookings and lead handling.",
    cta: { label: "Book Pro Demo", href: "tel:+201286590009" },
    secondary: { label: "Contact Sales", href: "tel:+201286590009" },
  },
  {
    name: "Sphinx Elite",
    label: "Advanced AI Voice Automation",
    icon: Crown,
    description:
      "A complete AI voice automation package for high-volume businesses, multi-branch operations, and companies that need advanced integrations and custom workflows.",
    features: [
      "Multi-agent AI architecture",
      "Advanced inbound and outbound calling",
      "Adaptive conversation flows",
      "Full CRM integration",
      "Automated appointment booking",
      "Custom brand voice and tone",
      "Advanced analytics and reporting",
      "Priority technical support",
      "Multi-branch workflows",
      "Custom automation integrations",
      "Advanced lead routing",
      "Team handoff workflows",
      "Enterprise-ready reporting",
      "Custom business logic",
    ],
    bestFor:
      "Large clinics, medical centers, multi-branch businesses, enterprise sales teams, call centers, and high-volume customer service operations.",
    cta: { label: "Book Elite Demo", href: "tel:+201286590009" },
    secondary: { label: "Contact Sales", href: "tel:+201286590009" },
  },
];

function PackagesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#070B17] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(70,112,168,0.28),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(253,186,8,0.10),transparent_55%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,112,168,0.35),transparent_60%)] blur-2xl animate-float-y" />
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(253,186,8,0.18),transparent_60%)] blur-2xl animate-float-y [animation-delay:-3s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container-page pb-16 pt-28 md:pb-20 md:pt-36 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#FDBA08]" /> SphinxAI Packages
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-[4.5rem]">
            Choose The Right AI Voice Plan{" "}
            <span className="bg-gradient-to-r from-[#FDBA08] via-[#FFD66B] to-[#FDBA08] bg-clip-text text-transparent">
              For Your Business
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Flexible AI voice agent packages for clinics, medical centers, real estate companies,
            customer service teams, and growing businesses.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="relative bg-[#070B17] pb-24 text-white md:pb-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070B17] to-transparent" />
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          {/* Not sure block */}
          <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-xl md:p-14">
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Not Sure Which Plan Fits Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Talk to SphinxAI and we'll help you choose the right AI voice setup for your clinic,
              sales team, or customer support operation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl" className="h-14 min-w-[220px] rounded-2xl px-7 text-base font-bold shadow-[0_20px_60px_-12px_rgba(253,186,8,0.5)]">
                <a href="tel:+201039799207"><PhoneCall className="h-5 w-5" /> Talk To AI Now</a>
              </Button>
              <Button asChild variant="ghost" size="xl" className="h-14 min-w-[200px] rounded-2xl border border-white/20 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+201286590009"><CalendarCheck className="h-5 w-5" /> Book Free Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;
  const highlighted = plan.highlighted;
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition md:p-10 ${
        highlighted
          ? "border border-[#FDBA08]/40 bg-gradient-to-b from-[#101a35] to-[#0a1024] shadow-[0_40px_120px_-30px_rgba(253,186,8,0.35)] lg:-translate-y-3"
          : "border border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      {highlighted && (
        <>
          <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FDBA08]/20 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[#4670A8]/25 blur-3xl" />
          <div className="absolute right-6 top-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FDBA08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B1226] shadow-[0_8px_24px_-6px_rgba(253,186,8,0.6)]">
              <Sparkles className="h-3 w-3" /> {plan.badge}
            </span>
          </div>
        </>
      )}

      <div className="relative">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
            highlighted
              ? "bg-gradient-to-br from-[#FDBA08] to-[#E59C00] text-[#0B1226]"
              : "bg-white/[0.06] text-[#FDBA08] ring-1 ring-white/10"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-white md:text-3xl">{plan.name}</h3>
        <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FDBA08]">
          {plan.label}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/70">{plan.description}</p>
      </div>

      <ul className="relative mt-8 flex-1 space-y-3 border-t border-white/10 pt-7">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/85">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                highlighted ? "bg-[#FDBA08]/15 text-[#FDBA08]" : "bg-white/10 text-[#FDBA08]"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-8 border-t border-white/10 pt-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">Best for</div>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{plan.bestFor}</p>
      </div>

      <div className="relative mt-7 flex flex-col gap-2.5">
        <Button
          asChild
          size="xl"
          variant={highlighted ? "gold" : "default"}
          className={
            highlighted
              ? "h-12 rounded-xl text-sm font-bold shadow-[0_20px_60px_-12px_rgba(253,186,8,0.55)]"
              : "h-12 rounded-xl bg-white text-sm font-semibold text-[#0B1226] hover:bg-white/90"
          }
        >
          <a href={plan.cta.href}>
            <CalendarCheck className="h-4 w-4" /> {plan.cta.label}
          </a>
        </Button>
        <Button
          asChild
          size="xl"
          variant="ghost"
          className="h-12 rounded-xl border border-white/15 bg-white/[0.04] text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          <a href={plan.secondary.href}>
            {plan.secondary.label} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}