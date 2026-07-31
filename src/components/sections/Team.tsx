"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

import { team, type TeamMember } from "@/data/team";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamModal from "@/components/sections/TeamModal";
import { trackEvent } from "@/lib/analytics";

export default function Team() {
  const [active, setActive] = useState<TeamMember | null>(null);
  const [progress, setProgress] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Mouse drag-to-scroll; a small movement threshold keeps card clicks working.
  const drag = useRef({ down: false, moved: false, startX: 0, startScroll: 0 });

  function openMember(member: TeamMember) {
    if (drag.current.moved) return;
    setActive(member);
    trackEvent("team_member_view", { name: member.name });
  }

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
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section id="team" className="overflow-hidden bg-paper py-24 md:py-36">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Die Gesichter dahinter"
          title="Das M&M Kreativteam"
          description="Mit einem Klick erfährst du mehr über unsere Expert:innen."
        />
      </Container>

      <Reveal>
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          data-cursor-label="Ziehen"
          onMouseDown={(e) => {
            const el = scrollerRef.current;
            if (!el) return;
            drag.current = { down: true, moved: false, startX: e.clientX, startScroll: el.scrollLeft };
          }}
          onMouseMove={(e) => {
            const el = scrollerRef.current;
            if (!el || !drag.current.down) return;
            const delta = e.clientX - drag.current.startX;
            if (Math.abs(delta) > 8) drag.current.moved = true;
            el.scrollLeft = drag.current.startScroll - delta;
          }}
          onMouseUp={() => {
            drag.current.down = false;
          }}
          onMouseLeave={() => {
            drag.current.down = false;
          }}
          className="scrollbar-none cursor-grab-x flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {team.map((member, i) => (
            <button
              key={member.slug}
              type="button"
              data-card
              onClick={() => openMember(member)}
              className={`group relative block aspect-[3/4] w-[70vw] flex-none snap-start overflow-hidden rounded-2xl bg-ink text-left sm:w-[44vw] md:w-[30vw] lg:w-[21vw] ${
                i % 2 === 1 ? "md:mt-10" : ""
              }`}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 21vw, (min-width: 768px) 30vw, 70vw"
                draggable={false}
                className="object-cover object-top grayscale-[0.85] transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/70 backdrop-blur transition-all duration-300 group-hover:rotate-90 group-hover:border-rose-bright group-hover:text-rose-bright">
                <Plus size={15} />
              </span>

              <span className="absolute inset-x-0 bottom-0 block p-4 md:p-5">
                <span className="font-display block text-sm font-bold uppercase leading-tight tracking-wide text-white md:text-base">
                  {member.name}
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-rose-bright md:text-[11px]">
                  {member.role}
                </span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <Container>
        <div className="mt-8 flex items-center gap-6">
          <div className="h-px flex-1 bg-ink/10">
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-rose hover:text-rose"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Weiter"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-rose hover:text-rose"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </Container>

      <TeamModal member={active} onClose={() => setActive(null)} />
    </section>
  );
}
