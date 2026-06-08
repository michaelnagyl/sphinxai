import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3C548F] via-[#3C548F] to-[#1E2A4A] p-8 text-white shadow-[0_30px_80px_-30px_rgba(60,84,143,0.6)] md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
                Ready when you are
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                Automate every call. Capture every opportunity.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Book a free 20-minute demo or talk to our AI live. Either way, you will see exactly
                how SphinxAI captures every call and turns it into revenue.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
                {["Live in 7 days", "No credit card", "Cancel anytime"].map((b) => (
                  <li key={b} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild variant="gold" size="xl" className="w-full md:w-auto">
                <Link to="/contact"><CalendarCheck className="h-4 w-4" /> Book Free Demo</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full border-white/30 bg-transparent text-white hover:bg-white hover:text-ink md:w-auto">
                <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}