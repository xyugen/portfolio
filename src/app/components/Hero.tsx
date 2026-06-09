"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroGlow from "@/components/hero/hero-glow";
import { blurFade, fadeUp, staggerContainer, wordChild } from "@/lib/animations";

// Dynamic import for R3F — only load on client, skip SSR
const Hero3D = dynamic(() => import("@/components/hero/hero-3d"), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[300px]" />,
});

const headlineWords = ["Code", "meets", "craft."];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Breathing glow behind */}
      <HeroGlow />

      {/* Grid pattern background */}
      {/* Keep existing AnimatedGridPattern if desired, recolored */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-9xl font-extrabold leading-[0.95] tracking-[-0.03em]"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordChild}
                  className={
                    i === 2
                      ? "text-gradient-accent inline-block"
                      : "text-foreground inline-block"
                  }
                >
                  {word}
                  {i < headlineWords.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Filipino creative technologist. I engineer software that thinks,
              moves, and lasts.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-accent-electric hover:bg-accent-electric/90 text-white rounded-lg px-6 py-3 text-sm font-medium transition-all hover:shadow-[0_0_30px_rgba(43,127,255,0.3)]"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent-electric/30 text-foreground hover:bg-accent-electric/10 rounded-lg px-6 py-3 text-sm font-medium"
              >
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                  <ArrowDownToLine className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Element — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hidden lg:block h-[500px]"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent-electric/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
