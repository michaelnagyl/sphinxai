import type { ReactNode } from "react";

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] ${className}`}>
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3.5rem] bg-gradient-to-br from-brand/30 via-transparent to-gold/30 blur-3xl" />
      <div className="relative aspect-[9/19.5] rounded-[2.75rem] border-[12px] border-[#0F172A] bg-[#0F172A] shadow-[0_40px_100px_-25px_rgba(15,23,42,0.6)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0F172A]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}