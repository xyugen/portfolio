# Portfolio Refactor — Design Concept & Structure

**Author:** Hermes (kanban worker)
**Date:** 2026-06-09
**Status:** Draft — ready for implementation tasks
**Reference:** https://dale.omsimos.com (scroll storytelling, marquee strips, smooth transitions)

---

## 1. Design Concept: "Electric Depth"

### Core Idea

The portfolio should feel like looking into a **dark screen that glows from within** — deep, layered, electric. Not a flat webpage but a **spatial experience** where content floats in dark space, connected by subtle blue light. The identity says: "This person builds things that have depth."

### Three Design Pillars

1. **Electric Blue as Living Light** — `#2b7fff` is not a paint color, it's light itself. It appears as glows, gradients, halos, and pulses — never flat fills. The palette shifts between indigo (`#2b7fff`) and cyan (`#00d4ff`) to create a sense of energy and motion.

2. **Layered Depth** — Dark backgrounds create recessive space. Content surfaces float above with subtle elevation (borders, shadows, glass effects). The 3D hero element reinforces this spatial quality. Everything has a sense of z-position.

3. **Confident Restraint** — Short copy, generous whitespace, intentional animation. Nothing decorative. Every element earns its space. The portfolio proves taste through what it *doesn't* do as much as what it does.

---

## 2. Color System

### Palette Tokens

| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--bg` | `#080c14` | `#f0f4ff` | Page background |
| `--bg-elevated` | `#0f1623` | `#e8edf8` | Cards, panels, surfaces |
| `--bg-glass` | `rgba(15,22,35,0.6)` | `rgba(232,237,248,0.6)` | Glassmorphism overlays |
| `--text` | `#e8f0ff` | `#0d1421` | Primary text |
| `--text-muted` | `rgba(232,240,255,0.5)` | `rgba(13,20,33,0.5)` | Secondary text |
| `--text-dim` | `rgba(232,240,255,0.25)` | `rgba(13,20,33,0.25)` | Decorative text |
| `--accent` | `#2b7fff` | `#2b7fff` | Primary electric blue |
| `--accent-cyan` | `#00d4ff` | `#00b8e6` | Secondary cyan |
| `--accent-glow` | `rgba(43,127,255,0.15)` | `rgba(43,127,255,0.08)` | Glow effects |
| `--border` | `rgba(232,240,255,0.08)` | `rgba(13,20,33,0.08)` | Subtle borders |
| `--border-accent` | `rgba(43,127,255,0.2)` | `rgba(43,127,255,0.15)` | Accent borders |

### Gradient Definitions

```
--gradient-hero-glow: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,127,255,0.15), rgba(0,212,255,0.05), transparent)
--gradient-accent: linear-gradient(135deg, #2b7fff, #00d4ff)
--gradient-surface: linear-gradient(180deg, var(--bg-elevated), var(--bg))
```

### Signature Glow Effect

A soft, breathing radial gradient behind the hero headline:
- **Animation:** Opacity oscillates between 0.6 and 1.0 on a 6-second loop
- **Size:** 600px × 400px ellipse, centered behind headline
- **Colors:** `#2b7fff` at 15% opacity → `#00d4ff` at 5% opacity → transparent
- **Easing:** `ease-in-out` for organic feel

This same glow appears at reduced scale on:
- Project card hover states
- Section heading underlines
- CTA button hover
- The 3D wireframe mesh

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Fallback |
|---|---|---|---|
| Display / Hero | `Geist Sans` | 800 (extrabold) | system-ui |
| Headings | `Geist Sans` | 700 (bold) | system-ui |
| Body | `Geist Sans` | 400 (normal) | system-ui |
| Code / Labels | `Geist Mono` | 400–500 | monospace |

### Type Scale

| Element | Size (px) | Size (Tailwind) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero headline | 80–100 | `text-7xl` / `text-8xl` / `text-9xl` | 800 | 0.95 | -0.03em |
| Section title (h2) | 40–48 | `text-5xl` / `text-6xl` | 700 | 1.1 | -0.02em |
| Card title (h3) | 20–24 | `text-xl` / `text-2xl` | 600 | 1.3 | -0.01em |
| Body text | 16 | `text-base` | 400 | 1.6 | 0 |
| Small / Label | 12–13 | `text-xs` | 500 | 1.4 | 0.05em |
| Mono code | 14 | `text-sm` | 400 | 1.5 | 0 |

