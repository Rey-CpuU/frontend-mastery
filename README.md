# Frontend Design Mastery (Unified Hybrid Design Engine)

> **The Definitive Frontend Design Engineering System & AI-Slop Enforcer.**
> Synthesizing world-class intelligence from `ui-ux-pro-max`, `taste-skill`, `impeccable`, `oil-ui`, `claude-design-system`, and `frontend-design-toolkit`.

---

## 🏛️ Topologi Arsitektur & Alur Kerja Sistem

```mermaid
flowchart TD
    classDef input fill:#1E293B,stroke:#38BDF8,stroke-width:2px,color:#F8FAFC;
    classDef layer1 fill:#0F172A,stroke:#64748B,stroke-width:1.5px,color:#E2E8F0;
    classDef layer2 fill:#1E1B4B,stroke:#818CF8,stroke-width:1.5px,color:#E0E7FF;
    classDef layer3 fill:#312E81,stroke:#C084FC,stroke-width:2px,color:#FAF5FF;
    classDef loop fill:#14532D,stroke:#4ADE80,stroke-width:2px,color:#F0FDF4;
    classDef gatekeeper fill:#450A0A,stroke:#F87171,stroke-width:2px,color:#FEF2F2;
    classDef output fill:#064E3B,stroke:#34D399,stroke-width:2px,color:#ECFDF5;

    User(["🧑‍💻 USER REQUEST\n'Bikin / Review UI'"]):::input --> Step0["0. STACK & DIALS SELECTION\n• Tentukan Framework (Next.js, Vue, Svelte, dll.)\n• Atur Rasa: Radius, Density, Contrast, Depth"]:::input

    Step0 --> Step1["1. MULTI-DIRECTION EXPLORATION (oil-ui)\nSajikan 3 Varian Visual Kontras:\n[1] Minimalist  [2] Structured Telemetry  [3] Expressive"]:::input

    subgraph L1 ["LAYER 1: FOUNDATIONS & SYSTEM LOCK"]
        direction TB
        Tokens["Design Tokens (foundations.md)\n• 4px/8px Spacing Rhythm\n• Modular Type Scale (1.250)\n• Semantic Surface Colors (surface-0/1/2)"]:::layer1
        Persist["Token Persistence (MASTER.md)\n• Kunci Source of Truth permanen\n• Mencegah inkonsistensi antar sesi chat"]:::layer1
    end

    subgraph L2 ["LAYER 2: PATTERNS, STACKS & SYSTEMS"]
        direction TB
        SearchEngine["BM25 Search Engine (search.py)\n• 67 UI Styles & 96 Curated Palettes\n• 13 Stack Adapters (Next, Tailwind, Nuxt, Svelte, dll.)"]:::layer2
        CleanArch["Architecture & Standards\n• Component Composition (Slot Pattern)\n• Figma-to-Code Mapping (Auto-layout -> Flexbox)\n• Enterprise Tokens (Shopify Polaris / Primer)"]:::layer2
    end

    subgraph L3 ["LAYER 3: CRAFT & POLISH ENGINE"]
        direction TB
        Motion["Motion Choreography (motion-choreography.md)\n• Real Spring Physics (mass, stiffness, damping)\n• 35ms Stagger Cap | 30% Faster Exit"]:::layer3
        CopyWriting["UX Micro-Copy (micro-copy-ux-writing.md)\n• Banned Cliché Replacement ('Get Started' -> Action Verbs)\n• 3-Part Error Recovery Architecture"]:::layer3
        StateMatrix["5-State Coverage (state-matrix-edge-cases.md)\n• Loading Skeleton (Anti-CLS) | Empty | Error | Truncate"]:::layer3
        Ergonomics["Spatial Ergonomics (spatial-ergonomics.md)\n• Mobile Thumb-Zone (Bottom 40%)\n• Bottom-Sheet Morphing (<768px)"]:::layer3
    end

    subgraph VLoop ["VISUAL VERIFIER & EYE (taste-skill / shoot.mjs)"]
        direction TB
        Inspect["Real-Browser Inspection\n• Viewport 375px & 1440px Check\n• Deteksi Horizontal Overflow & Bad Tap Targets"]:::loop
    end

    subgraph Gate ["STRICT AUDIT GATEKEEPER"]
        direction TB
        BlacklistCheck{"Blacklist Inspection\n(taste-blacklist.csv)\n• Neon Gradients? Generic Inter?\n• Emojis as Icons? Raw Tailwind?"}:::gatekeeper
        A11yVitalsCheck{"A11y & Vitals Guard\n• Focus Trap on Modals?\n• Zero CLS (Explicit aspect-ratio)?\n• Compositor-only Animations?"}:::gatekeeper
    end

    Step1 --> L1
    L1 --> L2
    L2 --> L3
    L3 --> VLoop
    VLoop --> Gate

    BlacklistCheck -- "❌ Ada Slop" --> Refactor["Auto-Refactor & Polish"]:::gatekeeper
    Refactor --> L3
    BlacklistCheck -- "✅ Clean" --> A11yVitalsCheck
    A11yVitalsCheck -- "✅ Passes 100%" --> FinalOutput(["🚀 DELIVER HIGH-CRAFT PRODUCTION CODE\n(Annotated, Pixel-Perfect, High-Performance)"]):::output
```

