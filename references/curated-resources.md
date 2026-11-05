# Curated Design Resources & Tooling Directory

> Synthesized from Traversy, Anurag Hazra, and Self-Hosted Design Tooling ecosystems.

---

## 1. Iconography (Strictly SVGs, No Emojis)

| Library | Best For | Import Pattern |
| :--- | :--- | :--- |
| **Lucide Icons** | Modern SaaS, minimal, clean lines | `import { ArrowUpRight } from 'lucide-react'` |
| **Phosphor Icons** | Flexible weight variants (thin to bold) | `import { ArrowUpRight } from '@phosphor-icons/react'` |
| **Heroicons** | Tailwind-native apps | `import { ArrowUpRightIcon } from '@heroicons/react/24/outline'` |
| **Simple Icons** | Brand and tech stack logos | `import { SiNextdotjs } from '@icons-pack/react-simple-icons'` |

---

## 2. Gradient, Shadow & Mesh Generators

* **Shadow Generator (Multi-Layer Elevation):** Always layer 2–3 soft shadows rather than 1 harsh shadow.
  ```css
  /* Premium Elevation Shadow */
  --shadow-layered: 0 1px 2px rgba(0, 0, 0, 0.04), 
                    0 4px 8px rgba(0, 0, 0, 0.04), 
                    0 12px 24px rgba(0, 0, 0, 0.06);
  ```
* **Mesh Gradient Formula:** Use radial gradients with disparate coordinate anchors rather than linear diagonal bars.
  ```css
  background-image: 
    radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.12) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.08) 0px, transparent 50%);
  ```

---

## 3. High-Signal Design Inspiration Indexes

* **Godly.website:** Minimalist, editorial, agency-grade interactive websites.
* **Mobbin:** Real iOS & Web user flows and onboarding screen states.
* **Minimal Gallery:** Clean typographic curation.
* **Awwwards / FWA:** Cutting-edge creative visual experiences and kinetic typography.
