# Interactive Aesthetic Dials & Control Matrix

> Inspired by claude-design-system (make-tweakable) and taste-skill dials.

Before writing hundreds of lines of rigid CSS/Tailwind, present the user with **Aesthetic Dials** when direction is ambiguous. This avoids guesswork and lets the user calibrate the exact vibe.

---

## The 5 Core Aesthetic Dials

```
1. CORNER RADIUS  : [1] Sharp (0-2px)   ── [2] Crisp (4-8px)    ── [3] Soft/Playful (12-20px)
2. DATA DENSITY   : [1] High (Compact)  ── [2] Balanced (Norm)  ── [3] Spacious (Airy/Editorial)
3. CONTRAST / POP : [1] Monochromatic   ── [2] Muted + 1 Accent ── [3] High-Saturation Vibrancy
4. SURFACE DEPTH  : [1] Flat + Borders  ── [2] Layered Shadows  ── [3] Frosted Glass (Backdrop)
5. MOTION TEMPO   : [1] Instant (0ms)   ── [2] Snappy (150ms)   ── [3] Fluid Spring Physics
```

---

## Dial Preset Archetypes

### Archetype A: "The Linear / Raycast Vibe" (Developer Precision)
* **Radius:** Crisp (6px)
* **Density:** High
* **Contrast:** Muted Slate + Neon Emerald/Amber Telemetry
* **Depth:** Flat 1px Hairline Borders (`border-white/[0.08]`)
* **Motion:** Snappy Micro-Springs (`mass: 0.5, stiffness: 400`)

### Archetype B: "The Stripe / Vercel Vibe" (Modern Enterprise)
* **Radius:** Balanced (8–12px)
* **Density:** Balanced
* **Contrast:** Monochrome + Electric Blue/Indigo
* **Depth:** Multi-layered soft drop shadows
* **Motion:** Fluid Springs + 35ms Staggered lists

### Archetype C: "The Editorial / Luxury Vibe" (Magazine & Brand)
* **Radius:** Sharp (0–4px)
* **Density:** Spacious / Generous Whitespace
* **Contrast:** Deep Off-black (`#111`) + Warm Cream (`#FDFBF7`) + Crimson Accent
* **Depth:** Flat, typography-driven, zero shadows
* **Motion:** Elegant ease-out fades
