import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

const HeroSection = ({ onExplore, onContact }) => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://static.prod-images.emergentagent.com/jobs/493ad79b-9b59-441a-9b2a-38fce3e87d8f/images/a3540ccfd58db56e1ffe30c5fc3ce1eec9e12a9531b217ff0f249a822a9cfe66.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-[#8ECAE6]/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#028090]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8ECAE6]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B2545]/10 to-[#028090]/10 text-[#0B2545] px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-[#028090]/20"
            >
              <Sparkles className="w-4 h-4 text-[#028090]" />
              <span>Established 1997 • 27+ Years of Excellence</span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-[#0B2545] to-[#134074] bg-clip-text text-transparent">Shaping Futures</span>
              <br />
              <span className="bg-gradient-to-r from-[#028090] to-[#8ECAE6] bg-clip-text text-transparent">Since 1997</span>
            </h1>

            <p className="text-lg text-[#475569] mb-8 max-w-lg leading-relaxed">
              Expert coaching for Classes 9–12, NEET, JEE & Certification Courses. 
              Join thousands of successful students who achieved their dreams with us.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onExplore}
                data-testid="hero-explore-btn"
                size="lg"
                className="bg-gradient-to-r from-[#028090] to-[#026d7a] hover:from-[#026d7a] hover:to-[#025a66] text-white px-8 py-6 text-base group shadow-lg shadow-[#028090]/25 hover:shadow-xl hover:shadow-[#028090]/30 transition-all duration-300"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onContact}
                data-testid="hero-contact-btn"
                size="lg"
                variant="outline"
                className="border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white px-8 py-6 text-base transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-8 mt-12 pt-8 border-t border-[#E2E8F0]"
            >
              <div>
                <div className="text-3xl font-bold text-[#0B2545]">27+</div>
                <div className="text-sm text-[#475569]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0B2545]">10K+</div>
                <div className="text-sm text-[#475569]">Students Taught</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0B2545]">95%</div>
                <div className="text-sm text-[#475569]">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              {/* Animated decorative circles */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-64 h-64 bg-[#8ECAE6] rounded-full blur-3xl" 
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#028090] rounded-full blur-2xl" 
              />
              
              {/* Main visual - Open Book Design */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-2 border border-[#E2E8F0] overflow-hidden">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#0B2545] via-[#134074] to-[#0B2545] rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Book spine effect */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8ECAE6]/50 via-white/20 to-[#8ECAE6]/50 transform -translate-x-1/2" />
                    
                    {/* Left page */}
                    <div className="absolute left-2 top-4 bottom-4 w-[calc(50%-8px)] bg-white/5 rounded-l-lg">
                      <div className="p-4 space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-2 bg-white/10 rounded" style={{ width: `${60 + Math.random() * 35}%` }} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Right page */}
                    <div className="absolute right-2 top-4 bottom-4 w-[calc(50%-8px)] bg-white/5 rounded-r-lg">
                      <div className="p-4 space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-2 bg-white/10 rounded" style={{ width: `${60 + Math.random() * 35}%` }} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Center content */}
                    <div className="text-center text-white relative z-10">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="text-6xl font-bold mb-2 tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>BVI</div>
                        <div className="text-sm opacity-90 font-medium">Bright Vision Infotech</div>
                        <div className="mt-4 pt-4 border-t border-white/20 mx-8">
                          <div className="text-xs opacity-70 tracking-widest uppercase">Excellence in Education</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-[#E2E8F0]"
                >
                  <div className="text-2xl font-bold text-[#028090]">95%</div>
                  <div className="text-xs text-[#475569]">Success Rate</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-[#E2E8F0]"
                >
                  <div className="text-2xl font-bold text-[#0B2545]">10K+</div>
                  <div className="text-xs text-[#475569]">Students</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#0B2545]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#028090] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
