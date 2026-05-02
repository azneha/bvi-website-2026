import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "why-us", label: "Results" },
  { id: "learning", label: "Learning" },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-[#0B2545]/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group"
            data-testid="logo-button"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#028090] to-[#0B2545] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#028090]/30 transition-all duration-300 group-hover:scale-105">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#028090] to-[#0B2545] blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-[#0B2545] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Bright Vision
              </span>
              <span className="text-xs block text-[#028090] font-medium -mt-0.5">Infotech</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                data-testid={`nav-${item.id}`}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                  activeSection === item.id
                    ? "text-[#028090]"
                    : "text-[#475569] hover:text-[#0B2545]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#028090] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavClick("contact")}
              data-testid="nav-cta-button"
              className="bg-gradient-to-r from-[#028090] to-[#0B2545] hover:from-[#026d7a] hover:to-[#0a1f3a] text-white px-6 py-5 rounded-xl shadow-lg shadow-[#028090]/20 hover:shadow-xl hover:shadow-[#028090]/30 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Admission Open
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-[#E2E8F0] text-[#0B2545]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden" 
            data-testid="mobile-menu"
          >
            <div className="p-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    data-testid={`mobile-nav-${item.id}`}
                    className={`px-4 py-3 text-left text-sm font-medium transition-all duration-200 rounded-xl ${
                      activeSection === item.id
                        ? "text-[#028090] bg-[#028090]/5"
                        : "text-[#475569] hover:text-[#0B2545] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <Button
                  onClick={() => handleNavClick("contact")}
                  data-testid="mobile-cta-button"
                  className="w-full bg-gradient-to-r from-[#028090] to-[#0B2545] hover:from-[#026d7a] hover:to-[#0a1f3a] text-white rounded-xl py-5"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Admission Open
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
