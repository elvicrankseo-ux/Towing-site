import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-0">
      <Header />
      <Hero />
      <Services />
      <ServiceAreas />
      <Testimonials />
      <Footer />
      <StickyCall />
    </main>
  );
}
