#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Taste Audit Script - Enforce anti-AI-slop rules and query craft heuristics.
Part of the frontend-design-mastery skill.

Usage:
    python taste_audit.py check [--severity CRITICAL|HIGH|MEDIUM|ALL]
    python taste_audit.py heuristic "<query>" [--max-results 3]
    python taste_audit.py random-tip
"""

import argparse
import csv
import io
import random
import re
import sys
from pathlib import Path

# Force UTF-8 encoding on Windows console
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
if sys.stderr.encoding and sys.stderr.encoding.lower() != 'utf-8':
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

DATA_DIR = Path(__file__).parent.parent / "data"

# Import BM25 from core.py
try:
    from core import BM25
except ImportError:
    # Inline fallback BM25 if running standalone
    import re
    from math import log
    from collections import defaultdict

    class BM25:
        def __init__(self, k1=1.5, b=0.75):
            self.k1 = k1
            self.b = b
            self.corpus = []
            self.doc_lengths = []
            self.avgdl = 0
            self.idf = {}
            self.doc_freqs = defaultdict(int)
            self.N = 0

        def tokenize(self, text):
            text = re.sub(r'[^\w\s]', ' ', str(text).lower())
            return [w for w in text.split() if len(w) > 2]

        def fit(self, documents):
            self.corpus = [self.tokenize(doc) for doc in documents]
            self.N = len(self.corpus)
            if self.N == 0:
                return
            self.doc_lengths = [len(doc) for doc in self.corpus]
            self.avgdl = sum(self.doc_lengths) / self.N
            for doc in self.corpus:
                seen = set()
                for word in doc:
                    if word not in seen:
                        self.doc_freqs[word] += 1
                        seen.add(word)
            for word, freq in self.doc_freqs.items():
                self.idf[word] = log((self.N - freq + 0.5) / (freq + 0.5) + 1)

        def score(self, query):
            query_tokens = self.tokenize(query)
            scores = []
            for idx, doc in enumerate(self.corpus):
                score = 0
                doc_len = self.doc_lengths[idx]
                term_freqs = defaultdict(int)
                for word in doc:
                    term_freqs[word] += 1
                for token in query_tokens:
                    if token in self.idf:
                        tf = term_freqs[token]
                        idf = self.idf[token]
                        num = tf * (self.k1 + 1)
                        den = tf + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl)
                        score += idf * num / den
                scores.append((idx, score))
            return sorted(scores, key=lambda x: x[1], reverse=True)


def load_csv(filename):
    filepath = DATA_DIR / filename
    if not filepath.exists():
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def run_check(severity_filter="ALL"):
    items = load_csv("taste-blacklist.csv")
    if not items:
        print("Error: taste-blacklist.csv not found.")
        return

    sev = severity_filter.upper()
    if sev != "ALL":
        items = [it for it in items if it.get("Severity", "").upper() == sev]

    print("=" * 80)
    print(f"  ANTI-AI-SLOP BLACKLIST AUDIT  [{sev}] - {len(items)} items")
    print("=" * 80)

    for i, item in enumerate(items, 1):
        cat = item.get("Category", "General")
        name = item.get("Item", "")
        level = item.get("Severity", "MEDIUM")
        why = item.get("Why_Bad", "")
        instead = item.get("Do_Instead", "")

        icon = "❌" if level == "CRITICAL" else ("⚠️" if level == "HIGH" else "ℹ️")
        print(f"\n{i}. {icon} [{level}] {cat} :: {name}")
        print(f"   Why:     {why}")
        print(f"   Instead: {instead}")

    print("\n" + "=" * 80)


def run_heuristic_search(query, max_results=3):
    items = load_csv("craft-heuristics.csv")
    if not items:
        print("Error: craft-heuristics.csv not found.")
        return

    search_cols = ["Category", "Principle", "Description", "Example_Good", "Example_Bad"]
    documents = [" ".join(str(row.get(col, "")) for col in search_cols) for row in items]

    bm25 = BM25()
    bm25.fit(documents)
    ranked = bm25.score(query)

    print("=" * 80)
    print(f"  CRAFT HEURISTICS SEARCH :: Query: \"{query}\"")
    print("=" * 80)

    count = 0
    for idx, score in ranked:
        if score <= 0 or count >= max_results:
            break
        row = items[idx]
        count += 1
        print(f"\n### Result {count} (Impact: {row.get('Impact', 'MEDIUM')})")
        print(f"**Category:** {row.get('Category', '')} | **Principle:** {row.get('Principle', '')}")
        print(f"**Description:** {row.get('Description', '')}")
        print(f"  ✅ Good: {row.get('Example_Good', '')}")
        print(f"  ❌ Bad:  {row.get('Example_Bad', '')}")

    if count == 0:
        print("\nNo heuristics found matching your query.")
    print("\n" + "=" * 80)


def run_random_tip():
    items = load_csv("craft-heuristics.csv")
    if not items:
        print("Error: craft-heuristics.csv not found.")
        return

    row = random.choice(items)
    print("=" * 80)
    print(f"  DAILY CRAFT HEURISTIC TIP  (Impact: {row.get('Impact', 'MEDIUM')})")
    print("=" * 80)
    print(f"\n**{row.get('Category', '')}** :: {row.get('Principle', '')}")
    print(f"{row.get('Description', '')}\n")
    print(f"  ✅ DO:   {row.get('Example_Good', '')}")
    print(f"  ❌ DON'T: {row.get('Example_Bad', '')}")
    print("\n" + "=" * 80)


def audit_file(filepath_str, severity_filter="ALL"):
    """Audit a component file (e.g. .tsx, .jsx) against anti-AI-slop rules."""
    path = Path(filepath_str)
    if not path.exists():
        print(f"Error: File not found: {path}")
        sys.exit(1)
        
    content = path.read_text(encoding="utf-8", errors="replace")
    lines = content.splitlines()
    findings = []
    
    # 1. Line-level pattern scans
    for idx, line in enumerate(lines, 1):
        # Generic raw blue buttons
        if re.search(r'bg-blue-[56]00', line) and ('button' in line.lower() or 'className' in line):
            findings.append((idx, "CRITICAL", "Generic blue-500 button detected without semantic token", line.strip()))
        # Signature purple-to-blue AI gradient
        if 'from-purple-' in line and 'to-blue-' in line:
            findings.append((idx, "CRITICAL", "Purple-to-blue gradient CTA detected (signature AI slop)", line.strip()))
        # Emoji used as functional icon
        if re.search(r'[\U0001F300-\U0001F9FF]', line) and ('<span' in line or '<p' in line or '<button' in line):
            findings.append((idx, "CRITICAL", "Emoji used as functional icon instead of SVG icon", line.strip()))
            
    # 2. JSX Tag-level AST heuristics (multi-line aware)
    jsx_tags = re.finditer(r'<([a-zA-Z0-9_\.\-]+)([^>]*?)>', content, re.DOTALL)
    for m in jsx_tags:
        tag_name = m.group(1)
        attrs = m.group(2)
        start_pos = m.start()
        line_no = content[:start_pos].count('\n') + 1
        
        # Non-button element with onClick missing cursor-pointer
        if 'onClick' in attrs and tag_name.lower() not in ['button', 'motion.button'] and 'cursor-pointer' not in attrs:
            findings.append((line_no, "HIGH", f"Non-button element <{tag_name}> with onClick missing cursor-pointer class", attrs.strip()[:75]))
            
        # Icon-only button missing aria-label
        if tag_name.lower() in ['button', 'motion.button'] and not re.search(r'aria-label|aria-labelledby', attrs):
            if re.search(r'<(Plus|X|Chevron|Filter|Paperclip|Zap|Bot|Send|Layers|Search)\b', attrs) or len(attrs.strip()) < 80:
                # check if there is text inside children or if it's icon only
                pass

    sev = severity_filter.upper()
    if sev != "ALL":
        findings = [f for f in findings if f[1] == sev]
        
    print("=" * 80)
    print(f"  TASTE AUDIT REPORT :: File: {path.name}  [Filter: {sev}]")
    print("=" * 80)
    if not findings:
        print("✓ PASS: Zero anti-AI-slop violations detected.")
        print("=" * 80)
        return True
        
    print(f"❌ REJECT: Found {len(findings)} anti-slop violation(s):\n")
    for line_no, level, msg, snippet in findings:
        icon = "❌" if level == "CRITICAL" else "⚠️"
        print(f"  Line {line_no:4d}: {icon} [{level}] {msg}")
        print(f"            {snippet[:75]}")
    print("=" * 80)
    return False


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Taste Audit & Craft Heuristics")
    subparsers = parser.add_subparsers(dest="command", help="Sub-commands")

    # check
    check_parser = subparsers.add_parser("check", help="View anti-slop blacklist items")
    check_parser.add_argument("--severity", "-s", default="ALL", type=str.upper, choices=["CRITICAL", "HIGH", "MEDIUM", "ALL"],
                              help="Filter by severity level")

    # audit (file inspection)
    audit_parser = subparsers.add_parser("audit", help="Audit a component file (.tsx/.jsx) against anti-slop rules")
    audit_parser.add_argument("file", help="Path to TSX/JSX file to audit")
    audit_parser.add_argument("--severity", "-s", default="ALL", type=str.upper, choices=["CRITICAL", "HIGH", "MEDIUM", "ALL"],
                              help="Filter by severity level")

    # heuristic
    heur_parser = subparsers.add_parser("heuristic", help="Search craft heuristics")
    heur_parser.add_argument("query", help="Search query")
    heur_parser.add_argument("--max-results", "-n", type=int, default=3, help="Max results")

    # random-tip
    subparsers.add_parser("random-tip", help="Get a random craft tip")

    args = parser.parse_args()

    if args.command == "check":
        run_check(args.severity)
    elif args.command == "audit":
        audit_file(args.file, args.severity)
    elif args.command == "heuristic":
        run_heuristic_search(args.query, args.max_results)
    elif args.command == "random-tip":
        run_random_tip()
    else:
        # Default behavior if run without subcommand: random tip
        run_random_tip()
