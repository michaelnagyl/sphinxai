import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTASection } from "@/components/site/CTASection";
import { TrustBar } from "@/components/site/TrustBar";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoModal } from "@/components/site/VideoModal";
import { DemoVideo } from "@/components/site/DemoVideo";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import heroVideo from "@/assets/sphinx-demo.mp4.asset.json";
import heroPoster from "@/assets/demo-poster.jpg.asset.json";
import {
  Clock, Languages, Rocket, PhoneOff, UserX, MoonStar, MailWarning,
  Timer, Wallet, Bot, CalendarCheck, Users, Headphones, Plug, Route as RouteIcon,
  BarChart3, PhoneCall, ShieldCheck, Globe2, Layers, TrendingUp,
  ArrowRight, Workflow, CheckCircle2, PlayCircle, Stethoscope, Sparkles,
  Building2, Briefcase, TrendingDown, Zap, Smile,
  Check, Crown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SphinxAI | AI Voice Agents & AI Call Center For Businesses In Egypt" },
      { name: "description", content: "SphinxAI provides human-like AI voice agents for clinics, real estate, customer service, and sales teams. Automate calls, qualify leads, book appointments, and answer customers 24/7 in Arabic and English." },
      { property: "og:title", content: "SphinxAI | AI Voice Agents & AI Call Center For Businesses In Egypt" },
      { property: "og:description", content: "Human-like AI voice agents for clinics, real estate, and service businesses in Egypt. Answer calls, book appointments, and qualify leads — 24/7 in Arabic and English." },
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
      <IndustriesSection />
      <HowItWorks />
      <ResultsSection />
      <DemoVideoSection />
      <HomePackagesSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section className="relative isolate overflow-hidden bg-[#070B17] text-white">
      {/* Background video — muted, autoplay, loop, poster fallback */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 [filter:saturate(0.8)_contrast(1.05)]"
        src={heroVideo.url}
        poster={heroPoster.url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Layered overlays for legibility and premium brand tone */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,11,23,0.7),rgba(7,11,23,0.97))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070B17]/90 via-[#070B17]/70 to-[#070B17]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(60,84,143,0.30),transparent_50%,rgba(253,186,8,0.10))]" />
      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,112,168,0.35),transparent_60%)] blur-2xl animate-float-y" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(253,186,8,0.18),transparent_60%)] blur-2xl animate-float-y [animation-delay:-3s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page relative flex min-h-[94vh] flex-col items-center justify-center pb-24 pt-28 md:pt-32 lg:min-h-screen lg:pb-32">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            AI Voice Platform · Egypt & MENA
          </div>
          <h1 className="mt-8 font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
            Turn Every Call{" "}
            <span className="bg-gradient-to-r from-[#FDBA08] via-[#FFD66B] to-[#FDBA08] bg-clip-text text-transparent">
              Into Revenue
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg lg:text-xl">
            SphinxAI helps businesses answer every call instantly using human-like AI voice
            agents available 24/7 — qualifying leads, booking appointments, and automating
            customer communication in Arabic & English.
          </p>

          {/* Voice wave */}
          <div className="mt-10">
            <VoiceWave dark />
          </div>

          {/* Dominant CTA cluster */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="relative">
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-2xl bg-[#FDBA08] opacity-50 blur-2xl animate-soft-pulse" />
              <Button
                asChild
                variant="gold"
                size="xl"
                className="relative h-14 min-w-[240px] rounded-2xl px-8 text-base font-bold shadow-[0_20px_60px_-12px_rgba(253,186,8,0.65)] hover:-translate-y-0.5"
              >
                <Link to="/live-demo"><PhoneCall className="h-5 w-5" /> Talk To AI Now</Link>
              </Button>
            </div>
            <Button
              type="button"
              size="xl"
              variant="ghost"
              onClick={() => setVideoOpen(true)}
              className="h-14 min-w-[180px] rounded-2xl border border-white/20 bg-white/[0.04] px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <PlayCircle className="h-5 w-5" /> Watch Demo
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Live in 7 days
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No credit card
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cancel anytime
            </div>
          </div>
        </div>
      </div>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

/* Lightweight CSS-only voice wave */
function VoiceWave({ dark = false, bars = 28 }: { dark?: boolean; bars?: number }) {
  const heights = [22, 38, 54, 70, 48, 30, 60, 80, 44, 26, 58, 72, 40, 24, 52, 68, 36, 50, 28, 64, 76, 42, 30, 58, 46, 34, 62, 50];
  return (
    <div
      className="flex h-16 items-center justify-center gap-[5px]"
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] origin-center rounded-full ${dark ? "bg-gradient-to-t from-[#FDBA08] to-white/80" : "bg-gradient-to-t from-brand to-[#FDBA08]"}`}
          style={{
            height: `${heights[i % heights.length]}%`,
            animation: `vw-bar ${0.9 + (i % 5) * 0.15}s ease-in-out ${i * 0.05}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold text-brand">{k}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
    </div>
  );
}

function ProblemSection() {
  const stats = [
    { icon: PhoneOff, kpi: "1 in 3", label: "business calls go unanswered", tint: "from-rose-50 to-white", accent: "text-rose-600", ring: "ring-rose-100" },
    { icon: MoonStar, kpi: "62%", label: "of leads call outside working hours", tint: "from-amber-50 to-white", accent: "text-amber-600", ring: "ring-amber-100" },
    { icon: Timer, kpi: "< 5 min", label: "to lose a hot lead to a competitor", tint: "from-sky-50 to-white", accent: "text-sky-600", ring: "ring-sky-100" },
    { icon: TrendingDown, kpi: "−38%", label: "revenue lost to slow response", tint: "from-violet-50 to-white", accent: "text-violet-600", ring: "ring-violet-100" },
  ];
  const items = [
    { icon: UserX, title: "Overloaded reception", desc: "Teams can't keep up with peak hours and weekends." },
    { icon: MailWarning, title: "No follow-up", desc: "Hot leads go cold within minutes when nobody calls back." },
    { icon: Wallet, title: "Expensive operations", desc: "Manual call handling doesn't scale with demand." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Every missed call is lost revenue"
          description="Businesses across Egypt and MENA lose customers every day because phones go unanswered, follow-ups are slow, and reception teams can't scale."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${s.tint} p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:shadow-premium`}
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ${s.ring} ${s.accent}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className={`mt-5 font-display text-4xl font-bold tracking-tight ${s.accent}`}>{s.kpi}</div>
              <div className="mt-2 text-sm font-medium text-ink/80">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    { icon: TrendingUp, k: "More Revenue",         v: "+38%", desc: "Average uplift from captured calls.",       hl: "text-emerald-600", soft: "bg-emerald-50" },
    { icon: CalendarCheck, k: "More Bookings",     v: "+47%", desc: "Automated appointment scheduling.",         hl: "text-brand",        soft: "bg-brand-soft" },
    { icon: Zap, k: "Higher Conversion",           v: "+29%", desc: "Better qualification, better leads.",       hl: "text-amber-600",    soft: "bg-amber-50" },
    { icon: Wallet, k: "Lower Costs",              v: "−62%", desc: "Reduced manual call handling.",             hl: "text-violet-600",   soft: "bg-violet-50" },
    { icon: Smile, k: "Better CX",                 v: "5.0★", desc: "Consistent quality on every call.",         hl: "text-rose-600",     soft: "bg-rose-50" },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Results"
          title="Why businesses choose SphinxAI"
          description="Capture more opportunities, reduce manual work, and deliver faster customer communication — without adding headcount."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((k) => (
            <div
              key={k.k}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-premium"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${k.soft} ${k.hl}`}>
                <k.icon className="h-5 w-5" />
              </div>
              <div className={`mt-5 font-display text-5xl font-bold tracking-[-0.04em] ${k.hl}`}>{k.v}</div>
              <div className="mt-2 text-sm font-semibold text-ink">{k.k}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Clinics & Medical Centers",
      problem: "Reception teams overwhelmed; patients hang up and book elsewhere.",
      outcome: "Every patient call answered. Bookings captured 24/7.",
    },
    {
      icon: Building2,
      title: "Real Estate",
      problem: "Hot buyer inquiries lost between agents and after hours.",
      outcome: "Instant qualification and viewings booked on the spot.",
    },
    {
      icon: Sparkles,
      title: "Beauty Centers",
      problem: "Constant pricing & treatment questions tie up the front desk.",
      outcome: "Consultations booked while your team focuses on clients.",
    },
    {
      icon: Headphones,
      title: "Customer Service",
      problem: "Repetitive questions drown high-value support requests.",
      outcome: "Tier-1 inquiries resolved instantly, humans handle the rest.",
    },
    {
      icon: Briefcase,
      title: "Sales Teams",
      problem: "Reps waste hours on unqualified leads and admin work.",
      outcome: "Only serious buyers reach your team, with CRM pre-filled.",
    },
    {
      icon: Globe2,
      title: "Service Businesses",
      desc: "And more — restaurants, agencies, and any team that lives on the phone.",
      problem: "Calls outside hours = lost jobs and lost revenue.",
      outcome: "24/7 coverage in Arabic & English with zero hires.",
    },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the businesses that live on the phone"
          description="Tuned to the real workflows of clinics, real estate, beauty centers, customer service, and sales teams across Egypt and MENA."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-premium"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-soft opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">{i.title}</h3>
              <div className="relative mt-5 space-y-4 border-t border-border pt-5">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-600">
                    <TrendingDown className="h-3 w-3" /> Problem
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{i.problem}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    <TrendingUp className="h-3 w-3" /> Outcome
                  </div>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink">{i.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outlineBrand" size="xl">
            <Link to="/industries">Explore all industries <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How does SphinxAI work?",
      a: "SphinxAI connects to your phone line, website, or messaging channels. When a customer calls, our AI voice agent answers instantly, understands the request, and either completes the task — booking, qualification, FAQ — or routes the call to your team with full context.",
    },
    {
      q: "Can it speak Egyptian Arabic?",
      a: "Yes. SphinxAI is built for MENA and speaks natural Egyptian Arabic as well as Modern Standard Arabic and English, switching languages mid-conversation when needed.",
    },
    {
      q: "Can it book appointments?",
      a: "Yes. The AI can check availability, collect customer details, confirm the slot, and write the booking directly into your calendar or clinic management system.",
    },
    {
      q: "Can it qualify leads?",
      a: "Yes. You define the qualification questions and disqualification rules. SphinxAI asks them naturally, scores the lead, and only escalates serious buyers to your sales team.",
    },
    {
      q: "Can it integrate with CRM systems?",
      a: "Yes. SphinxAI integrates with major CRMs, calendars, and helpdesks via native connectors and webhooks, so transcripts and structured data land where your team already works.",
    },
    {
      q: "How is pricing calculated?",
      a: "Pricing is based on call minutes and the features you enable. Most businesses start with a tailored plan after a short discovery call — book a demo and we'll size it to your volume.",
    },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before bringing SphinxAI into your business."
        />
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-white p-2 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="px-4 py-5 text-base font-semibold text-ink hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function DemoVideoSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="See it in action"
          title="See SphinxAI In Action"
          description="Watch how an AI Voice Agent can answer calls, understand customers, collect information, qualify leads, and help your business respond instantly."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Real conversations · Real outcomes
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Real conversations. Real business outcomes.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              See how SphinxAI can answer calls, qualify leads, collect customer details, and help
              your business respond instantly — even outside working hours.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Answers calls instantly",
                "Qualifies serious leads",
                "Books appointments",
                "Collects customer data",
                "Works after business hours",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact"><CalendarCheck className="h-5 w-5" /> Book A Business Demo</Link>
              </Button>
              <Button asChild variant="outlineBrand" size="xl">
                <Link to="/live-demo"><PhoneCall className="h-5 w-5" /> Start Live Conversation</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <DemoVideo />
          </div>
        </div>
      </div>
    </section>
  );
}

