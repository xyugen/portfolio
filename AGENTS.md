# AGENTS.md — Portfolio Codebase Guide

This file provides instructions and context for AI coding agents working in this repository.

---

## Project Overview

A personal portfolio site built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**. There is no backend, no API routes, and no server-side data fetching — all content is static. Components default to Server Components (RSC); `"use client"` is used only where interactivity or browser APIs require it. Deployed on Vercel.

---

## Commands

### Development
```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build (also type-checks via tsc)
npm run start      # Serve the production build
npm run lint       # Run ESLint (next lint — checks next/core-web-vitals rules)
```

### Testing
**There are no tests in this project.** No test framework (Jest, Vitest, Playwright, etc.) is installed. Do not add a test runner unless explicitly requested.

### Type-checking
```bash
npx tsc --noEmit   # Run TypeScript compiler without emitting files
```

### Linting a single file
```bash
npx next lint --file src/components/layouts/Header.tsx
```

---

## Repository Structure

```
src/
├── app/                    # Next.js App Router (pages, layout, metadata)
│   ├── layout.tsx          # Root layout — fonts, metadata, theme provider
│   ├── page.tsx            # Home page (/)
│   ├── not-found.tsx       # 404 page
│   ├── error.tsx           # Error boundary page
│   ├── robots.ts           # robots.txt generator
│   ├── globals.css         # Global CSS + Tailwind layers + CSS variables
│   └── components/         # Page-level section components
│       ├── About.tsx
│       ├── BentoProjects.tsx
│       ├── Contact.tsx
│       ├── Portfolio.tsx   # Root page layout (assembles sections)
│       └── data.tsx        # All static content (projects, about text)
├── components/             # Shared/reusable components
│   ├── animations/         # GSAP & Framer Motion animation wrappers
│   ├── icons/              # Custom SVG icon components
│   ├── layouts/            # Header, Footer
│   ├── magicui/            # Magic UI animated components
│   ├── projects/           # Bento card mock UI previews
│   └── ui/                 # shadcn/ui primitives (button, card, tooltip, …)
├── interface/              # Shared TypeScript interfaces
│   └── IconProps.ts
├── lib/
│   └── utils.ts            # cn() — clsx + tailwind-merge utility
└── store/
    └── state-store.ts      # Zustand global state store
```

---

## TypeScript

- **`strict: true`** is enabled in `tsconfig.json`. All strict checks apply (`strictNullChecks`, `noImplicitAny`, etc.).
- The path alias `@/` maps to `src/`. Always use it for imports outside the current directory.
- Prefer `interface` for component props and shared shapes:
  ```ts
  interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }
  ```
- Use `type` for unions, aliases, and Zustand store slices:
  ```ts
  type State = { isOpen: boolean };
  type Action = { setIsOpen: (v: boolean) => void };
  ```
- Avoid `any`. If unavoidable, add a comment explaining why.
- Use `React.CSSProperties` for inline style objects that include CSS custom properties.
- Shared interfaces that are used across multiple components belong in `src/interface/`.

---

## Code Style

### Component Patterns

Two valid patterns are used — be consistent with the file you are editing:

**Arrow function (preferred for page/section components):**
```tsx
const About = () => {
  return (...);
};
export default About;
```

**Function declaration (preferred for utility/magicui/layout components):**
```tsx
export default function BlurFade({ children, delay = 0 }: BlurFadeProps) {
  return (...);
}
```

- Use `React.forwardRef` + `.displayName` for shadcn/ui primitives (follow the existing pattern in `src/components/ui/`).
- Avoid `FC<Props>` generic typing — prefer direct prop destructuring with a typed interface.
- Name the exported component to match the file name (exception: shadcn primitives may use generic names).

### `"use client"` Directive

Place `"use client"` at the very top of any file that:
- Uses React hooks (`useState`, `useEffect`, `useRef`, etc.)
- Uses Framer Motion or GSAP
- Uses browser APIs (`window`, `document`, `navigator`)
- Uses Zustand store hooks

Server components (no interactivity, no hooks) should have **no** directive — keep them as RSC by default.

---

## Imports

No import-order linter is configured, but follow this observed convention:

