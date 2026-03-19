import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import TrainersSection from "@/app/components/TrainersSection";
import PricingSection from "@/app/components/PricingSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
