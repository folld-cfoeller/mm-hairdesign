"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { TeamMember } from "@/data/team";

export default function TeamModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative grid max-h-[85vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-3xl md:grid-cols-2"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={16} />
            </button>

            <div className="relative h-64 md:h-full">
              <Image src={member.img} alt={member.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col gap-5 p-6 md:p-10">
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase text-white md:text-3xl">{member.name}</h3>
                <p className="font-display mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-bright">
                  {member.role}
                  {member.department ? ` · ${member.department}` : ""}
                </p>
              </div>
              <div className="hairline w-16" />
              <dl className="flex flex-col gap-4">
                {member.questions.map((qa) => (
                  <div key={qa.question}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">{qa.question}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/85">{qa.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