### Responsive Breakpoints for Hero

| Breakpoint | Hero Size |
|---|---|
| Mobile (< 640px) | `text-5xl` (48px) |
| Tablet (640–1024px) | `text-7xl` (72px) |
| Desktop (> 1024px) | `text-9xl` (96px) |

---

## 4. Layout Structure

### Page Architecture (Single Page)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER — fixed top, glass bg on scroll                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ renzyx.                                    [nav links]  │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ HERO — full viewport height                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  "Code meets craft."                    [3D TORUS]      │ │
│ │  Filipino creative technologist.                        │ │
│ │  I engineer software that thinks,                       │ │
│ │  moves, and lasts.                                      │ │
│ │                                                         │ │
│ │  [View My Work]  [Download Resume]                      │ │
│ │                                                         │ │
│ │  ═══════ breathing glow ═══════                         │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ABOUT — 60vh, centered text block                           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  "I'm Renz — a Filipino creative technologist           │ │
│ │   who builds across web, mobile, and AI.                │ │
│ │   Currently exploring the intersection of               │ │
│ │   software engineering and intelligent systems."        │ │
│ │                                                         │ │
│ │  Currently: Open to opportunities                       │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ EXPERIENCE — timeline                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  EXPERIENCE                                             │ │
│ │                                                         │ │
│ │  Feb 2026 — Present      Denso Ten Solutions Phils.    │ │
│ │  Pasig · On-site         Software Engineer Intern       │ │
│ │                          ──────────── bullet ───────────│ │
│ │                          ──────────── bullet ───────────│ │
│ │  ─────────────────────────────────────────────────────  │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ TECH STACK — marquee + badge groups                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  TECH STACK                                             │ │
│ │                                                         │ │
│ │  Languages   [TS] [Python] [Kotlin] [Dart] [Go]         │ │
│ │  Frameworks  [Next.js] [React] [Compose] [Flutter]      │ │
│ │  Tools       [Git] [Docker] [Figma] [Supabase]          │ │
│ │  AI / LLM    [OpenAI API] [DSPy] [LangChain]           │ │
│ │                                                         │ │
│ │  ════ MARQUEE: tech logos scrolling left ════           │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ PROJECTS — cinematic cards                                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  CREATIONS                                              │ │
│ │                                                         │ │
│ │  ┌──────────────────────┐  ┌──────────────────────┐    │ │
│ │  │  [preview image]     │  │  [preview image]     │    │ │
│ │  │                      │  │                      │    │ │
│ │  │  Log Data Translator │  │  Schedule Plotter    │    │ │
│ │  │  Python · Denso Ten  │  │  Next.js · Lucia     │    │ │
│ │  │  [View →]            │  │  [View →]            │    │ │
│ │  └──────────────────────┘  └──────────────────────┘    │ │
│ │                                                         │ │
│ │  ┌──────────────────────┐  ┌──────────────────────┐    │ │
│ │  │  [preview image]     │  │  [preview image]     │    │ │
│ │  │                      │  │                      │    │ │
│ │  │  PDS Attendance App  │  │  Realtime Chat       │    │ │
│ │  │  Android · Java      │  │  Solid · Golang      │    │ │
│ │  │  [View →]            │  │  [View →]            │    │ │
│ │  └──────────────────────┘  └──────────────────────┘    │ │
│ │                                                         │ │
│ │  ════ MARQUEE: project names scrolling ════             │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ TESTIMONIALS — horizontal cards                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  WHAT PEOPLE SAY                                        │ │
│ │                                                         │ │
│ │  ┌────────────────┐ ┌────────────────┐ ┌─────────────┐ │ │
│ │  │ "Quote..."     │ │ "Quote..."     │ │ "Quote..."  │ │ │
│ │  │ — Name, Role   │ │ — Name, Role   │ │ — Name, Role│ │ │
│ │  └────────────────┘ └────────────────┘ └─────────────┘ │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ CONTACT — centered CTA                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  Let's build something.                                 │ │
│ │                                                         │ │
│ │  [renzyx.dev@gmail.com]                                 │ │
│ │                                                         │ │
│ │  [GitHub]  [LinkedIn]  [Download Resume]                │ │
│ │                                                         │ │
│ │  ═══════ particles background ═══════                   │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — minimal                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  renzyx.                           © 2026 Renz Arias    │ │
│ │                                     [theme toggle]      │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Section-by-Section Design Spec

