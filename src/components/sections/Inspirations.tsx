"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { beforeAfterPairs } from "@/data/before-after";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function Inspirations() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section id="inspirations" className="overflow-hidden bg-ink py-24 md:py-36">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Vorher / Nachher"
          title="Be inspired. Be impressed."
          invert
          description="Veränderungen zum Staunen — zieh am Regler und erlebe, was ein neues Styling ausmachen kann."
        />
      </Container>

      <Reveal>
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="scrollbar-none flex snap-x gap-6 overflow-x-auto px-5 pb-4 md:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {beforeAfterPairs.map((pair) => (
            <div key={pair.label} data-card className="w-[80vw] flex-none snap-center sm:w-[45vw] md:w-[30vw] lg:w-[24vw]">
              <BeforeAfterSlider pair={pair} />
            </div>
          ))}
        </div>
      </Reveal>

      <Container>
        <div className="mt-8 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/10">
            <div
              className="h-px bg-gradient-to-r from-wine via-rose to-rose-bright transition-[width] duration-150"
              style={{ width: `${Math.max(4, progress * 100)}%` }}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Zurück"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Weiter"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
