import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site-meta";
import { Stethoscope, Home, Sparkles, Headphones, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => pageMeta({
    title: "Industries — SphinxAI Voice Agents for Every Business",
    description: "AI voice agents purpose-built for clinics, real estate, beauty centers, customer service, and sales teams.",
    path: "/industries",
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Stethoscope,
    name: "Clinics & Medical Centers",
    headline: "Never miss a patient.",
    useCase: "Answer patient calls, collect patient information, book appointments, answer clinic questions, and route urgent cases.",
  },
  {
    icon: Home,
    name: "Real Estate",
    headline: "Capture every lead instantly.",
    useCase: "Qualify buyers and sellers, collect property requirements, schedule calls, and send lead data to the sales team.",
  },
  {
    icon: Sparkles,
    name: "Beauty Clinics & Aesthetic Centers",
    headline: "Increase bookings automatically.",
    useCase: "Answer service inquiries, book consultations, explain available services, and follow up with potential clients.",
  },
  {
    icon: Headphones,
    name: "Customer Service Teams",
    headline: "Handle inquiries at scale.",
    useCase: "Answer repeated questions, reduce pressure on support agents, and improve response speed.",
  },
  {
    icon: TrendingUp,
    name: "Sales Teams",
    headline: "Convert more prospects.",
    useCase: "Qualify prospects, follow up automatically, collect customer needs, and route hot leads to sales representatives.",
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            AI Voice Agents Built For <span className="brand-gradient-text">Every Business</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            SphinxAI helps different industries answer calls, capture leads, book appointments, and
            automate customer communication.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_25px_60px_-30px_rgba(60,84,143,0.45)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{ind.name}</h3>
                <p className="mt-2 font-display text-sm font-semibold text-brand">{ind.headline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.useCase}</p>
                <Button asChild variant="ghostBrand" className="mt-6 w-fit -ml-3">
                  <Link to="/solutions">Explore Solution <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}