import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import AboutMe from "@/components/AboutMe";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <ValueProposition />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <AboutMe />
      <div className="section-divider" />
      <CTABanner />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
