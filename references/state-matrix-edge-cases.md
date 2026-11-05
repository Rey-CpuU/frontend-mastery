# Component State Matrix & Edge Cases Guide

> "Senior engineers don't just build the happy path. They design the edge cases where things break."

---

## 1. The Mandatory 5-State Architecture

Every dynamic, data-fetching, or interactive UI component must define and render these 5 states:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. LOADING   → Subtle skeleton match, no layout shift (CLS) │
│ 2. EMPTY     → Informative title + explanation + 1 CTA      │
│ 3. ERROR     → Specific cause + recovery action (Retry)     │
│ 4. PARTIAL   → Truncated values, long names, pagination     │
│ 5. IDEAL     → Happy path data display                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Skeleton Loading Best Practices

* **Zero Shimmer Chaos:** Do not make 20 independent skeleton cards flash bright white shimmers. Use a gentle, synchronized opacity pulse (`1.5s ease-in-out`, opacity `0.4` to `0.8`).
* **Exact Shape Matching:** Skeletons must match the dimensions of the final data to prevent **Cumulative Layout Shift (CLS)**.
  * Heading skeleton: `h-6 w-48 rounded-md bg-white/[0.08]`
  * Avatar skeleton: `h-10 w-10 rounded-full bg-white/[0.08]`
  * Text block skeleton: 3 lines with staggered widths (`w-full`, `w-5/6`, `w-2/3`).

---

## 3. The Edge Case Stress Test

Before finishing a component, stress-test it against these real-world data horrors:

### A. The 80-Character String (Name & Title Overflow)
* **Problem:** User enters `"Dr. Elizabeth Alexander-Montgomerie III (Vice President of Regional Operations)"` and breaks your card layout.
* **Fix:** 
  ```css
  /* Enforce single-line truncation with tooltip fallback */
  .truncate-safe {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0; /* Critical inside flex containers */
  }
  ```

### B. Broken Image Links
* Never leave a broken image icon. Always attach an `onError` handler that falls back to a deterministic initials avatar or placeholder icon.

### C. Extreme Numbers & Currency
* Test with `0`, `$0.00`, negative values `-$4,320.10`, and large figures `$1,429,910,240.00`.
* In financial tables, always apply `font-variant-numeric: tabular-nums` (Tailwind: `tabular-nums`) so numbers align vertically on decimal points.

### D. Zero-State Form Inputs
* Button disabled state must have `cursor-not-allowed`, opacity `0.5`, and explanatory tooltip if the user wonders why it cannot be clicked yet.