### 5.1 Header

**Position:** Fixed top, full width
**Background:** Transparent on load → glass effect (`backdrop-blur-xl` + `--bg-glass`) on scroll (> 50px)
**Content:**
- Left: Brand wordmark "renzyx." in gradient text (`from-slate-950 to-slate-500` dark / `from-slate-500 to-slate-100` light)
- Right: Navigation links — About, Experience, Projects, Contact — as text links with subtle hover underline animation
- Mobile: Hamburger menu → slide-in panel from right

**Animation:**
- Wordmark: character-by-character stagger reveal on page load (0.05s per char)
- Nav links: fade-in with 0.8s delay after wordmark
- Scroll transition: bg opacity interpolates from 0 to 0.8 over first 100px of scroll

**Component:** `Header.tsx` — refactor existing, add scroll-aware glass bg

---

### 5.2 Hero

**Height:** `100vh` (full viewport)
**Layout:** Two-column on desktop (text left, 3D right), stacked on mobile

**Content:**
- Headline: "Code meets craft." — `text-9xl font-extrabold` with gradient text (`--gradient-accent`)
- Subheadline: "Filipino creative technologist. I engineer software that thinks, moves, and lasts." — `text-xl text-muted`
- CTAs:
  - Primary: "View My Work" — solid accent bg, rounded-lg, scrolls to #projects
  - Secondary: "Download Resume" — ghost variant with accent border

**Background Elements:**
1. **Breathing Glow:** Radial gradient ellipse behind headline, animated opacity (6s loop)
2. **3D Element:** React Three Fiber icosahedron/torus, positioned right on desktop, behind text on mobile
   - Wireframe material with `#2b7fff` edge color + subtle glow
   - Idle: slow rotation (0.001 rad/frame)
   - Scroll-responsive: rotation speed scales with Lenis scroll velocity
   - Camera: perspective, slightly off-center for depth
3. **Grid Pattern:** Existing `AnimatedGridPattern` — keep but recolor to accent blue at 5% opacity

**Animation Sequence (page load):**
1. 0.0s: Background glow fades in (1s)
2. 0.3s: Headline words stagger in (BlurFade, 0.1s per word)
3. 0.8s: Subheadline fades up
4. 1.2s: CTA buttons fade up
5. 1.5s: 3D element fades in and begins rotating

**New Dependencies:**
- `@react-three/fiber`
- `@react-three/drei`
- `three`
- `lenis`

**New Components:**
- `src/components/hero/hero-3d.tsx` — R3F canvas with scroll-responsive mesh
- `src/components/hero/hero-glow.tsx` — animated breathing gradient
- `src/app/components/Hero.tsx` — hero section composition

---

### 5.3 About

**Height:** ~60vh, centered vertically
**Layout:** Single centered text column, max-width 640px

**Content:**
- Eyebrow label: "ABOUT" — `text-xs uppercase tracking-widest text-muted`
- Body: 2-3 sentences, first person, grounded. Example:
  > "I'm Renz — a Filipino creative technologist who builds across web, mobile, and AI. I care about clean code, sharp interfaces, and software that actually works. Currently exploring the intersection of engineering and intelligent systems."
- "Currently:" line — `text-sm text-muted` with a pulsing dot indicator

**Animation:** Framer Motion `whileInView` — paragraph fades up with staggered lines (0.15s delay per line)

**Component:** Refactor existing `About.tsx`

---

### 5.4 Experience

