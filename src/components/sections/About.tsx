import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import MaskReveal from "@/components/ui/MaskReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const paragraphs = [
  {
    lead: "Du",
    text: "stehst im Mittelpunkt unseres kreativen Wirkens. Deine individuelle Persönlichkeit, dein Stil, deine Stylinggewohnheiten, deine Vorstellungen und Wünsche sind Basis für dein maßgeschneidertes Hairstyling.",
  },
  {
    lead: "Wir",
    text: "sind ein Team aus 12 kreativen Köpfen. Stets auf dem neuesten Stand, gut geschult, stilsicher und perfektionistisch, bieten wir dir in exklusivem Ambiente eine unvergessliche Auszeit. Perfekt ausgearbeitete Schnitte und brillante Farben sind unsere Leidenschaft.",
  },
  {
    lead: "Zusammen",
    text: "entwickeln wir dein neues Styling, mit dem du dich rundum wohlfühlen sollst. Ganz gleich, ob klassisch, elegant, modisch oder ausgefallen — einer unserer Topstylisten steht dir gerne mit Rat und Tat zur Seite.",
  },
];

export default function About() {
  return (
    <section id="home" className="bg-paper py-24 md:py-36">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Über uns"
          title="Dein Team von M&M Hairdesign"
          description="Dein Friseur in Bad Nauheim"
        />

        <div className="flex flex-col">
          {paragraphs.map((p) => (
            <div
              key={p.lead}
              className="group grid gap-4 border-t border-ink/10 py-10 last:border-b md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16 md:py-14"
            >
              <h3 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl">
                <MaskReveal delay={0.05} innerClassName="lead-stroke">
                  {p.lead}
                </MaskReveal>
              </h3>
              <Reveal delay={0.15}>
                <p className="max-w-xl text-balance text-base leading-relaxed text-ink/70 md:text-lg">{p.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
