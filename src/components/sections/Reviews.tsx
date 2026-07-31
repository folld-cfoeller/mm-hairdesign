import Image from "next/image";
import { Star } from "lucide-react";

import GoogleLogoImg from "@/assets/images/brand/Google_Logo.png";
import { siteConfig } from "@/config/site-config";
import { googleRating, reviews } from "@/data/reviews";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import CountUp from "@/components/ui/CountUp";
import MagneticButton from "@/components/ui/MagneticButton";

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="mx-3 flex h-full w-[85vw] max-w-md flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_20px_45px_-25px_rgba(13,13,13,0.35)] sm:w-[420px]">
      <span className="flex items-center gap-0.5 text-amber-500">
        {Array.from({ length: review.rating }).map((_, s) => (
          <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <blockquote className="text-sm leading-relaxed text-ink/75">&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-ink/40">
        {review.name} · Google-Bewertung
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="mentions" className="overflow-hidden bg-paper py-24 md:py-36">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Zufriedenheit"
          title="Das sagen unsere Gäste"
          description="Erfahrungen unserer zufriedenen Kunden auf Google."
        />

        {/* Big rating statement */}
        <Reveal>
          <a
            href={siteConfig.social.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-14 flex flex-wrap items-end gap-x-8 gap-y-4"
          >
            <span className="font-display text-8xl font-extrabold leading-none tracking-tight text-ink md:text-[11rem]">
              <CountUp value={googleRating.value} />
            </span>
            <span className="flex flex-col gap-2 pb-2 md:pb-5">
              <span className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="flex items-center gap-2">
                <Image src={GoogleLogoImg} alt="Google" className="h-5 w-auto" />
                <span className="font-display text-sm font-semibold text-ink/70 transition-colors group-hover:text-rose">
                  {googleRating.count} Bewertungen
                </span>
              </span>
            </span>
          </a>
        </Reveal>
      </Container>

      {/* Review ticker — pauses on hover */}
      <Reveal delay={0.1}>
        <Marquee speed={45} className="py-2">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </Marquee>
      </Reveal>

      <Container>
        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <MagneticButton href={siteConfig.social.googleReviewUrl} target="_blank" variant="ghost">
              Wir freuen uns auf deine Bewertung!
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
