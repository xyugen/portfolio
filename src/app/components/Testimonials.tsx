"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionReveal, staggerContainer } from "@/lib/animations";
import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      {/* Eyebrow */}
      <motion.p
        {...sectionReveal}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-12"
      >
        What People Say
      </motion.p>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="relative rounded-xl p-6 border"
            style={{
              backgroundColor: "hsl(var(--bg-elevated))",
              borderColor: "var(--border-subtle)",
            }}
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-4 left-5 text-6xl font-serif leading-none select-none"
              style={{ color: "hsl(var(--accent-electric))", opacity: 0.12 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative z-10 pt-6">
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  — {testimonial.name}
                </p>
                <p className="text-xs text-foreground/40">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
