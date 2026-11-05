import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

/**
 * Aesthetic Direction: Enterprise Financial Transparency (Stripe & Linear Hybrid)
 * Pattern: Plan Matrix + Payment Details + Invoicing History Ledger
 * Rules: Tabular-nums for currency, clear badge semantics, no rainbow gradient buttons.
 */

export function PaymentBillingPortal() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const invoices = [
    { id: 'INV-2026-003', date: '01 Nov 2026', amount: '$480.00', status: 'Paid', plan: 'Enterprise Cluster Pro' },
    { id: 'INV-2026-002', date: '01 Oct 2026', amount: '$480.00', status: 'Paid', plan: 'Enterprise Cluster Pro' },
    { id: 'INV-2026-001', date: '01 Sep 2026', amount: '$480.00', status: 'Paid', plan: 'Enterprise Cluster Pro' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="pb-8 border-b border-white/[0.08] mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Billing & Organization Settings
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">Subscription & Payment Engine</h1>
        <p className="text-sm text-slate-400 mt-1">Manage institutional payment methods, automated invoice routing, and compute allocation.</p>
      </div>

      {/* Grid Overview: Current Plan & Payment Method */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Active Plan Card */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-[#121824] border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Current Plan</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active & Auto-Renewing
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-semibold text-slate-100 font-mono tracking-tight">$480.00</span>
              <span className="text-xs text-slate-400 font-sans">/ month, billed annually</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Includes unlimited agent threads, 50 GB persistent vector context, and dedicated low-latency inference endpoints.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between mt-6">
            <span className="text-xs text-slate-400">Next renewal: <strong className="text-slate-200 font-mono">01 Nov 2027</strong></span>
            <button 
              type="button" 
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.98] border border-white/[0.1] text-slate-200 transition-all cursor-pointer"
            >
              Modify Compute Tier
            </button>
          </div>
        </div>

        {/* Primary Payment Method */}
        <div className="p-6 rounded-2xl bg-[#121824] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Payment Method</span>
              <CreditCard className="w-4 h-4 text-slate-400" />
            </div>

            <div className="p-4 rounded-xl bg-black/20 border border-white/[0.06] mb-4">
              <div className="text-xs font-mono text-slate-400 mb-1">Corporate Mastercard</div>
              <div className="text-base font-mono font-semibold text-slate-100 tracking-wider">•••• •••• •••• 9410</div>
              <div className="text-[11px] text-slate-500 mt-2 flex justify-between">
                <span>Expires 08/29</span>
                <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Verified</span>
              </div>
            </div>
          </div>

          <button 
            type="button" 
            className="w-full py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          >
            Update Payment Method
          </button>
        </div>
      </div>

      {/* Invoice History Table */}
      <div className="rounded-2xl bg-[#121824] border border-white/[0.08] overflow-hidden">
        <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-200">Invoice History & Receipts</h2>
          <span className="text-xs text-slate-400 font-mono">3 settled statements</span>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {invoices.map((inv) => (
            <div key={inv.id} className="p-4 px-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors text-xs font-mono">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">{inv.id}</div>
                  <div className="text-[11px] text-slate-500 font-sans">{inv.plan}</div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <span className="text-slate-400">{inv.date}</span>
                <span className="font-semibold text-slate-100 tabular-nums">{inv.amount}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-sans bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {inv.status}
                </span>
                <button className="text-slate-400 hover:text-slate-100 transition-colors p-1">
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
