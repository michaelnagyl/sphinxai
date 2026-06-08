import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { InlineLeadCTA } from "@/components/site/InlineLeadCTA";
import { pageMeta } from "@/lib/site-meta";
import { Bot, PhoneCall, Users, CalendarCheck, Plug, BarChart3, Check, X, Stethoscope, HeartPulse, Languages } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => pageMeta({
    title: "AI Call Center, AI Receptionist & Appointment Booking Automation | SphinxAI",
    description: "Automate call answering, appointment booking, lead qualification, CRM workflows, and conversation analytics with SphinxAI voice agents — built for Egyptian businesses.",
    path: "/solutions",
  }),
  component: SolutionsPage,
});

const solutions = [
  { icon: Bot, title: "AI Voice Agents", desc: "Human-like AI agents that answer phone calls and speak naturally with customers." },
  { icon: Stethoscope, title: "AI Receptionist For Clinics", desc: "Automate patient calls, appointment requests, branch questions, service inquiries, and follow-up communication." },
  { icon: PhoneCall, title: "AI Call Center", desc: "Automate inbound and outbound customer communication at scale." },
  { icon: CalendarCheck, title: "Appointment Booking Automation", desc: "Book appointments, confirm availability, and sync calendars with zero manual work." },
  { icon: Users, title: "Lead Qualification", desc: "Ask the right questions, understand customer intent, and identify serious leads." },
  { icon: Plug, title: "CRM & Google Sheets Integration", desc: "Push structured customer data to your CRM, Google Sheets, or business dashboards." },
  { icon: BarChart3, title: "Conversation Analytics", desc: "Track call outcomes, customer intent, conversion rates, missed opportunities, and business insights." },
  { icon: Languages, title: "Arabic & English Support", desc: "Support customers naturally in Arabic and English for Egypt and MENA businesses." },
];

const clinicSolutions = [
  {
    icon: Stethoscope,
    title: "Clinic Appointment Booking AI",
    desc: "Automate patient calls, appointment requests, branch questions, service inquiries, and follow-up communication using a human-like AI voice agent built for clinics and medical centers.",
  },
  {
    icon: HeartPulse,
    title: "AI Receptionist For Medical Centers",
    desc: "SphinxAI works like an AI receptionist that answers calls, collects patient details, handles common questions, and organizes information for your team.",
  },
];

const compareLeft = [
  "Missed calls",
  "Limited working hours",
  "Manual follow-up",
  "Slow response",
  "High team workload",
];
const compareRight = [
  "24/7 response",
  "Instant call answering",
  "Automated qualification",
  "Organized lead data",
  "Faster conversion",
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Voice AI Solutions For <span className="brand-gradient-text">Modern Businesses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            SphinxAI combines AI voice agents, call automation, lead qualification, booking
            workflows, and analytics into one business-ready platform.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`rounded-2xl border border-border bg-card p-7 ${i === 0 ? "md:col-span-2 md:bg-gradient-to-br md:from-brand md:to-[#1E2A4A] md:text-white md:border-transparent" : ""}`}
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${i === 0 ? "bg-white/15 text-gold md:text-gold" : "bg-brand-soft text-brand"}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className={`font-display text-xl font-semibold ${i === 0 ? "md:text-white" : "text-ink"}`}>{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "md:text-white/80" : "text-muted-foreground"}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Built for healthcare"
            title="Solutions for Clinics & Medical Centers"
            description="SphinxAI is purpose-built to support clinics, dental practices, beauty clinics, and medical centers across Egypt and the Middle East."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {clinicSolutions.map((s) => (
              <div key={s.title} className="rounded-2xl border border-brand/20 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(60,84,143,0.4)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            AI receptionist for clinics · AI appointment booking · clinic call center automation ·
            medical call answering service · Arabic AI voice agent · AI voice agent for medical
            centers · dental clinic AI assistant
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Comparison"
            title="Traditional call handling vs SphinxAI"
            description="See the difference modern Voice AI makes for your business operations."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Traditional</h3>
              <ul className="mt-5 space-y-3">
                {compareLeft.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-500"><X className="h-3 w-3" /></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-soft to-white p-7 shadow-[0_30px_80px_-40px_rgba(60,84,143,0.55)]">
              <h3 className="font-display text-lg font-semibold text-brand">SphinxAI</h3>
              <ul className="mt-5 space-y-3">
                {compareRight.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-3 w-3" /></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InlineLeadCTA />

      <CTASection />
    </SiteLayout>
  );
}