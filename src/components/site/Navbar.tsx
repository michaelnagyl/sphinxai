import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/sphinx-logo.png.asset.json";

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
      <div className="container-page flex h-20 items-center justify-between md:h-[88px]">
        <Link to="/" className="flex items-center py-2" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="SphinxAI — AI Voice Agents"
            className="block h-auto w-[140px] object-contain md:w-[170px] lg:w-[190px]"
            style={{ objectFit: "contain" }}
            width={190}
            height={56}
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
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

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghostBrand" size="lg">
            <a href="tel:+201039799207">Talk To AI Now</a>
          </Button>
          <Button asChild variant="hero" size="lg">
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
              <a href="tel:+201286590009" onClick={() => setOpen(false)}>Book Free Demo</a>
            </Button>
            <Button asChild variant="outlineBrand" size="lg">
              <a href="tel:+201039799207" onClick={() => setOpen(false)}>Talk To AI Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}