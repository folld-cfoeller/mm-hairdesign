"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

/**
 * Editorial line reveal: content slides up out of an overflow-hidden mask.
 * The in-view trigger sits on the outer mask (variants propagate down) —
 * observing the translated inner element would never fire, since it is
 * fully clipped by the mask before the animation runs.
 */
export default function MaskReveal({
  children,
  delay = 0,
  className,
  innerClassName,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  innerClassName?: string;
  once?: boolean;
}) {
  return (
    <motion.span
      className={clsx("block overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
    >
      <motion.span
        className={clsx("block will-change-transform", innerClassName)}
        variants={{
          hidden: { y: "115%" },
          visible: { y: "0%", transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
