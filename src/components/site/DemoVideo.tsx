import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

export function DemoVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => setErrored(true));
  };

  return (
    <PhoneFrame className={className}>
      {errored ? (
        <div className="absolute inset-0 grid place-items-center bg-black p-6 text-center text-sm text-white/80">
          Demo video could not be loaded.
        </div>
      ) : (
        <video
          ref={ref}
          src="/sphinx-demo-video.mp4"
          poster="/image-2276034329467581.jfif"
          className="h-full w-full object-contain bg-black"
          playsInline
          controls={playing}
          preload="auto"
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => console.warn("Demo video failed to load")}
        />
      )}

      {!playing && !errored && (
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
