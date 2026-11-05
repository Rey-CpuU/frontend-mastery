# Layer 1: Design Foundations & Token Architecture

> Every pixel-perfect interface is built on a systematic foundation. These tokens
> are not suggestions — they are the grammar of visual consistency. Deviate with
> intention, never from ignorance.

---

## 1. Spacing System (4px / 8px Rhythm)

**Base unit: 4px.** Every spatial decision is a multiple of 4.

### Scale

| Token        | Value | px   | rem    |
|-------------|-------|------|--------|
| `--space-1`  | 1×    | 4    | 0.25   |
| `--space-2`  | 2×    | 8    | 0.5    |
| `--space-3`  | 3×    | 12   | 0.75   |
| `--space-4`  | 4×    | 16   | 1      |
| `--space-5`  | 5×    | 20   | 1.25   |
| `--space-6`  | 6×    | 24   | 1.5    |
| `--space-8`  | 8×    | 32   | 2      |
| `--space-10` | 10×   | 40   | 2.5    |
| `--space-12` | 12×   | 48   | 3      |
| `--space-16` | 16×   | 64   | 4      |
| `--space-20` | 20×   | 80   | 5      |
| `--space-24` | 24×   | 96   | 6      |
| `--space-32` | 32×   | 128  | 8      |

### CSS Custom Properties

