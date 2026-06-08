import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { pageMeta } from "@/lib/site-meta";
import { CalendarCheck, MessageCircle, PhoneCall, Mail, MapPin } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta({
    title: "Contact SphinxAI — Build Your AI Voice Agent",
    description: "Tell us about your business and we'll show you how SphinxAI can automate your calls, bookings, and customer communication.",
    path: "/contact",
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  business: z.string().trim().min(1, "Business required").max(120),
  phone: z.string().trim().min(4, "Phone required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  industry: z.string().trim().min(1).max(80),
  automate: z.string().trim().min(1).max(200),
  preferred: z.string().trim().min(1).max(40),
  message: z.string().trim().max(1000).optional(),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

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
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll be in touch within 24 hours.");
    }, 700);
  };

  return (
    <SiteLayout>
      <section className="section-pad bg-gradient-to-b from-brand-soft/60 to-background">
        <div className="container-page max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Let&apos;s Build Your <span className="brand-gradient-text">AI Voice Agent</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Tell us about your business and we&apos;ll show you how SphinxAI can automate your calls,
            bookings, and customer communication.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_rgba(60,84,143,0.35)] md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Business Name" name="business" placeholder="Company" />
              <Field label="Phone Number" name="phone" placeholder="+20 ..." type="tel" />
              <Field label="Email Address" name="email" placeholder="you@company.com" type="email" />
              <Field label="Industry" name="industry" placeholder="e.g. Real Estate" />
              <Field label="Preferred Contact Method" name="preferred" placeholder="WhatsApp, Email, Call" />
              <div className="md:col-span-2">
                <Field label="What do you want to automate?" name="automate" placeholder="Lead qualification, booking, support…" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="message" className="text-sm font-medium text-ink">Message</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us a bit more…" className="mt-2" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                <CalendarCheck className="h-4 w-4" /> {submitting ? "Sending…" : "Book Discovery Call"}
              </Button>
              <Button type="button" variant="gold" size="xl" asChild>
                <a href="#"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
              </Button>
              <Button type="button" variant="outlineBrand" size="xl" asChild>
                <a href="#"><PhoneCall className="h-4 w-4" /> Request Demo</a>
              </Button>
            </div>
          </form>

          <aside className="space-y-4">
            <ContactInfo icon={PhoneCall} label="Phone" value="+20 — coming soon" />
            <ContactInfo icon={Mail} label="Email" value="hello@sphinxai.example" />
            <ContactInfo icon={MessageCircle} label="WhatsApp" value="Chat with us" />
            <ContactInfo icon={MapPin} label="Based in" value="Cairo, Egypt" />
            <div className="rounded-2xl border border-border bg-gradient-to-br from-brand to-[#1E2A4A] p-6 text-white">
              <h3 className="font-display text-lg font-semibold">Talk to AI in 30 seconds</h3>
              <p className="mt-2 text-sm text-white/75">Skip the form — experience our voice agent live now.</p>
              <Button asChild variant="gold" size="lg" className="mt-4">
                <a href="/live-demo"><PhoneCall className="h-4 w-4" /> Talk To AI Now</a>
              </Button>
            </div>
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

function ContactInfo({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}