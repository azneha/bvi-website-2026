import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/919811810364?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20the%20courses%20at%20Bright%20Vision%20Infotech.",
    color: "#25D366",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA==",
    color: "#E4405F",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://in.linkedin.com/company/brightvisioninfotech",
    color: "#0A66C2",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll contact you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="py-20 md:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#028090] font-medium text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B2545] mt-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Contact Us
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 
              className="text-2xl font-bold text-[#0B2545] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#028090]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B2545] mb-1">Phone Numbers</h4>
                  <a 
                    href="tel:01144744746" 
                    className="block text-[#475569] hover:text-[#028090] transition-colors"
                    data-testid="phone-1"
                  >
                    011-44744746
                  </a>
                  <a 
                    href="tel:01123243036" 
                    className="block text-[#475569] hover:text-[#028090] transition-colors"
                    data-testid="phone-2"
                  >
                    011-23243036
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#028090]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B2545] mb-1">Address</h4>
                  <p className="text-[#475569]" data-testid="address">
                    Daryaganj, Opposite SBI Bank,<br />
                    Ansari Road, Delhi
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#028090]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B2545] mb-1">Email</h4>
                  <p className="text-[#475569]">info@brightvisioninfotech.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-[#0B2545] mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`social-${social.name.toLowerCase()}`}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: `${social.color}15` }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gradient-to-br from-[#0B2545] to-[#134074] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8ECAE6]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="font-semibold mb-2 relative z-10">Visit Us</h4>
              <p className="text-sm opacity-80 mb-4 relative z-10">
                Our institute is located in the heart of Daryaganj, easily accessible from all parts of Delhi.
              </p>
              <div className="text-sm relative z-10">
                <span className="opacity-60">Landmark:</span> Opposite SBI Bank, Ansari Road
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 
                className="text-2xl font-bold text-[#0B2545] mb-6"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-[#0B2545] mb-2">Message Sent!</h4>
                  <p className="text-[#475569]">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form space-y-5" data-testid="contact-form">
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-[#E2E8F0] focus:border-[#028090]"
                      data-testid="contact-name-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      type="tel"
                      className="border-[#E2E8F0] focus:border-[#028090]"
                      data-testid="contact-phone-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      type="email"
                      className="border-[#E2E8F0] focus:border-[#028090]"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="border-[#E2E8F0] focus:border-[#028090] resize-none"
                      data-testid="contact-message-input"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit-btn"
                    className="w-full bg-[#028090] hover:bg-[#026d7a] text-white py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
