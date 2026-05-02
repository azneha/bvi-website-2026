import { BookOpen, Phone, MapPin, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Contact", id: "contact" },
  ];

  const courses = [
    "NEET Preparation",
    "JEE Preparation",
    "Class 11-12 Science",
    "Class 9-10 Foundation",
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/919811810364", color: "#25D366" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA==", color: "#E4405F" },
    { name: "LinkedIn", icon: Linkedin, url: "https://in.linkedin.com/company/brightvisioninfotech", color: "#0A66C2" },
  ];

  return (
    <footer data-testid="footer" className="bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#134074] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#028090]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#8ECAE6]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#028090] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Bright Vision
                </span>
                <span className="text-xs block opacity-70 -mt-1">Infotech</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Shaping futures since 1997. Trusted by generations for quality education 
              and expert guidance in academics and competitive exams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    data-testid={`footer-link-${link.id}`}
                    className="footer-link text-sm text-white/70 hover:text-[#8ECAE6] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-sm text-white/70">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8ECAE6] mt-1 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  <div>011-44744746</div>
                  <div>011-23243036</div>
                  <div>+91-9811810364</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8ECAE6] mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Daryaganj, Opposite SBI Bank, Ansari Road, Delhi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#8ECAE6] mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  info@brightvisioninfotech.com
                </span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {currentYear} Bright Vision Infotech. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Established 1997 | Director: S. S. Shadman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
