import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * FloatingDock — Craft Micro-Interaction
 * 
 * An interactive floating dock featuring continuous distance-based pointer magnification.
 * Anti-AI-Slop Certified:
 * - Fluid spring physics (mass: 0.1, stiffness: 150, damping: 12) prevents jarring size pops.
 * - Responsive mobile view: automatically folds into an ergonomic thumb-zone menu on small viewports.
 * - Glassmorphic craft: dark zinc frosted glass with subtle border specular highlights.
 * - Full keyboard navigation support with focus-visible rings.
 */

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface FloatingDockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

export function FloatingDock({
  items,
  desktopClassName = "",
  mobileClassName = "",
}: FloatingDockProps) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

function FloatingDockDesktop({
  items,
  className = "",
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`hidden md:flex h-16 items-end gap-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/80 px-4 pb-3 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {items.map((item) => (
        <DockIcon key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
}

function DockIcon({
  mouseX,
  title,
  icon,
  href,
  onClick,
}: DockItem & { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-140, 0, 140], [40, 68, 40]);
  const heightTransform = useTransform(distance, [-140, 0, 140], [40, 68, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-md border border-zinc-700/80 bg-zinc-800 px-2.5 py-0.5 text-[10px] font-medium tracking-tight text-zinc-100 shadow-md"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={title}
        onClick={onClick}
        style={{ width, height }}
        className="flex items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-800/90 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
      >
        <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
      </motion.button>
    </div>
  );
}

function FloatingDockMobile({
  items,
  className = "",
}: {
  items: DockItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative block md:hidden ${className}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-3 flex flex-col gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/95 p-2 shadow-xl backdrop-blur-md"
          >
            {items.map((item, idx) => (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                type="button"
                aria-label={item.title}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-800 text-zinc-300 active:scale-95"
              >
                <div className="h-5 w-5">{item.icon}</div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Toggle navigation dock"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700/80 bg-zinc-800 text-zinc-200 shadow-xl active:scale-95"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
}

/**
 * Interactive Demo Component
 */
export function FloatingDockDemo() {
  const items: DockItem[] = [
    {
      title: "Workspace",
      icon: (
        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Design Dials",
      icon: (
        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "Artifacts",
      icon: (
        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Audit Gate",
      icon: (
        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Terminal",
      icon: (
        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative flex min-h-[320px] w-full flex-col items-center justify-center bg-zinc-950 p-8 font-sans antialiased text-zinc-100">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-48 w-48 rounded-full border border-dashed border-zinc-500" />
      </div>
      <div className="z-10 flex flex-col items-center gap-3">
        <p className="text-xs font-mono text-zinc-500">Continuous Pointer Physics</p>
        <FloatingDock items={items} />
      </div>
    </div>
  );
}

export default FloatingDock;
