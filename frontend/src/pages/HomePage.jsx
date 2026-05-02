import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import DirectorSection from "@/components/DirectorSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CoursesSection from "@/components/CoursesSection";
import ResultsSection from "@/components/ResultsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "director", "courses", "why-us", "results", "news", "contact"];
      const scrollPosition = window.scrollY + 150;

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
    <div data-testid="homepage" className="min-h-screen bg-white overflow-x-hidden">
      <CursorFollower />
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onExplore={() => scrollToSection("courses")} />
        <StatsSection />
        <AboutSection />
        <DirectorSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <ResultsSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default HomePage;
