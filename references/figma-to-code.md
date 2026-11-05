# Figma-to-Code Mapping Cheatsheet

> Bridging the gap between Figma design properties and production CSS/Tailwind code.

---

## 1. Auto Layout to Flexbox Translation Matrix

| Figma Auto Layout Property | CSS Flexbox | Tailwind CSS |
| :--- | :--- | :--- |
| **Direction: Horizontal** | `display: flex; flex-direction: row;` | `flex flex-row` |
| **Direction: Vertical** | `display: flex; flex-direction: column;` | `flex flex-col` |
| **Spacing between items (Gap)** | `gap: 16px;` | `gap-4` |
| **Padding: [T, R, B, L]** | `padding: 12px 16px;` | `py-3 px-4` |
| **Resizing: Fill container** | `flex: 1 1 0%; width: 100%;` | `flex-1 w-full` |
| **Resizing: Hug contents** | `width: fit-content; height: fit-content;` | `w-fit h-fit` |
| **Resizing: Fixed (e.g. 320px)** | `width: 320px; flex-shrink: 0;` | `w-[320px] shrink-0` |

---

## 2. Alignment & Distribution Mapping

| Figma Alignment | CSS Equivalent | Tailwind CSS |
| :--- | :--- | :--- |
| **Align Left / Top** | `justify-content: flex-start; align-items: flex-start;` | `justify-start items-start` |
| **Align Center** | `justify-content: center; align-items: center;` | `justify-center items-center` |
| **Space Between** | `justify-content: space-between;` | `justify-between` |

---

## 3. Figma Effects to Tailwind Shadows

* Figma: `X: 0, Y: 1, Blur: 2, Spread: 0, Color: #000000 5%` $\rightarrow$ `shadow-sm`
* Figma: `X: 0, Y: 4, Blur: 6, Spread: -1, Color: #000000 10%` $\rightarrow$ `shadow-md`
* Figma: `X: 0, Y: 10, Blur: 15, Spread: -3, Color: #000000 10%` $\rightarrow$ `shadow-lg`
* Figma: `Background Blur: 12px` $\rightarrow$ `backdrop-blur-md`
