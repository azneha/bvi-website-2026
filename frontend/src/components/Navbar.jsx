import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "director", label: "Director" },
  { id: "results", label: "Results" },
  { id: "about", label: "About" },
  { id: "news", label: "News" },
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-[#0B2545]/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group"
            data-testid="logo-button"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C9A7] via-[#028090] to-[#0B2545] flex items-center justify-center shadow-lg shadow-[#028090]/30 group-hover:shadow-xl transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-[#0B2545] to-[#028090] bg-clip-text text-transparent" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Bright Vision
              </span>
              <span className="text-xs block text-[#00C9A7] font-semibold -mt-0.5">Infotech</span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-[#00C9A7] to-[#028090] rounded-full" 
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <Button
              onClick={() => handleNavClick("contact")}
              data-testid="nav-cta-button"
              className="bg-gradient-to-r from-[#00C9A7] via-[#028090] to-[#0B2545] hover:opacity-90 text-white px-6 py-5 rounded-2xl shadow-lg shadow-[#028090]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Admission Open
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-[#00C9A7]/10 to-[#028090]/10 text-[#0B2545]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      data-testid={`mobile-nav-${item.id}`}
                      className={`px-4 py-3 text-left text-sm font-medium transition-all duration-200 rounded-xl ${
                        activeSection === item.id
                          ? "text-white bg-gradient-to-r from-[#00C9A7] to-[#028090]"
                          : "text-[#475569] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <Button
                    onClick={() => handleNavClick("contact")}
                    className="w-full bg-gradient-to-r from-[#00C9A7] via-[#028090] to-[#0B2545] text-white rounded-xl py-5"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Admission Open
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