```css
:root {
  --space-1: 0.25rem;   /* 4px  */
  --space-2: 0.5rem;    /* 8px  */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### When to Use Each Size

| Category             | Tokens            | Use Cases                                             |
|----------------------|-------------------|-------------------------------------------------------|
| **Micro gaps**       | `--space-1` (4px) | Icon-to-label gap, inline badge padding, tight pairs   |
| **Tight spacing**    | `--space-2` (8px) | Padding inside tags/chips, gap between form label and input |
| **Compact**          | `--space-3` (12px)| Card internal padding (compact), list item spacing     |
| **Default**          | `--space-4` (16px)| Default component padding, paragraph spacing           |
| **Comfortable**      | `--space-5`–`--space-6` (20–24px) | Card padding, group spacing, field gaps |
| **Section gaps**     | `--space-8`–`--space-12` (32–48px)| Between content sections, before headings |
| **Page-level**       | `--space-16`–`--space-24` (64–96px)| Hero padding, section dividers, page margins |
| **Landmark spacing** | `--space-32` (128px)| Between major page sections, above/below hero blocks  |

### The "Breathing Room" Principle

More whitespace = more premium feel. Budget brands cram content; luxury brands
let it breathe. If something feels "off," the answer is almost always **more
space**, not more decoration.

- **Dashboard / SaaS:** Moderate spacing. `--space-4` to `--space-8` between groups.
- **Marketing / Landing page:** Generous spacing. `--space-12` to `--space-24` between sections.
- **Editorial / Long-form:** Airy spacing. `--space-6` line gaps, `--space-16`+ between article sections.
- **Data-dense / Admin:** Tighter spacing. `--space-2` to `--space-4`. Density is a feature, not a flaw.

**Rule:** Never use arbitrary values like `13px`, `17px`, or `22px`. If a spacing
value doesn't appear in the scale, it's wrong.

---

## 2. Typographic Scale

### Scale Ratios

| Ratio              | Value | Character                        | Best For                           |
|--------------------|-------|----------------------------------|------------------------------------|
| **Minor Third**    | 1.200 | Compact, efficient               | Editorial layouts, data-heavy UIs  |
| **Major Third**    | 1.250 | Balanced, versatile              | General purpose, SaaS products     |
| **Perfect Fourth** | 1.333 | Spacious, dramatic               | Luxury, marketing, portfolio sites |

### Fluid Type with `clamp()`

```css
:root {
  /* Major Third (1.250) — fluid from 375px to 1440px viewport */
  --text-xs:   clamp(0.694rem, 0.65rem + 0.18vw, 0.8rem);      /* ~11–13px */
  --text-sm:   clamp(0.833rem, 0.78rem + 0.22vw, 1rem);        /* ~13–16px */
  --text-base: clamp(1rem, 0.93rem + 0.28vw, 1.125rem);        /* 16–18px  */
  --text-lg:   clamp(1.2rem, 1.1rem + 0.4vw, 1.406rem);        /* ~19–22px */
  --text-xl:   clamp(1.44rem, 1.3rem + 0.56vw, 1.758rem);      /* ~23–28px */
  --text-2xl:  clamp(1.728rem, 1.52rem + 0.83vw, 2.197rem);    /* ~28–35px */
  --text-3xl:  clamp(2.074rem, 1.77rem + 1.22vw, 2.747rem);    /* ~33–44px */
  --text-4xl:  clamp(2.488rem, 2.04rem + 1.78vw, 3.433rem);    /* ~40–55px */
  --text-5xl:  clamp(2.986rem, 2.34rem + 2.58vw, 4.291rem);    /* ~48–69px */
}
```

### Baseline Rules

- **Body text minimum:** 16px. **Preferred for long-form:** 18px.
- Never go below 14px for any readable text. Captions and labels at 12px are acceptable only in dense UIs.
- If users will read more than 2 paragraphs, use 18px base.

### Line-Height Rules

| Element     | Line-height | Rationale                                    |
|-------------|-------------|----------------------------------------------|
| **Headings (h1–h3)** | 1.1 – 1.3 | Tight to preserve visual mass and impact |
| **Subheadings (h4–h6)** | 1.3 – 1.4 | Slightly more air for scannability    |
| **Body text**   | 1.5 – 1.75   | Comfortable reading cadence              |
| **Captions/labels** | 1.4       | Compact but legible                      |
| **Code blocks**  | 1.6 – 1.7   | Readability with vertical scanning       |

**Rule:** Line-height should DECREASE as font-size increases. A 48px heading at
`line-height: 1.75` looks absurd with massive line gaps.

### Letter-Spacing Rules

| Element              | Letter-spacing | Why                                     |
|----------------------|----------------|-----------------------------------------|
| **Large headings**   | -0.02em to -0.04em | Counteracts loose feel at large sizes |
| **Body text**        | 0 (normal)     | Browser defaults are optimized here     |
| **Small caps / labels** | +0.05em to +0.08em | Opens up readability at small sizes |
| **All-caps text**    | +0.05em to +0.1em | Required — caps without tracking is claustrophobic |
| **Monospace / code** | 0              | Already uniformly spaced                |

### Maximum Line Length

- **Optimal:** 65–75 characters per line
- **CSS:** `max-width: 65ch` (or up to `75ch` for wider fonts)
- **Below 45ch:** feels choppy, too many line breaks
- **Above 80ch:** eye fatigue, readers lose their place

```css
.prose {
  max-width: 65ch;
}
.prose--wide {
  max-width: 75ch;
}
```

---

## 3. Color Token Architecture

### Semantic Naming System

**Never use raw color values in components.** Every color goes through a semantic alias.

```css
:root {
  /* ── Surface layers ─────────────────── */
  --color-surface-0: hsl(0 0% 100%);         /* Page background         */
  --color-surface-1: hsl(0 0% 98%);          /* Card background         */
  --color-surface-2: hsl(0 0% 96%);          /* Elevated card, dropdown */
  --color-surface-3: hsl(0 0% 94%);          /* Modal, dialog           */

  /* ── On-surface (text/icons on surfaces) ── */
  --color-on-surface:       hsl(0 0% 9%);    /* Primary text            */
  --color-on-surface-muted: hsl(0 0% 40%);   /* Secondary text          */
  --color-on-surface-faint: hsl(0 0% 60%);   /* Tertiary / placeholder  */

  /* ── Primary action ──────────────────── */
  --color-primary:    hsl(220 70% 50%);
  --color-on-primary: hsl(0 0% 100%);
  --color-primary-hover: hsl(220 70% 45%);

  /* ── Secondary action ────────────────── */
  --color-secondary:    hsl(220 15% 92%);
  --color-on-secondary: hsl(220 15% 20%);

  /* ── Accent / brand highlight ────────── */
  --color-accent:    hsl(160 70% 40%);
  --color-on-accent: hsl(0 0% 100%);

  /* ── Semantic states ─────────────────── */
  --color-destructive:    hsl(0 72% 51%);
  --color-on-destructive: hsl(0 0% 100%);
  --color-success:        hsl(142 71% 35%);
  --color-on-success:     hsl(0 0% 100%);
  --color-warning:        hsl(38 92% 50%);
  --color-on-warning:     hsl(0 0% 9%);

  /* ── Muted / subtle backgrounds ──────── */
  --color-muted:    hsl(220 15% 96%);
  --color-on-muted: hsl(220 15% 40%);
}
```

### Layered Surfaces

| Token            | Purpose          | Example                         |
|------------------|------------------|---------------------------------|
| `surface-0`      | Page background  | `<body>` or `<main>` bg         |
| `surface-1`      | First elevation  | Cards, sidebars, content blocks |
| `surface-2`      | Second elevation | Dropdowns, popovers, tooltips   |
| `surface-3`      | Third elevation  | Modals, dialogs, command palette|

**Rule:** Each surface layer should be visually distinguishable but subtle — a
2% lightness shift, not a 20% one.

### Alpha Channels for Overlays

```css
:root {
  --overlay-subtle:  hsl(0 0% 0% / 0.05);  /* Hover highlight        */
  --overlay-light:   hsl(0 0% 0% / 0.10);  /* Active state           */
  --overlay-medium:  hsl(0 0% 0% / 0.20);  /* Disabled overlay       */
  --overlay-heavy:   hsl(0 0% 0% / 0.40);  /* Scrim behind modal     */
  --overlay-opaque:  hsl(0 0% 0% / 0.60);  /* Lightbox background    */
}
```

### Dark Mode

**Dark mode is NOT just inverting light mode.** It requires separate design decisions:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Surfaces get DARK, not inverted */
    --color-surface-0: hsl(0 0% 7%);          /* Deep background       */
    --color-surface-1: hsl(0 0% 11%);         /* Card                  */
    --color-surface-2: hsl(0 0% 15%);         /* Elevated card         */
    --color-surface-3: hsl(0 0% 19%);         /* Modal                 */

    /* Text uses opacity hierarchy, not gray values */
    --color-on-surface:       hsl(0 0% 100% / 0.87);  /* Primary     */
    --color-on-surface-muted: hsl(0 0% 100% / 0.60);  /* Secondary   */
    --color-on-surface-faint: hsl(0 0% 100% / 0.38);  /* Tertiary    */

    /* Primary colors desaturate slightly in dark mode */
    --color-primary: hsl(220 60% 60%);

    /* Overlays use lighter values */
    --overlay-subtle: hsl(0 0% 100% / 0.05);
    --overlay-light:  hsl(0 0% 100% / 0.10);
  }
}
```

