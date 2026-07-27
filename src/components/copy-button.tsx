"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconCopy, IconCheck } from "@/assets/icons";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked (permissions/insecure context) — fail quietly, link is still clickable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="tap-scale inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground"
      title="Copy email"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="inline-flex"
        >
          {copied ? <IconCheck className="size-5" /> : <IconCopy className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