1. React and Next.js (`"react"`, `"next/link"`, `"next/image"`, etc.)
2. Third-party libraries (`framer-motion`, `gsap`, `lucide-react`, etc.)
3. Internal `@/` alias imports, ordered roughly: `@/components/magicui` → `@/components/ui` → `@/components/layouts` → `@/components/`
4. Relative same-folder imports (`"./About"`, `"./data"`)

```tsx
// Example
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { about } from "./data";
```

---

## File Naming Conventions

| Location | Convention | Examples |
|---|---|---|
| `app/components/` | PascalCase `.tsx` | `About.tsx`, `BentoProjects.tsx` |
| `components/layouts/` | PascalCase `.tsx` | `Header.tsx`, `Footer.tsx` |
| `components/magicui/` | kebab-case `.tsx` | `blur-fade.tsx`, `word-fade-in.tsx` |
| `components/ui/` | kebab-case `.tsx` | `button.tsx`, `card.tsx` |
| `components/projects/` | kebab-case `.tsx` | `realtime-chat.tsx`, `discord-chat.tsx` |
| `components/animations/` | kebab-case `.tsx` | `animated-title.tsx` |
| `components/icons/` | PascalCase `.tsx` | `Github.tsx` |
| `interface/` | PascalCase `.ts` | `IconProps.ts` |
| `lib/`, `store/` | kebab-case `.ts` | `utils.ts`, `state-store.ts` |

---

## Styling

- **Tailwind CSS** is the sole styling mechanism. Do not add plain CSS unless modifying `globals.css`.
- Use the `cn()` utility from `@/lib/utils` to merge conditional class names:
  ```tsx
  import { cn } from "@/lib/utils";
  <div className={cn("base-class", isActive && "active-class", className)} />
  ```
- CSS custom properties (design tokens) live in `globals.css` under `:root` and `.dark`.
- For component variants, use `class-variance-authority` (`cva`) as shadcn/ui already does.
- `tailwindcss-animate` is available for entrance/exit animations via utility classes.
- Fonts: `Geist Sans` (`font-sans`) and `Geist Mono` (`font-mono`), loaded via the `geist` package in `layout.tsx`.

---

## Animations

- **Framer Motion** is the primary animation library. Use it for entrance animations, scroll-triggered fades, and interactive hover states.
- **GSAP** (via `@gsap/react`) is used only in `src/components/animations/hero.tsx`. Do not add GSAP elsewhere; prefer Framer Motion.
- Reusable animation wrappers live in `src/components/animations/` and `src/components/magicui/`.
- Prefer wrapping content in existing wrappers (e.g., `<BlurFade>`, `<WordFadeIn>`) over writing raw `motion.*` from scratch when a suitable wrapper exists.

---

## State Management

- **Zustand** is used for global UI state (e.g., whether the mobile menu is open).
- The store is at `src/store/state-store.ts`. Follow the existing `State` + `Action` type pattern.
- For local component state, use `useState` and `useReducer` as normal — do not reach for Zustand unless state is genuinely shared across distant components.

---

## Error Handling

- There are no API calls or async data fetching in this codebase — no try/catch is needed.
- Next.js file-based error handling is used:
  - `app/error.tsx` — React error boundary for runtime errors
  - `app/not-found.tsx` — 404 handling
- Always return cleanup functions from `useEffect` when adding event listeners:
  ```tsx
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  ```
- Guard against hydration mismatches with a `mounted` state check when rendering browser-only content:
  ```tsx
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  ```

---

## Key Dependencies at a Glance

| Package | Purpose |
|---|---|
| `next@14` | Framework (App Router) |
| `framer-motion` | Animations (primary) |
| `gsap` | Animations (hero only) |
| `tailwindcss` | Styling |
| `shadcn/ui` + Radix UI | UI primitives |
| `lucide-react` | Icons |
| `zustand` | Global state |
| `next-themes` | Dark/light mode |
| `clsx` + `tailwind-merge` | Class name merging (`cn()`) |
| `class-variance-authority` | Component variant API |
| `react-hot-toast` | Toast notifications |
| `canvas-confetti` | Confetti effect |

---

## Conventions Summary

- Strict TypeScript — no implicit `any`, no unchecked nulls.
- Tailwind for all styles; `cn()` for dynamic classes.
- `"use client"` only when needed; default to Server Components.
- Framer Motion for animations; GSAP only in the existing hero file.
- `interface` for props/shapes, `type` for unions/aliases.
- No test framework — do not add tests unless asked.
- No Prettier config — match the surrounding code style when editing.

