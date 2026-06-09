"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionReveal } from "@/lib/animations";
import BlurFade from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Github from "@/components/icons/Github";
import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

const Contact = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#2b7fff");

  useEffect(() => {
    setColor(theme === "dark" ? "#2b7fff" : "#1a5fd4");
  }, [theme]);

  return (
    <section
      id="contact"
      className="relative py-24 px-8 flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border"
      style={{
        backgroundColor: "hsl(var(--bg))",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Eyebrow */}
      <BlurFade delay={0.3} inView>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
          Get in Touch
        </p>
      </BlurFade>

      {/* Headline */}
      <BlurFade delay={0.5} inView>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight mb-4 max-w-xl leading-tight">
          Let&apos;s build something.
        </h2>
      </BlurFade>

      {/* Email */}
      <BlurFade delay={0.7} className="z-10" inView>
        <ConfettiButton variant="link" className="bg-transparent p-0 h-auto">
          <a
            href="mailto:renzyx.dev@gmail.com"
            className="text-xl md:text-2xl font-semibold text-foreground/50 hover:text-accent-electric transition-colors duration-300"
          >
            renzyx.dev@gmail.com
          </a>
        </ConfettiButton>
      </BlurFade>

      {/* Social row */}
      <BlurFade delay={0.9} className="z-10 mt-6" inView>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/xyugen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border hover:border-accent-electric/30 hover:shadow-[0_0_20px_rgba(43,127,255,0.1)] transition-all duration-200"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <Github className="size-6 text-foreground/60 hover:text-foreground" />
          </Link>
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-electric text-white text-sm font-medium hover:bg-accent-electric/90 transition-all hover:shadow-[0_0_30px_rgba(43,127,255,0.3)]"
          >
            Download Resume
            <ArrowDownToLine className="size-4" />
          </Link>
        </div>
      </BlurFade>

      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
};

export default Contact;
