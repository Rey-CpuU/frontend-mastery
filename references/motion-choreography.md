# Motion Choreography & Spring Physics Guide

> "Animation in UI is not decoration; it is physical feedback and spatial continuity."

---

## 1. The Physics Philosophy (Real Mass vs Robotic Tweening)

Robotic animations use linear easing or generic `ease-in-out` curves where speed is independent of context. Human-grade UI motion mimics **physical objects with real mass, friction, and tension**.

### Core Spring Physics Parameters

When configuring animations in **Framer Motion**, **Motion One**, or **CSS Spring Simulation**, use these verified physics presets:

| Preset Name | Usage | Mass ($m$) | Stiffness ($k$) | Damping ($d$) | Feel |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Snappy Action** | Buttons, checkboxes, toggle switches, tooltips | `0.5` | `400` | `28` | Instantaneous, crisp, zero overshoot |
| **Brisk Surface** | Modals, popovers, dropdown menus, context menus | `0.8` | `280` | `24` | Solid presence, micro-overshoot |
| **Gentle Fluid** | Bottom sheets, page transitions, expansion drawers | `1.1` | `180` | `22` | Heavy, premium inertia, graceful stop |
| **Haptic Micro** | Click press-down, input bounce | `0.3` | `600` | `30` | Mimics physical haptic click |

---

## 2. Framework Syntax Presets

### A. Framer Motion (React / Next.js)

```tsx
// 1. Interactive Button Spring
export const buttonPressAnimation = {
  whileHover: { scale: 1.015, y: -1 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 450, damping: 25 }
};

// 2. Dropdown / Popover Reveal with Origin Anchor
export const popoverMotion = {
  initial: { opacity: 0, scale: 0.94, y: -4 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -2 },
  transition: { type: "spring", stiffness: 320, damping: 26 }
};
```

### B. Pure CSS Spring Equivalents (Cubic-Bezier Curves)

If not using a JavaScript animation library, **never use `ease` or `linear`**. Use these tuned cubic-bezier curves:

```css
:root {
  /* Snappy deceleration for elements entering the screen */
  --ease-spring-enter: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Quick acceleration for elements leaving the screen */
  --ease-spring-exit: cubic-bezier(0.7, 0, 0.84, 0);
  
  /* Natural physical bounce-free transition */
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  
  /* Durations */
  --duration-micro: 120ms;
  --duration-fast: 200ms;
  --duration-moderate: 320ms;
}

.button-interactive {
  transition: transform var(--duration-micro) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-spring-enter);
}
.button-interactive:active {
  transform: scale(0.975);
}
```

---

## 3. Staggering & Choreography Rules

When multiple elements render (lists, grid cards, navigation links), **they must never appear simultaneously or staggered too slowly**.

* **The Rule of 35ms:** Stagger delay between sequential sibling elements must be between **`25ms` and `40ms`**. Anything above `60ms` feels sluggish and broken.
* **Maximum Stagger Cap:** Cap the delay after index `6`. Items 7 through $N$ animate in together with item 6 to prevent the user waiting on content.
* **Z-Index Choreography:** When expanding an accordion or list, the expanding item must promote its `z-index` before animating to prevent clipping beneath adjacent items.

---

## 4. Exit Transitions (The Neglected Half)

Elements disappearing from view are just as important as elements appearing:

* **Exit is 30% Faster than Entrance:** If a modal enters in `250ms`, it must exit in `175ms`. Users do not want to wait for something they just dismissed.
* **Exit Decoupling:** Opacity should reach 0 *before* the transform finishes so the UI doesn't linger awkwardly.

---

## 5. Mandatory Reduced-Motion Fallback

Always respect vestibular safety:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
