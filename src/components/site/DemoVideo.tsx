import { PhoneFrame } from "./PhoneFrame";

const DEMO_VIDEO_SRC = "/sphinx-demo-video.mp4";

export function DemoVideo({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <video
        className="h-full w-full bg-black object-contain"
        playsInline
        controls
        preload="metadata"
      >
        <source src={DEMO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </PhoneFrame>
  );
}