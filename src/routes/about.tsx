import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { pageMeta } from "@/lib/site-meta";
import { Target, Eye, Heart, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => pageMeta({
    title: "About SphinxAI — Voice AI Built for the Middle East",
    description: "SphinxAI is an Egyptian AI company helping businesses automate customer communication using human-like Voice AI technology.",
    path: "/about",
  }),
  component: AboutPage,
});

const values = ["Innovation", "Trust", "Business impact", "Reliability", "Human-like communication", "Regional understanding"];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Building The Future Of <span className="brand-gradient-text">Business Communication</span> In The Middle East
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            SphinxAI is an Egyptian AI company helping businesses automate communication using
            advanced Voice AI technology. We help companies answer calls instantly, qualify leads,
            book appointments, support customers, and never miss an opportunity again.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Target className="h-5 w-5" /></div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">Help businesses never miss an opportunity again.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Eye className="h-5 w-5" /></div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">Become the leading AI Voice Platform in Egypt and the MENA region.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-brand-soft p-10">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><Heart className="h-5 w-5" /></div>
              <h2 className="font-display text-2xl font-semibold text-ink">Our Values</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((v) => (
                <span key={v} className="rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-medium text-brand">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid items-center gap-8 rounded-3xl bg-[#0F172A] p-10 text-white md:grid-cols-[auto_1fr]">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-ink"><Globe2 className="h-6 w-6" /></div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Built For Egypt And The Middle East</h2>
              <p className="mt-3 text-white/70">
                SphinxAI understands Arabic, English, local business workflows, customer behavior,
                and regional communication needs — so your AI agent feels native, not foreign.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}