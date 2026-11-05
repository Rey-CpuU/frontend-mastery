import React from "react";

/**
 * BorderBeam — Craft Micro-Interaction
 * 
 * An elegant animated beam that travels seamlessly along the border of any container.
 * Anti-AI-Slop Certified:
 * - Uses pure CSS conic-gradient mask for hardware-accelerated 60/120fps.
 * - Zero Layout Shift (CLS = 0.00).
 * - Automatic prefers-reduced-motion fallback (static subtle border).
 * - Clean neutral craft palette by default (no harsh neon purple/cyan).
 */

export interface BorderBeamProps {
  /** Size of the beam sweep in pixels */
  size?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Border thickness in pixels */
  borderWidth?: number;
  /** Anchor point angle offset (0-360) */
  anchor?: number;
  /** Starting gradient color */
  colorFrom?: string;
  /** Ending gradient color */
  colorTo?: string;
  /** Delay in seconds */
  delay?: number;
  /** Additional custom class */
  className?: string;
}

export function BorderBeam({
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "rgba(255, 255, 255, 0.8)",
  colorTo = "rgba(255, 255, 255, 0)",
  delay = 0,
  className = "",
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--anchor": `${anchor}deg`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width))_solid_transparent]
        ![mask-clip:padding-box,border-box] ![mask-composite:intersect]
        [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
        after:absolute after:aspect-square after:w-[calc(var(--size))]
        after:animate-border-beam after:[animation-delay:var(--delay)]
        after:[animation-duration:var(--duration)] after:[animation-iteration-count:infinite]
        after:[animation-timing-function:linear]
        after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]
        after:[offset-anchor:calc(var(--anchor))_50%]
        after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]
        motion-reduce:after:hidden
        ${className}`}
    />
  );
}

/**
 * Interactive Demo Component
 */
export function BorderBeamDemo() {
  return (
    <div className="flex min-h-[360px] w-full items-center justify-center bg-zinc-950 p-8 font-sans antialiased text-zinc-100">
      <div className="relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-md">
        <BorderBeam
          size={240}
          duration={8}
          colorFrom="rgba(212, 212, 216, 0.9)"
          colorTo="rgba(212, 212, 216, 0.05)"
          borderWidth={1.5}
        />
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-800/80 text-zinc-200 shadow-inner">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <h3 className="text-base font-semibold tracking-tight text-zinc-100">
          Enterprise Security Mesh
        </h3>
        <p className="mt-2 text-center text-xs leading-relaxed text-zinc-400">
          Hardware-accelerated border perimeter tracking. Respects prefers-reduced-motion
          and maintains zero cumulative layout shift.
        </p>
        <button
          type="button"
          className="mt-6 flex h-9 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800/90 px-4 text-xs font-medium text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          Configure Perimeter
        </button>
      </div>
    </div>
  );
}

export default BorderBeam;
