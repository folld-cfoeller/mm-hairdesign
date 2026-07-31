"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import JobsTeamImg from "@/assets/images/team/team_jobs_20240120.png";
import JobsApprenticeImg from "@/assets/images/services/jobs.jpg";
import { siteConfig } from "@/config/site-config";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

const applyWhatsappText =
  "Hallo liebes M&M-Hairdesign Team,\nich habe Interesse an einer Ausbildung oder einer Festanstellung.\nIch heiße:\nMeine Berufserfahrung:\nund wie ihr mich am besten erreichen könnt:";

function ApplyCTAs() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <MagneticButton
        href={siteConfig.contact.whatsappLink(applyWhatsappText)}
        target="_blank"
        variant="primary"
        icon={<ArrowRight size={16} />}
        onClick={() => trackEvent("job_apply_click", { channel: "whatsapp" })}
      >
        <WhatsAppIcon className="h-4 w-4" /> WhatsApp
      </MagneticButton>
      <MagneticButton
        href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("[M&M-Hairdesign.de] - Bewerbung")}&body=${encodeURIComponent(applyWhatsappText)}`}
        variant="outline-dark"
        icon={<Mail size={16} />}
        onClick={() => trackEvent("job_apply_click", { channel: "email" })}
      >
        E-Mail
      </MagneticButton>
    </div>
  );
}

function StickyImage({ img, alt }: { img: typeof JobsTeamImg; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden rounded-3xl md:sticky md:top-28">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image src={img} alt={alt} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
      </motion.div>
    </div>
  );
}

export default function Jobs() {
  return (
    <section id="jobs" className="bg-paper py-24 md:py-36">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Karriere"
          title="Jobs @mmhairdesign"
          description="Werde Teil eines hochkarätigen Teams in der Kurstadt in Hessen."
        />

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                Für Hairstylist:innen (m/w/d)
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70">
                Du bist auf der Suche nach dem perfekten Job oder möchtest mit einer richtig coolen Ausbildung
                durchstarten? Bei M&amp;M Hairdesign findest du beides — ob als erfahrene:r Hairstylist:in oder als
                motivierte:r Auszubildende:r.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-ink p-6 text-white">
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Du hast genug von …
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-white/30" />Chaos im Salon</li>
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-white/30" />Unmotivierten Kolleg:innen</li>
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-white/30" />Überstunden &amp; mieser Bezahlung</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-rose to-wine p-6 text-white shadow-[0_20px_50px_-20px_rgba(174,21,72,0.5)]">
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
                    Wir bieten dir …
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-rose-bright" />Wertschätzung &amp; Fairness</li>
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-rose-bright" />Regelmäßige Fortbildungen</li>
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-rose-bright" />Flexible Arbeitszeiten &amp; Top-Team</li>
                    <li className="flex gap-3"><span className="mt-[7px] h-1 w-3 shrink-0 bg-rose-bright" />Stylisches Arbeitsumfeld</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 text-sm text-ink/70">
                Schreib uns direkt — kein Lebenslauf, kein Drama. Deine Ansprechpartner:innen sind{" "}
                <a href="#team" className="font-semibold text-rose underline underline-offset-2">
                  {siteConfig.legal.managingDirectors.join(", ")}
                </a>
                .
              </p>
              <ApplyCTAs />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <StickyImage img={JobsTeamImg} alt="Team von M&M Hairdesign" />
          </Reveal>
        </div>

        <div className="mt-24 grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <StickyImage img={JobsApprenticeImg} alt="Ausbildung bei M&M Hairdesign" />
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                Starte deine Karriere als Hairstylist:in
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70">
                Deine Schule nervt und du willst endlich etwas machen, das Spaß bringt? Dann ist unsere Ausbildung
                zum/zur Hairstylist:in genau dein Ding!
              </p>
              <ul className="mt-6 space-y-3 text-[15px] text-ink/70">
                <li>✨ Du wirst zum Hair-Pro — von einfachen Schnitten bis zu den coolsten Trendfrisuren.</li>
                <li>✨ Ein Team, das immer für dich da ist.</li>
                <li>✨ Workshops &amp; Schulungen on top.</li>
                <li>✨ Bei uns wird nicht nur gearbeitet — der Spaß kommt nie zu kurz.</li>
              </ul>
              <p className="mt-6 text-sm text-ink/70">
                Kein Bock auf langweilige Bewerbungen? Kein Ding — schreib uns einfach eine Nachricht oder komm direkt
                vorbei.
              </p>
              <ApplyCTAs />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-24 overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,29,101,0.25),transparent_60%)]" />
            <h3 className="font-display relative text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              Warum M&amp;M Hairdesign?
            </h3>
            <p className="relative mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-white/70 md:text-base">
              Wir sind DER Friseursalon in Bad Nauheim: kreativ, innovativ und immer gut drauf. Egal ob Pro oder
              Einsteiger:in — bei uns wird&apos;s nie langweilig. Klingt spannend? Dann lass von dir hören und werd
              Teil unseres Teams!
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
