"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionReveal, staggerContainer } from "@/lib/animations";
import { techStack } from "./data";

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24">
      {/* Eyebrow */}
      <motion.p
        {...sectionReveal}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-12"
      >
        Tech Stack
      </motion.p>

      <div className="space-y-10">
        {techStack.map((category, catIndex) => (
          <motion.div
            key={category.label}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm font-medium text-foreground/40 mb-4 tracking-wide"
            >
              {category.label}
            </motion.h3>
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
              {category.items.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm font-mono text-foreground/60 border border-border-subtle bg-bg-elevated hover:border-accent-electric/30 hover:text-foreground transition-colors duration-200"
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: "hsl(var(--bg-elevated))",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
