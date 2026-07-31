import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const cookieConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box wide",
      position: "bottom right",
      flipButtons: false,
      equalWeightButtons: false,
    },
    preferencesModal: { layout: "box" },
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [{ name: /^(_ga|_gid|_gat)/ }],
      },
    },
  },

  language: {
    default: "de",
    translations: {
      de: {
        consentModal: {
          title: "Wir respektieren deine Privatsphäre",
          description:
            "Wir nutzen Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten und zu verstehen, wie unsere Seite genutzt wird. Du entscheidest, was du erlaubst.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Nur notwendige",
          showPreferencesBtn: "Einstellungen",
          footer: `
            <a href="/datenschutz">Datenschutzerklärung</a>
            <a href="/impressum">Impressum</a>
          `,
        },
        preferencesModal: {
          title: "Deine Privatsphäre-Einstellungen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Auswahl speichern",
          closeIconLabel: "Schließen",
          sections: [
            {
              title: "Technisch notwendig",
              description:
                "Diese Cookies sind für den sicheren und einwandfreien Betrieb der Website erforderlich und können nicht deaktiviert werden.",
              linkedCategory: "necessary",
            },
            {
              title: "Analyse & Reichweite (Google Analytics)",
              description:
                "Hilft uns anonymisiert zu verstehen, wie Besucher:innen unsere Website nutzen, damit wir unser Angebot in Bad Nauheim laufend verbessern können.",
              linkedCategory: "analytics",
            },
          ],
        },
      },
    },
  },
};
