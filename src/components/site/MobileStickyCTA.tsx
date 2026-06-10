import { PhoneCall, CalendarCheck } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="container-page flex gap-2 px-0">
        <a
          href="tel:+201039799207"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground shadow-[0_10px_30px_-12px_rgba(60,84,143,0.55)]"
        >
          <PhoneCall className="h-4 w-4" /> Talk To AI Now
        </a>
        <a
          href="tel:+201286590009"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm font-semibold text-brand"
        >
          <CalendarCheck className="h-4 w-4" /> Book Free Demo
        </a>
      </div>
    </div>
  );
}