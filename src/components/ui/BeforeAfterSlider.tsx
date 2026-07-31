"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import type { BeforeAfterPair } from "@/data/before-after";

export default function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-ink touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image src={pair.after} alt={`${pair.label} – Nachher`} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" draggable={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
        Nachher
      </span>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={pair.before}
          alt={`${pair.label} – Vorher`}
          fill
          sizes="(min-width: 768px) 33vw, 90vw"
          className="object-cover"
          draggable={false}
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          Vorher
        </span>
      </div>

      <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/80" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-transform group-hover:scale-110">
          <MoveHorizontal size={16} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
        <span className="font-display text-sm font-bold uppercase tracking-wide text-white">{pair.label}</span>
      </div>
    </div>
  );
}