**Key dark mode rules:**
- Text uses **87% / 60% / 38%** opacity hierarchy (Material Design guidance, proven effective)
- Surface layers go UP in lightness (7% → 11% → 15% → 19%)
- Saturated colors desaturate 5–10% to reduce eye strain
- Borders become lighter, not darker
- Shadows become near-invisible; use subtle surface-level differentiation or faint colored glows instead

### HSL-Based System

Use HSL for all color definitions. HSL allows consistent saturation across an
entire palette by sharing a saturation value:

```css
:root {
  --hue-primary: 220;
  --hue-accent: 160;
  --hue-destructive: 0;
  --hue-success: 142;
  --hue-warning: 38;
  --saturation-vivid: 70%;
  --saturation-muted: 15%;

  --color-primary: hsl(var(--hue-primary) var(--saturation-vivid) 50%);
  --color-accent:  hsl(var(--hue-accent) var(--saturation-vivid) 40%);
}
```

### Tailwind CSS Custom Color Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      surface: {
        0: 'var(--color-surface-0)',
        1: 'var(--color-surface-1)',
        2: 'var(--color-surface-2)',
        3: 'var(--color-surface-3)',
      },
      'on-surface': {
        DEFAULT: 'var(--color-on-surface)',
        muted: 'var(--color-on-surface-muted)',
        faint: 'var(--color-on-surface-faint)',
      },
      primary: {
        DEFAULT: 'var(--color-primary)',
        hover: 'var(--color-primary-hover)',
      },
      'on-primary': 'var(--color-on-primary)',
      secondary: {
        DEFAULT: 'var(--color-secondary)',
      },
      'on-secondary': 'var(--color-on-secondary)',
      accent: {
        DEFAULT: 'var(--color-accent)',
      },
      'on-accent': 'var(--color-on-accent)',
      destructive: {
        DEFAULT: 'var(--color-destructive)',
      },
      'on-destructive': 'var(--color-on-destructive)',
      success: {
        DEFAULT: 'var(--color-success)',
      },
      'on-success': 'var(--color-on-success)',
      warning: {
        DEFAULT: 'var(--color-warning)',
      },
      'on-warning': 'var(--color-on-warning)',
      muted: {
        DEFAULT: 'var(--color-muted)',
      },
      'on-muted': 'var(--color-on-muted)',
    },
  },
};
```

---

## 4. Elevation & Shadow System

### Semantic Levels

| Token          | CSS Value                                                        | Use Case                    | Hover Behavior          |
|---------------|------------------------------------------------------------------|-----------------------------|-------------------------|
| `--shadow-none` | `none`                                                         | Flat elements, inline items | —                       |
| `--shadow-xs`   | `0 1px 2px hsl(0 0% 0% / 0.05)`                              | Subtle lift: inputs, tags   | → `--shadow-sm`         |
| `--shadow-sm`   | `0 1px 3px hsl(0 0% 0% / 0.08), 0 1px 2px hsl(0 0% 0% / 0.04)` | Cards, buttons           | → `--shadow-md`         |
| `--shadow-md`   | `0 4px 6px hsl(0 0% 0% / 0.07), 0 2px 4px hsl(0 0% 0% / 0.04)` | Dropdowns, raised cards  | → `--shadow-lg`         |
| `--shadow-lg`   | `0 10px 15px hsl(0 0% 0% / 0.08), 0 4px 6px hsl(0 0% 0% / 0.04)` | Popovers, floating UI  | → `--shadow-xl`         |
| `--shadow-xl`   | `0 20px 25px hsl(0 0% 0% / 0.08), 0 8px 10px hsl(0 0% 0% / 0.04)` | Modals, toasts         | Stay at `--shadow-xl`   |
| `--shadow-2xl`  | `0 25px 50px hsl(0 0% 0% / 0.15)`                             | Hero images, feature cards  | Stay at `--shadow-2xl`  |

### CSS Custom Properties

```css
:root {
  --shadow-none: none;
  --shadow-xs:   0 1px 2px hsl(0 0% 0% / 0.05);
  --shadow-sm:   0 1px 3px hsl(0 0% 0% / 0.08), 0 1px 2px hsl(0 0% 0% / 0.04);
  --shadow-md:   0 4px 6px hsl(0 0% 0% / 0.07), 0 2px 4px hsl(0 0% 0% / 0.04);
  --shadow-lg:   0 10px 15px hsl(0 0% 0% / 0.08), 0 4px 6px hsl(0 0% 0% / 0.04);
  --shadow-xl:   0 20px 25px hsl(0 0% 0% / 0.08), 0 8px 10px hsl(0 0% 0% / 0.04);
  --shadow-2xl:  0 25px 50px hsl(0 0% 0% / 0.15);
}
```

### Shadow Rules

1. **Never jump more than 2 levels** on hover. `--shadow-sm` → `--shadow-lg` on hover is jarring.
2. **No shadow on elements that don't need perceived depth.** Flat content sections, text blocks, inline elements — shadows add visual noise.
3. **Don't use `--shadow-2xl` on every card.** It's reserved for hero moments and focal elements. If everything is elevated, nothing is.
4. **Shadows should darken slightly on hover**, paired with subtle `translateY(-1px)`. The element lifts, it doesn't just darken.

### Dark Mode Shadows

Gray shadows are invisible on dark backgrounds. Use darker shadows with subtle
colored glows:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-xs:  0 1px 2px hsl(0 0% 0% / 0.20);
    --shadow-sm:  0 1px 3px hsl(0 0% 0% / 0.25), 0 1px 2px hsl(0 0% 0% / 0.15);
    --shadow-md:  0 4px 6px hsl(0 0% 0% / 0.30), 0 2px 4px hsl(0 0% 0% / 0.20);
    --shadow-lg:  0 10px 15px hsl(0 0% 0% / 0.35), 0 4px 6px hsl(0 0% 0% / 0.25);
    --shadow-xl:  0 20px 25px hsl(0 0% 0% / 0.40), 0 8px 10px hsl(0 0% 0% / 0.30);
    --shadow-2xl: 0 25px 50px hsl(0 0% 0% / 0.50);

    /* Optional: subtle colored glow for emphasis */
    --glow-primary: 0 0 20px hsl(220 70% 50% / 0.15);
    --glow-accent:  0 0 20px hsl(160 70% 40% / 0.15);
  }
}
```

