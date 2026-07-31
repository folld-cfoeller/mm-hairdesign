"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode, useRef } from "react";
import clsx from "clsx";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-rose-bright text-white shadow-[0_8px_30px_rgba(245,29,101,0.35)] hover:shadow-[0_8px_40px_rgba(245,29,101,0.5)]",
  outline: "border border-white/30 text-white hover:border-white hover:bg-white/10",
  "outline-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  ghost: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/5",
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  icon,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  target?: string;
  icon?: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = clsx(
    "font-display group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
    variantClasses[variant],
    className,
  );

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      type="button"
      className={classes}
    >
      {content}
    </button>
  );
}
