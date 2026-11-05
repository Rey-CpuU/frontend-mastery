import React, { useState } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  SlidersHorizontal,
  Layers,
  ArrowRight
} from 'lucide-react';

/**
 * Aesthetic Direction: High-Density Task Engine (Linear / Raycast Vibe)
 * Pattern: Drag-ready Kanban Board with Status Columns & Priority Badges
 * Rules: Crisp corners (6px), tabular timestamps, 1px subtle cards, no clutter.
 */

interface Task {
  id: string;
  title: string;
  tag: string;
  priority: 'Urgent' | 'High' | 'Medium';
  assignee: string;
}

export function ProjectKanbanBoard() {
  const [columns] = useState([
    {
      id: 'backlog',
      name: 'Backlog',
      count: 2,
      tasks: [
        { id: 'T-101', title: 'Audit Core Web Vitals across marketing landing pages', tag: 'Performance', priority: 'High', assignee: 'RY' },
        { id: 'T-102', title: 'Implement biometric passkey authentication in checkout', tag: 'Security', priority: 'Medium', assignee: 'AL' }
      ]
    },
    {
      id: 'in_progress',
      name: 'In Flight',
      count: 2,
      tasks: [
        { id: 'T-103', title: 'Refactor modal overlays into swipeable bottom sheets', tag: 'Mobile UX', priority: 'Urgent', assignee: 'RY' },
        { id: 'T-104', title: 'Calibrate spring curves for drawer motion choreography', tag: 'Motion', priority: 'High', assignee: 'DV' }
      ]
    },
    {
      id: 'review',
      name: 'Quality Gate',
      count: 1,
      tasks: [
        { id: 'T-105', title: 'Automated WCAG 2.2 AAA accessibility contrast verification', tag: 'A11y', priority: 'Urgent', assignee: 'QA' }
      ]
    },
    {
      id: 'done',
      name: 'Shipped',
      count: 14,
      tasks: [
        { id: 'T-098', title: 'Deploy persistent design tokens and MASTER.md lock', tag: 'Architecture', priority: 'Medium', assignee: 'RY' }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans p-6 flex flex-col">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-slate-100">Sprint Execution Board</h1>
            <span className="text-xs text-slate-500 font-mono">Cycle 42 • Active Roadmap</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer">
            <Filter className="w-3.5 h-3.5" /> Filter Views
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white transition-all flex items-center gap-1 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Plus className="w-3.5 h-3.5" /> Create Issue
          </button>
        </div>
      </div>

      {/* Kanban Columns Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div key={col.id} className="rounded-xl bg-[#0E131F]/60 border border-white/[0.06] p-3 flex flex-col">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.04] text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="text-slate-300">{col.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.06] text-slate-400">
                  {col.count}
                </span>
              </div>
              <button className="text-slate-500 hover:text-slate-300 p-1">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Task Cards Container */}
            <div className="space-y-2.5 flex-1 overflow-y-auto">
              {col.tasks.map((task) => (
                <div 
                  key={task.id}
                  className="p-3.5 rounded-lg bg-[#121824] border border-white/[0.08] hover:border-white/[0.18] transition-all cursor-pointer group active:scale-[0.99] shadow-sm"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                    <span>{task.id}</span>
                    <span className={`px-2 py-0.2 rounded text-[10px] font-sans ${
                      task.priority === 'Urgent' 
                        ? 'text-rose-400 bg-rose-500/10 border border-rose-500/20' 
                        : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    }`}>
                      {task.priority}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-200 leading-snug mb-3">
                    {task.title}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px]">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {task.tag}
                    </span>
                    <div className="h-5 w-5 rounded-full bg-slate-800 border border-white/[0.1] flex items-center justify-center text-[10px] font-mono font-semibold text-slate-300">
                      {task.assignee}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