---

## 🛠️ CLI Hub Command Reference (`orchestrate.py`)

Anda dapat menjalankan perintah terpusat melalui terminal:

| Perintah CLI | Fungsi |
| :--- | :--- |
| `python scripts/orchestrate.py dials` | Menampilkan 5 slider kendali rasa (*Radius, Density, Depth, Contrast, Motion*). |
| `python scripts/orchestrate.py explore "<query>"` | Menghasilkan **3 arah visual kontras** (*Minimalist, Structured Telemetry, Expressive*). |
| `python scripts/orchestrate.py persist "<query>" -p "Nama"` | Mengunci sistem desain ke file permanen `design-system/MASTER.md`. |
| `python scripts/orchestrate.py audit --severity CRITICAL` | Memeriksa pelanggaran anti-slop paling fatal. |
| `python scripts/orchestrate.py a11y` | Menjalankan checklist audit aksesibilitas deterministik (WCAG 2.2 AAA & Focus-trap). |
| `python scripts/orchestrate.py vitals` | Menjalankan checklist verifikasi Core Web Vitals (Anti-CLS, INP, LCP). |

---

## 💬 Katalog Prompt Lengkap (Cara Pakai Per Fitur)

Salin prompt di bawah ini langsung ke chat agent untuk memicu fitur spesifik:

### 1. Memulai Proyek Baru dengan Penentuan Stack & Dials
> *"Saya mau buat aplikasi dashboard analitik. Sebelum mulai menulis kode, tolong tanyakan stack yang cocok dan berikan pilihan Aesthetic Dials (Radius, Density, Surface Depth) agar saya bisa tentukan gayanya."*

### 2. Multi-Direction Exploration (3 Variasi Desain Side-by-Side)
> *"Saya mau mendesain ulang Hero Section untuk SaaS developer tools. Gunakan fitur Multi-Direction Exploration untuk memberikan 3 variasi konsep visual yang kontras (Minimalist, Structured Telemetry, dan Expressive) sebelum kita mulai coding."*

### 3. Mengunci Desain Permanen (Token & System Persistence)
> *"Kunci sistem desain yang kita sepakati ini ke dalam `design-system/MASTER.md`. Pastikan semua palet warna, tipografi, dan token spasi tersimpan permanen agar halaman berikutnya tetap konsisten."*

### 4. Menghasilkan Komponen dengan Micro-Interactions & Spring Physics
> *"Buatkan komponen Modal Dialog interaktif menggunakan React dan Tailwind CSS. Terapkan spring physics (bukan linear transition), animasi exit 30% lebih cepat, dan blur backdrop yang elegan."*

### 5. Memaksa Penulisan Micro-Copy Berkualitas (Anti-Cliché)
> *"Review semua tombol dan teks di komponen ini. Ganti semua kata klise seperti 'Get Started', 'Learn More', dan 'Submit' dengan action-verbs bervolume tinggi sesuai panduan micro-copy writing."*

### 6. Menangani 5-State Architecture & Edge Cases
> *"Desain komponen Card Profil Pengguna ini dengan Mandatory 5-State Rule: berikan Loading Skeleton (tanpa CLS), Empty State dengan 1 CTA, Error Fallback dengan tombol Retry, Partial/Truncated State untuk nama sepanjang 80 karakter, dan Ideal State."*

### 7. Optimasi Mobile Ergonomics & Thumb Zone
> *"Ubah komponen form multi-step ini agar ramah mobile: posisikan tombol submit primer di Thumb-Zone (40% bawah layar), ubah modal menjadi swipeable bottom-sheet di layar < 768px, dan tambahkan atribut `inputmode='decimal'` serta `autocomplete`."*

### 8. Audit Anti-AI-Slop (Pemeriksaan Kualitas Rasa)
> *"Audit kode komponen ini menggunakan taste-blacklist dan craft-heuristics. Periksa apakah ada warna gradasi murahan, padding ganjil, tombol tanpa cursor-pointer, atau masalah optical alignment pada ikon."*

### 9. Audit Aksesibilitas Deterministik (WCAG 2.2 AAA)
> *"Jalankan audit aksesibilitas pada modal ini: pastikan ada focus-trap keyboard (Tab tidak boleh tembus ke background), tombol Escape menutup modal, dan toast notifikasi menggunakan `aria-live='polite'`."*

### 10. Audit Core Web Vitals & Zero-CLS
> *"Periksa performa rendering komponen hero ini: pastikan semua media memiliki `aspect-ratio` eksplisit, font dideklarasikan dengan `font-display: swap`, dan tidak ada animasi CSS yang menyentuh properti layout (`width`/`height`)."*
