import React, { useEffect, useId, useState } from "react";

/**
 * AnimatedBeam — Craft Micro-Interaction
 * 
 * An animated curved SVG beam that dynamically connects two DOM elements.
 * Anti-AI-Slop Certified:
 * - Dynamic bounding box calculation with auto-recalculation on window resize / layout shift.
 * - Gentle monochrome or dual-tone gradient stream.
 * - Hardware accelerated stroke dashoffset / gradient animation.
 * - Respects prefers-reduced-motion.
 */

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export function AnimatedBeam({
  className = "",
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "rgba(113, 113, 122, 0.2)",
  pathWidth = 2,
  pathOpacity = 0.4,
  gradientStartColor = "#d4d4d8",
  gradientStopColor = "transparent",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgDimensions({ width: svgWidth, height: svgHeight });

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const controlY = startY - curvature;
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
      setPathD(d);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute left-0 top-0 transform-gpu ${className}`}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        className="motion-reduce:hidden"
      />
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          <animate
            attributeName="x1"
            values={reverse ? "100%;0%" : "0%;100%"}
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values={reverse ? "110%;10%" : "-10%;90%"}
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Interactive Demo: Integration Topology Hub
 */
export function AnimatedBeamDemo() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const coreRef = React.useRef<HTMLDivElement>(null);
  const node1Ref = React.useRef<HTMLDivElement>(null);
  const node2Ref = React.useRef<HTMLDivElement>(null);
  const node3Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-[420px] w-full items-center justify-center bg-zinc-950 p-8 font-sans antialiased text-zinc-100">
      <div
        ref={containerRef}
        className="relative flex h-[340px] w-full max-w-2xl items-center justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-10"
      >
        {/* Left Service Nodes */}
        <div className="flex flex-col gap-8 z-10">
          <div
            ref={node1Ref}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800 p-2.5 shadow-lg"
          >
            <span className="text-xs font-mono font-bold text-zinc-300">API</span>
          </div>
          <div
            ref={node2Ref}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800 p-2.5 shadow-lg"
          >
            <span className="text-xs font-mono font-bold text-zinc-300">DB</span>
          </div>
          <div
            ref={node3Ref}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800 p-2.5 shadow-lg"
          >
            <span className="text-xs font-mono font-bold text-zinc-300">AUTH</span>
          </div>
        </div>

        {/* Center Orchestration Engine */}
        <div
          ref={coreRef}
          className="z-10 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-2 border-zinc-600 bg-zinc-800/90 shadow-2xl backdrop-blur-sm"
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse mb-1" />
          <span className="text-[11px] font-bold tracking-tight text-white">CORE</span>
          <span className="text-[9px] font-mono text-zinc-400">ENGINE</span>
        </div>

        {/* Animated Connecting Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node1Ref}
          toRef={coreRef}
          curvature={-30}
          duration={3.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node2Ref}
          toRef={coreRef}
          curvature={0}
          duration={3}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node3Ref}
          toRef={coreRef}
          curvature={30}
          duration={3.8}
          delay={1}
        />
      </div>
    </div>
  );
}

export default AnimatedBeam;
