# Pre-Delivery Taste Audit Checklist

> **Mandatory.** Run this checklist against every UI delivery before shipping code.
> A single failure in sections 1–20 requires a fix before the output is
> considered complete. Bonus items are aspirational but signal craft.

---

## IDENTITY & INTENTION (1–4)

### 1. Aesthetic Direction Named
- [ ] **Can you name the aesthetic direction in one phrase?**
- **Pass:** "Warm editorial with serif authority" / "Dark minimal with spring physics" / "Dense data dashboard with monochrome palette"
- **Fail:** "Clean and modern" / "Nice-looking" / "Standard layout" / you can't describe it
- **If fail:** Stop. Go back to the style selection step. Pick a specific direction from the 50+ styles catalog before writing any code.

### 2. One Memorable Element
- [ ] **Is there ONE memorable visual element?**
- **Pass:** A distinctive font choice, an unusual color, a unique layout pattern, a signature animation, a deliberate photographic style
- **Fail:** Everything is "clean" but nothing is distinct. You could swap any element with a default and nobody would notice.
- **If fail:** Add ONE bold choice. Pick from: uncommon typeface, non-obvious primary color, asymmetric layout, editorial whitespace, a single spring-physics interaction.

### 3. Screenshot Test
- [ ] **Would this be distinguishable in a lineup of 10 AI-generated sites?**
- **Pass:** Someone could point to yours and say "that one's different" and explain why
- **Fail:** It blends in. It looks like every v0/Bolt/Lovable output.
- **If fail:** Identify what makes it blend in (usually: Inter font + blue primary + equal card grid + rounded-full buttons) and change at least ONE of those elements.

### 4. Font Pairing Rationale
- [ ] **Does the font pairing have documented reasoning?**
- **Pass:** "Instrument Serif for headings because the editorial authority matches a long-form content app; DM Sans for body because its open apertures aid readability at 16px"
- **Fail:** "Inter because it's clean" / "Poppins because it's popular" / no reason at all
- **If fail:** Choose a font pairing from the catalog with specific reasoning tied to the project's personality and reading context.

---

## VISUAL HIERARCHY (5–8)

### 5. Squint Test
- [ ] **At 25% zoom, is there clear visual hierarchy?**
- **Pass:** You can identify 2–3 distinct levels of importance. There's a clear focal area. Different sections have different visual weights.
- **Fail:** Everything looks like equal-sized gray blocks. Uniform density everywhere. No focal point.
- **If fail:** Vary element sizes. Add a hero element. Increase whitespace between sections. Make one card or section visually dominant.

### 6. Hierarchy Through Weight, Not Size
- [ ] **Is hierarchy achieved through weight/color/spacing, not just font-size?**
- **Pass:** Headings use `font-weight: 600–700` + `letter-spacing: -0.02em` + darker color. De-emphasis through lighter color and reduced weight. Size differences are modest (e.g., 18px → 24px, not 16px → 48px).
- **Fail:** Hierarchy comes ONLY from making headings enormous. Everything below the heading is the same weight and color.
- **If fail:** Apply the 60-30-10 color emphasis rule. Use `--color-on-surface` for 10% of text, `--color-on-surface-muted` for 30%, and `--color-on-surface-faint` for 60%.

### 7. 60-30-10 Rule Applied
- [ ] **60% muted, 30% medium emphasis, 10% high emphasis?**
- **Pass:** Most text on the page is in a muted/secondary color. Navigation and labels are medium emphasis. Only CTAs, active states, and key headings use full primary color or bold weight.
- **Fail:** Everything is the same color and weight. OR everything is bold and primary-colored.
- **If fail:** Audit every text element. Demote body text, descriptions, and meta information to muted. Promote only interactive and primary elements.

### 8. Intentional Grid Breaks
- [ ] **Are there intentional breaks in the grid for visual interest?**
- **Pass:** A featured card spans 2 columns. A hero section breaks out of the container. An image bleeds to the edge. Section spacing varies to create rhythm.
- **Fail:** Perfect 3-column grid, every card identical, uniform spacing, zero variation — a spreadsheet pretending to be a design.
- **If fail:** Introduce ONE asymmetry: a wider hero card, a full-bleed section, or a pull quote that breaks the column width.