**Layout:** Timeline with left column (dates) and right column (content)
**Grid:** `grid-cols-[160px_1fr]` on desktop, single column on mobile

**Content per entry:**
- Left: Date range with "Present" indicator (pulsing green dot, keep existing pattern)
- Right: Company name (bold), role (muted), location/type (dim), bullet points with dash markers

**Animation:** Stagger on scroll — each entry fades up with 0.15s delay between entries. Bullets stagger within each entry.

**Component:** Refactor existing `Experience.tsx` — update colors to new palette

---

### 5.5 Tech Stack

**Layout:** Badge groups with category labels + marquee strip below

**Categories:**
1. **Languages** — TypeScript, Python, Kotlin, Dart, Go, JavaScript, Java
2. **Frameworks** — Next.js, React, Jetpack Compose, Flutter, Solid, SvelteKit, Tailwind
3. **Tools** — Git, Docker, Figma, Supabase, PowerApps, Dataverse, MongoDB
4. **AI / LLM** — OpenAI API, DSPy, LangChain (if applicable, otherwise omit)

**Badge Design:**
- Pill shape: `rounded-full px-3 py-1`
- Background: `--bg-elevated` with `--border` border
- Text: `text-sm font-mono text-muted`
- Hover: border glows accent, text brightens
- Icon: small tech icon (lucide or custom SVG) + label

**Marquee Strip:**
- Continuous horizontal scroll of tech icons/logos
- Direction: left-to-right for languages, right-to-left for tools (visual counterbalance)
- Speed: ~40px/second
- Implementation: CSS animation with `translateX` loop, duplicated content for seamless wrap
- Opacity: 30% — decorative, not primary content

**Animation:** Badge groups fade in per category on scroll. Marquee runs continuously once visible.

**New Component:** `src/app/components/TechStack.tsx`, `src/components/magicui/marquee.tsx`

---

### 5.6 Projects

**Layout:** 2-column grid of large cards on desktop, single column on mobile
**Card size:** ~400px tall

**Card Design:**
```
┌─────────────────────────────────┐
│  [Preview image / abstract]     │  ← 55% of card height
│  ─────────────────────────────  │
│  Project Name                   │  ← h3, text-xl font-semibold
│  Short description (2 lines)    │  ← text-sm text-muted
│  [TS] [Next.js] [Supabase]     │  ← tech badges
│  View Project →                 │  ← accent text link
└─────────────────────────────────┘
```

**Card States:**
- Default: `--bg-elevated` background, `--border` border, subtle shadow
- Hover: border shifts to `--border-accent`, shadow expands with accent glow, card lifts 4px (`translate-y-[-4px]`), preview image subtle parallax shift
- Focus: visible focus ring in accent color

**Featured Projects (6):**
Source from GitHub + resume. Prioritize:
1. Log Data Translator (internship — Denso Ten)
2. PDS Attendance Management App (Android)
3. BulSU Schedule Plotter (Next.js)
4. Realtime Chat (Solid + Go)
5. PowerApps Intern Timekeeping System
6. Revel Bot (Discord.js)

**Marquee Divider:**
Between projects section and testimonials — a horizontal scrolling strip of all project names in `text-dim` with em-dash separators.

**Animation:** Each card fades in + scales from 0.95 on scroll enter. Stagger 0.2s between cards. Preview images have subtle parallax (shift 20px on scroll).

**Component:** Refactor `BentoProjects.tsx` — replace bento grid with 2-col cinematic cards

---

### 5.7 Testimonials

**Layout:** Horizontal scroll or 3-column grid on desktop, stacked on mobile

**Card Design:**
```
┌─────────────────────────────────┐
│  "                             │
│  Quote text here, two or       │
│  three lines max.              │
│  "                             │
│                                 │
│  — Person Name                 │
│    Role, Company               │
└─────────────────────────────────┘
```

**Style:** `--bg-elevated` background, no border (or very subtle), large opening quotation mark in accent color at 20% opacity as decorative element

**Content:** Placeholder structure with 3 slots. Real quotes to be filled in later.

**Animation:** Stagger fade-up on scroll, 0.2s delay between cards

