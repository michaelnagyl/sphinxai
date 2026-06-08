import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { pageMeta } from "@/lib/site-meta";
import {
  CalendarCheck, PhoneCall, Mail, MapPin,
  CheckCircle2, Star, Clock, ShieldCheck, Sparkles, ArrowRight,
} from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta({
    title: "Book Your Free Demo — SphinxAI Voice Agents",
    description: "Get a free 20-minute demo of SphinxAI tailored to your business. See how AI voice agents can capture every call, qualify leads, and book appointments 24/7.",
    path: "/contact",
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  business: z.string().trim().min(1, "Business required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(4, "Phone required").max(30),
  industry: z.string().trim().min(1, "Industry required").max(80),
  contact_method: z.string().trim().min(1).max(40),
  goal: z.string().trim().min(1, "Tell us your goal").max(200),
  message: z.string().trim().max(1000).optional(),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast.success("Demo request received. We will reach out within 24 hours.");
    }, 700);
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/60 to-background pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container-page max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Free 20-minute demo
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
            Let's Build Your <br className="hidden md:block" />
            <span className="brand-gradient-text">AI Voice Agent.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            We usually reply quickly and help you choose the best AI automation setup
            for your business.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Response within 24h</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No commitment</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> ROI estimate included</div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-premium md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink">Demo request received</h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Our team will reach out within 24 hours to schedule your custom walkthrough.
                  In the meantime, you can try the live AI demo.
                </p>
                <Button asChild variant="hero" size="xl" className="mt-6">
                  <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="font-display text-2xl font-bold text-ink">Book your free demo</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Takes 60 seconds. We will follow up within 24 hours.
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" />
                  <Field label="Business Name" name="business" placeholder="Company" />
                  <Field label="Phone Number" name="phone" placeholder="+20 ..." type="tel" />
                  <Field label="Email Address" name="email" placeholder="you@company.com" type="email" />
                  <SelectField label="Industry" name="industry" options={[
                    "Clinic / Medical", "Real Estate", "Beauty / Aesthetics",
                    "Restaurant", "Customer Service", "Sales / SaaS", "E-commerce", "Other",
                  ]} />
                  <SelectField label="Preferred Contact Method" name="contact_method" options={[
                    "WhatsApp", "Phone Call", "Email", "Any",
                  ]} />
                  <div className="md:col-span-2">
                    <Field label="What do you want to automate?" name="goal" placeholder="e.g. After-hours bookings, lead qualification, support tickets" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="text-sm font-medium text-ink">Message (optional)</Label>
                    <Textarea id="message" name="message" rows={3} placeholder="Goals, current tools, timing…" className="mt-2" />
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <Button type="submit" variant="hero" size="xl" disabled={submitting} className="sm:col-span-1">
                    <CalendarCheck className="h-4 w-4" /> {submitting ? "Sending…" : "Book Discovery Call"}
                  </Button>
                  <Button type="button" variant="outlineBrand" size="xl" asChild>
                    <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </a>
                  </Button>
                  <Button type="button" variant="outlineBrand" size="xl" asChild>
                    <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Request Demo</Link>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by SphinxAI about your demo.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand to-[#1E2A4A] p-6 text-white shadow-premium">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-xs text-white/80">Rated 4.9/5 by early customers</span>
              </div>
              <blockquote className="mt-4 text-sm text-white/90">
                "We booked our first 18 appointments in the first week — fully automated.
                The team noticed the difference immediately."
              </blockquote>
              <div className="mt-3 text-xs text-white/70">— Salma El-Sayed, COO at Nile Real Estate</div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-premium">
              <h3 className="font-display text-base font-semibold text-ink">What happens next</h3>
              <ol className="mt-4 space-y-4 text-sm">
                <Step n="1" title="We reach out within 24h" desc="A real person — not a form auto-reply." />
                <Step n="2" title="20-minute custom demo" desc="Live walkthrough on your industry & call flows." />
                <Step n="3" title="Go live in 7 days" desc="We set up, train, and deploy your AI agent." />
              </ol>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Trust icon={Clock} label="< 24h response" />
              <Trust icon={ShieldCheck} label="Enterprise security" />
              <ContactInfo icon={Mail} label="Email" value="hello@sphinxai.example" />
              <ContactInfo icon={MapPin} label="Based in" value="Cairo, Egypt" />
            </div>

            <a
              href="#"
              className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
            >
              <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp instead</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-medium text-ink">{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} className="mt-2" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-medium text-ink">{label}</Label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <li className="flex gap-3">
      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-soft font-display text-xs font-bold text-brand">{n}</span>
      <div>
        <div className="font-semibold text-ink">{title}</div>
        <div className="text-muted-foreground">{desc}</div>
      </div>
    </li>
  );
}

function Trust({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs font-medium text-ink">
      <Icon className="h-4 w-4 text-brand" /> {label}
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-border bg-white p-3">
      <Icon className="mt-0.5 h-4 w-4 text-brand" />
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-xs font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}