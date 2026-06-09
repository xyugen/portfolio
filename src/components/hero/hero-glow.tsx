"use client";

export default function HeroGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="animate-glow-breathe w-[600px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,127,255,0.15), rgba(0,212,255,0.05), transparent)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