**New Component:** `src/app/components/Testimonials.tsx`

---

### 5.8 Contact

**Layout:** Centered, full-width section with particle background
**Content:**
- Eyebrow: "GET IN TOUCH" — `text-xs uppercase tracking-widest text-muted`
- Headline: "Let's build something." — `text-5xl md:text-6xl font-bold`
- Email: `renzyx.dev@gmail.com` — `text-2xl`, accent color on hover, clickable `mailto:`
- Social row: GitHub, LinkedIn icons — large (32px), accent glow on hover
- Resume CTA: "Download Resume" button — solid accent, prominent

**Background:** Particles (keep existing `Particles` component) — recolored to accent blue at 30% opacity

**Confetti:** Keep existing confetti easter egg on email click

**Animation:** Staggered reveal — eyebrow → headline → email → social icons, 0.3s delay each

**Component:** Refactor existing `Contact.tsx`

---

### 5.9 Footer

**Layout:** Full-width, horizontal flex
**Content:**
- Left: "renzyx." wordmark (gradient text, `text-5xl`)
- Right: Copyright + theme toggle

**Style:** Top border (`--border`), generous padding (`py-12 px-8`)

**Component:** Minor refactor of existing `Footer.tsx`

---

### 5.10 Blog (Stub)

**Route:** `/blog` — `app/blog/page.tsx`
**Content:** "Coming Soon" centered page with accent glow
**Homepage card:** Optional small card in projects section or standalone CTA

**Component:** New `src/app/blog/page.tsx` (stub)

---

## 6. Animation System

### Reusable Variants (Framer Motion)

Create `src/lib/animations.ts`:

```typescript
// Fade up — the workhorse
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

// Stagger container
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// Scale in — for cards
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

// Blur fade — for text reveals
export const blurFade = {
  initial: { opacity: 0, filter: "blur(8px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" },
};
```

### Lenis Smooth Scroll Setup

```typescript
// src/lib/lenis.ts
import Lenis from "lenis";

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}
```

Integrate in `layout.tsx` — initialize Lenis in a client component wrapper. Expose scroll velocity via Zustand or context for the 3D element to consume.

### Scroll Velocity for 3D

```typescript
// Lenis emits scroll events with velocity
// Pass velocity to R3F via zustand or react context
// 3D element: rotation speed = baseSpeed + (velocity * 0.01)
```

---

## 7. Component Architecture

### New File Structure

```
src/
├── app/
│   ├── layout.tsx              # Updated: Lenis provider, new fonts
│   ├── page.tsx                # Updated: new section composition
│   ├── globals.css             # Updated: new color tokens, glow keyframes
│   ├── blog/
│   │   └── page.tsx            # NEW: blog stub
│   └── components/
│       ├── Portfolio.tsx        # Updated: new section order
│       ├── Hero.tsx             # NEW: hero section
│       ├── About.tsx            # Refactored
│       ├── Experience.tsx       # Refactored
│       ├── TechStack.tsx        # NEW: tech stack + marquee
│       ├── Projects.tsx         # NEW: cinematic project cards
│       ├── Testimonials.tsx     # NEW: testimonial cards
│       ├── Contact.tsx          # Refactored
│       └── data.tsx             # Updated: new content
├── components/
│   ├── hero/
│   │   ├── hero-3d.tsx          # NEW: R3F scene
│   │   └── hero-glow.tsx        # NEW: breathing gradient
│   ├── magicui/
│   │   ├── marquee.tsx          # NEW: horizontal marquee
│   │   └── (existing components)
│   ├── layouts/
│   │   ├── Header.tsx           # Refactored: glass bg, scroll-aware
│   │   └── Footer.tsx           # Minor update
│   └── (existing)
├── lib/
│   ├── animations.ts            # NEW: reusable Framer Motion variants
│   └── lenis.ts                 # NEW: Lenis setup + scroll velocity
└── store/
    └── state-store.ts           # Updated: add scroll velocity state
```

### Dependencies to Add

```json
{
  "lenis": "^1.0.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0",
  "three": "^0.160.0",
  "@types/three": "^0.160.0"
}
```

