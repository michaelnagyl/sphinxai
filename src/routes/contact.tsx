import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  CalendarCheck, PhoneCall, Mail, MapPin,
  CheckCircle2, Star, Clock, ShieldCheck, Sparkles,
  Facebook, Instagram, Building2, Bot,
} from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SphinxAI | Book An AI Voice Agent Demo" },
      { name: "description", content: "Contact SphinxAI to build an AI voice agent for your clinic, business, or sales team. Book a demo and automate customer communication." },
      { property: "og:title", content: "Contact SphinxAI | Book An AI Voice Agent Demo" },
      { property: "og:description", content: "Book a SphinxAI demo and automate calls, bookings, and lead qualification for your business." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SphinxAI",
          description: "AI voice agents for clinics, real estate, customer service, and sales teams in Egypt and MENA.",
          address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
          areaServed: "MENA",
          url: "/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  business: z.string().trim().min(1, "Business required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(4, "Phone required").max(30),
  industry: z.string().trim().min(1, "Industry required").max(80),
  business_type: z.string().trim().min(1, "Business type required").max(80),
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft/40 via-white to-background pb-24 pt-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-[480px] w-[480px] rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-60 -z-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* LEFT: headline + info + socials */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> Free 20-minute demo
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-6xl">
              Let's Build Your <br className="hidden md:block" />
              <span className="brand-gradient-text">AI Voice Agent</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Tell us about your business and we'll show you how SphinxAI can automate calls,
              bookings, lead qualification, and customer communication.
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              We help businesses choose the right AI voice setup for their calls, bookings, leads,
              and customer communication workflows.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoCard icon={CalendarCheck} title="Book Free Demo" desc="20-minute custom walkthrough on your call flows." />
              <InfoCard icon={PhoneCall} title="Talk To AI" desc="Call our live AI agent and try it yourself." />
              <InfoCard icon={Facebook} title="Facebook Page" desc="Message us on Facebook for quick replies." href="https://www.facebook.com/profile.php?id=100066607550479&sk=about" />
              <InfoCard icon={Building2} title="Business Inquiry" desc="hello@sphinxai.example · Cairo, Egypt" />
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.03)]">
              <h3 className="font-display text-sm font-semibold text-ink">What you get</h3>
              <ul className="mt-4 grid gap-2 text-sm text-ink sm:grid-cols-2">
                {[
                  "Custom AI voice agent demo",
                  "Clinic / industry-specific call flows",
                  "Arabic & English fluency",
                  "ROI estimate for your business",
                  "CRM & calendar integration plan",
                  "Go-live in 7 days",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Follow</span>
              <div className="flex gap-2">
                <Social href="https://www.instagram.com/sphinxflow.ai?igsh=YTNqZjVlOTVpd3Z3" label="Instagram"><Instagram className="h-4 w-4" /></Social>
                <Social href="https://www.facebook.com/profile.php?id=100066607550479&sk=about" label="Facebook"><Facebook className="h-4 w-4" /></Social>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Response within 24h</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No commitment</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> ROI estimate included</div>
            </div>
          </div>

          {/* RIGHT: form card */}
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
                    "Clinic / Medical Center",
                    "Dental Clinic",
                    "Beauty Clinic / Aesthetic Center",
                    "Real Estate",
                    "Restaurant",
                    "Customer Service",
                    "Sales Team",
                    "Other",
                  ]} />
                  <SelectField label="Business Type" name="business_type" options={[
                    "Small Business",
                    "Growing Company",
                    "Enterprise",
                    "Startup",
                    "Clinic Branch",
                    "Multi-branch Business",
                  ]} />
                  <div className="md:col-span-2">
                    <Field label="What do you want to automate?" name="goal" placeholder="e.g. After-hours patient bookings, lead qualification, support" />
                  </div>
                  <SelectField label="Preferred Contact Method" name="contact_method" options={[
                    "Phone Call", "Email", "Facebook", "LinkedIn",
                  ]} />
                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="text-sm font-medium text-ink">Message (optional)</Label>
                    <Textarea id="message" name="message" rows={3} placeholder="Goals, current tools, timing…" className="mt-2" />
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                    <CalendarCheck className="h-4 w-4" /> {submitting ? "Sending…" : "Book Free Demo"}
                  </Button>
                  <Button type="button" variant="outlineBrand" size="xl" asChild>
                    <Link to="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI</Link>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by SphinxAI about your demo.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
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
          <div className="grid grid-cols-2 gap-3 content-start">
            <Trust icon={Clock} label="< 24h response" />
            <Trust icon={ShieldCheck} label="Enterprise security" />
            <Trust icon={Bot} label="Human-like AI" />
            <Trust icon={Building2} label="Built for MENA" />
            <div className="col-span-2 grid grid-cols-2 gap-3">
              <ContactInfo icon={Mail} label="Email" value="hello@sphinxai.example" />
              <ContactInfo icon={MapPin} label="Based in" value="Cairo, Egypt" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, desc, href }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; href?: string }) {
  const inner = (
    <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-premium">
      <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-soft text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-semibold text-ink">{title}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>;
  }
  return inner;
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md border border-border bg-white text-ink transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
    >
      {children}
    </a>
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