---

## FOUNDATIONS & TOKENS (9–12)

### 9. Spacing Rhythm
- [ ] **Spacing follows 4px/8px rhythm with no arbitrary values?**
- **Pass:** All padding, margin, and gap values are multiples of 4px. CSS custom properties (`--space-*`) are used consistently. No magic numbers like `13px`, `17px`, or `22px`.
- **Fail:** Arbitrary values throughout (`padding: 13px 17px`, `margin-top: 22px`, `gap: 15px`)
- **If fail:** Replace all spacing with the nearest value from the spacing scale. Use the `--space-*` tokens.

### 10. Font Family Limit
- [ ] **Maximum 2 font families used?**
- **Pass:** One heading font + one body font. Or one font family used throughout with weight variation. A third monospace font in technical contexts is acceptable.
- **Fail:** Three or more typefaces (e.g., Playfair + Inter + Poppins + Roboto Mono). Visual chaos.
- **If fail:** Eliminate extra fonts. Pick two and create hierarchy through weight, size, and color instead.

### 11. Semantic Color Tokens
- [ ] **Colors use semantic tokens, not raw hex/Tailwind defaults?**
- **Pass:** `bg-surface-1`, `text-on-surface-muted`, `border-primary`. Colors defined as CSS custom properties with semantic names. Both light and dark mode supported.
- **Fail:** `bg-gray-100`, `text-gray-700`, `bg-blue-500`, raw hex values like `#3B82F6` scattered through components.
- **If fail:** Define a color token system. Replace all raw colors with semantic aliases. Ensure dark mode variants exist.

### 12. Shadow Elevation Logic
- [ ] **Shadow elevation follows logical progression (not `shadow-2xl` everywhere)?**
- **Pass:** Cards use `shadow-sm`. Dropdowns use `shadow-md`. Modals use `shadow-lg`. Only ONE hero element uses `shadow-xl` or `shadow-2xl`. Hover states move up only 1–2 levels.
- **Fail:** Every card has `shadow-2xl`. Shadows jump from `none` to `shadow-xl` on hover. Multiple elements at the same elevation level that should be differentiated.
- **If fail:** Assign shadow levels based on z-index / visual elevation. Most elements should be `shadow-none` or `shadow-sm`.

---

## CRAFT & POLISH (13–16)

### 13. Appropriate Easing
- [ ] **All transitions use appropriate easing (no `linear`)?**
- **Pass:** Entrances use `ease-out`. Exits use `ease-in`. Morphs/resizes use `ease-in-out`. Custom cubic-bezier curves for brand-specific motion. No `linear` transitions on UI elements.
- **Fail:** `transition: all 0.3s linear` anywhere in the codebase. Or no `transition` at all (instant jumps).
- **If fail:** Replace all `linear` with `ease-out` as a safe default. Add the easing token system to your CSS custom properties.

### 14. Hover States
- [ ] **Hover states exist on every interactive element?**
- **Pass:** Buttons, links, cards, icons, navigation items — anything clickable has a visible hover response. The response is appropriate: subtle background change for text links, `translateY(-1px)` + shadow increase for cards, darken for filled buttons.
- **Fail:** Some buttons have hover states, others don't. Cards are clickable but have no hover feedback. Interactive elements look identical in rest and hover states.
- **If fail:** Audit every interactive element. Add appropriate hover styles. Use `@media (hover: hover)` to prevent sticky hover states on touch devices.

### 15. Focus States
- [ ] **Focus states are visible and use offset outline (not just browser default)?**
- **Pass:** `:focus-visible` styled with `outline: 2px solid` using primary color at 40% opacity, with `outline-offset: 2px`. Focus is clearly visible against all background colors.
- **Fail:** Default browser blue outline (or worse, `outline: none` with no replacement). Focus states that are invisible against the background.
- **If fail:** Add a global `:focus-visible` rule. Test tab navigation through the entire page. Ensure focus is visible on both light and dark backgrounds.

