# Multi-Direction Visual Ideation Playbook

> Inspired by oil-ui (explore & side-by-side comparison).

When beginning a new page, hero section, or key interface screen, **never default to only one visual execution**. Provide 3 distinct aesthetic directions for the user to compare before generating the entire codebase.

---

## The 3-Direction Formula

Whenever asked to "explore designs" or "design a new concept", synthesize these 3 contrasting directions:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ DIRECTION 1: RADICAL MINIMALIST (Form follows Typography)                  │
│ • Vibe: Quiet authority, high whitespace, stark monochrome, editorial serif. │
│ • Colors: Deep slate (#0B0F17) + Crisp white (#F8FAFC) + 1 subtle accent.   │
│ • Container: Borderless, generous padding (py-32), typographic scale 1.333. │
├─────────────────────────────────────────────────────────────────────────────┤
│ DIRECTION 2: TACTILE & STRUCTURED (Industrial Precision & Telemetry)        │
│ • Vibe: Linear/Raycast density, monospaced data, status indicators.         │
│ • Colors: Layered dark surfaces (surface-0/1/2) + Hairline borders (1px 8%).│
│ • Container: Bento-structured with clear visual weight hierarchies.         │
├─────────────────────────────────────────────────────────────────────────────┤
│ DIRECTION 3: EXPRESSIVE & HUMANIST (Warm Craft & Organic Motion)            │
│ • Vibe: Notion/Stripe approachable warmth, soft rounded corners, mesh glow. │
│ • Colors: Warm slate, cream backgrounds, vivid indigo/violet accents.       │
│ • Container: Soft cards (rounded-2xl), multi-layer shadows, spring curves.  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Output Format for Multi-Direction Exploration

Present to user in concise markdown before coding:
1. **Direction Name & Metaphor**
2. **Typography Pairing** (Heading + Body)
3. **Core Color Tokens** (Background, Surface, Accent)
4. **Hero Component Wireframe Snippet**
5. **Trade-offs** (e.g., "Direction 2 is best for developer power-users; Direction 3 is best for consumer conversion").
