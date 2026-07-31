import type { Metadata } from "next";

import LegalLayout from "@/components/layout/LegalLayout";
import CookiePreferencesButton from "@/components/analytics/CookiePreferencesButton";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung gemäß DSGVO für ${siteConfig.brand.fullName}.`,
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Datenschutzerklärung für {siteConfig.seo.url.replace("https://", "")}
        <br />
        Stand: Juli 2026
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {siteConfig.brand.fullName}
        <br />
        {siteConfig.legal.managingDirectors.join(" & ")}
        <br />
        {siteConfig.contact.address.street}
        <br />
        {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
        <br />
        Umsatzsteuer-ID: {siteConfig.legal.vatId}
        <br />
        Tel: <a href={siteConfig.contact.phoneLink}>{siteConfig.contact.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln personenbezogene
        Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Diese
        Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir sie nutzen und
        welche Rechte Ihnen zustehen.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird auf Firebase App Hosting betrieben, einem Dienst der Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Besuch unserer Website werden
        automatisch technische Daten verarbeitet, die Ihr Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Aufgerufene URL und HTTP-Statuscode</li>
        <li>Browsertyp und -version</li>
        <li>Betriebssystem</li>
        <li>Referrer-URL</li>
      </ul>
      <p>
        Diese Daten sind technisch notwendig, um Ihnen die Website anzuzeigen sowie Stabilität und
        Sicherheit zu gewährleisten, und werden in Server-Logfiles gespeichert. Eine Zusammenführung
        mit anderen Datenquellen findet nicht statt.
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am störungsfreien
        Betrieb der Website).
        <br />
        Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
      </p>

      <h2>4. Google Analytics 4</h2>
      <p>
        Mit Ihrer Einwilligung nutzen wir Google Analytics 4 (GA4), einen Webanalysedienst der
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. GA4 hilft uns
        anonymisiert zu verstehen, wie Besucher:innen unsere Website nutzen, damit wir unser Angebot
        laufend verbessern können.
      </p>
      <p>Das Tracking wird ausschließlich aktiv, nachdem Sie im Cookie-Banner der Kategorie „Analyse &amp; Reichweite“ zugestimmt haben. Ohne Ihre Einwilligung wird kein GA4-Skript geladen. Dabei werden u. a. folgende Daten verarbeitet:</p>
      <ul>
        <li>Aufgerufene Seiten und Verweildauer</li>
        <li>Ungefährer Standort (aus gekürzter/anonymisierter IP-Adresse ermittelt)</li>
        <li>Gerätekategorie, Browsertyp und Betriebssystem</li>
        <li>Referrer-URL</li>
      </ul>
      <p>
        Ihre IP-Adresse wird vor der Verarbeitung durch Google gekürzt (IP-Anonymisierung). Eine
        Übermittlung an Server der Google LLC in den USA ist dabei nicht ausgeschlossen; Google ist
        unter dem EU-US Data Privacy Framework zertifiziert.
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>
      <p>
        Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder anpassen:
      </p>
      <CookiePreferencesButton />
      <p>
        Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
      </p>

      <h2>5. Terminbuchung über externen Anbieter (GetSylva)</h2>
      <p>
        Für die Online-Terminbuchung werden Sie über einen Link auf die externe Buchungsplattform{" "}
        <a href={siteConfig.booking.url} target="_blank" rel="noopener noreferrer">GetSylva</a>{" "}
        weitergeleitet. Die Buchung erfolgt vollständig außerhalb unserer Website. Dort eingegebene
        Daten (z. B. Name, Telefonnummer, E-Mail-Adresse) werden ausschließlich durch GetSylva
        verarbeitet.
      </p>
      <p>
        Weitere Informationen finden Sie in der Datenschutzerklärung von GetSylva:{" "}
        <a href="https://www.getsylva.de/datenschutz" target="_blank" rel="noopener noreferrer">
          getsylva.de/datenschutz
        </a>
        .
        <br />
        Wir erhalten Ihre Daten nur in dem Umfang, der für die Terminverwaltung erforderlich ist.
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>6. Kontaktaufnahme via WhatsApp</h2>
      <p>
        Auf unserer Website befindet sich ein WhatsApp-Link. Erst wenn Sie diesen aktiv anklicken,
        wird eine Verbindung zu WhatsApp (Meta Platforms Ireland Limited) hergestellt. Dabei können
        folgende Daten an WhatsApp übermittelt werden:
      </p>
      <ul>
        <li>Ihre IP-Adresse</li>
        <li>Geräteinformationen</li>
        <li>Metadaten der Kommunikation</li>
        <li>Ihre Telefonnummer (bei Versand einer Nachricht)</li>
      </ul>
      <p>
        Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp:{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
          whatsapp.com/legal/privacy-policy-eea
        </a>
        .
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives Anklicken).
      </p>

      <h2>7. Eingebettetes Google Maps</h2>
      <p>
        Zur Anfahrtsbeschreibung nutzen wir Google Maps. Die Karte wird nicht automatisch geladen —
        erst wenn Sie aktiv auf „Karte laden“ klicken, wird die Verbindung zu Google-Servern
        hergestellt und personenbezogene Daten (z. B. IP-Adresse, Geräte- und Browserdaten) an Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, übertragen.
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives Anklicken).
      </p>

      <h2>8. Social-Media-Verlinkungen</h2>
      <p>
        Auf unserer Website befinden sich reine Weiterleitungen zu Instagram und Facebook. Es werden
        keine Tracking-Skripte oder eingebetteten Inhalte dieser Anbieter verwendet. Eine
        Datenübertragung erfolgt erst beim aktiven Anklicken eines Icons.
      </p>

      <h2>9. Cookies und lokale Datenspeicherung</h2>
      <p>
        Unsere Cookie-Einwilligungslösung speichert Ihre Auswahl in einem technisch notwendigen
        Cookie (Kategorie „necessary“). Erst nach Ihrer Zustimmung zur Kategorie „Analyse &amp;
        Reichweite“ setzt Google Analytics folgende Cookies:
      </p>
      <ul>
        <li><strong>_ga, _ga_*</strong> — Unterscheidung von Website-Besucher:innen, Speicherdauer bis zu 2 Jahre</li>
        <li><strong>_gid</strong> — Unterscheidung von Website-Besucher:innen, Speicherdauer 24 Stunden</li>
        <li><strong>_gat</strong> — Drosselung der Anfragerate, Speicherdauer 1 Minute</li>
      </ul>
      <p>
        Widerrufen Sie Ihre Einwilligung, werden diese Cookies automatisch gelöscht.
        <br />
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2>10. Ihre Rechte</h2>
      <p>Sie haben uns gegenüber jederzeit folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung, sofern keine gesetzliche Aufbewahrungspflicht besteht (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>11. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
        personenbezogenen Daten zu beschweren. Zuständige Behörde ist:
      </p>
      <p>
        Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)
        <br />
        Postfach 3163, 65021 Wiesbaden
        <br />
        Telefon: +49 611 1408-0
        <br />
        E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de">poststelle@datenschutz.hessen.de</a>
        <br />
        Website: <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">datenschutz.hessen.de</a>
      </p>

      <h2>12. Datensicherheit</h2>
      <p>
        Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten vor
        Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
      </p>

      <h2>13. Aktualität und Änderung</h2>
      <p>Diese Datenschutzerklärung kann aus rechtlichen oder technischen Gründen angepasst werden.</p>
    </LegalLayout>
  );
}
