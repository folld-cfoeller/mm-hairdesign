import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookButton from "@/components/layout/FloatingBookButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Shop from "@/components/sections/Shop";
import Reviews from "@/components/sections/Reviews";
import Inspirations from "@/components/sections/Inspirations";
import Jobs from "@/components/sections/Jobs";
import Contact from "@/components/sections/Contact";
import Social from "@/components/sections/Social";
import CancellationPolicy from "@/components/sections/CancellationPolicy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Shop />
        <Reviews />
        <Inspirations />
        <Jobs />
        <Contact />
        <Social />
        <CancellationPolicy />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}
