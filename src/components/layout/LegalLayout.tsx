import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Navbar forceSolid />
      <main className="bg-paper pb-24 pt-40 md:pt-48">
        <Container narrow>
          <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">{title}</h1>
          <span className="hairline mt-6 block w-24" />
          <div className="legal-prose mt-10">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
