import type { StaticImageData } from "next/image";

import ManuelaImg from "@/assets/images/team/Manuela_Hoelzer.png";
import MelanieImg from "@/assets/images/team/Melanie_May.png";
import AlexanderImg from "@/assets/images/team/Alexander_Scholz.png";
import ClaudiaImg from "@/assets/images/team/Claudia_Malachias.png";
import NadinImg from "@/assets/images/team/Nadin_Streich-Willnow.png";
import LisaImg from "@/assets/images/team/Lisa_Elliott.png";
import SandraImg from "@/assets/images/team/Sandra_Emmert.png";
import CelineImg from "@/assets/images/team/Celine_Wagner.png";
import SonerImg from "@/assets/images/team/Soner_Karman.png";
import ChristinaImg from "@/assets/images/team/Christina_Lehmann.png";
import YaraImg from "@/assets/images/team/Yara_Khalaf.png";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department?: string;
  img: StaticImageData;
  questions: {
    question: string;
    answer: string;
  }[];
}

const QUESTIONS = [
  "Was wolltest du als Kind werden?",
  "Warum bist du Hairstylist:in geworden?",
  "Was macht dir am meisten Spaß an deinem Job?",
  "Wenn dein Leben verfilmt werden würde: Wie würde der Titel lauten?",
  "Was ist dein Lieblingsgetränk?",
  "Was würden Kunden von dir nie erwarten?",
] as const;

function withAnswers(a: [string, string, string, string, string, string]) {
  return QUESTIONS.map((question, i) => ({ question, answer: a[i] }));
}

