import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Terminal, 
  ChevronDown,
  Paperclip,
  Zap
} from 'lucide-react';

/**
 * Aesthetic Direction: Studio High-Craft AI Workspace (Linear/Vercel Dark Theme)
 * Pattern: Split sidebar + Thread Feed + Generative Artifact Canvas
 * Rules Applied: Zero AI slop, 1px subtle borders, tabular metrics, spring interaction.
 */

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  codeSnippet?: string;
  timestamp: string;
}

export function AIStudioChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'user',
      content: 'Write an optimized tailwind card with spring micro-interactions.',
      timestamp: '14:20'
    },
    {
      id: 'm2',
      sender: 'assistant',
      content: 'Here is the high-craft implementation. Note the use of 1px subtle hairline border, zero generic shadow-2xl, and tabular number formatting.',
      codeSnippet: `export function MetricBadge({ value }: { value: string }) {\n  return (\n    <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono tabular-nums text-xs active:scale-[0.98] transition-transform">\n      {value}\n    </div>\n  );\n}`,
      timestamp: '14:21'
    }
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false)

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-[#0B0F17] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/[0.08] bg-[#0E131F] flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-100">Cortex Studio AI</span>
          </div>

          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium bg-white/[0.06] text-white flex items-center justify-between border border-white/[0.08]">
              <span className="truncate">Active Design Session</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-colors truncate">
              Design Token Optimization
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-colors truncate">
              Checkout Flow A/B Variant
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-full bg-slate-800 border border-white/[0.1] flex items-center justify-center text-xs font-medium text-slate-300">
              RC
            </div>
            <div className="text-xs">
              <div className="font-medium text-slate-200">Rey Developer</div>
              <div className="text-[11px] text-slate-500 font-mono">Pro Plan Active</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Workspace */}
      <main className="flex-1 flex flex-col justify-between">
        {/* Top Navbar */}
        <header className="h-14 border-b border-white/[0.08] px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Workspace /</span>
            <span className="text-slate-200 font-medium">Model: claude-3-5-sonnet-v2</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 relative top-[0.5px]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Streaming Engine 60 FPS
            </span>
          </div>
        </header>

        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl w-full mx-auto">
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-4 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.sender === 'assistant' && (
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div className={`space-y-2 max-w-2xl ${m.sender === 'user' ? 'bg-indigo-600/20 border border-indigo-500/30 text-indigo-100 p-4 rounded-xl text-sm' : 'space-y-3'}`}>
                {m.sender === 'assistant' && (
                  <p className="text-sm text-slate-300 leading-relaxed">{m.content}</p>
                )}
                {m.sender === 'user' && <p>{m.content}</p>}

                {m.codeSnippet && (
                  <div className="rounded-xl border border-white/[0.08] bg-[#0E131F] overflow-hidden">
                    <div className="px-4 py-2 border-b border-white/[0.06] bg-black/20 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" /> Component.tsx
                      </span>
                      <button
                        onClick={() => handleCopy(m.codeSnippet!)}
                        className="hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                      {m.codeSnippet}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar with Thumb Zone & Action Verb */}
        <div className="p-6 border-t border-white/[0.08] bg-[#0B0F17]">
          <div className="max-w-4xl mx-auto relative rounded-xl border border-white/[0.1] bg-[#121824] focus-within:border-indigo-500/50 transition-colors p-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything or request design adjustments..."
              rows={2}
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none resize-none px-3 pt-1"
            />
            <div className="flex items-center justify-between px-2 pt-2 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5 text-slate-400">
                <button type="button" className="p-1.5 rounded-lg hover:bg-white/[0.06] hover:text-slate-200 transition-colors">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button type="button" className="p-1.5 rounded-lg hover:bg-white/[0.06] hover:text-slate-200 transition-colors">
                  <Zap className="w-4 h-4" />
                </button>
              </div>

              {/* Action Button: Non-generic copy */}
              <button
                type="button"
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              >
                <span>Execute Prompt</span>
                <Send className="w-3 h-3 relative top-[0.5px]" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
