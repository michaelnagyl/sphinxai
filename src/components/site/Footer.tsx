import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, PhoneCall, MessageCircle } from "lucide-react";
import logoFullAsset from "@/assets/sphinx-logo-full.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0F172A] text-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="py-2">
              <img
                src={logoFullAsset.url}
                alt="SphinxAI — No Missed Calls. No Missed Business."
                className="block h-auto w-[240px] max-w-full object-contain brightness-0 invert md:w-[260px]"
                style={{ objectFit: "contain" }}
                width={260}
                height={120}
              />
            </div>
            <p className="mt-4 text-sm text-white/70">AI Voice Platform For Businesses.</p>
            <p className="mt-2 font-display text-base font-semibold text-gold">No Missed Calls. No Missed Business.</p>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              SphinxAI helps businesses automate calls, qualify leads, book appointments, and improve customer
              communication using human-like AI voice agents.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="tel:+201039799207" className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
                <PhoneCall className="h-4 w-4 text-gold" /> Call AI Demo
              </a>
              <a href="tel:+201286590009" className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
                <PhoneCall className="h-4 w-4 text-gold" /> Book Free Demo
              </a>
              <a
                href="https://wa.me/201039799207?text=Hi%20SphinxAI%2C%20I%27d%20like%20to%20try%20the%20AI%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/85 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp AI Demo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Product</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/solutions" className="hover:text-gold">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-gold">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/live-demo" className="hover:text-gold">
                    Live Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/about" className="hover:text-gold">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gold">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Follow</div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/sphinxflow.ai?igsh=YTNqZjVlOTVpd3Z3"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-gold hover:text-ink"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100066607550479&sk=about"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-gold hover:text-ink"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SphinxAI. All rights reserved.</div>
          <div>Built in Egypt — for the Middle East.</div>
        </div>
      </div>
    </footer>
  );
}
