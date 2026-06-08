import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { DemoVideo } from "@/components/site/DemoVideo";
import {
  PhoneCall, CalendarCheck, Printer, ArrowRight,
  AlertTriangle, Sparkles, Stethoscope, Building2, HeartPulse,
  Cpu, Workflow, ShieldCheck, Trophy, Languages, Mic2, Bot,
  Clock, TrendingUp, CheckCircle2, Calendar, MessageSquare,
  Users, Globe2, Lock, Server, PlugZap, Rocket, Zap,
} from "lucide-react";
import sphinxBg from "@/assets/sphinx-bg.jpg.asset.json";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "SphinxAI Sales Presentation | AI Voice Agents For Clinics & Hospitals" },
      {
        name: "description",
        content:
          "Interactive SphinxAI sales presentation for clinics and hospitals — problem, ROI calculator, solution, patient journey, AI features, architecture, implementation, and live demo. Exportable as PDF.",
      },
      { property: "og:title", content: "SphinxAI Sales Presentation" },
      { property: "og:description", content: "Interactive presentation for healthcare decision-makers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/presentation" },
    ],
    links: [{ rel: "canonical", href: "/presentation" }],
  }),
  component: PresentationPage,
});

function useCountUp(target: number, duration = 1400, start = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const n = useCountUp(value, 1400, seen);
  return (
    <div ref={ref} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
      <div className="font-display text-3xl font-bold text-white md:text-4xl">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}

function SlideSection({
  id, eyebrow, n, total = 12, dark = false, children,
}: {
  id: string; eyebrow: string; n: number; total?: number;
  dark?: boolean; children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`pres-slide section-pad relative overflow-hidden ${
        dark ? "bg-[#0B1020] text-white" : "bg-white text-ink"
      }`}
    >
      <div className="container-page relative">
        <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em]">
          <span className={dark ? "text-gold" : "text-brand"}>{eyebrow}</span>
          <span className={dark ? "text-white/60" : "text-muted-foreground"}>
            {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}

function Calculator() {
  const [calls, setCalls] = useState(180);
  const [missed, setMissed] = useState(30);
  const [value, setValue] = useState(450);

  const monthly = useMemo(() => {
    const missedCalls = calls * (missed / 100) * 30;
    return {
      missedCalls: Math.round(missedCalls),
      lost: Math.round(missedCalls * value),
      recovered: Math.round(missedCalls * value * 0.7),
    };
  }, [calls, missed, value]);

  const fields = [
    { label: "Daily inbound calls", val: calls, set: setCalls, min: 20, max: 800, step: 10, suffix: " calls" },
    { label: "Missed-call rate", val: missed, set: setMissed, min: 5, max: 70, step: 1, suffix: "%" },
    { label: "Average revenue per patient", val: value, set: setValue, min: 100, max: 3000, step: 50, suffix: " EGP" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-3xl border border-border bg-white p-6 shadow-premium md:p-8">
        <h3 className="font-display text-xl font-semibold text-ink">Your numbers</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Adjust the sliders to estimate monthly revenue lost from missed calls.
        </p>
        <div className="mt-6 space-y-6">
          {fields.map((f) => (
            <div key={f.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{f.label}</span>
                <span className="font-semibold text-brand">{f.val.toLocaleString()}{f.suffix}</span>
              </div>
              <input
                type="range" min={f.min} max={f.max} step={f.step} value={f.val}
                onChange={(e) => f.set(Number(e.target.value))}
                className="mt-2 w-full accent-[color:var(--brand)]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1020] via-[#152049] to-[#0B1020] p-6 text-white shadow-premium md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
        <div className="text-xs uppercase tracking-[0.18em] text-gold">Estimated monthly impact</div>
        <div className="mt-3 grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Missed calls / month</div>
            <div className="mt-1 font-display text-4xl font-bold">{monthly.missedCalls.toLocaleString()}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Revenue lost / month</div>
            <div className="mt-1 font-display text-4xl font-bold text-white">
              {monthly.lost.toLocaleString()} <span className="text-base font-medium text-white/70">EGP</span>
            </div>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
            <div className="text-sm text-gold">Recoverable with SphinxAI (≈70%)</div>
            <div className="mt-1 font-display text-4xl font-bold text-white">
              {monthly.recovered.toLocaleString()} <span className="text-base font-medium text-white/70">EGP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PresentationPage() {
  const print = () => {
    if (typeof window !== "undefined") window.print();
  };

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "problem", label: "Problem" },
    { id: "calculator", label: "ROI" },
    { id: "solution", label: "Solution" },
    { id: "journey", label: "Journey" },
    { id: "features", label: "Features" },
    { id: "use-cases", label: "Use Cases" },
    { id: "tech", label: "Tech" },
    { id: "implementation", label: "Rollout" },
    { id: "why", label: "Why Us" },
    { id: "demo", label: "Demo" },
    { id: "cta", label: "Next Step" },
  ];

  return (
    <SiteLayout>
      <style>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          header, footer, .pres-toolbar, .no-print { display: none !important; }
          .pres-slide { page-break-after: always; break-after: page; padding: 24px 0 !important; }
          .pres-slide:last-of-type { page-break-after: auto; }
          body { background: white !important; }
        }
      `}</style>

      <div className="pres-toolbar sticky top-20 z-40 border-b border-border/60 bg-white/85 backdrop-blur md:top-[88px]">
        <div className="container-page flex items-center justify-between gap-3 py-3">
          <div className="hidden flex-wrap gap-1 text-xs md:flex">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-border bg-white px-3 py-1 font-medium text-muted-foreground transition hover:border-brand hover:text-brand"
              >
                {String(i + 1).padStart(2, "0")} · {s.label}
              </a>
            ))}
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand md:hidden">
            SphinxAI · Sales Deck
          </div>
          <Button variant="gold" size="lg" onClick={print} className="shrink-0">
            <Printer className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </div>

      {/* 01 HERO */}
      <SlideSection id="hero" eyebrow="SphinxAI · Sales Presentation" n={1} dark>
        <img
          src={sphinxBg.url} alt="" aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-[#3C548F]/70 via-[#0B1020]/85 to-[#0B1020]" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <Sparkles className="h-3.5 w-3.5" /> For Clinics & Hospitals
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Turn Every Patient Call <span className="brand-gradient-text">Into Revenue.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Human-like AI voice agents that answer every call, book appointments, qualify patients,
              and never miss a lead — in Arabic and English, 24/7.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-ink">
                <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book Discovery Call</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Stat value={24} suffix="/7" label="Always answering" />
            <Stat value={97} suffix="%" label="Pickup rate" />
            <Stat value={70} suffix="%" label="Revenue recovered" />
            <Stat value={2} suffix=" langs" label="Arabic & English" />
          </div>
        </div>
      </SlideSection>

      {/* 02 PROBLEM */}
      <SlideSection id="problem" eyebrow="The Problem" n={2}>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Clinics lose patients every day — to a ringing phone.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Receptionists are overwhelmed, after-hours calls go unanswered, and patients
            simply call the next clinic on Google.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: AlertTriangle, t: "30–40% of calls missed", d: "Peak hours, lunch breaks, and after-hours leak revenue daily." },
            { icon: Clock, t: "8 min average hold time", d: "Patients hang up and book with the competitor." },
            { icon: TrendingUp, t: "85% never call back", d: "A missed call is a missed patient — permanently." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-premium">
              <Icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 03 CALCULATOR */}
      <SlideSection id="calculator" eyebrow="Revenue Loss Calculator" n={3}>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            How much revenue is your clinic losing each month?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A quick estimate based on your call volume, missed-call rate, and average patient value.
          </p>
        </div>
        <div className="mt-10"><Calculator /></div>
      </SlideSection>

      {/* 04 SOLUTION */}
      <SlideSection id="solution" eyebrow="The Solution" n={4} dark>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              SphinxAI — an always-on AI voice receptionist.
            </h2>
            <p className="mt-4 text-lg text-white/75">
              A human-like AI agent answers every call in under one ring, understands intent,
              books appointments directly in your system, and forwards complex cases to your team.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              {[
                "Answers in Arabic and English instantly",
                "Books appointments into your calendar",
                "Captures patient details to your CRM",
                "Escalates emergencies to a human",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/40 to-gold/30 blur-3xl" />
            <DemoVideo />
          </div>
        </div>
      </SlideSection>

      {/* 05 JOURNEY */}
      <SlideSection id="journey" eyebrow="The Patient Journey" n={5}>
        <h2 className="font-display text-3xl font-bold md:text-5xl">From ring to booked — in under 60 seconds.</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            { i: PhoneCall, t: "Patient calls", d: "Day or night, in any language." },
            { i: Bot, t: "AI answers", d: "Warm, natural conversation." },
            { i: MessageSquare, t: "Qualifies need", d: "Symptoms, doctor, urgency." },
            { i: Calendar, t: "Books slot", d: "Live calendar sync." },
            { i: CheckCircle2, t: "Confirms", d: "SMS / WhatsApp confirmation." },
          ].map((s, idx) => (
            <li key={s.t} className="relative rounded-2xl border border-border bg-white p-5 shadow-premium">
              <div className="absolute -top-3 left-5 rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">
                Step {idx + 1}
              </div>
              <s.i className="mt-2 h-6 w-6 text-brand" />
              <div className="mt-3 font-display text-lg font-semibold">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </li>
          ))}
        </ol>
      </SlideSection>

      {/* 06 FEATURES */}
      <SlideSection id="features" eyebrow="AI Features" n={6}>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Built for healthcare-grade conversations.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { i: Mic2, t: "Human-like voice", d: "Natural pacing, empathy, and accent control." },
            { i: Languages, t: "Bilingual native", d: "Switches Arabic ↔ English mid-sentence." },
            { i: Calendar, t: "Smart scheduling", d: "Reads doctor availability and books in real time." },
            { i: ShieldCheck, t: "HIPAA-style privacy", d: "Encrypted, role-based, audit-logged." },
            { i: Workflow, t: "CRM & EMR sync", d: "Pushes structured data to your stack." },
            { i: TrendingUp, t: "Analytics dashboard", d: "Calls, intents, bookings, recovery rate." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-premium">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 07 USE CASES */}
      <SlideSection id="use-cases" eyebrow="Use Cases" n={7} dark>
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Where SphinxAI delivers ROI fastest.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { i: Stethoscope, t: "Private Clinics", d: "Single-specialty clinics that lose after-hours calls." },
            { i: Building2, t: "Multi-branch Hospitals", d: "Centralized AI receptionist routing across branches." },
            { i: HeartPulse, t: "Specialty Centers", d: "IVF, dental, dermatology, physiotherapy bookings." },
            { i: Users, t: "Call Centers", d: "Augment human agents and absorb overflow." },
            { i: Globe2, t: "Telehealth", d: "Triage, schedule, and route virtual consults." },
            { i: Calendar, t: "Diagnostic Labs", d: "Appointment booking and results follow-up." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 08 TECH */}
      <SlideSection id="tech" eyebrow="Tech Architecture" n={8}>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Enterprise-grade. Healthcare-ready.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { i: PhoneCall, t: "Telephony", d: "SIP / Twilio / local carriers" },
            { i: Cpu, t: "AI Voice Engine", d: "LLM + low-latency TTS/STT" },
            { i: Workflow, t: "Orchestration", d: "Intent routing & guardrails" },
            { i: Server, t: "Integrations", d: "EMR, CRM, calendars, WhatsApp" },
          ].map(({ i: Icon, t, d }, idx) => (
            <div key={t} className="relative rounded-2xl border border-border bg-card p-6 shadow-premium">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand">Layer {idx + 1}</div>
              <Icon className="mt-3 h-7 w-7 text-brand" />
              <h3 className="mt-3 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              {idx < 3 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand/40 md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { i: Lock, t: "End-to-end encryption" },
            { i: ShieldCheck, t: "Role-based access" },
            { i: PlugZap, t: "Open APIs & webhooks" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-4">
              <Icon className="h-5 w-5 text-brand" /> <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 09 IMPLEMENTATION */}
      <SlideSection id="implementation" eyebrow="Implementation" n={9}>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Live in 7 days. Zero disruption.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            { d: "Day 1–2", t: "Discovery", b: "Map call flows, scripts, doctors, branches." },
            { d: "Day 3–4", t: "Build", b: "Voice persona, integrations, calendar sync." },
            { d: "Day 5–6", t: "Pilot", b: "Shadow mode on a subset of calls." },
            { d: "Day 7", t: "Go Live", b: "Full traffic + analytics dashboard." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-premium">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">{p.d}</div>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 10 WHY */}
      <SlideSection id="why" eyebrow="Why SphinxAI" n={10} dark>
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Why teams pick SphinxAI.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { i: Trophy, t: "Built for MENA", d: "True Arabic dialect coverage, not translated English." },
            { i: Rocket, t: "Fastest go-live", d: "7-day onboarding with done-for-you setup." },
            { i: ShieldCheck, t: "Healthcare-grade", d: "Privacy, audit logs, and human escalation by default." },
            { i: Zap, t: "Outcome pricing", d: "Pay per recovered booking, not per minute." },
            { i: Users, t: "Human-in-the-loop", d: "Your team supervises and overrides anytime." },
            { i: TrendingUp, t: "Measurable ROI", d: "Dashboards prove revenue recovery weekly." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </SlideSection>

      {/* 11 DEMO */}
      <SlideSection id="demo" eyebrow="Live Demo" n={11}>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Hear it. Then talk to it.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Watch a real SphinxAI agent handle an appointment booking — then start your own live
              conversation with our healthcare voice agent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Start Live Conversation</Link>
              </Button>
              <Button asChild variant="outlineBrand" size="xl">
                <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book Business Demo</Link>
              </Button>
            </div>
          </div>
          <DemoVideo />
        </div>
      </SlideSection>

      {/* 12 CTA */}
      <SlideSection id="cta" eyebrow="Next Step" n={12} dark>
        <img
          src={sphinxBg.url} alt="" aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-[#3C548F]/70 via-[#0B1020]/85 to-[#0B1020]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            Ready to stop losing patients?
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Let's plug SphinxAI into your clinic this week — and start recovering revenue from day one.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book Discovery Call</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-ink">
              <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</Link>
            </Button>
            <Button variant="ghost" size="xl" onClick={print} className="text-white hover:bg-white/10 hover:text-white">
              <Printer className="h-4 w-4" /> Export as PDF
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">
            No missed calls. No missed business.
          </p>
        </div>
      </SlideSection>
    </SiteLayout>
  );
}
