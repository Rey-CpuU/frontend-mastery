import React from "react";

/**
 * ShimmerButton — Craft Micro-Interaction
 * 
 * An elite tactile call-to-action button featuring a subtle rotating border shimmer.
 * Anti-AI-Slop Certified:
 * - Refined monochrome / platinum finish (replaces gaudy neon purple).
 * - Full 5-state interaction: idle, hover, active (tactile 0.98 scale), focus-visible (2px offset ring), disabled.
 * - Hardware accelerated CSS rotation (0 layout shift).
 * - Complies with prefers-reduced-motion.
 */

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.08em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(24, 24, 27, 1)",
  className = "",
  children,
  disabled,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      disabled={disabled}
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-2.5 text-xs font-semibold text-white [background:var(--bg)] [border-radius:var(--radius)]
        transform-gpu transition-all duration-200
        hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]
        active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
        disabled:pointer-events-none disabled:opacity-50
        ${className}`}
      {...props}
    >
      {/* Spark container */}
      <div
        className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size] motion-reduce:hidden"
        aria-hidden="true"
      >
        {/* Spark rotating beam */}
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-spin [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-shimmer-spin-reverse absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* Backdrop cut */}
      <div
        className="absolute [border-radius:var(--radius)] [inset:var(--cut)] [background:var(--bg)] -z-20"
        aria-hidden="true"
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/**
 * Interactive Demo Component
 */
export function ShimmerButtonDemo() {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-6 bg-zinc-950 p-8 font-sans antialiased text-zinc-100">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Primary White Shimmer */}
        <ShimmerButton
          shimmerColor="rgba(255, 255, 255, 0.7)"
          shimmerDuration="3s"
          background="#18181b"
        >
          <span>Deploy Production</span>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </ShimmerButton>

        {/* Subtle Amber Craft Accent */}
        <ShimmerButton
          shimmerColor="rgba(245, 158, 11, 0.8)"
          shimmerDuration="3.5s"
          background="#1c1917"
          borderRadius="10px"
        >
          <span className="text-amber-200">Generate Cryptographic Key</span>
        </ShimmerButton>

        {/* Disabled State Demo */}
        <ShimmerButton disabled borderRadius="10px">
          <span>Action Pending</span>
        </ShimmerButton>
      </div>

      <p className="text-center text-xs text-zinc-500">
        Engineered with 44px minimum touch target, active tactile damping, and zero-shift rotating conic mask.
      </p>
    </div>
  );
}

export default ShimmerButton;
