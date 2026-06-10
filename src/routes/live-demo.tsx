import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Soundwave } from "@/components/site/Soundwave";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site-meta";
import { Mic, PhoneCall, CalendarCheck, MessageSquare, Star, ShieldCheck, Zap, Clock, Languages, CheckCircle2 } from "lucide-react";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { DemoVideo } from "@/components/site/DemoVideo";

export const Route = createFileRoute("/live-demo")({
  head: () => pageMeta({
    title: "Talk To A Live AI Voice Agent | SphinxAI",
    description: "Talk to SphinxAI live and experience how a human-like AI voice agent answers calls, qualifies leads, and books appointments — in Arabic and English.",
    path: "/live-demo",
  }),
  component: LiveDemoPage,
});

type State = "ready" | "listening" | "responding";

function LiveDemoPage() {
  const [state, setState] = useState<State>("ready");

  const cycle = () => {
    if (state === "ready") setState("listening");
    else if (state === "listening") setState("responding");
    else setState("ready");
  };

  const statusText =
    state === "ready" ? "Ready to start"
    : state === "listening" ? "Listening…"
    : "AI responding";

  const suggestions = [
    "I want to book an appointment.",
    "What services do you offer?",
    "Tell me about pricing.",
    "Can someone call me back?",
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/60 to-background pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live Voice AI — free to try
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
            Talk To SphinxAI <span className="brand-gradient-text">Live</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Experience how a human-like AI voice agent can answer calls, understand customers,
            qualify leads, and book appointments — in Arabic and English.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs text-muted-foreground/80">
            Live voice integration is ready for future connection with Vapi, ElevenLabs, or custom voice APIs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 30-second demo</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Arabic & English</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No signup</div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-white shadow-premium">
            <div className="flex flex-col items-center bg-gradient-to-br from-[#3C548F] to-[#1E2A4A] p-10 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{statusText}</div>
              <button
                onClick={cycle}
                className={`mt-6 grid h-32 w-32 place-items-center rounded-full transition-all ${
                  state === "ready"
                    ? "bg-gold text-ink shadow-[0_0_0_0_rgba(253,186,8,0.6)] hover:scale-105"
                    : state === "listening"
                    ? "bg-white text-brand animate-pulse"
                    : "bg-brand text-white"
                }`}
                aria-label="Toggle live demo"
              >
                <Mic className="h-12 w-12" />
              </button>
              <p className="mt-6 text-sm text-white/70">
                Tap the microphone to cycle through demo states.
              </p>
              <Soundwave className="mt-6 w-full max-w-md" bars={40} animate={state !== "ready"} />
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MessageSquare className="h-4 w-4 text-brand" /> Transcript
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-lg bg-brand-soft p-3 text-ink">
                    <span className="font-semibold text-brand">SphinxAI:</span> Hello, thank you for
                    calling. How can I help you today?
                  </div>
                  {state !== "ready" && (
                    <div className="rounded-lg bg-surface p-3 text-muted-foreground">
                      <span className="font-semibold text-ink">You:</span> I&apos;d like to book an
                      appointment for next week.
                    </div>
                  )}
                  {state === "responding" && (
                    <div className="rounded-lg bg-brand-soft p-3 text-ink">
                      <span className="font-semibold text-brand">SphinxAI:</span> Of course. What day
                      and time work best for you?
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-ink">Try asking</div>
                <ul className="mt-4 space-y-2">
                  {suggestions.map((s) => (
                    <li key={s} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground">
                      “{s}”
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border bg-surface p-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-xs font-medium text-muted-foreground">
                  Rated 4.9/5 by early customers
                </span>
              </div>
              <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="hero" size="lg">
                  <a href="tel:+201039799207"><PhoneCall className="h-4 w-4" /> Talk To AI Now</a>
                </Button>
                <Button asChild variant="outlineBrand" size="lg">
                  <a href="tel:+201286590009"><CalendarCheck className="h-4 w-4" /> Book Free Demo</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-4">
            {[
              { icon: Zap, k: "< 1s", v: "Pickup time" },
              { icon: Clock, k: "24/7", v: "Availability" },
              { icon: Languages, k: "AR + EN", v: "Native fluency" },
              { icon: ShieldCheck, k: "Enterprise", v: "Security" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-white p-4 text-center">
                <s.icon className="mx-auto h-4 w-4 text-brand" />
                <div className="mt-2 font-display text-lg font-bold text-ink">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <SeeInAction />

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Frequently asked</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
            {[
              { q: "How long does it take to deploy?", a: "Most businesses go live within 5–7 business days, including voice training, CRM integration, and call-flow customization." },
              { q: "Does it really sound human?", a: "Yes. We use enterprise-grade voice models tuned for Arabic and English with natural pacing, pauses, and emotion." },
              { q: "Can it integrate with my CRM and calendar?", a: "SphinxAI connects to HubSpot, Salesforce, Google Calendar, Google Sheets, and most modern APIs." },
              { q: "Is my data secure?", a: "Calls and transcripts are encrypted in transit and at rest. We follow enterprise security best practices and are GDPR-ready." },
              { q: "What if the AI cannot answer something?", a: "It instantly escalates to a human teammate or schedules a callback — you never lose a lead." },
            ].map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
                  {f.q}
                  <span className="text-xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function SeeInAction() {
  const badges = [
    "24/7 AI Call Handling",
    "Arabic & English Support",
    "Lead Qualification",
    "Appointment Booking",
    "Business Automation Ready",
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Watch the demo
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-5xl">
            See SphinxAI In Action
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Watch how an AI Voice Agent can handle real business communication and help companies
            never miss an opportunity.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Real conversations. Real business outcomes.
            </h3>
            <p className="mt-4 text-muted-foreground">
              See how SphinxAI can answer calls, qualify leads, collect customer details, and help
              your business respond instantly — even outside working hours.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="hero" size="lg">
                <a href="tel:+201286590009"><CalendarCheck className="h-4 w-4" /> Book Free Demo</a>
              </Button>
              <Button asChild variant="outlineBrand" size="lg">
                <a href="tel:+201039799207"><PhoneCall className="h-4 w-4" /> Talk To AI Now</a>
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