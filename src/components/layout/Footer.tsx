import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";

import LogoWhite from "@/assets/images/brand/MMLOGO-small_wb.png";
import { siteConfig } from "@/config/site-config";
import { navLinks } from "@/data/navigation";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_auto]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/#top" aria-label="M&M Hairdesign — zum Seitenanfang">
              <Image src={LogoWhite} alt="M&M Hairdesign" className="h-14 w-auto md:h-16" />
            </Link>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              {siteConfig.brand.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-rose-bright hover:text-rose-bright"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-rose-bright hover:text-rose-bright"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-rose-bright hover:text-rose-bright"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 self-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group font-display flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-rose-bright"
              >
                {link.label}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>

          {/* Back to top */}
          <div className="self-start md:self-end">
            <a
              href="#top"
              aria-label="Nach oben"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-1 hover:border-rose-bright hover:text-rose-bright"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} {siteConfig.brand.legalName}</span>
          <span className="flex items-center gap-6">
            <Link href="/impressum" className="uppercase tracking-wide transition-colors hover:text-rose-bright">
              Impressum
            </Link>
            <Link href="/datenschutz" className="uppercase tracking-wide transition-colors hover:text-rose-bright">
              Datenschutz
            </Link>
            <Link
              href="https://foeller.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-wide transition-colors hover:text-rose-bright"
            >
              Website von foeller.digital
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
