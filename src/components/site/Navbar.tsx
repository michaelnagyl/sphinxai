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
      <div className="container-page flex h-24 items-center justify-between gap-4 md:h-[100px]">
        <Link
          to="/"
          className="flex shrink-0 items-center py-2"
          onClick={() => setOpen(false)}
          aria-label="SphinxAI Home"
        >
          <img
            src="/sphinx-logo.png"
            alt="SphinxAI - No Missed Calls. No Missed Business."
            className="block h-auto w-[185px] max-w-none object-contain sm:w-[205px] lg:w-[220px] xl:w-[240px]"
            width={400}
            height={120}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-brand-soft hover:text-brand xl:px-3.5"
              activeProps={{ className: "text-brand bg-brand-soft" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button asChild variant="ghostBrand" size="sm" className="shrink-0 px-3 text-sm">
            <a href="tel:+201039799207">Talk To AI</a>
          </Button>

          <Button asChild variant="hero" size="sm" className="shrink-0 px-4 text-sm">
            <a href="tel:+201286590009">Book Free Demo</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-ink lg:hidden"
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