---

## 5. Border & Radius System

### Radius Scale

| Token           | Value     | Use Case                                          |
|----------------|-----------|---------------------------------------------------|
| `--radius-none` | 0         | Sharp, brutalist, data tables                      |
| `--radius-xs`   | 2px       | Subtle rounding, code blocks, badges               |
| `--radius-sm`   | 4px       | Buttons, inputs, small cards                       |
| `--radius-md`   | 6px       | Default cards, dropdowns                           |
| `--radius-lg`   | 8px       | Modals, large cards                                |
| `--radius-xl`   | 12px      | Feature cards, hero sections                       |
| `--radius-2xl`  | 16px      | Large containers, panels                           |
| `--radius-full` | 9999px    | Pills, avatars, toggle thumbs                      |

```css
:root {
  --radius-none: 0;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-full: 9999px;
}
```

### Consistency Rule

**Maximum 2–3 radius values per project.** Pick your set and stick to it:

- **Professional/Serious:** `--radius-sm` (4px) for everything, `--radius-full` for avatars only
- **Modern/Friendly:** `--radius-md` (6px) default, `--radius-lg` (8px) for cards, `--radius-full` for pills
- **Playful/Casual:** `--radius-lg` (8px) default, `--radius-xl` (12px) for cards, `--radius-full` for buttons

