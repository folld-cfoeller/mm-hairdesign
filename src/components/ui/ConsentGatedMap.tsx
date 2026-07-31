"use client";

import { useSyncExternalStore } from "react";
import { MapPin } from "lucide-react";

const STORAGE_KEY = "mm-maps-allowed";
const CHANGE_EVENT = "mm-maps-consent-changed";

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "1";
}

export default function ConsentGatedMap({ embedSrc, title }: { embedSrc: string; title: string }) {
  const allowed = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (allowed) {
    return (
      <iframe
        src={embedSrc}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[420px] w-full rounded-3xl border-0"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-full min-h-[420px] w-full flex-col items-center justify-center gap-4 rounded-3xl border border-ink/10 bg-white p-8 text-center">
      <MapPin className="text-rose-bright" size={28} />
      <p className="max-w-sm text-sm leading-relaxed text-ink/70">
        Wenn du die Karte lädst, werden personenbezogene Daten an Google übertragen und ggf. Cookies gesetzt. Mehr
        dazu in unserer{" "}
        <a href="/datenschutz" className="font-semibold text-rose underline underline-offset-2">
          Datenschutzerklärung
        </a>
        .
      </p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "1");
          window.dispatchEvent(new Event(CHANGE_EVENT));
        }}
        className="font-display rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-rose-bright"
      >
        Karte laden
      </button>
    </div>
  );
}
