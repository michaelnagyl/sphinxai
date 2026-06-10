import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { MobileStickyCTA } from "./MobileStickyCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden bg-background">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileStickyCTA />
      <Toaster />
    </div>
  );
}