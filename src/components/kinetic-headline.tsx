"use client";

import { motion, useReducedMotion } from "motion/react";

export function KineticHeadline({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className="flex flex-wrap gap-x-[0.3em] text-4xl font-semibold">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? undefined
              : { type: "spring", stiffness: 260, damping: 22, delay: 0.5 + i * 0.08 }
          }
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
