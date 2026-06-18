import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/industries", label: "Industries" },
  { to: "/solutions", label: "Solutions" },
  { to: "/packages", label: "Packages" },
  { to: "/live-demo", label: "Live Demo" },
  { to: "/presentation", label: "Presentation" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-page flex h-24 items-center justify-between md:h-[100px]">
        <Link
  to="/"
  className="flex shrink-0 items-center gap-3 py-2"
  onClick={() => setOpen(false)}
  aria-label="SphinxAI Home"
>
  <div className="relative h-9 w-9 shrink-0 md:h-10 md:w-10">
    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
    <span className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full bg-gold" />
    <span className="absolute right-0 top-3 h-2.5 w-2.5 rounded-full bg-gold" />
    <span className="absolute left-1/2 top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gold" />
    <span className="absolute bottom-0 left-1.5 h-3 w-3 rounded-full bg-gold" />
    <span className="absolute bottom-0 right-1.5 h-3 w-3 rounded-full bg-gold" />
  </div>

  <div className="leading-none">
    <div className="font-display text-xl font-extrabold tracking-wide text-ink md:text-2xl">
      SPHINX<span className="text-gold">AI</span>
    </div>
    <div className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:block">
      No Missed Calls. No Missed Business.
    </div>
  </div>
</Link>

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3.5 py-2 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-brand-soft hover:text-brand"
              activeProps={{ className: "text-brand bg-brand-soft" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghostBrand" size="sm" className="shrink-0 px-3 text-sm">
            <a href="tel:+201039799207">Talk To AI</a>
          </Button>
          <Button asChild variant="hero" size="sm" className="shrink-0 px-4 text-sm">
            <a href="tel:+201286590009">Book Free Demo</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-brand-soft hover:text-brand"
                activeProps={{ className: "text-brand bg-brand-soft" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-2">
              <a href="tel:+201286590009" onClick={() => setOpen(false)}>
                Book Free Demo
              </a>
            </Button>
            <Button asChild variant="outlineBrand" size="lg">
              <a href="tel:+201039799207" onClick={() => setOpen(false)}>
                Talk To AI Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
