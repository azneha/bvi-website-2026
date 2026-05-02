import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "why-us", label: "Why Us" },
  { id: "courses", label: "Courses" },
  { id: "learning", label: "Learning" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm navbar-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
            data-testid="logo-button"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0B2545] flex items-center justify-center group-hover:bg-[#028090] transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Bright Vision
              </span>
              <span className="text-xs block text-[#475569] -mt-1">Infotech</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                data-testid={`nav-${item.id}`}
                className={`bookmark-tab px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#028090] active"
                    : "text-[#475569] hover:text-[#0B2545]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("contact")}
              data-testid="nav-cta-button"
              className="bg-[#028090] hover:bg-[#026d7a] text-white px-6"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0B2545]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E2E8F0] py-4" data-testid="mobile-menu">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  data-testid={`mobile-nav-${item.id}`}
                  className={`px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-[#028090] bg-[#F8FAFC]"
                      : "text-[#475569] hover:text-[#0B2545] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => handleNavClick("contact")}
                  data-testid="mobile-cta-button"
                  className="w-full bg-[#028090] hover:bg-[#026d7a] text-white"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
