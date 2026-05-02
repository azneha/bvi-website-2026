import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00C9A7]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#028090]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#00C9A7] via-[#028090] to-[#0B2545] rounded-[3rem] p-8 aspect-square max-w-md mx-auto">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="text-8xl font-bold mb-4"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      25+
                    </motion.div>
                    <p className="text-xl opacity-90">Years of Excellence</p>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-70">Established 1997</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0B2545]">5000+</div>
                    <div className="text-xs text-[#475569]">Students</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0B2545] to-[#028090] rounded-2xl shadow-xl px-5 py-4"
              >
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Delhi NCR</div>
                    <div className="text-xs opacity-70">Daryaganj</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[#028090] font-semibold text-sm tracking-wider uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              A Legacy of Educational Excellence
            </h2>

            <div className="space-y-4 text-[#475569] leading-relaxed mb-8">
              <p>
                <strong className="text-[#0B2545]">Bright Vision Infotech</strong> was established in{" "}
                <strong className="text-[#0B2545]">1997</strong> with a vision to provide 
                quality education and shape the future of young minds.
              </p>
              <p>
                Under the leadership of <strong className="text-[#0B2545]">Director S. S. Shadman</strong>, 
                we have grown into one of the most trusted coaching institutes in Delhi NCR, 
                helping students achieve their academic goals and excel in competitive examinations.
              </p>
              <p>
                Located at <strong className="text-[#0B2545]">Daryaganj, Opposite SBI Bank, Ansari Road</strong>, 
                we have been serving students for over 25 years, with a proven track record of success.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0]"
              >
                <Calendar className="w-8 h-8 text-[#00C9A7] mb-2" />
                <div className="font-semibold text-[#0B2545]">Est. 1997</div>
                <div className="text-sm text-[#475569]">Trusted Legacy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0]"
              >
                <Award className="w-8 h-8 text-[#028090] mb-2" />
                <div className="font-semibold text-[#0B2545]">1000+</div>
                <div className="text-sm text-[#475569]">Selections</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
