"use client";

import { useEffect } from "react";
import { initLenis, getLenis } from "@/lib/lenis";
import { useStateStore } from "@/store/state-store";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setScrollVelocity = useStateStore((s) => s.setScrollVelocity);
  const setScrollY = useStateStore((s) => s.setScrollY);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = initLenis();

    lenis.on("scroll", ({ velocity, scroll }: { velocity: number; scroll: number }) => {
      setScrollVelocity(velocity);
      setScrollY(scroll);
    });

    return () => {
      lenis.destroy();
    };
  }, [setScrollVelocity, setScrollY]);

  return <>{children}</>;
}
