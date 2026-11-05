# Deterministic Accessibility (WCAG 2.2 AAA & Focus Trap)

> Adapted from claude-design-system (accessibility-audit.md).

Accessibility is not an afterthought; it is an architectural foundation. All production interfaces must pass these deterministic checks:

---

## 1. Focus Trapping & Management in Modals / Drawers

When a dialog, modal, or mobile bottom-sheet opens:
1. **Initial Focus:** Move focus to the first interactive element or the close button immediately.
2. **Focus Trap:** Pressing `Tab` from the last interactive element must cycle back to the first element. Focus must **NEVER leak** into the background page while the modal is open.
3. **Escape Key Dismissal:** Pressing `Escape` must dismiss the overlay and **return focus** to the trigger element that opened it.
4. **Scroll Lock:** Background `<body>` must have `overflow: hidden` while modal is open.

---

## 2. Screen Reader Live Regions (`aria-live`)

For dynamic updates that happen without full page reload:

* **Toast Notifications & Status Alerts:**
  ```html
  <div role="status" aria-live="polite" class="sr-only">
    Invoice #1042 successfully settled.
  </div>
  ```
* **Critical Errors:**
  ```html
  <div role="alert" aria-live="assertive">
    Connection lost. Transactions are currently paused.
  </div>
  ```

---

## 3. High-Contrast Contrast Ratios (WCAG 2.2)

* **Normal Text (< 18px / < 14px bold):** Minimum `4.5:1` contrast ratio against immediate background.
* **Large Text (≥ 18px / ≥ 14px bold):** Minimum `3.0:1` contrast ratio.
* **UI Controls & Icons:** Minimum `3.0:1` against adjacent background.
* **Never use pure gray on gray for placeholder text:** Placeholders must remain legible (e.g., `text-slate-500` on dark, `text-gray-500` on light).
