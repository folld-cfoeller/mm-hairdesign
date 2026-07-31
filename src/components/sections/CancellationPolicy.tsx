import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const rules = [
  { label: "Kostenfreie Absage", value: "bis 24 Stunden vorher", fee: "0 %" },
  { label: "Kurzfristige Absage", value: "unter 24 Stunden vorher", fee: "50 %" },
  { label: "Kein Erscheinen", value: "ohne Absage", fee: "100 %" },
];

export default function CancellationPolicy() {
  return (
    <section id="cancellation" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Terminabsagen &amp; Ausfallgebühren
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Um dir die bestmögliche Zeit und Aufmerksamkeit zu schenken, planen wir unsere Termine sorgfältig und
              exklusiv für dich. Wir bitten daher um Verständnis für folgende Regelung:
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {rules.map((rule, i) => (
            <Reveal key={rule.label} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col gap-2 bg-white p-8 transition-colors duration-300 hover:bg-ink">
                <p className="font-display text-6xl font-extrabold tabular-nums tracking-tight text-ink transition-colors duration-300 group-hover:text-rose-bright md:text-7xl">
                  {rule.fee}
                </p>
                <p className="font-display mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose transition-colors duration-300 group-hover:text-rose-bright">
                  {rule.label}
                </p>
                <p className="text-sm text-ink/60 transition-colors duration-300 group-hover:text-white/70">
                  {rule.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-ink/60">Vielen Dank für dein Verständnis und deine Wertschätzung.</p>
        </Reveal>
      </Container>
    </section>
  );
}
