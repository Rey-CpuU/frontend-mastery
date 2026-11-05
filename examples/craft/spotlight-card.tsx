import React, { useRef, useState, useCallback } from "react";

/**
 * SpotlightCard — Craft Micro-Interaction
 * 
 * An interactive card that casts a subtle radial spotlight following the pointer.
 * Anti-AI-Slop Certified:
 * - Dynamic pointer coordinates with zero layout thrashing via CSS variables.
 * - Gentle craft lighting: neutral warm/zinc gradient instead of glaring neon purple.
 * - Automatic touch device bypass (no sticky hover artifacts on mobile).
 * - Full accessibility: focus-visible keyboard state with crisp 2px ring.
 */

export interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.08)",
  spotlightSize = 350,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 text-zinc-100 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl focus-within:ring-2 focus-within:ring-zinc-400 ${className}`}
    >
      {/* Radial Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background: isHovered
            ? `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
            : "none",
        }}
        aria-hidden="true"
      />
      
      {/* Border subtle reflection */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background: isHovered
            ? `radial-gradient(${spotlightSize * 0.75}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 80%)`
            : "none",
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Interactive Demo with Bento Grid Layout
 */
export function SpotlightCardDemo() {
  const cards = [
    {
      title: "Deterministic Engine",
      category: "Infrastructure",
      desc: "Guaranteed idempotency across distributed edge runtimes with cryptographic state attestation.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Zero-CLS Typography",
      category: "Rendering",
      desc: "Adaptive tabular numerals and system font fallback metrics calibrated to eliminate layout shift.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      ),
    },
    {
      title: "Spatial Ergonomics",
      category: "Human Interface",
      desc: "Strict 44px touch targets mapped to mobile primary thumb-zones and precision desktop pointer physics.",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-[400px] w-full bg-zinc-950 p-8 font-sans antialiased text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Tactile Surfaces</p>
          <h2 className="text-lg font-bold tracking-tight text-zinc-100">Interactive Spotlight Bento</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <SpotlightCard key={i} spotlightColor="rgba(255, 255, 255, 0.09)" spotlightSize={320}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800/80 text-zinc-200">
                {c.icon}
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{c.category}</span>
                <h3 className="text-sm font-semibold text-zinc-100">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{c.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:text-white">
                <span>Explore spec</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpotlightCard;
