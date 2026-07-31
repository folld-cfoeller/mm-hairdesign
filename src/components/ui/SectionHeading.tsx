import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";
import MaskReveal from "@/components/ui/MaskReveal";

/**
 * Editorial section header: numbered index + eyebrow on a hairline row,
 * oversized left-aligned title with line-mask reveal, description offset right.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  invert = false,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <div className="mb-16 md:mb-20">
      {(eyebrow || index) && (
        <Reveal>
          <div
            className={clsx(
              "flex items-baseline gap-4 border-t pt-5",
              invert ? "border-white/15" : "border-ink/15",
            )}
          >
            {index && (
              <span className={clsx("font-display text-xs font-light tabular-nums", invert ? "text-white/40" : "text-ink/40")}>
                ({index})
              </span>
            )}
            {eyebrow && (
              <span
                className={clsx(
                  "font-display text-xs font-semibold uppercase tracking-[0.35em]",
                  invert ? "text-rose-bright" : "text-rose",
                )}
              >
                {eyebrow}
              </span>
            )}
          </div>
        </Reveal>
      )}

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:items-end md:gap-16">
        <h2
          className={clsx(
            "font-display max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
            invert ? "text-white" : "text-ink",
          )}
        >
          <MaskReveal>{title}</MaskReveal>
        </h2>
        {description && (
          <Reveal delay={0.15}>
            <p className={clsx("text-balance text-sm leading-relaxed md:text-base", invert ? "text-white/65" : "text-ink/65")}>
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