**Anti-pattern:** Using `--radius-sm` on buttons, `--radius-xl` on cards, `--radius-md` on inputs, and `--radius-2xl` on modals in the same project. Pick a lane.

### Border Rules

```css
:root {
  --border-default: 1px solid hsl(0 0% 0% / 0.08);   /* Subtle, refined       */
  --border-emphasis: 1px solid hsl(0 0% 0% / 0.15);   /* More visible           */
  --border-strong:  1px solid hsl(0 0% 0% / 0.25);    /* Clear separation       */
  --border-focus:   2px solid var(--color-primary);     /* Focus rings            */
}

@media (prefers-color-scheme: dark) {
  :root {
    --border-default: 1px solid hsl(0 0% 100% / 0.08);
    --border-emphasis: 1px solid hsl(0 0% 100% / 0.15);
    --border-strong:  1px solid hsl(0 0% 100% / 0.25);
  }
}
```

- **1px solid at 5–10% opacity** looks more refined than thick colored borders.
- **Dividers:** Use `border-color` with 5–8% opacity. Never hard gray lines like `#ccc`.
- **Border vs Shadow:** Use borders for containment (cards in flat designs), shadows for elevation (floating UI). Don't use both on the same element unless one is a focus ring.

---

## 6. Motion & Transition Tokens

