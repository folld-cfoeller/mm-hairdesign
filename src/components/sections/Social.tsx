import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { siteConfig } from "@/config/site-config";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import MaskReveal from "@/components/ui/MaskReveal";

export default function Social() {
  return (
    <section className="border-t border-white/10 bg-ink py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <h3 className="font-display max-w-3xl text-balance text-2xl font-bold leading-snug text-white/90 md:text-3xl">
            <MaskReveal>
              Suchst du nach neuen Styles, Top-Tipps für deine Haare, oder möchtest du einfach erleben, wie wir im
              Salon arbeiten? Folge uns auf unseren Kanälen.
            </MaskReveal>
          </h3>
          <Reveal delay={0.12}>
            <div className="flex shrink-0 items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-rose-bright hover:bg-rose-bright/10 hover:text-rose-bright"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-rose-bright hover:bg-rose-bright/10 hover:text-rose-bright"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