### 16. Reduced Motion
- [ ] **`prefers-reduced-motion` is respected?**
- **Pass:** A `@media (prefers-reduced-motion: reduce)` block exists that eliminates or minimizes all animations. Transitions are set to near-zero duration. Scroll behavior is set to `auto`. Content remains fully accessible without motion.
- **Fail:** No reduced-motion media query anywhere. Users who need reduced motion get the full animation treatment.
- **If fail:** Add the reduced-motion media query from the foundations reference. Test with the browser's "reduce motion" emulation.

---

## ANTI-SLOP VERIFICATION (17–20)

### 17. No Emoji Icons
- [ ] **Zero emojis used as functional icons?**
- **Pass:** All icons are SVG (Lucide, Heroicons, Phosphor, or custom). Consistent stroke width, size, and color across all icons.
- **Fail:** 🚀 used as a "launch" icon. ✨ used for "new feature." 📊 for "analytics." Emojis render differently across platforms and look unprofessional.
- **If fail:** Replace every emoji with an SVG icon from a consistent icon set. If you need a decorative emoji in marketing copy, that's different from using it as a functional UI element.

### 18. No Generic Gradient Buttons
- [ ] **No generic gradient buttons (purple→blue `rounded-full`)?**
- **Pass:** Primary buttons use a solid color with appropriate hover darkening. If gradients exist, they are subtle (2-3° hue shift, not a rainbow) and serve the brand identity.
- **Fail:** `bg-gradient-to-r from-purple-500 to-blue-500 rounded-full` — the universal AI-generated button. Bonus slop points if it also has `shadow-lg` and `text-white`.
- **If fail:** Replace with a solid primary color button. Rounded corners should match the project's radius system, not default to `rounded-full`.

### 19. No Default Fonts Without Reasoning
- [ ] **No default Inter/Poppins without deliberate reasoning?**
- **Pass:** Font choice has documented reasoning. If Inter IS chosen, there's a specific reason beyond "it's clean" (e.g., "maximum x-height for a data-dense dashboard where readability at 13px is critical").
- **Fail:** Inter or Poppins used as a thoughtless default because it was the first font that came to mind.
- **If fail:** Review the font pairing archetypes. Select a typeface that matches the project's personality. Document the reasoning in a code comment or design token file.

### 20. No Raw Tailwind Colors
- [ ] **No raw Tailwind colors (`blue-500`) without semantic aliasing?**
- **Pass:** All Tailwind color usage goes through semantic aliases defined in `tailwind.config.js` (e.g., `bg-primary`, `text-on-surface-muted`). Changing the brand color means changing ONE token, not 47 instances of `blue-500`.
- **Fail:** `text-gray-700`, `bg-blue-500`, `border-gray-200` scattered throughout components with no abstraction layer. Changing the primary color requires a find-and-replace across the entire codebase.
- **If fail:** Define semantic color tokens in your Tailwind config. Replace all raw color references with semantic equivalents.

---

## BONUS CRAFT POINTS

*Not required, but signals excellence. A delivery with 3+ bonus points is exceptional.*

### Spring Physics
- [ ] **Spring physics used for at least one interaction**
- Menu open/close, toggle switch, button press, page transition, tooltip
- Using Framer Motion, React Spring, or CSS spring() if available

### Optical Alignment
- [ ] **Optical alignment corrections noted in comments**
- Play button offset, icon vertical nudge, text padding compensation
- Comments explain WHY the manual adjustment exists

### Custom Easing Curves
- [ ] **Custom easing curves defined for brand-specific motion**
- Beyond the standard ease-out/ease-in — a signature cubic-bezier that's part of the brand
- Documented in the design token system

### Skeleton Loading
- [ ] **Skeleton loading states for async content**
- Pulse animation (not shimmer), matching the layout of real content
- Correct element proportions (not generic gray bars)

### Full State Coverage
- [ ] **Error, empty, success, and loading states designed (not just happy path)**
- Empty states with helpful guidance, not "No items found"
- Error states with recovery actions, not just red text
- Success states with appropriate celebration level (a toast, not confetti on every save)
- Loading states that preserve layout and don't cause content shift
