---
name: frontend-design-mastery
description: >-
  Complete frontend design engineering skill with anti-AI-slop enforcement, 
  3-layer architecture (Foundations → Components → Taste), and multi-stack support.
  Replaces ui-ux-pro-max. Use when designing UI, building components, choosing 
  styles/colors/typography, reviewing frontend code, or building any user-facing 
  interface. 67 styles, 96 palettes, 57 font pairings, 13 stacks, strict taste rules.
---

# Frontend Design Mastery

Complete design engineering system for web and mobile applications. 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types, and 13 technology stacks — governed by a strict anti-AI-slop taste layer.

> **Philosophy**: Every interface must have a **bold, intentional aesthetic direction** — never generic, never default, never "looks like every other AI-generated site." Production-grade code with extraordinary creative vision and *obsessive craft*.

---

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

Install if needed:

- **macOS:** `brew install python3`
- **Ubuntu/Debian:** `sudo apt update && sudo apt install python3`
- **Windows:** `winget install Python.Python.3.12`

---

## When to Apply

Activate this skill when the user is:

- Designing new UI components, pages, or screens
- Choosing color palettes, typography, or visual styles
- Building landing pages, dashboards, or data visualizations
- Reviewing frontend code for UX, accessibility, or design quality
- Implementing responsive layouts or design systems
- Asking about frontend best practices in any stack

---

## Architecture: The Unified Hybrid Design Engine

This skill operates as a complete design operating system. It orchestrates Foundation Tokens, Multi-Direction Ideation, Aesthetic Dials, Component Assembly, Real-Browser Verification, and Strict Gatekeeping.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 3: THE CRAFT & POLISH ENGINE (Anti-AI-Slop & Quality Enforcement)    │
│  • Core Manifesto: references/taste-and-polish.md                           │
│  • Final Audit Checklist: references/anti-slop-checklist.md                 │
│  • Motion & Spring Physics: references/motion-choreography.md               │
│  • UX Copywriting & Clarity: references/micro-copy-ux-writing.md             │
│  • Visual Verifier Loop: references/visual-verifier.md                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  LAYER 2: COMPONENTS, MULTI-DIRECTIONS & DESIGN SYSTEMS                     │
│  • Master Orchestrator CLI: scripts/orchestrate.py                          │
│  • Interactive Aesthetic Dials: references/tweakable-dials.md               │
│  • 3-Direction Ideation (oil-ui style): references/design-directions.md     │
│  • Deterministic A11y (WCAG AAA): references/a11y-perfection.md             │
│  • Core Web Vitals Guard: references/web-vitals-guard.md                    │
│  • State Matrix (5-state architecture): references/state-matrix-edge-cases.md
│  • Spatial Ergonomics & Thumb Zone: references/spatial-ergonomics.md        │
│  • Enterprise Design Systems: references/enterprise-design-systems.md       │
│  • Clean Component Architecture: references/clean-component-architecture.md │
│  • Figma-to-Code Mapping: references/figma-to-code.md                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  LAYER 1: FOUNDATIONS & SYSTEM PERSISTENCE                                  │
│  • Spacing Rhythm, Type Scale, Colors: references/foundations.md            │
│  • Token & System Persistence: scripts/design_system.py (MASTER.md)         │
│  • Curated Resources Directory: references/curated-resources.md             │
│  • Craftsmanship Skill Radar: references/craft-roadmap.md                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Layer 1: Foundations & Design Tokens

Every design output MUST be built on these primitives:

**Spacing Rhythm (4px base):**

| Token           | Value             | Usage                       |
|-----------------|-------------------|-----------------------------|
| `--space-1`     | `4px` / `0.25rem` | Tight gaps, icon padding    |
| `--space-2`     | `8px` / `0.5rem`  | Inline spacing, icon gaps   |
| `--space-3`     | `12px` / `0.75rem`| Compact padding             |
| `--space-4`     | `16px` / `1rem`   | Standard padding            |
| `--space-6`     | `24px` / `1.5rem` | Section padding             |
| `--space-8`     | `32px` / `2rem`   | Large gaps                  |
| `--space-12`    | `48px` / `3rem`   | Section margins             |
| `--space-16`    | `64px` / `4rem`   | Hero/section spacing        |

**Type Scale (1.250 — Major Third):**

