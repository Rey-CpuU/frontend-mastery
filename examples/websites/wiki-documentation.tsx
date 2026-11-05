import React from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  FileText
} from 'lucide-react';

/**
 * Aesthetic Direction: High-Authority Editorial Documentation (Nextra / Stripe Docs Style)
 * Pattern: Sticky Sidebar + Search Palette + Clean MDX Prose with Breadcrumbs
 * Rules: 65ch line length, subtle active nav pills, zero visual noise.
 */

export function WikiDocumentation() {
  const navItems = [
    { title: 'Getting Started', items: ['Overview', 'Quick Installation', 'Aesthetic Dials'] },
    { title: 'Core Architecture', items: ['Token Persistence', '3-Direction Ideation', 'State Matrix'] },
    { title: 'Quality Enforcers', items: ['Anti-Slop Blacklist', 'WCAG AAA Audit', 'Zero-CLS Vitals'] }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans flex">
      {/* Sticky Left Sidebar - responsive */}
      <aside className="hidden md:flex w-64 border-r border-white/[0.08] bg-[#0E131F]/40 p-6 flex-col justify-between shrink-0 h-screen sticky top-0">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold text-sm tracking-tight text-slate-100">Core Developer Docs</span>
          </div>

          <div className="relative mb-6">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              aria-label="Search documentation"
              placeholder="Search guides... (Ctrl+K)"
              className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-black/20 border border-white/[0.08] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>

          <nav className="space-y-6 text-xs">
            {navItems.map((section, idx) => (
              <div key={idx}>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href="#"
                      className={`block px-3 py-1.5 rounded-md transition-colors ${
                        item === 'Token Persistence'
                          ? 'bg-indigo-500/10 text-indigo-300 font-medium border border-indigo-500/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-white/[0.06] text-[11px] text-slate-500 font-mono">
          Engine Build v2.4.0 • Updated
        </div>
      </aside>

      {/* Main Documentation Prose Area */}
      <main className="flex-1 p-10 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <span>Docs</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Core Architecture</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-300">Token Persistence</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-100 mb-4">
          Token Persistence & System Locking
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-prose mb-8">
          To eliminate cross-session amnesia in AI coding environments, design choices must be committed as a local Source of Truth. The persistence engine generates a physical <code className="text-xs font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-indigo-300">MASTER.md</code> file within your repository root.
        </p>

        {/* Callout Info Box */}
        <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 mb-8 flex gap-3 text-xs leading-relaxed text-indigo-200">
          <FileText className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-indigo-100 font-semibold">Hierarchical Retrieval Logic:</strong> When generating a specific page (e.g., checkout), the system checks <code className="font-mono text-indigo-300">pages/checkout.md</code> first. If absent, the master rules apply exclusively.
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs">
            <span className="text-slate-500 block mb-0.5">Previous Chapter</span>
            <a href="#" className="font-medium text-slate-300 hover:text-white transition-colors">← Aesthetic Dials Calibration</a>
          </div>
          <div className="text-xs text-right">
            <span className="text-slate-500 block mb-0.5">Next Chapter</span>
            <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
              Multi-Direction Ideation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
