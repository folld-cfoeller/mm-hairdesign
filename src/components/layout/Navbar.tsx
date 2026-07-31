"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import LogoWhite from "@/assets/images/brand/MMLOGO-small_wb.png";
import { siteConfig } from "@/config/site-config";
import { navLinks } from "@/data/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { trackEvent } from "@/lib/analytics";

const MotionLink = motion.create(Link);

const overlayEase = [0.76, 0, 0.24, 1] as const;

export default function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = forceSolid || scrolledPast;

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolledPast(latest > 40);
    setHidden(latest > previous && latest > 320 && !menuOpen);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 transition-colors duration-500 ${
          menuOpen ? "z-[70] bg-transparent" : scrolled ? "z-50 glass shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "z-50 bg-transparent"
        }`}
      >
        {/* Reading progress hairline */}
        <motion.span
          style={{ scaleX: scrollYProgress }}
          className={`absolute inset-x-0 top-0 block h-[2px] origin-left bg-gradient-to-r from-wine via-rose to-rose-bright transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-4 md:px-10">
          <Link href="/#top" aria-label="M&M Hairdesign — zum Seitenanfang" className="relative z-[70]">
            <Image src={LogoWhite} alt="M&M Hairdesign" priority className="h-9 w-auto md:h-10" />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href={siteConfig.contact.phoneLink}
              aria-label="Anrufen"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright md:hidden"
            >
              <Phone size={16} />
            </a>
            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("book_click", { placement: "navbar" })}
              className="hidden items-center gap-2 rounded-full bg-rose-bright px-6 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-shadow hover:shadow-[0_0_25px_rgba(245,29,101,0.5)] md:inline-flex"
            >
              Termin buchen
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="group relative z-[70] inline-flex h-11 items-center gap-3 rounded-full border border-white/20 px-5 text-white transition-colors hover:border-white/50"
            >
              <span className="font-display hidden text-[11px] font-semibold uppercase tracking-[0.25em] sm:inline">
                {menuOpen ? "Schließen" : "Menü"}
              </span>
              <span className="relative block h-[10px] w-5">
                <span
                  className={`absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[4.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen overlay menu — all breakpoints */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: overlayEase }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-ink"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(245,29,101,0.14),transparent_50%)]" />

            <div className="relative mx-auto flex min-h-full w-full max-w-[100rem] flex-col px-5 pb-12 pt-28 md:px-10 md:pt-36">
              <div className="grid flex-1 gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-24">
                {/* Nav links */}
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.25 } } }}
                  className="flex flex-col"
                >
                  {navLinks.map((link, i) => (
                    <span key={link.href} className="block overflow-hidden border-b border-white/10">
                      <MotionLink
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        variants={{
                          hidden: { y: "110%" },
                          visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                        }}
                        className="group flex items-baseline gap-4 py-4 md:gap-6 md:py-5"
                      >
                        <span className="font-display text-xs font-light tabular-nums text-white/35 transition-colors group-hover:text-rose-bright">
                          0{i + 1}
                        </span>
                        <span className="font-display text-3xl font-extrabold uppercase tracking-tight text-white transition-[transform,color] duration-300 ease-out group-hover:translate-x-3 group-hover:text-rose-bright sm:text-4xl md:text-5xl">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={22}
                          className="ml-auto text-white/25 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-rose-bright group-hover:opacity-100"
                        />
                      </MotionLink>
                    </span>
                  ))}
                </motion.nav>

                {/* Contact / hours panel */}
                <motion.aside
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-10 lg:pt-2"
                >
                  <div>
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
                      Kontakt
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/75">
                      <a href={siteConfig.contact.phoneLink} className="flex items-center gap-3 hover:text-rose-bright">
                        <Phone size={14} /> {siteConfig.contact.phoneDisplay}
                      </a>
                      <a
                        href={siteConfig.contact.whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-rose-bright"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                      </a>
                      <Link href="/#openhours" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-rose-bright">
                        <MapPin size={14} />
                        {siteConfig.contact.address.street} · {siteConfig.contact.address.zip}{" "}
                        {siteConfig.contact.address.city}
                      </Link>
                    </div>
                  </div>

                  <div>
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-bright">
                      Öffnungszeiten
                    </p>
                    <ul className="mt-4 max-w-xs space-y-1.5 text-sm text-white/75">
                      {siteConfig.openingHours.map((slot) => (
                        <li key={slot.day} className="flex justify-between gap-6">
                          <span className={slot.closed ? "text-white/35" : ""}>{slot.day}</span>
                          <span className={slot.closed ? "text-white/35" : "font-medium text-white"}>{slot.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright"
                      >
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright"
                      >
                        <FacebookIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={siteConfig.contact.whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-rose-bright hover:text-rose-bright"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                      </a>
                    </div>
                    <a
                      href={siteConfig.booking.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("book_click", { placement: "mobile_menu" })}
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-rose-bright px-8 py-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(245,29,101,0.35)] transition-shadow hover:shadow-[0_8px_40px_rgba(245,29,101,0.5)]"
                    >
                      Termin buchen
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