### Dependencies to Remove

```json
{
  "gsap": "^3.12.5",           // Replace with Framer Motion everywhere
  "@gsap/react": "^2.1.1"      // No longer needed
}
```

Keep `gsap` only if the hero text animation specifically requires it; otherwise migrate fully to Framer Motion.

---

## 8. Dark/Light Mode

### Implementation

- Default: **dark mode** (set in `ThemeProvider`: `defaultTheme="dark"`)
- Toggle: Animated icon swap (sun ↔ moon) with rotation transition
- Storage: `localStorage` via `next-themes`
- All colors use CSS custom properties that swap via `.dark` class

### Light Mode Adjustments

- Hero glow: reduce opacity by 50% (too bright on white)
- 3D element: switch wireframe color to darker blue (`#1a5fd4`)
- Particles: reduce count by 50%
- Cards: use subtle shadow instead of border for elevation

---

## 9. Responsive Strategy

| Breakpoint | Layout Changes |
|---|---|
| < 640px (mobile) | Single column, hero stacked, no 3D (or simplified), hamburger nav, smaller type scale |
| 640–1024px (tablet) | Hero text + 3D side by side, 1-col projects, nav links visible |
| > 1024px (desktop) | Full layout, 2-col projects, 3-col testimonials, large type scale |

### Performance Considerations

- 3D element: Only load on desktop (> 1024px). Use `dynamic()` import with `ssr: false` for R3F.
- Lenis: Only initialize on client side (wrap in `useEffect`)
- Images: Use Next.js `Image` component with proper sizing
- Fonts: Already using `geist` package — no change needed

---

## 10. Design Tokens (Tailwind Config Extension)

Add to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      bg: {
        DEFAULT: '#080c14',
        elevated: '#0f1623',
        glass: 'rgba(15,22,35,0.6)',
      },
      accent: {
        DEFAULT: '#2b7fff',
        cyan: '#00d4ff',
        glow: 'rgba(43,127,255,0.15)',
      },
    },
    animation: {
      'glow-breathe': 'glow-breathe 6s ease-in-out infinite',
      'marquee': 'marquee 30s linear infinite',
    },
    keyframes: {
      'glow-breathe': {
        '0%, 100%': { opacity: '0.6' },
        '50%': { opacity: '1' },
      },
      'marquee': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
}
```

---

## 11. Accessibility

- All interactive elements have visible focus states (accent ring)
- Color contrast: `#e8f0ff` on `#080c14` = 15.8:1 (AAA)
- Reduced motion: respect `prefers-reduced-motion` — disable Lenis, reduce animation durations to 0.01s, hide 3D element
- Semantic HTML: proper heading hierarchy, landmark regions, alt text
- Keyboard navigation: all interactive elements reachable via Tab

---

## 12. SEO & Metadata

Update `layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: "Renz Arias — Creative Technologist",
  description: "Filipino creative technologist building across web, mobile, and AI. Software engineer crafting clean, efficient, and beautiful digital experiences.",
  openGraph: {
    title: "Renz Arias — Creative Technologist",
    description: "Filipino creative technologist building across web, mobile, and AI.",
    url: "https://renzyx.is-a.dev",
    siteName: "Renz Arias",
    locale: "en-US",
    type: "website",
  },
};
```

---

## 13. Migration Strategy

### Phase 1: Foundation (this design doc → implementation task)
- Set up new color tokens in `globals.css` and `tailwind.config.ts`
- Install new dependencies (`lenis`, `@react-three/fiber`, etc.)
- Create `src/lib/animations.ts` and `src/lib/lenis.ts`
- Update `layout.tsx` with Lenis provider

### Phase 2: Hero Rebuild
- Build `hero-3d.tsx` and `hero-glow.tsx`
- Build new `Hero.tsx` section
- Wire up scroll velocity to 3D element

### Phase 3: Content Sections
- Refactor About, Experience, Contact
- Build new TechStack, Projects, Testimonials
- Update `data.tsx` with new content

### Phase 4: Polish
- Responsive testing
- Performance audit (Lighthouse)
- Accessibility check
- Blog stub

