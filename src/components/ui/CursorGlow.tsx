"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribeMedia(callback: () => void) {
  const pointer = window.matchMedia("(pointer: fine)");
  const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
  pointer.addEventListener("change", callback);
  motionPref.addEventListener("change", callback);
  return () => {
    pointer.removeEventListener("change", callback);
    motionPref.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Trailing cursor ring (desktop only). The native cursor stays visible — this is
 * a decorative companion that expands over interactive elements and can show a
 * short label via `data-cursor-label` (e.g. on drag galleries).
 */
export default function CursorGlow() {
  const enabled = useSyncExternalStore(subscribeMedia, getSnapshot, () => false);
  const [hoverState, setHoverState] = useState<{ active: boolean; label: string }>({
    active: false,
    label: "",
  });
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.55 });
  const springY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.55 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target instanceof Element ? e.target : null;
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      if (labelled) {
        setHoverState({ active: true, label: labelled.dataset.cursorLabel ?? "" });
        return;
      }
      const interactive = target?.closest("a, button, [role='button']");
      setHoverState({ active: Boolean(interactive), label: "" });
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const hasLabel = hoverState.label.length > 0;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[95]"
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: hasLabel ? 3.2 : hoverState.active ? 1.9 : 1,
            opacity: visible ? 1 : 0,
            backgroundColor: hasLabel ? "rgba(245, 29, 101, 0.92)" : "rgba(245, 29, 101, 0)",
            borderColor: hasLabel ? "rgba(245, 29, 101, 0)" : "rgba(251, 250, 248, 0.85)",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-7 w-7 items-center justify-center rounded-full border mix-blend-difference"
        >
          {hasLabel && (
            <span className="font-display text-[4px] font-semibold uppercase tracking-[0.14em] text-white">
              {hoverState.label}
            </span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
