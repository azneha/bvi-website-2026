import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, MapPin, Mail, Send, Instagram, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const phoneNumbers = ["011-44744746", "011-23243036"];

const AnimatedPhoneNumber = ({ number, delay }) => {
  const [displayNumber, setDisplayNumber] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= number.length) {
          setDisplayNumber(number.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <span className={`font-mono ${isComplete ? "text-[#00C9A7]" : "text-white"}`}>
      {displayNumber}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

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
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="py-24 bg-gradient-to-b from-[#0B2545] via-[#134074] to-[#0B2545] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00C9A7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#028090]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#00C9A7] font-semibold text-sm tracking-wider uppercase mb-4">
            <Phone className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Phone Numbers */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Call Us Directly
              </h3>
              <div className="space-y-4">
                {phoneNumbers.map((number, index) => (
                  <motion.a
                    key={number}
                    href={`tel:${number.replace(/-/g, "")}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#8ECAE6] block">Phone {index + 1}</span>
                      <span className="text-2xl font-bold">
                        <AnimatedPhoneNumber number={number} delay={1000 + index * 500} />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#028090] to-[#0B2545] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-sm text-[#8ECAE6] block mb-1">Address</span>
                  <p className="text-white font-medium">
                    Daryaganj, Opposite SBI Bank,<br />
                    Ansari Road, Delhi
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/brightvisioninfotech?igsh=MTBmeGprNTJ2YmY3bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-instagram"
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E4405F] to-[#F77737] flex items-center justify-center shadow-lg"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </motion.div>
                </a>
                <a
                  href="https://in.linkedin.com/company/brightvisioninfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-linkedin"
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#0077B5] flex items-center justify-center shadow-lg"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#0B2545] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#0B2545] mb-2">Message Sent!</h4>
                  <p className="text-[#475569]">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="rounded-xl border-[#E2E8F0] focus:border-[#028090] py-5"
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
                      className="rounded-xl border-[#E2E8F0] focus:border-[#028090] py-5"
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
                      className="rounded-xl border-[#E2E8F0] focus:border-[#028090] py-5"
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
                      className="rounded-xl border-[#E2E8F0] focus:border-[#028090] resize-none"
                      data-testid="contact-message-input"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit-btn"
                    className="w-full bg-gradient-to-r from-[#00C9A7] to-[#028090] hover:opacity-90 text-white py-6 rounded-xl text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
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
