"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackEvent } from "@/lib/analytics";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={siteConfig.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("book_click", { placement: "floating_button" })}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-rose-bright px-5 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_35px_rgba(245,29,101,0.45)] md:bottom-8 md:right-8"
        >
          <CalendarCheck size={16} />
          <span className="hidden sm:inline">Termin buchen</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
