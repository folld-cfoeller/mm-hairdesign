import type { Metadata } from "next";

import LegalLayout from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung gemäß § 5 TMG — ${siteConfig.brand.fullName}.`,
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Angaben gemäß § 5 TMG
        <br />
        {siteConfig.brand.fullName}
        <br />
        Geschäftsführer:innen: {siteConfig.legal.managingDirectors.join(" & ")}
        <br />
        {siteConfig.contact.address.street}
        <br />
        {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
        <br />
        Umsatzsteuer-ID gemäß § 27a UStG: {siteConfig.legal.vatId}
        <br />
        Tel: <a href={siteConfig.contact.phoneLink}>{siteConfig.contact.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
      </p>

      <h2>Zuständige Aufsichtsbehörde</h2>
      <p>{siteConfig.legal.supervisoryAuthority}</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        . Unsere E-Mail-Adresse finden Sie oben unter „Angaben gemäß § 5 TMG“.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
        Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
        zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
        privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht
        vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet, Inhalte Dritter sind
        entsprechend gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>Werbung ohne Anfrage</h2>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
        hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
        rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </p>
    </LegalLayout>
  );
}
