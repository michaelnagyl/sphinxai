import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import logoFullAsset from "@/assets/sphinx-logo-full.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0F172A] text-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src={logoFullAsset.url}
              alt="SphinxAI — No Missed Calls. No Missed Business."
              className="h-20 w-auto brightness-0 invert"
              width={260}
              height={80}
            />
            <p className="mt-4 text-sm text-white/70">
              AI Voice Platform For Businesses.
            </p>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              SphinxAI helps businesses automate calls, qualify leads, book appointments, and improve
              customer communication using human-like AI voice agents.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Product</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link to="/solutions" className="hover:text-gold">Solutions</Link></li>
                <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
                <li><Link to="/live-demo" className="hover:text-gold">Live Demo</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-gold">About</Link></li>
                <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
                <li><Link to="/" className="hover:text-gold">Home</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Follow</div>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/company/sphinxai" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-gold hover:text-ink"><Linkedin className="h-4 w-4" /></a>
                <a href="https://www.facebook.com/profile.php?id=100066607550479&sk=about" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-gold hover:text-ink"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-gold hover:text-ink"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="TikTok" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-xs font-bold hover:bg-gold hover:text-ink">TT</a>
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