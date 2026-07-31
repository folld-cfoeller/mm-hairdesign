"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gift } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { trackEvent } from "@/lib/analytics";

export default function Services() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);
  const springX = useSpring(previewX, { stiffness: 180, damping: 22, mass: 0.5 });
  const springY = useSpring(previewY, { stiffness: 180, damping: 22, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    previewX.set(e.clientX - rect.left);
    previewY.set(e.clientY - rect.top);
  }

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,29,101,0.12),transparent_45%)]" />
      <Container className="relative">
        <SectionHeading
          index="02"
          eyebrow="Was wir tun"
          title="Leistungen"
          invert
          description="Unser Dienstleistungsangebot ist über die Jahre deutlich gewachsen. Damenhaarschnitte starten preislich bei 75 €, Herrenhaarschnitte bei 53 € — die Preise im Bereich Farbe sind flexibel und richten sich nach Haarlänge und Wunsch. Sprich uns bei deinem Termin einfach darauf an."
        />

        {/* Editorial service index — hover reveals a floating preview that trails the cursor */}
        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActive(null)}
          className="relative"
        >
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-white/10 py-6 transition-colors duration-300 last:border-b hover:bg-white/[0.03] sm:gap-8 md:py-9"
              >
                <span className="font-display w-10 text-xs font-light tabular-nums text-white/35 transition-colors duration-300 group-hover:text-rose-bright md:w-14">
                  (0{i + 1})
                </span>

                {/* Mobile-only thumbnail */}
                <div className="col-start-2 flex items-center gap-5">
                  <span className="relative block h-16 w-14 shrink-0 overflow-hidden rounded-xl md:hidden">
                    <Image src={service.img} alt={service.title} fill sizes="56px" className="object-cover" />
                  </span>
                  <span>
                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-3xl md:text-5xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-white/55 transition-colors duration-300 group-hover:text-white/80 sm:text-sm md:mt-2">
                      {service.description}
                    </p>
                  </span>
                </div>

                <ArrowUpRight
                  size={26}
                  className="text-white/25 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-bright"
                />
              </div>
            </Reveal>
          ))}

          {/* Floating preview (fine pointers only, hidden on touch layouts) */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
            aria-hidden="true"
          >
            <div className="relative h-72 w-56 -translate-x-1/2 -translate-y-1/2">
              <AnimatePresence>
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                  >
                    <Image src={services[active].img} alt="" fill sizes="224px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Booking + voucher — asymmetric CTA pair */}
        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-3xl p-8 md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,29,101,0.18),transparent_55%)]" />
              <span className="font-display relative text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
                Neu
              </span>
              <h3 className="font-display relative text-2xl font-extrabold uppercase text-white md:text-4xl">
                Online Terminbuchung
              </h3>
              <p className="relative max-w-md text-sm leading-relaxed text-white/70">
                Jetzt auch Termine direkt online vereinbaren — schnell, unkompliziert, rund um die Uhr.
              </p>
              <MagneticButton
                href={siteConfig.booking.url}
                target="_blank"
                variant="primary"
                icon={<ArrowRight size={16} />}
                onClick={() => trackEvent("book_click", { placement: "services" })}
                className="relative mt-4"
              >
                Hier direkt einen Termin buchen
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-2">
            <div className="flex h-full flex-col items-start gap-4 rounded-3xl border border-white/10 p-8 transition-colors duration-500 hover:border-rose-bright/40 md:p-12">
              <Gift className="text-rose-bright" size={28} />
              <h3 className="font-display text-2xl font-extrabold uppercase text-white md:text-3xl">
                Geschenkgutscheine
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Verschenke ein Stück M&amp;M — frag einfach direkt per WhatsApp nach den Möglichkeiten.
              </p>
              <MagneticButton
                href={siteConfig.contact.whatsappLink(
                  "Hallo liebes M&M-Hairdesign Team,\nich möchte einen Geschenkgutschein verschenken. Welche Möglichkeiten bietet ihr?\nVielen Dank und liebe Grüße,",
                )}
                target="_blank"
                variant="outline"
                className="mt-auto pt-2"
              >
                Per WhatsApp anfragen
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
