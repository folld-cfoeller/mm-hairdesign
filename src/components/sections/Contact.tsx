"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import ConsentGatedMap from "@/components/ui/ConsentGatedMap";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  return (
    <section id="openhours" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(105,13,43,0.35),transparent_50%)]" />
      <Container className="relative">
        <SectionHeading
          index="07"
          eyebrow="Besuch uns"
          title="Einfach eine Auszeit gönnen und verwöhnen lassen"
          invert
        />

        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          <Reveal className="md:col-span-2">
            <div className="glass flex h-full flex-col gap-10 rounded-3xl p-8 md:p-10">
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
                  Kontakt
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {siteConfig.brand.fullName}
                  <br />
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                </p>
              </div>

              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
                  Öffnungszeiten
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {siteConfig.openingHours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
                      <span className={slot.closed ? "text-white/35" : ""}>{slot.day}</span>
                      <span className={slot.closed ? "text-white/35" : "font-medium text-white"}>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3.5 border-t border-white/10 pt-6">
                <a href={siteConfig.contact.phoneLink} className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-rose-bright">
                  <Phone size={16} className="text-rose-bright" /> {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={siteConfig.contact.whatsappLink("Hallo liebes M&M-Hairdesign Team,\nich habe folgende Frage:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-rose-bright"
                >
                  <WhatsAppIcon className="h-4 w-4 text-rose-bright" /> Kontakt oder Fragen?
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-rose-bright">
                  <Mail size={16} className="text-rose-bright" /> {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-rose-bright"
                >
                  <MapPin size={16} className="text-rose-bright" /> Route planen
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-3">
            <div className="h-full overflow-hidden rounded-3xl">
              <ConsentGatedMap embedSrc={siteConfig.contact.mapsEmbedSrc} title="M&M Hairdesign Standort" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_130%,rgba(245,29,101,0.2),transparent_60%)]" />
            <span className="font-display relative text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
              Neu
            </span>
            <h3 className="font-display relative mt-3 text-2xl font-extrabold uppercase text-white md:text-4xl">
              Online Terminbuchung
            </h3>
            <div className="relative mt-6 flex justify-center">
              <MagneticButton
                href={siteConfig.booking.url}
                target="_blank"
                variant="primary"
                icon={<ArrowRight size={16} />}
                onClick={() => trackEvent("book_click", { placement: "contact" })}
              >
                Hier direkt einen Termin buchen
              </MagneticButton>
            </div>
            <a
              href="#cancellation"
              className="relative mt-5 inline-block text-xs text-white/50 underline underline-offset-2 transition-colors hover:text-rose-bright"
            >
              Siehe unsere Terminabsagen &amp; Ausfallgebühren
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
