/**
 * Reusable Framer Motion animation variants for the portfolio.
 *
 * Easing: [0.16, 1, 0.3, 1] — custom expo ease-out, matches the
 * existing easeExpo used in Experience.tsx.
 *
 * NOTE: Variants must NOT include `transition` at the top level —
 * Framer Motion treats top-level keys as variant names, not config.
 * Put transitions on the element directly or in animate/initial.
 */

const easeExpo = [0.16, 1, 0.3, 1] as const;

// ── Fade up — the workhorse entrance animation ──────────────────────
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeExpo },
  },
};

// ── Stagger container — wrap children that use fadeUp ───────────────
export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

// ── Scale in — for cards and image containers ───────────────────────
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeExpo },
  },
};

// ── Blur fade — for text reveals (hero headline, section titles) ────
export const blurFade = {
  initial: { opacity: 0, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ── Slide in from left ──────────────────────────────────────────────
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeExpo },
  },
};

// ── Slide in from right ─────────────────────────────────────────────
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeExpo },
  },
};

// ── Word stagger — for word-by-word text reveals ────────────────────
export const wordStagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

export const wordChild = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: easeExpo },
  },
};

// ── Section reveal — for whileInView sections ───────────────────────
export const sectionReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: easeExpo },
};

// ── Hover glow — for interactive elements ───────────────────────────
export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(43,127,255,0.15), 0 0 60px rgba(43,127,255,0.05)",
    borderColor: "rgba(43,127,255,0.3)",
    y: -2,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