---

## 14. Reference Sites

| Site | What to Learn |
|---|---|
| [dale.omsimos.com](https://dale.omsimos.com) | Scroll storytelling, marquee strips, smooth transitions, card layouts |
| [carlo.tl](https://carlo.tl) | Personal warmth, character-level text reveals, Filipino SE identity |

---

## 15. Wireframe Notes

### Hero Wireframe (Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  renzyx.                                         About  Projects    │
│                                                                      │
│                                                                      │
│                                                                      │
│                                                                      │
│   Code meets craft.                            ┌──────────────┐     │
│                                                │              │     │
│   Filipino creative technologist.              │   ◇  3D     │     │
│   I engineer software that thinks,             │  wireframe  │     │
│   moves, and lasts.                            │   torus     │     │
│                                                │              │     │
│   [View My Work]  [Download Resume]            └──────────────┘     │
│                                                                      │
│              ░░░░░ breathing glow ░░░░░                              │
│                                                                      │
│                                                                      │
│                                              ↓ scroll indicator       │
└──────────────────────────────────────────────────────────────────────┘
```

### Projects Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   CREATIONS                                                          │
│                                                                      │
│   ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│   │                             │  │                             │  │
│   │   [gradient placeholder]    │  │   [gradient placeholder]    │  │
│   │                             │  │                             │  │
│   │   ─────────────────────     │  │   ─────────────────────     │  │
│   │   Log Data Translator       │  │   BulSU Schedule Plotter    │  │
│   │   Python tool for parsing   │  │   Class scheduling web app  │  │
│   │   Denso Ten .mot files      │  │   for BulSU instructors     │  │
│   │                             │  │                             │  │
│   │   [Python] [Denso Ten]      │  │   [Next.js] [Lucia] [Zustand]│  │
│   │   View Project →            │  │   View Project →            │  │
│   └─────────────────────────────┘  └─────────────────────────────┘  │
│                                                                      │
│   ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│   │   PDS Attendance App        │  │   Realtime Chat             │  │
│   │   Android · Java            │  │   Solid · Golang            │  │
│   └─────────────────────────────┘  └─────────────────────────────┘  │
│                                                                      │
│   ─── Log Data Translator ─── Schedule Plotter ─── PDS App ────     │
│            (continuous marquee of project names)                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 16. Decisions for Downstream Tasks

1. **GSAP removal:** Unless the hero text animation specifically needs GSAP's timeline capabilities, migrate to Framer Motion entirely. The existing `hero.tsx` uses GSAP timeline for the intro sequence — this can be replicated with Framer Motion's `variants` and `staggerChildren`.

2. **3D complexity:** Start with a simple wireframe icosahedron. If performance is good, add post-processing (bloom). If R3F causes issues, fall back to a CSS 3D transform element.

3. **Marquee implementation:** Pure CSS animation (translateX loop with duplicated content) is simpler and more performant than JS-based solutions. Use the CSS approach.

4. **Testimonials content:** Use placeholder quotes until real ones are available. Structure is more important than content at this stage.

5. **Blog route:** Pure stub. No MDX setup needed yet — just a "Coming Soon" page. MDX/CMS integration is a future task.

6. **Custom cursor:** Keep the existing flare cursor but recolor to accent blue. Optionally add a glow effect on hover over links.

---

---

## 17. Visual Mockups

Generated reference images showing the target aesthetic:

- **Hero mockup:** `docs/design/hero-mockup.png` — full-viewport hero with breathing blue glow, 3D wireframe element, bold headline, and dual CTA buttons
- **Projects mockup:** `docs/design/projects-mockup.png` — cinematic 2-column project cards with gradient placeholders, tech badges, and marquee strip

These are **directional references**, not pixel-perfect specs. Implementation should follow the design tokens and layout specs in this document, using these images for mood and proportion guidance.

---

*This document serves as the design specification for tasks t_8f2e9582 (implementation) and t_18f4806b (content integration). All design decisions above are informed by the portfolio brief (t_1703d170), the existing codebase analysis, and the reference site study.*
