"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import HeroImg from "@/assets/images/team/team_20260206.png";
import { siteConfig } from "@/config/site-config";
import { services } from "@/data/services";
import { googleRating } from "@/data/reviews";
import { trackEvent } from "@/lib/analytics";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";

const lineEase = [0.16, 1, 0.3, 1] as const;

function HeadlineLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: lineEase }}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex h-[100svh] min-h-[680px] w-full flex-col overflow-hidden bg-ink">
      {/* Full-bleed image: slow Ken Burns on load, parallax on scroll */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: lineEase }}
          className="h-full w-full"
        >
          <Image
            src={HeroImg}
            alt="Das Team von M&M Hairdesign in Bad Nauheim"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      {/* Rating chip — top right, below nav */}
      <motion.a
        href={siteConfig.social.googleSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: lineEase }}
        className="glass absolute right-5 top-24 z-10 hidden items-center gap-3 rounded-full px-5 py-2.5 text-white transition-transform hover:scale-[1.04] md:right-10 md:top-28 lg:flex"
      >
        <span className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
        <span className="font-display text-xs font-semibold tracking-wide">
          {googleRating.value.toString().replace(".", ",")} · {googleRating.count} Google-Bewertungen
        </span>
      </motion.a>

      {/* Editorial headline block — bottom left */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mt-auto w-full px-5 pb-16 md:px-10 md:pb-20"
      >
        <div className="mx-auto max-w-[100rem]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: lineEase }}
            className="font-display mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75"
          >
            <span className="hairline block w-10" />
            Dein Friseur in {siteConfig.brand.city}
          </motion.p>

          <h1 className="font-display text-[clamp(2.8rem,9.5vw,8.5rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white">
            <HeadlineLine delay={0.25}>Innovativ.</HeadlineLine>
            <HeadlineLine delay={0.37}>Aufregend.</HeadlineLine>
            <HeadlineLine delay={0.49}>
              <span className="bg-gradient-to-r from-rose-bright to-wine bg-clip-text text-transparent">
                Einfach gut.
              </span>
            </HeadlineLine>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: lineEase }}
              className="max-w-md text-balance text-base leading-relaxed text-white/75 md:text-lg"
            >
              Exklusives Hairstyling für deine individuelle Persönlichkeit — von einem Team aus 12 kreativen Köpfen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: lineEase }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href={siteConfig.booking.url}
                target="_blank"
                variant="primary"
                icon={<ArrowRight size={16} />}
                onClick={() => trackEvent("book_click", { placement: "hero" })}
              >
                Termin buchen
              </MagneticButton>
              <MagneticButton href="#services" variant="outline">
                Leistungen entdecken
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services ticker — seam between hero and page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 border-t border-white/10"
      >
        <Marquee speed={36} className="py-4">
          {[...services.map((s) => s.title), siteConfig.brand.name].map((label) => (
            <span key={label} className="flex items-center">
              <span className="font-display px-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                {label}
              </span>
              <span className="h-1 w-1 rounded-full bg-rose-bright" />
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
