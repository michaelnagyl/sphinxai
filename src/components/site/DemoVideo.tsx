import { PhoneFrame } from "./PhoneFrame";
import demoVideo from "@/assets/sphinx-demo.mp4.asset.json";
import demoPoster from "@/assets/demo-poster.jpg.asset.json";

export function DemoVideo({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <video
        src={demoVideo.url}
        poster={demoPoster.url}
        className="h-full w-full bg-black object-contain"
        playsInline
        controls
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </PhoneFrame>
  );
}
