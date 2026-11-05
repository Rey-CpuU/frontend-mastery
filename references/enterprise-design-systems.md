# Enterprise Design Systems Architecture Playbook

> Key patterns extracted from Shopify Polaris, GitHub Primer, Atlassian Design System, and Stripe Elements.

---

## 1. Semantic Token Hierarchy (The 3-Tier Model)

World-class systems never use raw hex values in components. They strictly enforce a 3-tier token chain:

```
[ Tier 1: Global / Primitives ]   →   [ Tier 2: Semantic / Purpose ]   →   [ Tier 3: Component Specific ]
blue-500 (#3B82F6)               →   --color-interactive-primary      →   .btn-primary { background: ... }
slate-900 (#0F172A)              →   --color-surface-canvas           →   .layout-root { background: ... }
red-500 (#EF4444)                →   --color-feedback-danger          →   .input-error { border: ... }
```

---

## 2. Intentional Status & Badge Patterns (Shopify Polaris Model)

Never use random colors for statuses. Statuses must always carry semantic intent:

| Status Tone | Background | Foreground | Meaning |
| :--- | :--- | :--- | :--- |
| **Info / Neutral** | `bg-slate-500/10` | `text-slate-400` | Draft, archived, or standard data point |
| **Success / Settled** | `bg-emerald-500/10` | `text-emerald-400` | Completed, verified, operational |
| **Warning / Attention**| `bg-amber-500/10` | `text-amber-400` | Pending, action needed, expiring |
| **Critical / Danger** | `bg-rose-500/10` | `text-rose-400` | Failed, revoked, payment overdue |

---

## 3. Data Density Modes (GitHub Primer Model)

* **Compact / High Density (Developer/Analyst view):** `py-1 px-2.5`, text size `12px` (`text-xs`), table row height `32px`.
* **Comfortable (Consumer/End-user view):** `py-3 px-4`, text size `14px` (`text-sm`), table row height `48px`.
