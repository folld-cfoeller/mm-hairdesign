import type { StaticImageData } from "next/image";

import BalayageImg from "@/assets/images/services/service-balayage.jpg";
import TreatImg from "@/assets/images/services/service-treat.jpg";
import HairImg from "@/assets/images/services/service-hair.png";
import BabyImg from "@/assets/images/services/service-baby.jpg";
import PmImg from "@/assets/images/services/service-pm.jpg";
import BrideImg from "@/assets/images/services/service-bride.jpg";

export interface Service {
  title: string;
  description: string;
  img: StaticImageData;
}

export const services: Service[] = [
  {
    title: "Balayage",
    description: "Effekt nach der M&M Methode",
    img: BalayageImg,
  },
  {
    title: "Exclusive Package",
    description: "Das Premium Wellness Package für deine Haare",
    img: TreatImg,
  },
  {
    title: "Flaunt Innovation",
    description: "Haarverlängerung und -verdichtung",
    img: HairImg,
  },
  {
    title: "MOMMY2B",
    description: "Das Verwöhnprogramm vor der Geburt",
    img: BabyImg,
  },
  {
    title: "Permanent Make-up",
    description: "Perfekt geschminkt, jeden Tag",
    img: PmImg,
  },
  {
    title: "Bridal Special",
    description: "Mit Vortermin",
    img: BrideImg,
  },
];
