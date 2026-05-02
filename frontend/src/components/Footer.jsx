import { GraduationCap, Phone, MapPin, Mail, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Results", id: "results" },
    { label: "Contact", id: "contact" },
  ];

  const courses = [
    "NEET Preparation",
    "JEE Preparation",
    "Class 11-12 Science",
    "Class 9-10 Foundation",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#0B2545] text-white relative overflow-hidden">
      {/* Decorative top curve */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60V0C360 40 1080 40 1440 0V60H0Z" fill="#134074" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00C9A7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#028090]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Bright Vision
                </span>
                <span className="text-xs block text-[#00C9A7]">Infotech</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Shaping futures since 1997. Trusted by generations for quality education 
              and expert guidance in academics and competitive exams.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA=="
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-instagram"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E4405F] to-[#F77737] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://in.linkedin.com/company/brightvisioninfotech"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-linkedin"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#0077B5] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    data-testid={`footer-link-${link.id}`}
                    className="text-white/60 hover:text-[#00C9A7] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-6 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-white/60 text-sm">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00C9A7] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/60">
                  <div>011-44744746</div>
                  <div>011-23243036</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00C9A7] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Daryaganj, Opposite SBI Bank, Ansari Road, Delhi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00C9A7] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  info@brightvisioninfotech.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} Bright Vision Infotech. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Established 1997 | Director: S. S. Shadman
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center shadow-lg z-50"
        data-testid="scroll-to-top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
