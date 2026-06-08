import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import videoAsset from "@/assets/sphinx-demo.mp4.asset.json";
import posterAsset from "@/assets/demo-poster.jpg.asset.json";

export function DemoVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <PhoneFrame className={className}>
      <video
        ref={ref}
        src={videoAsset.url}
        poster={posterAsset.url}
        className="h-full w-full object-cover"
        playsInline
        controls={playing}
        preload="none"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label="Play demo video"
          className="absolute inset-0 grid place-items-center bg-gradient-to-b from-black/10 via-transparent to-black/40 transition hover:bg-black/20"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-brand shadow-2xl ring-4 ring-white/20 transition group-hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </button>
      )}
    </PhoneFrame>
  );
}