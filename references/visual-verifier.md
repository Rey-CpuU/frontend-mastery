# Real-Browser Visual Verification Loop

> Derived from taste-skill (inspect.mjs / cdp.mjs) and oil-ui (shoot.mjs).

Code that compiles is not necessarily code that looks good. A true Design Engineer inspects the rendered output in a real browser viewport before delivering.

---

## 1. The Autonomous Visual Verification Protocol

When an interactive environment or local server is running:

```
[ Code Generation ] 
        │
        ▼
[ Render Local Preview ] (e.g. Vite dev server / static HTML)
        │
        ▼
[ Headless Capture / Inspection ] (Viewport 375px & 1440px)
        │
        ▼
[ Automated Checks ]
  • Check A: Horizontal scroll bar at 375px? (Must be ZERO)
  • Check B: Text truncated awkwardly or overflowing card boundaries?
  • Check C: Contrast ratio on rendered canvas < 4.5:1?
  • Check D: Touch target bounding box < 44×44px?
        │
        ▼
[ Look-and-Fix Loop ] (Self-correct code if visual defects found)
        │
        ▼
[ Deliver Verified UI ]
```

---

## 2. Common Visual Traps Detected Only via Browser Render

1. **The 375px Overflow Trap:** Flex children with `min-width: auto` default that push container beyond the right edge of mobile screens.
   - *Fix:* Always apply `min-w-0` to flex children that contain truncate text.
2. **The High-DPI Font Blur:** Text rendering fuzzy on Retina displays.
   - *Fix:* Apply `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`.
3. **The Hidden Tap Target:** An icon button that looks 24px visually but has 0px padding, making it impossible to tap reliably on a smartphone.
   - *Fix:* Ensure minimum hit area `p-2.5` to reach 44px bounds.
