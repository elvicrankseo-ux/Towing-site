import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-0">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Fleet />
      <Services />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  );
}
