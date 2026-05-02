import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CoursesSection from "@/components/CoursesSection";
import LearningModeSection from "@/components/LearningModeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookOpenAnimation from "@/components/BookOpenAnimation";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Show content after book animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "why-us", "courses", "learning", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div data-testid="homepage" className="min-h-screen bg-white">
      <BookOpenAnimation onComplete={() => setShowContent(true)} />
      
      {showContent && (
        <>
          <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
          
          <main>
            <HeroSection onExplore={() => scrollToSection("courses")} onContact={() => scrollToSection("contact")} />
            <AboutSection />
            <WhyChooseUsSection />
            <CoursesSection />
            <LearningModeSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          
          <Footer onNavigate={scrollToSection} />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default HomePage;
