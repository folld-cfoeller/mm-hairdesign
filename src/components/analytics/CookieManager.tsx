"use client";

import { useEffect } from "react";

import * as CookieConsent from "vanilla-cookieconsent";

import { cookieConfig } from "@/config/cookie-config";

import "vanilla-cookieconsent/dist/cookieconsent.css";

function broadcastConsent() {
  const cookie = CookieConsent.getCookie();
  const analyticsGranted = cookie?.categories?.includes("analytics") ?? false;
  window.dispatchEvent(
    new CustomEvent("mm-consent-updated", { detail: { analyticsGranted } }),
  );
}

export default function CookieManager() {
  useEffect(() => {
    CookieConsent.run({
      ...cookieConfig,
      onConsent: broadcastConsent,
      onChange: broadcastConsent,
    });
  }, []);

  return null;
}