### Duration Scale

| Token              | Value  | Character     | Use Case                                         |
|-------------------|--------|---------------|--------------------------------------------------|
| `--duration-micro` | 100ms  | Instantaneous | Opacity toggles, color changes, checkbox ticks    |
| `--duration-fast`  | 150ms  | Quick         | Button press feedback, icon swaps, tooltip show   |
| `--duration-normal`| 200ms  | Standard      | Menu open, dropdown expand, tab switch            |
| `--duration-smooth`| 300ms  | Deliberate    | Modal entrance, drawer slide, card expand         |
| `--duration-dramatic`| 500ms | Cinematic    | Page transitions, hero animations, stagger exits  |

```css
:root {
  --duration-micro:    100ms;
  --duration-fast:     150ms;
  --duration-normal:   200ms;
  --duration-smooth:   300ms;
  --duration-dramatic: 500ms;
}
```

### Easing Functions

| Function        | CSS                              | Use Case                          |
|-----------------|----------------------------------|-----------------------------------|
| **Ease-out**    | `cubic-bezier(0.0, 0.0, 0.2, 1)`  | Entrances — fast start, gentle stop |
| **Ease-in**     | `cubic-bezier(0.4, 0.0, 1, 1)`    | Exits — gentle start, fast departure |
| **Ease-in-out** | `cubic-bezier(0.4, 0.0, 0.2, 1)`  | Morphs, resizes, transformations    |
| **Snappy**      | `cubic-bezier(0.2, 0, 0, 1)`      | Menus, dropdowns, quick interactions |
| **Bouncy**      | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful entrances, success states  |

```css
:root {
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in:     cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  --ease-bouncy: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Spring Physics Reference

For frameworks that support spring-based animation (Framer Motion, React Spring, GSAP):

| Character     | Stiffness | Damping | Mass | Feel                              |
|--------------|-----------|---------|------|-----------------------------------|
| **Snappy**    | 300       | 25      | 0.5  | Quick, decisive, no bounce        |
| **Smooth**    | 200       | 20      | 0.8  | Natural, slight settle            |
| **Bouncy**    | 150       | 12      | 1.0  | Playful, visible overshoot        |
| **Gentle**    | 100       | 15      | 1.0  | Slow, luxurious, premium          |
| **Heavy**     | 120       | 30      | 1.5  | Weighty, grounded, deliberate     |

```tsx
// Framer Motion examples
const snappy  = { type: "spring", stiffness: 300, damping: 25, mass: 0.5 };
const smooth  = { type: "spring", stiffness: 200, damping: 20, mass: 0.8 };
const bouncy  = { type: "spring", stiffness: 150, damping: 12, mass: 1.0 };
const gentle  = { type: "spring", stiffness: 100, damping: 15, mass: 1.0 };
const heavy   = { type: "spring", stiffness: 120, damping: 30, mass: 1.5 };
```

### Motion Rules

1. **NEVER use `linear` easing for UI transitions.** Linear motion looks robotic and unnatural. The only exception is infinite progress bar animations.
2. **Stagger:** 30–50ms between children items in lists, grids, and sequential animations.
3. **`prefers-reduced-motion`:** Always respect. Provide an instant fallback.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

4. **Do not animate `layout` properties** (`width`, `height`, `top`, `left`) — use `transform` and `opacity` for 60fps performance.
5. **Content appearing:** fade in + subtle translateY(8px) → translateY(0). Never slide in from far away.
6. **Content disappearing:** fade out only. No downward slide — it feels like falling.
