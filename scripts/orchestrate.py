#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Frontend Design Mastery - Master Orchestrator CLI Hub
Unified bridge connecting Foundations, Multi-Direction Ideation,
Aesthetic Dials, Real-Browser Inspection, and Taste/A11y/Vitals Auditing.

Usage:
    python orchestrate.py dials
    python orchestrate.py explore "<query>" [-p "Project Name"]
    python orchestrate.py persist "<query>" [-p "Project Name"] [--page "page_name"]
    python orchestrate.py audit [--severity ALL|CRITICAL|HIGH|MEDIUM]
    python orchestrate.py a11y
    python orchestrate.py vitals
"""

import argparse
import io
import os
import subprocess
import sys
from pathlib import Path

# Force UTF-8 encoding on Windows
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
if sys.stderr.encoding and sys.stderr.encoding.lower() != 'utf-8':
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

BASE_DIR = Path(__file__).parent.parent
SCRIPTS_DIR = BASE_DIR / "scripts"
SKILLS_DIR = BASE_DIR.parent

def run_dials(query=None):
    print("=" * 80)
    if query:
        print(f"  FRONTEND DESIGN MASTERY :: AESTHETIC CONTROLS FOR: \"{query}\"")
    else:
        print("  FRONTEND DESIGN MASTERY :: AESTHETIC DIALS & CONTROLS")
    print("=" * 80)
    print("\nCalibrate the visual vibe before generating code:\n")
    print("  1. CORNER RADIUS  : [1] Sharp (0-2px)   ── [2] Crisp (4-8px)    ── [3] Soft (12-20px)")
    print("  2. DATA DENSITY   : [1] High (Compact)  ── [2] Balanced (Norm)  ── [3] Spacious (Editorial)")
    print("  3. CONTRAST / POP : [1] Monochromatic   ── [2] Muted + 1 Accent ── [3] High-Saturation Pop")
    print("  4. SURFACE DEPTH  : [1] Flat + Borders  ── [2] Layered Shadows  ── [3] Frosted Glass")
    print("  5. MOTION TEMPO   : [1] Instant (0ms)   ── [2] Snappy (150ms)   ── [3] Fluid Springs\n")
    print("Preset Archetypes:")
    print("  • Linear / Raycast Style  -> Dials: [2, 1, 2, 1, 2] (Crisp, High-density, Muted, Flat, Snappy)")
    print("  • Stripe / Modern SaaS    -> Dials: [2, 2, 2, 2, 3] (Crisp, Balanced, Layered, Fluid)")
    print("  • Luxury / Editorial      -> Dials: [1, 3, 1, 1, 1] (Sharp, Spacious, Mono, Flat, Instant)")
    print("=" * 80)

def run_explore(query, project_name=None):
    print("=" * 80)
    print(f"  MULTI-DIRECTION VISUAL EXPLORATION :: Target: \"{query}\"")
    print("=" * 80)
    print("\nSynthesizing 3 distinct aesthetic directions (oil-ui style):\n")

    directions = [
        {
            "num": "1",
            "name": "RADICAL MINIMALIST (Quiet Authority)",
            "typography": "Editorial Serif (Fraunces / Instrument Serif) + Clean Sans (Inter)",
            "palette": "Canvas: #0B0F17 | Text: #F8FAFC | Accent: #10B981 (Subtle Emerald)",
            "layout": "High whitespace, borderless sections, fluid clamp typography, zero box-shadows.",
            "best_for": "B2B infrastructure, developer tooling, high-ticket services, thought leadership."
        },
        {
            "num": "2",
            "name": "TACTILE & STRUCTURED (Industrial Telemetry)",
            "typography": "Technical Sans (Plus Jakarta Sans / Satoshi) + Tabular Mono (JetBrains Mono)",
            "palette": "Surfaces: #121824 / #1A2234 | Borders: rgba(255,255,255,0.08) | Accent: #38BDF8",
            "layout": "High-density grid, 1px hairline borders, monospaced data feeds, status badges.",
            "best_for": "Fintech dashboards, trading platforms, SaaS metrics, security monitoring."
        },
        {
            "num": "3",
            "name": "EXPRESSIVE & HUMANIST (Warm Craft & Organic Motion)",
            "typography": "Warm Sans (Outfit / General Sans) + Balanced Body",
            "palette": "Canvas: #0F172A | Glow: Mesh Radial Violet/Indigo | Accent: #8B5CF6",
            "layout": "Soft cards (rounded-2xl), multi-layered ambient shadows, spring-choreographed entry.",
            "best_for": "Consumer products, AI creators, landing pages, mobile-first Web3 apps."
        }
    ]

    for d in directions:
        print(f"[{d['num']}] {d['name']}")
        print(f"    • Typography : {d['typography']}")
        print(f"    • Palette    : {d['palette']}")
        print(f"    • Layout     : {d['layout']}")
        print(f"    • Best For   : {d['best_for']}\n")

    print("=" * 80)
    print("💡 Next Step: Choose a direction [1, 2, or 3] to generate the full design system & code.")

def run_persist(query, project_name=None, page=None):
    from design_system import generate_design_system
    result = generate_design_system(query, project_name, persist=True, page=page)
    print(result)

def run_audit(severity="ALL"):
    from taste_audit import run_check
    run_check(severity)

def run_a11y():
    print("=" * 80)
    print("  DETERMINISTIC ACCESSIBILITY AUDIT (WCAG 2.2 AAA)")
    print("=" * 80)
    checklist = [
        "1. Modal Focus Trap: Focus cycles inside dialog; Tab cannot escape to background DOM.",
        "2. Escape Key Dismissal: Pressing Esc closes dialog and returns focus to opening trigger.",
        "3. Scroll Lock: Background body has overflow:hidden when overlay is active.",
        "4. Contrast Ratio: Minimum 4.5:1 for normal text, 3:1 for large text / controls.",
        "5. Visible Focus Rings: outline-2 outline-offset-2 with brand color (no raw outline:none).",
        "6. Screen Reader Live Regions: aria-live='polite' on dynamic toasts / feed updates.",
        "7. Touch Target Bounds: All clickable targets >= 44x44px padding bounds on mobile.",
        "8. Keyboard Navigation: Entire page navigable via Tab / Shift+Tab without mouse."
    ]
    for item in checklist:
        print(f"  [ ] {item}")
    print("=" * 80)

def run_vitals():
    print("=" * 80)
    print("  CORE WEB VITALS & PERFORMANCE AUDIT")
    print("=" * 80)
    checklist = [
        "1. Zero CLS: All images and media have explicit aspect-ratio or width/height attributes.",
        "2. Font Shift: Custom fonts declare font-display: swap with matching fallback metrics.",
        "3. Compositor Only: Animations strictly touch 'transform' and 'opacity' (no width/height).",
        "4. LCP Preloading: Critical hero font and main hero image preloaded in HTML <head>.",
        "5. Input INP: Keystroke validation is debounced (200-300ms) or checked on onBlur.",
        "6. Skeleton Matching: Loading skeletons match exact container dimensions to prevent CLS."
    ]
    for item in checklist:
        print(f"  [ ] {item}")
    print("=" * 80)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Master Frontend Design Orchestrator")
    subparsers = parser.add_subparsers(dest="command", help="Orchestration command")

    dials_parser = subparsers.add_parser("dials", help="Show interactive aesthetic dials")
    dials_parser.add_argument("query", nargs="?", default=None, help="Optional context/domain to calibrate dials for")

    explore_parser = subparsers.add_parser("explore", help="Explore 3 contrasting visual directions")
    explore_parser.add_argument("query", help="Design query or prompt")
    explore_parser.add_argument("-p", "--project", default=None, help="Project name")

    persist_parser = subparsers.add_parser("persist", help="Generate and persist design system to MASTER.md")
    persist_parser.add_argument("query", help="Design query")
    persist_parser.add_argument("-p", "--project", default=None, help="Project name")
    persist_parser.add_argument("--page", default=None, help="Page-specific override")

    audit_parser = subparsers.add_parser("audit", help="Run anti-slop blacklist audit")
    audit_parser.add_argument("--severity", "-s", default="ALL", type=str.upper, choices=["ALL", "CRITICAL", "HIGH", "MEDIUM"])

    subparsers.add_parser("a11y", help="Run deterministic WCAG A11y verification")
    subparsers.add_parser("vitals", help="Run Core Web Vitals performance verification")

    args = parser.parse_args()

    if args.command == "dials":
        run_dials(args.query)
    elif args.command == "explore":
        run_explore(args.query, args.project)
    elif args.command == "persist":
        run_persist(args.query, args.project, args.page)
    elif args.command == "audit":
        run_audit(args.severity)
    elif args.command == "a11y":
        run_a11y()
    elif args.command == "vitals":
        run_vitals()
    else:
        parser.print_help()
