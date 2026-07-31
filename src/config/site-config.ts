export interface SiteConfig {
  brand: {
    name: string;
    fullName: string;
    legalName: string;
    tagline: string;
    city: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    url: string;
    locale: string;
  };
  analytics: {
    googleAnalyticsId: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    phoneLink: string;
    whatsapp: string;
    whatsappLink: (text?: string) => string;
    address: {
      street: string;
      zip: string;
      city: string;
      country: string;
    };
    mapsEmbedSrc: string;
    mapsLink: string;
  };
  legal: {
    vatId: string;
    supervisoryAuthority: string;
    managingDirectors: string[];
  };
  social: {
    instagram: string;
    facebook: string;
    googleReviewUrl: string;
    googleSearchUrl: string;
  };
  booking: {
    url: string;
    shopUrl: string;
  };
  openingHours: { day: string; hours: string; closed?: boolean }[];
}

// HINWEIS: Alle Werte mit "PLATZHALTER_" sind bewusst Platzhalter.
// Vor dem Livegang durch die echten Kontakt- und Rechtsdaten ersetzen —
// alle Komponenten und Rechtsseiten lesen ausschließlich aus dieser Datei.
export const siteConfig: SiteConfig = {
  brand: {
    name: "M&M Hairdesign",
    fullName: "M&M Hairdesign GmbH & Co. KG",
    legalName: "M&M Hairdesign",
    tagline: "Innovativ. Aufregend. Einfach gut.",
    city: "Bad Nauheim",
  },
  seo: {
    defaultTitle: "M&M Hairdesign | Dein Friseur in Bad Nauheim",
    titleTemplate: "%s | M&M Hairdesign",
    description:
      "M&M Hairdesign in Bad Nauheim — exklusives Hairstyling, Farbtechniken auf hohem Niveau und ein Team aus 12 kreativen Köpfen. Jetzt Termin online buchen.",
    keywords: [
      "Friseur Bad Nauheim",
      "Hairstylist Bad Nauheim",
      "Balayage Bad Nauheim",
      "Friseursalon Bad Nauheim",
      "M&M Hairdesign",
    ],
    url: "https://www.mm-hairdesign.de",
    locale: "de_DE",
  },
  analytics: {
    // Swap this value only — everything else (consent gating, event wiring) already works.
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
  contact: {
    email: "PLATZHALTER_EMAIL",
    phone: "PLATZHALTER_TELEFON_E164",
    phoneDisplay: "PLATZHALTER_TELEFON_ANZEIGE",
    phoneLink: "tel:PLATZHALTER_TELEFON_E164",
    whatsapp: "PLATZHALTER_WHATSAPP_E164",
    whatsappLink: (text?: string) =>
      `https://api.whatsapp.com/send?phone=PLATZHALTER_WHATSAPP_NUMMER${text ? `&text=${encodeURIComponent(text)}` : ""}`,
    address: {
      street: "PLATZHALTER_STRASSE",
      zip: "PLATZHALTER_PLZ",
      city: "Bad Nauheim",
      country: "DE",
    },
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10179.044314271498!2d8.7441345!3d50.3710094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bcfe0b3093de6f%3A0xf08ee07d89224718!2sM%20%26%20M%20Hairdesign%20-%20dein%20Friseur%20in%20Bad%20Nauheim!5e0!3m2!1sde!2sde!4v1700252965486!5m2!1sde!2sde",
    mapsLink: "https://www.google.com/maps/search/M%26M+Hairdesign+Bad+Nauheim",
  },
  legal: {
    vatId: "PLATZHALTER_UST_ID",
    supervisoryAuthority: "PLATZHALTER_AUFSICHTSBEHOERDE",
    managingDirectors: ["PLATZHALTER_INHABER_1", "PLATZHALTER_INHABER_2", "PLATZHALTER_INHABER_3"],
  },
  social: {
    instagram: "https://www.instagram.com/mmhairdesign/",
    facebook: "https://www.facebook.com/MundMHairdesign",
    googleReviewUrl: "https://g.page/r/CRhHIol94I7wEBM/review",
    googleSearchUrl:
      "https://www.google.com/search?q=M+%26+M+Hairdesign+%7C+Dein+Friseur+in+Bad+Nauheim+Rezensionen",
  },
  booking: {
    url: "https://portal.getsylva.de/book/mm-hairdesign",
    shopUrl: "https://paulmitchell.de/?salon=M%26MHairdesignGmbH%26CoKG",
  },
  openingHours: [
    { day: "Montag", hours: "Geschlossen", closed: true },
    { day: "Dienstag", hours: "09:00 – 18:00 Uhr" },
    { day: "Mittwoch", hours: "09:00 – 18:00 Uhr" },
    { day: "Donnerstag", hours: "09:00 – 20:00 Uhr" },
    { day: "Freitag", hours: "09:00 – 18:00 Uhr" },
    { day: "Samstag", hours: "09:00 – 15:00 Uhr" },
    { day: "Sonntag", hours: "Geschlossen", closed: true },
  ],
};
