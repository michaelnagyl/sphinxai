import { PhoneFrame } from "./PhoneFrame";

export function DemoVideo({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <video
        src="/sphinx-demo-video.mp4"
        poster="/image-2276034329467581.jfif"
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
