"use client";

import { useSyncExternalStore } from "react";

import Script from "next/script";
import * as CookieConsent from "vanilla-cookieconsent";

function subscribe(callback: () => void) {
  window.addEventListener("mm-consent-updated", callback);
  return () => window.removeEventListener("mm-consent-updated", callback);
}

function getConsentSnapshot() {
  // Covers returning visitors who already answered the banner in a previous session.
  const cookie = CookieConsent.getCookie();
  return cookie?.categories?.includes("analytics") ?? false;
}

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const consentGranted = useSyncExternalStore(subscribe, getConsentSnapshot, () => false);

  if (!consentGranted || !gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
