import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Layers, 
  Clock, 
  Search, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

/**
 * Aesthetic Direction: Refined Dark Telemetry (High-Frequency Institutional Fintech)
 * - Restraint: Monochrome layered slate surfaces, 1px subtle borders (rgba white 8%), no loud neon gradients.
 * - Hierarchy: Muted neutral base (60%), medium slate surfaces (30%), intentional emerald/amber telemetry accents (10%).
 * - Typography: Tabular numerals for telemetry, optical kerning, no generic Poppins/Inter defaults.
 */

// Design Tokens (Layer 1 Foundations)
const TOKENS = {
  surface0: 'bg-[#0B0F17]', // Deep canvas
  surface1: 'bg-[#121824]', // Elevated card
  surface2: 'bg-[#1A2234]', // Interactive elements / popovers
  borderSubtle: 'border-white/[0.08]',
  borderHover: 'hover:border-white/[0.18]',
  textPrimary: 'text-slate-100',
  textSecondary: 'text-slate-400',
  textMuted: 'text-slate-500',
  accentSuccess: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  accentWarning: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
};

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

export function MetricCard({ label, value, change, isPositive, subtext }: MetricCardProps) {
  return (
    <div 
      className={`p-5 rounded-xl ${TOKENS.surface1} border ${TOKENS.borderSubtle} ${TOKENS.borderHover} transition-all duration-200 cursor-pointer group`}
    >
      <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-3">
        <span>{label}</span>
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono border ${isPositive ? TOKENS.accentSuccess : TOKENS.accentWarning}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          <span>{change}</span>
        </div>
      </div>
      
      {/* Optical Alignment: Tabular numbers prevent jitter, tracking-tight for high-density reading */}
      <div className="text-2xl font-semibold font-mono tracking-tight text-slate-100 mb-1">
        {value}
      </div>
      <div className="text-xs text-slate-500">{subtext}</div>
    </div>
  );
}

export function HighCraftDashboard() {
  const [activeTab, setActiveTab] = useState<'all' | 'settled' | 'pending'>('all');

  return (
    <div className={`min-h-screen ${TOKENS.surface0} text-slate-200 p-8 font-sans selection:bg-emerald-500/30 selection:text-emerald-200`}>
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Institutional Gateway v4.2</span>
          </div>
          <h1 className="text-xl font-medium tracking-tight text-slate-100">Liquidity & Settlement Engine</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Action-oriented CTA with Spring micro-feedback */}
          <button 
            type="button" 
            className="px-4 py-2 rounded-lg text-xs font-medium bg-white/[0.05] hover:bg-white/[0.08] active:scale-[0.98] border border-white/[0.1] text-slate-200 transition-all cursor-pointer flex items-center gap-2"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter View
          </button>
          
          <button 
            type="button" 
            className="px-4 py-2 rounded-lg text-xs font-medium bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-semibold transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-1.5"
          >
            Deploy Capital
            {/* Optical Nudge on icon */}
            <ChevronRight className="w-3.5 h-3.5 relative top-[0.5px]" />
          </button>
        </div>
      </header>

      {/* Metrics Grid (Asymmetric layout, not flat bento-box) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MetricCard 
          label="Total Net Settled" 
          value="$48,924,180.20" 
          change="+14.2%" 
          isPositive={true} 
          subtext="vs last 24h rolling cycle" 
        />
        <MetricCard 
          label="Aggregated Slippage" 
          value="0.0034 bps" 
          change="-0.001 bps" 
          isPositive={true} 
          subtext="Target execution <= 0.005 bps" 
        />
        <MetricCard 
          label="Pending Clearance" 
          value="$1,240,500.00" 
          change="3 Batches" 
          isPositive={false} 
          subtext="Next clearance in 4m 12s" 
        />
        <MetricCard 
          label="Engine Efficiency" 
          value="99.992%" 
          change="+0.02%" 
          isPositive={true} 
          subtext="Zero packet drop detected" 
        />
      </div>

      {/* Content Table / Main Ledger */}
      <div className={`rounded-xl ${TOKENS.surface1} border ${TOKENS.borderSubtle} overflow-hidden`}>
        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {(['all', 'settled', 'pending'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-white/[0.1] text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {tab} Tranches
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search routing hash..." 
              className="pl-8 pr-3 py-1 rounded-lg text-xs bg-black/20 border border-white/[0.08] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors w-56 font-mono"
            />
          </div>
        </div>

        {/* Ledger items */}
        <div className="divide-y divide-white/[0.04] text-xs font-mono">
          {[
            { id: '0x8f2a...c31b', pool: 'USDC/EUR-T', volume: '$1,200,000.00', status: 'Settled', latency: '12ms' },
            { id: '0x3d91...10af', pool: 'SOL/USD-Prime', volume: '$430,210.50', status: 'Settled', latency: '18ms' },
            { id: '0x17c4...88ee', pool: 'WBTC/USDC-Arb', volume: '$2,850,000.00', status: 'Pending', latency: '44ms' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">{item.id}</span>
                <span className="text-slate-200 font-sans font-medium">{item.pool}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-slate-100 font-semibold">{item.volume}</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-sans ${item.status === 'Settled' ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'}`}>
                  {item.status}
                </span>
                <span className="text-slate-500 text-[11px]">{item.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
