# Core Web Vitals & Frontend Performance Guard

> Synthesized from wilwaldon/Claude-Code-Frontend-Design-Toolkit and modern web perf standards.

A beautiful UI that causes layout shifts or frame drops is a failed design. Enforce these rendering performance guards:

---

## 1. Zero Cumulative Layout Shift (CLS < 0.1)

Layout shifts occur when async elements inject without pre-allocated space:

* **Explicit Aspect Ratios for Images/Media:**
  ```html
  <!-- Always define aspect-ratio or width/height attributes -->
  <img src="hero.webp" class="w-full aspect-[16/9] object-cover" width="1280" height="720" alt="..." />
  ```
* **Font Fallback Matching (Prevent FOIT/FOUT shift):**
  When loading Google Fonts (e.g., Inter, Outfit), define fallback metrics to prevent text reflow:
  ```css
  @font-face {
    font-family: 'HeadingFont';
    src: url('/fonts/custom.woff2') format('woff2');
    font-display: swap;
  }
  ```
* **Skeletons with Static Heights:** Never render an expanding spinner. Render a container with identical `min-h-[...]` to the final component.

---

## 2. Interaction to Next Paint (INP < 200ms)

* **Compositor-Only Animations:** Animations must ONLY touch `transform` and `opacity`.
  * ❌ **Never animate:** `width`, `height`, `top`, `left`, `margin`, `padding` (triggers CPU layout recalculation).
  * ✅ **Always animate:** `transform: translateY(...)`, `transform: scale(...)`, `opacity: ...` (runs on GPU compositor thread).
* **Debounced Form Validation:** Never run complex validation regex on every keystroke (`onChange`). Debounce by `200–300ms` or validate on `onBlur`.

---

## 3. Largest Contentful Paint (LCP < 2.5s)

* **Preload Critical Assets in `<head>`:**
  ```html
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/images/hero-visual.webp" as="image">
  ```
* **Hero Image Optimization:** Use `.webp` or `.avif`, max resolution `1920px` width, quality `80%`.
