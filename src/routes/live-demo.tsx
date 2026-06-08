import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Soundwave } from "@/components/site/Soundwave";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site-meta";
import { Mic, PhoneCall, CalendarCheck, MessageSquare, Sparkles } from "lucide-react";

export const Route = createFileRoute("/live-demo")({
  head: () => pageMeta({
    title: "Live Demo — Talk To SphinxAI Now",
    description: "Experience SphinxAI live. Talk directly with our AI Voice Agent and discover how AI can transform customer communication.",
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
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Live Voice AI
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Experience SphinxAI <span className="brand-gradient-text">Live</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Talk directly with our AI Voice Agent and discover how AI can transform customer
            communication.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-30px_rgba(60,84,143,0.35)]">
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
              <p className="text-xs text-muted-foreground">
                Live voice demo integration coming soon.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Button variant="hero" size="lg" onClick={cycle}>
                  <PhoneCall className="h-4 w-4" /> Start Live Conversation
                </Button>
                <Button asChild variant="outlineBrand" size="lg">
                  <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book A Business Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}