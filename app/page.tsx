import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Work />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
