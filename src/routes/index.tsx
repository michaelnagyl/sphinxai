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
  Building2, Briefcase, Mic, TrendingDown, Volume2, Zap, Smile,
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
      <LiveDemoSection />
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

function IndustriesSection() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Clinics & Medical Centers",
      desc: "Answer patient calls 24/7, book appointments, and reduce pressure on reception teams.",
      points: ["Dental & beauty clinics", "Appointment automation", "Patient FAQ handling"],
    },
    {
      icon: Building2,
      title: "Real Estate",
      desc: "Qualify property inquiries instantly, capture buyer intent, and route hot leads to agents.",
      points: ["Inbound lead capture", "Project & unit Q&A", "Viewing scheduling"],
    },
    {
      icon: Sparkles,
      title: "Beauty Centers",
      desc: "Explain treatments, answer pricing questions, and book consultations around the clock.",
      points: ["Service explanations", "Consultation booking", "After-hours coverage"],
    },
    {
      icon: Headphones,
      title: "Customer Service",
      desc: "Resolve repetitive inquiries instantly and escalate complex cases to human agents.",
      points: ["Tier-1 deflection", "Order & account lookups", "Smart escalation"],
    },
    {
      icon: Briefcase,
      title: "Sales Teams",
      desc: "Qualify inbound leads, book discovery calls, and push clean data straight to your CRM.",
      points: ["Lead qualification", "Calendar booking", "CRM sync"],
    },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the businesses that live on the phone"
          description="SphinxAI is tuned for the real workflows of clinics, real estate, beauty centers, customer service, and sales teams across Egypt and MENA."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.title} className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-premium">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {i.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand" /> {p}
                  </li>
                ))}
              </ul>
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

function LiveDemoSection() {
  const bullets = [
    "Hear a natural Arabic & English voice",
    "Watch it qualify a real inquiry",
    "See an appointment booked live",
    "Experience sub-second response time",
  ];
  return (
    <section className="section-pad bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Mic className="h-3.5 w-3.5" /> Live Demo
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold text-ink md:text-5xl lg:text-6xl">
            Experience SphinxAI Live
          </h2>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            Talk directly with an AI voice agent. Ask questions, request a booking, or test it in
            Arabic and English — no signup required.
          </p>
        </div>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI agent online
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Don't read about it. Talk to it.
            </h3>
            <p className="mt-5 text-lg text-muted-foreground">
              In under 30 seconds you'll hear how natural, fast, and business-ready our AI voice
              agent really is.
            </p>
            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base font-medium text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="hero" size="xl">
                <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Start Live Conversation</Link>
              </Button>
              <Button asChild variant="outlineBrand" size="xl">
                <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book A Discovery Call</Link>
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