---

## Design Context

### Users

**Primary audience:** Tech recruiters and hiring managers evaluating Renz Arias as a software engineering candidate. They arrive with a specific job to be done — assess his skills, personality, and the quality of his work in under 60 seconds. They are typically on desktop (common for serious evaluation) but must also work on mobile. They are technically literate but not necessarily developers themselves. The site must project capability and taste immediately, before they scroll.

**Secondary audience:** Potential collaborators or other developers who landed via GitHub or word of mouth. They care more about the technical depth behind the projects than the visual presentation.

### Brand Personality

**Three words: Minimal, precise, confident.**

The brand voice is understated and self-assured — it shows craft without explaining it. The typographic identity ("renzyx." with a period) is deliberate and consistent across header, footer, and the title animation. There is no logo, no photo (currently), no color — the design *is* the portfolio piece. The custom cursor, hidden native scrollbar, animated grid background, and confetti easter egg all signal that this developer pays attention to the details most skip.

**Emotional goal for visitors:** Impressed and intrigued. The site should feel like it was made by someone who genuinely cares about the craft of UI — not a CV dressed as a website.

### Aesthetic Direction

**Visual tone:** Restrained, dark-primary, animation-forward. Monochromatic — no color accent, by deliberate choice. The achromatic palette is not a limitation; it's the aesthetic. The only "color" is the slate gradient on the brand wordmark (`from-slate-950 to-slate-500` light / `from-slate-500 to-slate-100` dark), which acts as the singular brand signature.

**Reference:** [carlo.tl](https://carlo.tl) — a fellow Filipino developer portfolio. Key qualities to draw from: personal warmth within a technical container, animated character-level text reveals, Filipino SE identity stated plainly, clear navigation, content-first without feeling sparse.

**Anti-references (explicitly avoid):**
- Loud / neon / rainbow color palettes — incompatible with the achromatic design system
- Cluttered / busy layouts — every element must earn its space
- Corporate / enterprise aesthetics — this is a human portfolio, not a SaaS landing page
- Stock-photo-heavy designs — no photography; the craft of the UI *is* the visual content

**Theme:** Dark mode is the design-primary experience. Light mode must also work well, but dark is the intended hero presentation. All design decisions should be validated in dark mode first.

**Typography:** Geist Sans (`font-sans`) for all UI text. Geist Mono (`font-mono`) for code-adjacent contexts. No other typefaces. Scale runs large — the `text-8xl` / `text-9xl` display sizes are intentional and should be preserved.

**Motion:** Animation is a core part of the identity, not decoration. Entrance animations (BlurFade, WordFadeIn, character stagger), scroll-triggered reveals (Framer Motion `whileInView`), hover microinteractions on bento cards, and the custom flare cursor all contribute to the "impressed and intrigued" goal. Animations should feel smooth and intentional — never frantic or distracting.

### Design Principles

1. **The site is the portfolio piece.** Every interaction — cursor, scroll indicator, bento card hover, confetti — is a demonstration of skill. Design decisions should ask: "does this show craft?" If it's a default, consider whether a custom solution would be more expressive.

2. **Restraint is the statement.** Zero chroma, no logo, minimal copy. Adding color, imagery, or complexity requires strong justification. When in doubt, remove rather than add. Whitespace and dark space are positive design elements.

3. **Dark mode first.** All new UI should be designed and validated in dark mode (`bg-background = 0 0% 3.9%`). Light mode must also work, but dark is the primary experience.

4. **Typography does the heavy lifting.** With no color accent and no photography, type scale, weight, and spacing carry all visual hierarchy. Maintain the established scale extremes (`text-8xl` headlines, `text-9xl` footer wordmark) — they create drama without color.

5. **Animate with purpose, not performance.** Every animation should serve legibility (entrance timing guides reading order) or delight (hover states reward attention). Avoid animation for animation's sake. All motion should respect the existing Framer Motion patterns — use `whileInView + once: true` for scroll reveals, `BlurFade`/`WordFadeIn` wrappers for text, and direct `motion.*` only when no existing wrapper fits.
