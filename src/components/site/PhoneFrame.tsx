import type { ReactNode } from "react";

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/25 via-transparent to-gold/25 blur-2xl" />
      <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[10px] border-[#0F172A] bg-[#0F172A] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.55)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0F172A]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}