| Token            | Size     | Weight  | Usage                    |
|------------------|----------|---------|--------------------------|
| `--text-xs`      | `12px`   | 400     | Captions, labels         |
| `--text-sm`      | `14px`   | 400     | Secondary text           |
| `--text-base`    | `16px`   | 400     | Body text                |
| `--text-lg`      | `20px`   | 500     | Lead paragraphs          |
| `--text-xl`      | `24px`   | 600     | Card titles              |
| `--text-2xl`     | `30px`   | 700     | Section headings         |
| `--text-3xl`     | `36px`   | 700     | Page titles              |
| `--text-4xl`     | `48px`   | 800     | Hero headings            |
| `--text-5xl`     | `60px`   | 800     | Display headings         |

**Elevation System (logical shadow progression):**

| Token           | Value                                    | Usage                    |
|-----------------|------------------------------------------|--------------------------|
| `--shadow-xs`   | `0 1px 2px rgba(0,0,0,0.04)`            | Subtle lift, inputs      |
| `--shadow-sm`   | `0 2px 4px rgba(0,0,0,0.06)`            | Resting cards            |
| `--shadow-md`   | `0 4px 8px rgba(0,0,0,0.08)`            | Hovered cards, buttons   |
| `--shadow-lg`   | `0 8px 16px rgba(0,0,0,0.10)`           | Dropdowns, popovers      |
| `--shadow-xl`   | `0 16px 32px rgba(0,0,0,0.12)`          | Modals, dialogs          |

> Shadow transitions must go exactly ONE level up on hover (e.g., `--shadow-sm` → `--shadow-md`). Never skip levels. Never apply `--shadow-lg` or higher as a resting state on a card.

**Semantic Color Tokens (MANDATORY — raw Tailwind colors are FORBIDDEN):**

```css
:root {
  /* Surface hierarchy */
  --color-surface-primary: /* your bg */;
  --color-surface-secondary: /* subtle bg */;
  --color-surface-tertiary: /* input bg */;

  /* Content hierarchy */
  --color-on-surface: /* primary text */;
  --color-on-surface-secondary: /* secondary text */;
  --color-on-surface-tertiary: /* placeholder, disabled */;

  /* Interactive */
  --color-primary: /* brand, primary action */;
  --color-primary-hover: /* primary hover state */;
  --color-on-primary: /* text on primary */;

  /* Feedback */
  --color-success: /* confirmations */;
  --color-warning: /* warnings */;
  --color-error: /* errors, destructive */;
  --color-info: /* informational */;

  /* Borders & Dividers */
  --color-border: /* default border */;
  --color-border-hover: /* border on hover */;
  --color-divider: /* section dividers */;
}
```

For the full foundations specification, read `references/foundations.md`.

### Layer 2: Components & Pattern Library

