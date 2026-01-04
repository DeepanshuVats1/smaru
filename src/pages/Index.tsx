import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ApprovedByUtilities from "@/components/ApprovedByUtilities";
import OurSolutions from "@/components/OurSolutions";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CertificationSection from "@/components/CertificationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingScrollToTop from "@/components/FloatingScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ApprovedByUtilities />
        <OurSolutions />
        <ProductsSection />
        <WhyChooseUs />
        <CertificationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
      <FloatingScrollToTop />
    </div>
  );
};

export default Index;