export const team: TeamMember[] = [
  {
    slug: "manuela-hoelzer",
    name: "Manuela Hölzer",
    role: "Business Owner",
    department: "Management",
    img: ManuelaImg,
    questions: withAnswers([
      "Krankenschwester oder Prinzessin",
      "Mir ist die Gabe in die Wiege gelegt worden, da mein Vater Friseur aus Leidenschaft war.",
      "Die Vielseitigkeit – kreativ am Kunden zu arbeiten und das ganze Programm im Hintergrund zu meistern.",
      "Haarige Zeiten in allen Lebenslagen",
      "Gin Tonic",
      "Dass ich gerne in meiner Freizeit Kuchen backe.",
    ]),
  },
  {
    slug: "melanie-may",
    name: "Melanie May",
    role: "Business Owner",
    department: "CMO",
    img: MelanieImg,
    questions: withAnswers([
      "Friseur",
      "Meine Mama (sie ist auch Friseurin) hat mich inspiriert und für mich war klar: das willst du auch machen!",
      "Kreativ arbeiten & meine zufriedenen, glücklichen Kunden.",
      "Just do it!",
      "Milchkaffee",
      "Ich liebe Horrorfilme.",
    ]),
  },
  {
    slug: "alexander-scholz",
    name: "Alexander Scholz",
    role: "Business Owner",
    department: "Creative Director",
    img: AlexanderImg,
    questions: withAnswers([
      "Immer schon Friseur.",
      "Weil ich die Möglichkeit habe, Kreativität, Mode, Kommunikation, Individualität und die Arbeit am Menschen miteinander zu vereinen und tagtäglich zu leben.",
      "Glückliche Kunden.",
      "Deep Talk auf dem Friseurstuhl: mein Spagat zwischen Fashion und sehr persönlichen Gesprächen.",
      "Vor Feierabend Wasser. Nach Feierabend Wasser mit Apfelwein verfeinert.",
      "Zwangsneurose beim perfekten Arrangieren meiner Kopfkissen, bevor ich mich ins Bett legen kann.",
    ]),
  },
  {
    slug: "claudia-malachias",
    name: "Claudia Malachias",
    role: "Stellv. Geschäftsführerin / Hairstylistin",
    img: ClaudiaImg,
    questions: withAnswers([
      "Friseurin ab Geburt ;-)",
      "Weil mich das glücklich macht.",
      "Menschen glücklich machen.",
      "Phönix aus der Asche",
      "Ingwertee :-), Wein & Sekt",
      "Dass ich mit Stofftier ins Bett gehe ;-)",
    ]),
  },
  {
    slug: "nadin-streich-willnow",
    name: "Nadin Streich-Willnow",
    role: "Hairstylistin",
    img: NadinImg,
    questions: withAnswers([
      "Schon sehr früh war klar, dass es etwas mit Mode oder Haaren sein muss, also Model oder Friseurin.",
      "Das liegt in den Familiengenen. Meine Tante und Cousine haben es mir vorgelebt und spätestens nach meinem ersten Praktikum in einem Salon war klar: Das und nichts anderes.",
      "Jeden Tag anderen Menschen zu begegnen, sie zu verändern und ein Strahlen in den Gesichtern meiner Kunden zu sehen. Das lebe und liebe ich!",
      "Zwischen Kindern, Tieren und der Schere :-)",
      "Weißwein",
      "Ich liebe selbstgestrickte Socken.",
    ]),
  },
  {
    slug: "lisa-elliott",
    name: "Lisa Elliott",
    role: "Hairstylistin",
    img: LisaImg,
    questions: withAnswers([
      "Tierarzthelferin",
      "Weil ich den Kontakt zu Menschen liebe und ich mich kreativ ausleben kann.",
      "Meine lieben Kunden jeden Tag glücklich zu machen.",
      "Vom Dauerwelle fixierenden Kind zur Topstylistin",
      "Wasser & Kaffee",
      "Dass ich ein ungeduldiger Mensch bin.",
    ]),
  },
  {
    slug: "sandra-emmert",
    name: "Sandra Emmert",
    role: "Hairstylistin",
    img: SandraImg,
    questions: withAnswers([
      "Ich wollte Skilehrerin werden.",
      "Weil ich mir überlegt habe, ich brauche etwas, das mir immer Freude bereiten wird, denn an der Arbeit bin ich öfter als zuhause.",
      "Die glücklichen Kunden, die übers ganze Gesicht strahlen und sich über ihren neuen Look freuen.",
      "Mein Leben wäre eine Serie mit immer neuen Titeln, weil das Leben so facettenreich ist, dass man es nicht mit einem Titel beschreiben kann.",
      "Selbstgemachter Eierlikör im Winter von unseren Kunden :-) oder doch Sangria am Strand?",
      "Ich habe mal in einem Orchester Horn gespielt, über mehrere Jahre, und war als Kind bei den Pfadfindern.",
    ]),
  },
  {
    slug: "celine-wagner",
    name: "Celine Wagner",
    role: "Hairstylistin",
    img: CelineImg,
    questions: withAnswers([
      "Make-up-Artist",
      "Da ich bei dem Beruf meine kreative individuelle Ader ausleben kann und der Beruf durch Vielseitigkeit niemals langweilig wird.",
      "Die Kunden mit einem Lächeln nachhause schicken zu können.",
      "Das bunte, vielseitige und gleichzeitig tiefgründige Leben der Celine Wagner.",
      "Wasser, Wasser mit einer Scheibe Orange und Minze und gelegentlich eine kalte Mate.",
      "Mein kulinarisches Interesse in Bezug aufs Kochen. Ich habe mir meinen Führerschein erkämpft, dabei fahre ich nicht mal gerne Auto und nehme lieber die verspätete DB. Ich liebe es zu singen, doch in Bezug aufs Tanzen fehlt mir jede Kunst von Taktgefühl.",
    ]),
  },
  {
    slug: "soner-karman",
    name: "Soner Karman",
    role: "Hairstylist",
    img: SonerImg,
    questions: withAnswers([
      "Irgendetwas im medizinischen Bereich.",
      "Mein Onkel hatte einen Friseursalon. Als ich noch klein war, habe ich ihm sehr gerne geholfen. In dieser Zeit habe ich gemerkt, dass ich diesen Beruf gerne erlernen möchte.",
      "Die Kunden glücklich zu sehen und ihnen eine Freude zu bereiten. Aber eigentlich macht mir alles Spaß.",
      "„Nochmal Glück gehabt“",
      "Heiße Schokolade",
      "Dass ich in meiner Freizeit gerne male oder Tennis spiele.",
    ]),
  },
  {
    slug: "christina-lehmann",
    name: "Christina Lehmann",
    role: "Empfang",
    img: ChristinaImg,
    questions: withAnswers([
      "Eiskunstläuferin",
      "Weil ich die abwechslungsreiche Arbeit und den Kontakt mit Menschen mag.",
      "Alles.",
      "Espresso oder Latte Macchiato?",
      "Ingwertee & Eierlikör",
      "–",
    ]),
  },
  {
    slug: "yara-khalaf",
    name: "Yara Khalaf",
    role: "Auszubildende",
    img: YaraImg,
    questions: withAnswers([
      "Lehrerin",
      "Weil ich schon früh meine Leidenschaft fürs Styling entdeckt habe und es mir Spaß gemacht hat, Freundinnen zu schminken und ihre Haare zu stylen.",
      "Ich liebe den Kontakt mit Menschen – und den Moment, wenn sie zufrieden in den Spiegel schauen.",
      "„Zwischen Mut und Hoffnung – Schritte in die Zukunft“",
      "Café / Wasser",
      "Dass ich schon mit 12 im Ausland gearbeitet habe und dabei früh Verantwortung übernehmen musste.",
    ]),
  },
];