type HomePlan = {
  name: string;
  label: string;
  icon: typeof Rocket;
  description: string;
  features: string[];
  bestFor: string;
  cta: { label: string; to: string };
  highlighted?: boolean;
  badge?: string;
};

const HOME_PLANS: HomePlan[] = [
  {
    name: "Sphinx Lite",
    label: "Essential AI Call Automation",
    icon: Rocket,
    description:
      "A simple AI voice agent for businesses starting to automate calls and reduce missed opportunities.",
    features: [
      "Inbound calls only",
      "Single AI voice agent",
      "Predefined call script",
      "One language support",
      "Essential call analytics",
      "Basic lead capture",
    ],
    bestFor: "Small businesses, solo clinics, and support teams starting with AI call automation.",
    cta: { label: "Book Lite Demo", to: "/contact" },
  },
  {
    name: "Sphinx Pro",
    label: "Smart AI Calling & Booking",
    icon: Zap,
    badge: "Most Popular",
    highlighted: true,
    description:
      "Smarter conversations, appointment booking, lead qualification, and Arabic & English support.",
    features: [
      "Inbound and outbound calling",
      "Intelligent conversation flows",
      "Arabic and English support",
      "Lead qualification and summaries",
      "Appointment booking workflows",
      "CRM-ready data export",
      "Better analytics & reporting",
    ],
    bestFor: "Clinics, dental & beauty centers, real estate, and growing sales teams.",
    cta: { label: "Book Pro Demo", to: "/contact" },
  },
  {
    name: "Sphinx Elite",
    label: "Advanced AI Voice Automation",
    icon: Crown,
    description:
      "Complete AI voice automation for high-volume businesses, multi-branch operations, and custom workflows.",
    features: [
      "Multi-agent AI architecture",
      "Advanced inbound & outbound",
      "Full CRM integration",
      "Custom brand voice & tone",
      "Advanced analytics & reporting",
      "Multi-branch workflows",
      "Priority technical support",
    ],
    bestFor: "Large clinics, medical centers, multi-branch businesses, and enterprise call centers.",
    cta: { label: "Book Elite Demo", to: "/contact" },
  },
];

function HomePackagesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070B17] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(70,112,168,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(253,186,8,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,112,168,0.35),transparent_60%)] blur-2xl animate-float-y" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(253,186,8,0.18),transparent_60%)] blur-2xl animate-float-y [animation-delay:-3s]" />

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#FDBA08]" /> Packages
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Choose The Right AI Voice Plan{" "}
            <span className="bg-gradient-to-r from-[#FDBA08] via-[#FFD66B] to-[#FDBA08] bg-clip-text text-transparent">
              For Your Business
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Flexible AI voice agent packages for clinics, medical centers, real estate companies,
            customer service teams, and growing businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {HOME_PLANS.map((p) => (
            <HomePlanCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-xl md:p-12">
          <h3 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            Not Sure Which Plan Fits Your Business?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Talk to SphinxAI and we'll help you choose the right AI voice setup for your clinic,
            sales team, or customer support operation.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl" className="h-14 min-w-[220px] rounded-2xl px-7 text-base font-bold shadow-[0_20px_60px_-12px_rgba(253,186,8,0.5)]">
              <Link to="/packages"><Layers className="h-5 w-5" /> View All Packages</Link>
            </Button>
            <Button asChild variant="ghost" size="xl" className="h-14 min-w-[200px] rounded-2xl border border-white/20 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact"><CalendarCheck className="h-5 w-5" /> Book Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePlanCard({ plan }: { plan: HomePlan }) {
  const Icon = plan.icon;
  const highlighted = plan.highlighted;
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition md:p-9 ${
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
        <p className="mt-4 text-sm leading-relaxed text-white/70">{plan.description}</p>
      </div>

      <ul className="relative mt-7 flex-1 space-y-3 border-t border-white/10 pt-6">
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

      <div className="relative mt-7 border-t border-white/10 pt-5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">Best for</div>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{plan.bestFor}</p>
      </div>

      <div className="relative mt-6">
        <Button
          asChild
          size="xl"
          variant={highlighted ? "gold" : "default"}
          className={
            highlighted
              ? "h-12 w-full rounded-xl text-sm font-bold shadow-[0_20px_60px_-12px_rgba(253,186,8,0.55)]"
              : "h-12 w-full rounded-xl bg-white text-sm font-semibold text-[#0B1226] hover:bg-white/90"
          }
        >
          <Link to={plan.cta.to}>
            <CalendarCheck className="h-4 w-4" /> {plan.cta.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}