This layer uses the BM25 search engine across the data CSVs. See [Search Reference](#search-reference) and [Workflow](#workflow) for details.

### Layer 3: Taste & Polish (Anti-AI-Slop)

**This layer is the gatekeeper. Nothing ships without passing it.** See [Anti-AI-Slop Blacklist](#anti-ai-slop-blacklist-strictly-enforced) and the deep-dive at `references/taste-and-polish.md`.

---

## Workflow

Follow these steps IN ORDER for every UI/design task:

### Step 0: ASK STACK (MANDATORY — DO THIS FIRST)

Before writing ANY code or making ANY design recommendation, ask the user which stack they want:

```
Which technology stack should I use?

1. React / Next.js + Tailwind CSS + shadcn/ui
2. Vue / Nuxt + Tailwind CSS
3. Svelte / SvelteKit + Tailwind CSS
4. Pure HTML / CSS / JS (vanilla)
5. React Native / Flutter (mobile)
6. Other (specify)
```

> **CRITICAL**: Do not assume a stack. Do not default to React. ASK FIRST. All code, imports, component patterns, and state management must be adapted to the chosen stack. If the project already has a stack visible in the codebase, confirm it with the user.

### Step 1: DESIGN THINKING — Bold Aesthetic Direction

Before writing any code, commit to a clear creative direction:

1. **Purpose**: What problem does this interface solve? Who uses it?
2. **Aesthetic Tone**: Pick a BOLD direction — don't be timid:
   - Brutally minimal · Maximalist chaos · Retro-futuristic · Organic/natural
   - Luxury/refined · Playful/toy-like · Editorial/magazine · Brutalist/raw
   - Art deco/geometric · Soft/pastel · Industrial/utilitarian · Neo-gothic
   - Or invent your own — the key is **intentionality, not intensity**
3. **The Memorable Thing**: What's the ONE element someone will remember? A dramatic animation? An unusual color? A surprising layout? Name it explicitly.
4. **Constraints**: Technical requirements (framework, performance, a11y)

> **Bold maximalism and refined minimalism both work. The safe, forgettable middle — generic, "looks like every other AI-generated site" — NEVER works.**

### Step 2: GENERATE DESIGN SYSTEM

Use the search engine to get comprehensive recommendations:

```bash
python3 scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This searches 5 domains in parallel (product, style, color, landing, typography), applies reasoning rules, and returns a complete design system.

**Example:**

```bash
python3 scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

**To persist for cross-session use:**

```bash
python3 scripts/search.py "<query>" --design-system --persist -p "Project Name"
python3 scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

This creates `design-system/<project>/MASTER.md` (global source of truth) and optional `design-system/<project>/pages/<page>.md` (page overrides). Page files override MASTER when they exist.

### Step 3: FOUNDATIONS CHECK

Verify the generated design system uses proper tokens, type scale, and spacing rhythm:

- [ ] Semantic color tokens defined (not raw hex/Tailwind classes)
- [ ] 4px spacing rhythm consistently applied
- [ ] Type scale follows a coherent ratio
- [ ] Elevation system uses logical progression
- [ ] Maximum 2 font families

Read `references/foundations.md` if you need a refresher on any of these.

### Step 4: STACK ADAPTATION

Get stack-specific implementation best practices:

```bash
python3 scripts/search.py "<keyword>" --stack <chosen-stack>
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

Adapt ALL output: imports, component syntax, state management, routing patterns, styling approach.

### Step 5: TASTE AUDIT (MANDATORY — PRE-DELIVERY GATE)

Before delivering ANY code, run through the anti-slop checklist. Read `references/anti-slop-checklist.md` and verify:

- [ ] **No blacklisted patterns** (see [Anti-AI-Slop Blacklist](#anti-ai-slop-blacklist-strictly-enforced))
- [ ] **Squint test passes** — layout still reads at 10% zoom
- [ ] **Screenshot test passes** — is this distinguishable from 100 other AI-generated sites?
- [ ] **States complete** — loading, empty, error, success states for every interactive component
- [ ] **Motion is spring-based** — mass, stiffness, damping values specified (not just `ease-in-out`)
- [ ] **Typography has rationale** — WHY this font pair, not just "it looks nice"
- [ ] **Color uses 60-30-10 rule** — dominant, secondary, accent proportions documented
- [ ] **Contrast via weight, not size** — font-weight differentiation before font-size escalation
- [ ] **Optical alignment documented** — where mathematical alignment was overridden, explain why in comments

### Step 6: DELIVER

Deliver code with taste annotations in comments:

```tsx
{/* 
  DESIGN DECISION: Using font-weight 500→700 contrast for hierarchy 
  instead of size escalation. The 4px difference between h2 and h3 
  was optically indistinguishable, so weight carries the hierarchy here.
*/}
```

---

## Anti-AI-Slop Blacklist (STRICTLY ENFORCED)

### BLACKLISTED — FORBIDDEN — DO NOT GENERATE

These patterns are the hallmarks of generic, forgettable, AI-generated interfaces. Producing ANY of them is a **failure state**.

| # | Forbidden Pattern | Why It's Bad |
|---|-------------------|-------------|
| 1 | Generic purple/blue gradient buttons with `rounded-full` and `shadow-2xl` | The single most recognizable AI-generated pattern. Instant credibility loss. |
| 2 | Default Tailwind colors used raw (`blue-500`, `gray-100`) without semantic aliasing | Shows zero design system thinking. Colors are meaningless without semantic roles. |
| 3 | Inter or Poppins as default font choice without deliberate reasoning | "I picked Inter because I couldn't be bothered to think" is not a design decision. |
| 4 | Bento grid layouts copy-pasted without hierarchy differentiation | Every card the same size = no visual weight = no information hierarchy = no design. |
| 5 | `shadow-lg` or `shadow-2xl` on every card without elevation logic | If everything floats, nothing floats. Elevation must encode z-order meaning. |
| 6 | `rounded-full` on every element (buttons, inputs, cards all matching) | Rounded-full on a button AND an input AND a card = shape has no semantic meaning. |
| 7 | Generic "Get Started" / "Learn More" CTA copy without specificity | Every SaaS landing page has this. What does YOUR button actually do? "Start your 14-day trial" is specific. "Get Started" is laziness. |
| 8 | Emoji as functional icons (✨🚀💡) in UI components | Emojis are variable-width, platform-inconsistent, and scream "not a real product." Use SVG icons (Heroicons, Lucide, Phosphor). |
| 9 | Rainbow gradient text on headings | Gradient text is a crutch for when you have nothing interesting to say with typography. |
| 10 | Stock photo hero sections with generic overlay | `<div class="bg-black/50">` over a stock photo is the visual equivalent of elevator music. |
| 11 | Identical card grids with no visual weight differentiation | Three cards, same size, same shadow, same layout = the user's eye has nowhere to go. Lead with a featured card. |
| 12 | Dark mode that's just `bg-gray-900 text-white` with no color system | Real dark mode requires: recalculated contrast, desaturated colors, reduced shadow opacity, surface elevation via lighter backgrounds. |
| 13 | Glassmorphism on EVERY element (`backdrop-blur` everywhere) | One or two glassmorphic surfaces = elegant. Every surface = unreadable soup. |
| 14 | Parallax scrolling on mobile | Performance killer, motion-sickness trigger, and usually broken on iOS Safari. |
| 15 | Auto-playing video backgrounds without user consent | Bandwidth hog, accessibility violation, battery drain. Always require user opt-in. |
| 16 | Comic Sans, Papyrus, or novelty fonts in professional interfaces | Self-explanatory. |

### MANDATORY INSTEAD — These Are Non-Negotiable

| Requirement | What It Means |
|------------|---------------|
| **Semantic color tokens** | `--color-primary`, `--color-surface`, `--color-on-surface`, etc. Never raw hex or Tailwind utility names as your design language. |
| **Typography with rationale** | Explain WHY this font pair works. "Fraunces for headings brings editorial warmth; Inter for body provides reading comfort at small sizes." Not "I used Inter and Poppins." |
| **Logical elevation system** | Shadow progression `xs → sm → md → lg → xl`. Cards rest at `sm`, hover to `md`. Modals at `xl`. Document which level and why. |
| **4px/8px spacing rhythm** | All spacing derives from a 4px base. No magic numbers. `margin-top: 13px` is a bug. |
| **Maximum 2 font families** | One for headings, one for body. A third is almost never justified. Monospace for code doesn't count. |
| **60-30-10 color rule** | 60% dominant (surfaces), 30% secondary (content, secondary surfaces), 10% accent (CTAs, highlights). Document the ratio. |
| **Contrast through weight first** | Differentiate heading levels by `font-weight` (400 → 500 → 600 → 700) before escalating `font-size`. Weight is more elegant than size. |
| **Optical alignment corrections** | Document in code comments where you overrode mathematical alignment for optical balance. e.g., `/* Optically centered — icon is 1px left of mathematical center due to visual weight */` |
| **Spring physics for motion** | Specify `mass`, `stiffness`, `damping` for animations (e.g., `spring({ mass: 1, stiffness: 200, damping: 20 })`). CSS `ease-in-out` is acceptable only for micro-interactions under 150ms. |
| **Complete interaction states** | Every interactive component MUST have: resting, hover, active/pressed, focus-visible, disabled, loading, error, and success states. "Just the button" is never done. |

---

## Taste Heuristics

For the deep dive, read `references/taste-and-polish.md`. Key heuristics:

| Heuristic | Quick Rule |
|-----------|-----------|
| **Optical vs Mathematical Alignment** | Icons, text, and elements are optically centered, not mathematically. A play button ▶ inside a circle needs `padding-left: 2px` to look centered. |
| **Spring Physics** | Natural motion uses spring curves, not cubic beziers. Specify mass/stiffness/damping. Heavier elements = higher mass = slower, more deliberate motion. |
| **Restraint Principle** | When in doubt, remove. An animation you don't add is one that can't feel cheap. Whitespace > ornament. |
| **Hierarchy Through Weight** | Before increasing font-size, try increasing font-weight. Before increasing font-weight, try increasing color contrast. Subtlety > shouting. |
| **The Squint Test** | Squint or zoom to 10%. If the layout doesn't still communicate hierarchy, it fails. |
| **The Screenshot Test** | Take a screenshot. Show it alongside 10 other AI-generated sites. If you can't tell them apart in 2 seconds, it fails. |
| **The Silence Test** | Remove all animations, gradients, and shadows. Does the typography and layout alone still work? If not, you're decorating, not designing. |
| **Color Temperature** | Warm colors advance, cool colors recede. Your CTA should be the warmest element on the page. Your background should be the coolest. |

---

## Quick Reference — Rule Categories by Priority

### 1. Accessibility (CRITICAL)

- `color-contrast` — Minimum 4.5:1 ratio for normal text, 3:1 for large text
- `focus-states` — Visible focus rings on ALL interactive elements (not just default outline)
- `alt-text` — Descriptive alt text for meaningful images; `alt=""` for decorative
- `aria-labels` — `aria-label` for icon-only buttons and non-text controls
- `keyboard-nav` — Tab order matches visual order; all features keyboard-accessible
- `form-labels` — Use `<label>` with `for` attribute; never placeholder-only labels

### 2. Touch & Interaction (CRITICAL)

- `touch-target-size` — Minimum 44×44px touch targets (48×48px preferred)
- `hover-vs-tap` — Use click/tap for primary interactions; hover for enhancement only
- `loading-buttons` — Disable button + show spinner during async operations
- `error-feedback` — Clear error messages near the problem, not just toast notifications
- `cursor-pointer` — Add `cursor: pointer` to ALL clickable elements without exception

### 3. Performance (HIGH)

- `image-optimization` — Use WebP/AVIF, `srcset`, lazy loading; reserve dimensions
- `reduced-motion` — Check `prefers-reduced-motion`; provide meaningful fallbacks
- `content-jumping` — Reserve space for async content (skeleton screens, aspect-ratio)
- `font-display` — Use `font-display: swap` or `optional`; never block rendering

### 4. Layout & Responsive (HIGH)

- `viewport-meta` — `width=device-width, initial-scale=1`
- `readable-font-size` — Minimum 16px body text on mobile (prevents iOS zoom)
- `horizontal-scroll` — Ensure content fits viewport width; no hidden overflow surprises
- `z-index-management` — Define z-index scale: base(0), dropdown(10), sticky(20), modal(30), toast(40), tooltip(50)
- `container-width` — Max-width 1280px for content; 65–75ch for prose

### 5. Typography & Color (MEDIUM)

- `line-height` — Use 1.5–1.75 for body text, 1.1–1.3 for headings
- `line-length` — Limit to 65–75 characters per line for readability
- `font-pairing` — Match heading/body font personalities with documented rationale
- `color-system` — 60-30-10 rule enforced; semantic tokens required

### 6. Animation & Motion (MEDIUM)

- `duration-timing` — 150–300ms for micro-interactions; 300–500ms for layout transitions
- `transform-performance` — Animate `transform`/`opacity` only; never `width`/`height`/`top`/`left`
- `spring-curves` — Use spring physics for anything > 200ms duration
- `loading-states` — Skeleton screens preferred over spinners; shimmer for content areas

### 7. Charts & Data Visualization (LOW)

- `chart-type` — Match chart type to data relationship (comparison → bar, trend → line, proportion → donut)
- `color-guidance` — Use accessible palettes; never rely on color alone for meaning
- `data-table` — Provide table alternative for screen reader accessibility

---

## Search Reference

### Available Domains

| Domain       | Use For                              | Example Keywords                                         |
| ------------ | ------------------------------------ | -------------------------------------------------------- |
| `product`    | Product type recommendations         | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style`      | UI styles, colors, effects           | glassmorphism, minimalism, dark mode, brutalism           |
| `typography` | Font pairings, Google Fonts          | elegant, playful, professional, modern, editorial         |
| `color`      | Color palettes by product type       | saas, ecommerce, healthcare, beauty, fintech, service     |
| `landing`    | Page structure, CTA strategies       | hero, hero-centric, testimonial, pricing, social-proof    |
| `chart`      | Chart types, library recommendations | trend, comparison, timeline, funnel, pie, scatter         |
| `ux`         | Best practices, anti-patterns        | animation, accessibility, z-index, loading, touch         |
| `icons`      | Icon sets and recommendations        | lucide, heroicons, symbol, glyph, pictogram               |
| `react`      | React/Next.js performance            | waterfall, bundle, suspense, memo, rerender, cache, rsc   |
| `web`        | Web interface guidelines             | aria, focus, keyboard, semantic, virtualize, preconnect   |
| `prompt`     | AI prompts, CSS keywords             | (style name)                                              |

### Domain Search

```bash
python3 scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use domain searches (after design system generation):**

| Need                    | Domain       | Example                                   |
| ----------------------- | ------------ | ----------------------------------------- |
| More style options      | `style`      | `--domain style "glassmorphism dark"`      |
| Chart recommendations   | `chart`      | `--domain chart "real-time dashboard"`     |
| UX best practices       | `ux`         | `--domain ux "animation accessibility"`    |
| Alternative fonts       | `typography` | `--domain typography "elegant luxury"`     |
| Landing page structure  | `landing`    | `--domain landing "hero social-proof"`     |
| Icon set guidance       | `icons`      | `--domain icons "navigation menu"`         |
| React performance       | `react`      | `--domain react "suspense streaming"`      |
| Web accessibility       | `web`        | `--domain web "aria focus keyboard"`       |

### Available Stacks

```bash
python3 scripts/search.py "<keyword>" --stack <stack-name>
```

| Stack             | Use For                                   |
| ----------------- | ----------------------------------------- |
| `html-tailwind`   | Pure HTML + Tailwind CSS projects          |
| `react`           | React (CRA, Vite) projects                |
| `nextjs`          | Next.js (App Router, Pages Router)        |
| `astro`           | Astro static/hybrid sites                 |
| `vue`             | Vue 3 (Composition API)                   |
| `nuxtjs`          | Nuxt 3 projects                           |
| `nuxt-ui`         | Nuxt UI component library projects        |
| `svelte`          | Svelte / SvelteKit projects               |
| `swiftui`         | iOS/macOS native (SwiftUI)                |
| `react-native`    | React Native mobile apps                  |
| `flutter`         | Flutter cross-platform apps               |
| `shadcn`          | shadcn/ui component library usage         |
| `jetpack-compose` | Android native (Jetpack Compose)          |

---

## Dark Mode Requirements

Dark mode is NOT just inverting colors. If the user requests dark mode, follow these rules:

1. **Surface elevation via lightness** — Higher z-index surfaces get progressively lighter backgrounds (not shadows):
   ```css
   --color-surface-0: hsl(220, 15%, 8%);   /* page bg */
   --color-surface-1: hsl(220, 15%, 11%);  /* card bg */
   --color-surface-2: hsl(220, 15%, 14%);  /* raised card/dropdown */
   --color-surface-3: hsl(220, 15%, 18%);  /* modal bg */
   ```

2. **Desaturate all colors** — Saturated colors vibrate on dark backgrounds. Reduce saturation 20–30%.

3. **Reduce shadow opacity** — Shadows on dark backgrounds should use `rgba(0,0,0,0.3+)`, not the same values as light mode.

4. **White text is NOT `#FFFFFF`** — Use `hsl(0, 0%, 87%)` or `#DEDEDE` for body text on dark. Pure white causes eye strain.

5. **Accent colors need recalculation** — A CTA that passes contrast on `#FFFFFF` background won't pass on `#1A1A2E`. Recalculate.

---

## Reference Files (Progressive Disclosure)

Read these files ONLY when you need the deep dive. Do not read them preemptively.

| File | When to Read |
|------|-------------|
| `references/foundations.md` | When setting up design tokens, type scale, spacing rhythm, or CSS custom properties from scratch |
| `references/taste-and-polish.md` | When doing the taste audit (Step 5), or when uncertain about optical alignment, spring physics, or restraint decisions |
| `references/anti-slop-checklist.md` | Before delivering any code — the pre-flight checklist |

---

## Complete Example Workflow

**User asks:** "Build me a landing page for a fintech SaaS product"

```
Step 0: ASK STACK
→ "Which stack? React/Next.js, Vue/Nuxt, Svelte, vanilla HTML, or mobile?"
→ User says: "Next.js with shadcn"

Step 1: DESIGN THINKING
→ Purpose: B2B fintech SaaS, needs to convey trust + innovation
→ Aesthetic: Refined minimal with editorial typography — NOT generic SaaS template
→ Memorable Thing: A dramatic split-screen hero with real-time data visualization
→ Constraints: Next.js App Router, shadcn/ui, WCAG AA

Step 2: GENERATE DESIGN SYSTEM
→ python3 scripts/search.py "fintech saas professional trust" --design-system -p "FinWise"

Step 3: FOUNDATIONS CHECK
→ ✅ Semantic tokens defined (--color-primary: hsl(215, 65%, 45%))
→ ✅ 4px rhythm (all spacing divisible by 4)
→ ✅ Type scale: 1.250 Major Third
→ ✅ Elevation: xs/sm/md/lg/xl with logical usage
→ ✅ 2 fonts: Fraunces (headings) + Inter (body)

Step 4: STACK ADAPTATION
→ python3 scripts/search.py "fintech dashboard" --stack nextjs
→ python3 scripts/search.py "fintech dashboard" --stack shadcn

Step 5: TASTE AUDIT
→ ✅ No blacklisted patterns
→ ✅ Squint test: hierarchy reads at 10% zoom
→ ✅ Screenshot test: distinguishable from generic SaaS
→ ✅ All states: loading skeleton, empty state, error boundary, success toast
→ ✅ CTA is "Start your free analysis" not "Get Started"
→ ✅ Font choice rationale documented
→ ✅ Spring physics on modal: { mass: 1, stiffness: 260, damping: 24 }

Step 6: DELIVER with taste annotations
```

---

## Pre-Delivery Checklist (Always Run)

Before delivering ANY UI code, verify every item:

**Foundations:**
- [ ] Semantic color tokens used (no raw hex/Tailwind colors in components)
- [ ] 4px spacing rhythm (no magic numbers)
- [ ] Type scale is consistent and intentional
- [ ] Maximum 2 font families
- [ ] Elevation uses logical shadow progression

**Components:**
- [ ] Every interactive element has: hover, active, focus-visible, disabled states
- [ ] Loading, empty, error, success states exist for data-dependent components
- [ ] `cursor: pointer` on all clickable elements
- [ ] No emojis as icons (use SVG: Heroicons, Lucide, Phosphor)
- [ ] Icons from one consistent set — don't mix Heroicons and Lucide

**Accessibility:**
- [ ] Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] `aria-label` on icon-only buttons
- [ ] Touch targets ≥ 44×44px

**Taste:**
- [ ] No blacklisted patterns (see table above)
- [ ] Squint test passes
- [ ] Screenshot test passes
- [ ] Font choice has documented rationale
- [ ] 60-30-10 color rule applied
- [ ] Optical alignment corrections commented
- [ ] Design decisions annotated in code comments

**Motion & Choreography:**
- [ ] Physics-based spring parameters used for interactive surfaces (no linear easing)
- [ ] Stagger delays capped at index 6 (rule of 35ms)
- [ ] Exit transitions are ~30% faster than entrance animations
- [ ] prefers-reduced-motion fallback implemented

**Micro-Copy & UX Writing:**
- [ ] Zero banned generic copy ("Get Started", "Learn More", "Submit" replaced with action verbs)
- [ ] Error messages provide the 3 parts: what happened + why + recovery action
- [ ] Empty states contain an informative title, context, and exactly one high-intent primary CTA

**State Architecture & Edge Cases:**
- [ ] Mandatory 5-state coverage: Loading (no CLS), Empty, Error, Partial/Truncated, Ideal
- [ ] Strings tested against 80+ character overflow (truncate-safe + flex constraints)
- [ ] Skeletons match target container heights precisely

**Spatial Ergonomics & Mobile:**
- [ ] Critical mobile actions placed in the natural thumb zone (bottom 40% of screen)
- [ ] Desktop center dialogs morph into swipeable bottom sheets below 768px
- [ ] Mobile forms equipped with inputmode, enterkeyhint, and autocomplete hints
- [ ] Tested at: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Body text ≥ 16px on mobile
- [ ] Touch targets ≥ 44×44px with safe-area-inset padding
