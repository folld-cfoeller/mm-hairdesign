"use client";

import * as CookieConsent from "vanilla-cookieconsent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="font-display rounded-full border border-ink/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-rose-bright hover:text-rose-bright"
    >
      Cookie-Einstellungen ändern
    </button>
  );
}
