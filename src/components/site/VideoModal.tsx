import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import videoAsset from "@/assets/sphinx-demo.mp4.asset.json";
import posterAsset from "@/assets/demo-poster.jpg.asset.json";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="SphinxAI demo video"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative w-full max-w-[380px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-[2rem] border-[10px] border-[#0F172A] bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={videoAsset.url}
            poster={posterAsset.url}
            controls
            autoPlay
            playsInline
            className="aspect-[9/19.5] w-full bg-black"
          />
        </div>
      </div>
    </div>
  );
}