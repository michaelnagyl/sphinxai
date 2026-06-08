interface Props {
  bars?: number;
  className?: string;
  animate?: boolean;
}

export function Soundwave({ bars = 32, className = "", animate = false }: Props) {
  return (
    <div className={`flex h-16 items-end justify-center gap-1 ${className}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.6)) * 70;
        return (
          <span
            key={i}
            className="w-1 rounded-full bg-gradient-to-b from-brand to-[#4670A8]"
            style={{
              height: `${h}%`,
              animation: animate ? `swPulse 1.2s ease-in-out ${i * 0.05}s infinite alternate` : undefined,
            }}
          />
        );
      })}
      <style>{`@keyframes swPulse{from{transform:scaleY(0.4);opacity:.6}to{transform:scaleY(1);opacity:1}}`}</style>
    </div>
  );
}