"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

import ProductsImg from "@/assets/images/parallax/products.jpg";
import { siteConfig } from "@/config/site-config";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import MaskReveal from "@/components/ui/MaskReveal";
import Marquee from "@/components/ui/Marquee";
import MagneticButton from "@/components/ui/MagneticButton";
import { trackEvent } from "@/lib/analytics";

export default function Shop() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="shop" ref={ref} className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden bg-ink py-28">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%] w-full">
        <Image src={ProductsImg} alt="Paul Mitchell Produkte" fill sizes="100vw" className="object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/75 to-ink" />

      {/* Oversized hollow ticker behind the content */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none" aria-hidden="true">
        <Marquee speed={50}>
          <span className="font-display text-stroke-white px-8 text-[22vw] font-extrabold uppercase leading-none md:text-[14vw]">
            Onlineshop
          </span>
        </Marquee>
      </div>

      <Container className="relative text-center">
        <Reveal>
          <ShoppingBag className="mx-auto mb-6 text-rose-bright" size={30} />
        </Reveal>
        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-6xl">
          <MaskReveal delay={0.08}>Entdecke unseren</MaskReveal>
          <MaskReveal delay={0.18} innerClassName="bg-gradient-to-r from-rose-bright to-wine bg-clip-text text-transparent">
            Onlineshop
          </MaskReveal>
        </h2>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/70 md:text-base">
            Hier kannst du all unsere Paul&nbsp;Mitchell Produkte bequem online bestellen. Natürlich kannst du uns auch
            gerne eine Nachricht schreiben — wir stellen dir unsere hausinternen Produkte zur Verfügung.
          </p>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-10">
            <MagneticButton
              href={siteConfig.booking.shopUrl}
              target="_blank"
              variant="primary"
              icon={<ArrowRight size={16} />}
              onClick={() => trackEvent("shop_click")}
            >
              Zum Onlineshop
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
