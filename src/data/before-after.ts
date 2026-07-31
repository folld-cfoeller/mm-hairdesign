import type { StaticImageData } from "next/image";

import BlondLangBefore from "@/assets/images/before-after/blond_lang_vorher.jpg";
import BlondLangAfter from "@/assets/images/before-after/blond_lang_nachher.jpg";
import BlondWelligBefore from "@/assets/images/before-after/blond_lang_wellig_vorher.jpg";
import BlondWelligAfter from "@/assets/images/before-after/blond_lang_wellig_nachher.jpg";
import BraunBefore from "@/assets/images/before-after/braun_vorher.jpg";
import BraunAfter from "@/assets/images/before-after/braun_nachher.jpg";
import GirlBefore from "@/assets/images/before-after/girl_vorher.jpg";
import GirlAfter from "@/assets/images/before-after/girl_nachher.jpg";
import KupferBefore from "@/assets/images/before-after/kupfer_vorher.jpg";
import KupferAfter from "@/assets/images/before-after/kupfer_nachher.jpg";
import KupferrotBefore from "@/assets/images/before-after/kupferrot_vorher.jpg";
import KupferrotAfter from "@/assets/images/before-after/kupferrot_nachher.jpg";
import SignatureBefore from "@/assets/images/before-after/hair_before.png";
import SignatureAfter from "@/assets/images/before-after/hair_after.png";

export interface BeforeAfterPair {
  label: string;
  before: StaticImageData;
  after: StaticImageData;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  { label: "Blond & Lang", before: BlondLangBefore, after: BlondLangAfter },
  { label: "Blond & Wellig", before: BlondWelligBefore, after: BlondWelligAfter },
  { label: "Braun", before: BraunBefore, after: BraunAfter },
  { label: "Naturell", before: GirlBefore, after: GirlAfter },
  { label: "Kupfer", before: KupferBefore, after: KupferAfter },
  { label: "Kupferrot", before: KupferrotBefore, after: KupferrotAfter },
  { label: "Signature Cut", before: SignatureBefore, after: SignatureAfter },
];
