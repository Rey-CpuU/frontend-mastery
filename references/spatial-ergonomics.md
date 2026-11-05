# Spatial Ergonomics & Mobile-First Patterns

> "Responsive design is not shrinking a desktop layout into a narrow column. It is optimizing for human thumbs and mobile physical constraints."

---

## 1. The Thumb Zone Architecture

On mobile devices, users operate screens with one thumb. Reachability is physical:

* **Natural Zone (Bottom 40% of screen):** Primary CTAs, tab bars, sheet drag handles, search bars.
* **Stretch Zone (Middle 35% of screen):** Content feeds, cards, secondary interactions.
* **Pain Zone (Top 25% of screen):** Back buttons, status indicators, avatar links. **Never place critical primary action buttons here on mobile.**

### Implementation Rule:
In mobile viewports (`< 768px`), promote floating action bars or bottom-pinned sheets for primary actions rather than burying buttons at the bottom of long-scrolling forms.

---

## 2. Bottom Sheets vs Center Modals

* ❌ **Anti-Pattern on Mobile:** Rendering a floating dialog modal centered on screen. When the virtual keyboard pops up, the modal gets obscured or cut off.
* ✅ **Modern Pattern:** 
  * Viewport $\ge 768px$ (Desktop): Floating dialog centered on screen (`max-w-lg mx-auto`).
  * Viewport $< 768px$ (Mobile): Automatically morph into a **Swipeable Bottom Sheet** attached to the screen bottom (`fixed inset-x-0 bottom-0 rounded-t-2xl max-h-[85vh]`).

---

## 3. Touch Targets & Spacing Rules

* **Minimum 44×44px Touch Target:** Even if an icon is `16×16px`, its clickable container padding must yield at least `44×44px` (Apple HIG / Android Material rule).
* **Gap between clickables:** Minimum `8px` between adjacent tap targets to prevent accidental misclicks.

---

## 4. Mobile Keyboard & Form Optimization

Prevent mobile keyboard frustration with correct HTML attributes:

| Field Purpose | HTML Attr Checklist | User Impact |
| :--- | :--- | :--- |
| **Email input** | `type="email" inputmode="email" autocomplete="email" autocapitalize="none"` | Shows `@` key without switching layouts |
| **Phone number** | `type="tel" inputmode="tel" autocomplete="tel"` | Opens numeric keypad |
| **Verification code (OTP)**| `type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]*"` | Triggers SMS autofill chip on iOS/Android |
| **Search field** | `type="search" enterkeyhint="search"` | Shows "Search" blue button instead of "Return" |
| **Currency amount** | `inputmode="decimal"` | Shows numbers + decimal dot |

---

## 5. Viewport Meta & Safe Area Insets

Always support modern bezels and notches (iPhone dynamic island, home indicator bars):

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
/* Pad bottom navigation away from home bar */
.mobile-nav-bar {
  padding-bottom: env(safe-area-inset-bottom, 16px);
}
```
