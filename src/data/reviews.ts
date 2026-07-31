export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const googleRating = {
  value: 4.8,
  count: "200+",
};

export const reviews: Review[] = [
  {
    name: "Susanne Blank",
    rating: 5,
    text: "Wie immer super 👍👍👍👍. Noch einmal Dankeeeeee an Manu 🫶😍",
  },
  {
    name: "Pavla Schwalb",
    rating: 5,
    text: "Ich war heute bei Celine und es war einfach super – die Beratung, das Ergebnis, einfach alles. Vielen lieben Dank dafür und bis zum nächsten Mal ;-)",
  },
  {
    name: "Gunhild",
    rating: 5,
    text: "Da ich super begeistert bin, wie Sandra die Haare schneidet und frisiert, war ich heute mit unserer Tochter bei ihr und sie ist ebenso begeistert wie ich. Die Haare fallen wunderschön und natürlich. Vielen Dank!!",
  },
];
