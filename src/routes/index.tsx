import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTASection } from "@/components/site/CTASection";
import { Soundwave } from "@/components/site/Soundwave";
import { TrustBar } from "@/components/site/TrustBar";
import { Testimonials } from "@/components/site/Testimonials";
import heroImg from "@/assets/hero-voice.jpg";
import {
  Clock, Languages, Building2, Rocket, PhoneOff, UserX, MoonStar, MailWarning,
  Timer, Wallet, Bot, CalendarCheck, Users, Headphones, Plug, Route as RouteIcon,
  BarChart3, PhoneCall, ShieldCheck, Globe2, Layers, TrendingUp,
  ArrowRight, Workflow, Star, CheckCircle2
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SphinxAI — AI Voice Agents That Turn Every Call Into Revenue" },
      { name: "description", content: "SphinxAI provides human-like AI voice agents that answer calls, qualify leads, book appointments and automate customer communication 24/7 for businesses in Egypt and the Middle East." },
      { property: "og:title", content: "SphinxAI — AI Voice Platform For Businesses" },
      { property: "og:description", content: "Human-like AI voice agents that answer every call, qualify leads, and book appointments — 24/7, in Arabic and English." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ResultsSection />
      <Testimonials />
      <WhySphinx />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  const trust = [
    { icon: Clock, label: "24/7 AI Call Handling" },
    { icon: Languages, label: "Arabic & English" },
    { icon: Building2, label: "Built For Businesses" },
    { icon: Rocket, label: "Fast Deployment" },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(60,84,143,0.12),transparent_60%)]" />
      <div className="container-page grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand shadow-sm backdrop-blur">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Now live in Egypt & MENA
          </div>
          <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Never Miss a Call.<br className="hidden md:block" />
            <span className="brand-gradient-text">Never Miss Revenue.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            SphinxAI deploys human-like AI voice agents that answer every call in under a second,
            qualify leads, book appointments, and push clean data to your CRM — 24/7, in fluent
            Arabic and English.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="xl">
              <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</Link>
            </Button>
            <Button asChild variant="outlineBrand" size="xl">
              <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book A Discovery Call</Link>
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No credit card
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Live in 7 days
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Cancel anytime
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2 rounded-lg border border-border bg-white/70 px-3 py-2 text-xs font-medium text-ink backdrop-blur">
                <t.icon className="h-4 w-4 text-brand" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/15 via-transparent to-gold/15 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-premium">
            <img
              src={heroImg}
              alt="Abstract AI voice communication waves and network"
              width={1536}
              height={1152}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="border-t border-border p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Live call with SphinxAI agent
                </div>
                <span className="text-xs text-muted-foreground">00:42</span>
              </div>
              <Soundwave className="mt-3" animate />
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
                <Stat k="< 1s" v="Pickup" />
                <Stat k="100%" v="Answered" />
                <Stat k="24/7" v="Available" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-white p-3 shadow-premium sm:flex sm:items-center sm:gap-3">
            <div className="flex -space-x-2">
              {["#3C548F", "#4670A8", "#FDBA08"].map((c) => (
                <span key={c} className="inline-block h-8 w-8 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs font-medium text-ink">Rated 4.9/5 by early customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-lg font-bold text-brand">{k}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
    </div>
  );
}

function ProblemSection() {
  const items = [
    { icon: PhoneOff, title: "Unanswered calls", desc: "Every missed ring is a missed customer." },
    { icon: UserX, title: "Overloaded teams", desc: "Reps can't keep up with peak hours." },
    { icon: MoonStar, title: "After-hours leads", desc: "Customers call when no one is there." },
    { icon: MailWarning, title: "No follow-up", desc: "Hot leads go cold within minutes." },
    { icon: Timer, title: "Slow response", desc: "Time-to-reply kills conversion." },
    { icon: Wallet, title: "Expensive ops", desc: "Manual communication doesn't scale." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Every missed call is lost revenue"
          description="Businesses lose opportunities every day because customer communication is manual, slow, and limited by working hours."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <FeatureCard key={i.title} icon={i.icon} title={i.title} description={i.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    { icon: Bot, title: "Human-like conversations", desc: "Natural speech, tone, and pacing." },
    { icon: Languages, title: "Arabic & English support", desc: "Native fluency in both languages." },
    { icon: Clock, title: "24/7 availability", desc: "Never miss a call again." },
    { icon: CalendarCheck, title: "Appointment booking", desc: "Schedule in real time." },
    { icon: Users, title: "Lead qualification", desc: "Ask the right questions, every time." },
    { icon: Headphones, title: "Customer support", desc: "Resolve repeated inquiries instantly." },
    { icon: Plug, title: "CRM integration", desc: "Push clean data to your stack." },
    { icon: RouteIcon, title: "Smart call routing", desc: "Escalate hot calls to humans." },
    { icon: BarChart3, title: "Analytics & reporting", desc: "See every call outcome." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="The solution"
          title="Meet your AI voice employee"
          description="SphinxAI gives your business an AI voice employee that speaks with customers naturally, collects information, books appointments, qualifies leads, and routes conversations to your team when needed."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: PhoneCall, title: "Customer calls your business", desc: "Inbound or outbound, any channel you connect." },
    { n: "02", icon: Bot, title: "SphinxAI answers instantly", desc: "Human-like greeting, no waiting, no hold time." },
    { n: "03", icon: Workflow, title: "AI qualifies, books, supports", desc: "Understands intent and completes the task." },
    { n: "04", icon: BarChart3, title: "Your team gets clean data", desc: "Structured leads and transcripts in your CRM." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader eyebrow="How it works" title="How SphinxAI works" />
        <div className="relative mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-6">
              <div className="absolute -top-3 left-6 rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">{s.n}</div>
              <s.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute right-[-22px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand/40 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const kpis = [
    { k: "More Revenue", v: "+38%", desc: "Average uplift from captured calls." },
    { k: "Faster Response", v: "< 1s", desc: "Instant pickup, every time." },
    { k: "More Bookings", v: "+47%", desc: "Automated appointment scheduling." },
    { k: "Lower Costs", v: "−62%", desc: "Reduced manual call handling." },
    { k: "Higher Conversion", v: "+29%", desc: "Better qualification = better leads." },
    { k: "Customer Experience", v: "5★", desc: "Consistent quality on every call." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Results"
          title="What businesses gain"
          description="SphinxAI helps businesses capture more opportunities, reduce manual work, and deliver faster customer communication without increasing team size."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <div key={k.k} className="rounded-2xl border border-border bg-gradient-to-br from-white to-brand-soft p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-brand" /> {k.k}
              </div>
              <div className="mt-3 font-display text-4xl font-bold text-brand">{k.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySphinx() {
  const items = [
    { icon: ShieldCheck, title: "Enterprise-grade Voice AI", desc: "Reliable, secure, production-ready." },
    { icon: Languages, title: "Arabic & English native", desc: "True regional language fluency." },
    { icon: Globe2, title: "Built for Middle East", desc: "Local workflows and customer behavior." },
    { icon: Rocket, title: "Fast deployment", desc: "Launch in days, not months." },
    { icon: Layers, title: "Scalable infrastructure", desc: "From 100 calls to 100,000." },
    { icon: Bot, title: "Human-like conversations", desc: "Natural speech that feels real." },
    { icon: Workflow, title: "Business-focused automation", desc: "Tied to outcomes, not gimmicks." },
    { icon: Plug, title: "CRM & workflow integration", desc: "Plays nice with your stack." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader eyebrow="Why SphinxAI" title="Why businesses choose SphinxAI" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <FeatureCard key={i.title} icon={i.icon} title={i.title} description={i.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
