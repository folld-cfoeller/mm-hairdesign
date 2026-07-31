import type { Metadata } from "next";

import { montserrat, roboto } from "@/lib/fonts";
import { siteConfig } from "@/config/site-config";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieManager from "@/components/analytics/CookieManager";
import CursorGlow from "@/components/ui/CursorGlow";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.url,
    siteName: siteConfig.brand.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: siteConfig.brand.fullName,
  image: `${siteConfig.seo.url}/icons/android-icon-192x192.png`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  url: siteConfig.seo.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    postalCode: siteConfig.contact.address.zip,
    addressLocality: siteConfig.contact.address.city,
    addressCountry: siteConfig.contact.address.country,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  openingHoursSpecification: siteConfig.openingHours
    .filter((slot) => !slot.closed)
    .map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.day,
      opens: slot.hours.split(/[–-]/)[0]?.trim().replace(" Uhr", ""),
      closes: slot.hours.split(/[–-]/)[1]?.trim().replace(" Uhr", ""),
    })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        {children}
        <div className="grain-overlay" aria-hidden="true" />
        <CursorGlow />
        <CookieManager />
        <GoogleAnalytics gaId={siteConfig.analytics.googleAnalyticsId} />
      </body>
    </html>
  );
}
