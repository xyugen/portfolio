"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionReveal } from "@/lib/animations";
import { aboutText } from "./data";

const About = () => {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col justify-center py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Eyebrow */}
        <motion.p
          {...sectionReveal}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium"
        >
          About
        </motion.p>

        {/* Body text */}
        <motion.p
          {...fadeUp}
          viewport={{ once: true, margin: "-80px" }}
          whileInView="animate"
          initial="initial"
          className="text-lg sm:text-xl text-foreground/80 leading-relaxed"
        >
          {aboutText.body}
        </motion.p>

        {/* Status */}
        <motion.div
          {...fadeUp}
          viewport={{ once: true, margin: "-80px" }}
          whileInView="animate"
          initial="initial"
          className="flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">
            Currently: <span className="text-foreground/70">{aboutText.status}</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
