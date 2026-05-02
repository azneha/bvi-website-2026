import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Star } from "lucide-react";

const floatingElements = [
  { icon: Zap, color: "#00C9A7", position: "top-[20%] left-[8%]", delay: 0 },
  { icon: Target, color: "#028090", position: "top-[35%] right-[12%]", delay: 0.3 },
  { icon: Star, color: "#0B2545", position: "bottom-[30%] left-[5%]", delay: 0.6 },
  { icon: Sparkles, color: "#00C9A7", position: "bottom-[20%] right-[8%]", delay: 0.9 },
];

const HeroSection = ({ onExplore }) => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Curved Background */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E8F8F5] to-[#D0F0EA]" />
        
        {/* Curved dark section */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "50%" }}
        >
          <path
            d="M0 200C0 200 360 0 720 100C1080 200 1440 50 1440 50V400H0V200Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2545" />
              <stop offset="50%" stopColor="#134074" />
              <stop offset="100%" stopColor="#0B2545" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[20%] w-[400px] h-[400px] bg-gradient-to-br from-[#00C9A7]/30 to-[#028090]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-[#028090]/20 to-[#0B2545]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + el.delay, duration: 0.5 }}
          className={`absolute ${el.position} z-20 hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center border border-white/50"
          >
            <el.icon className="w-7 h-7" style={{ color: el.color }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center py-16">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#00C9A7]/30 shadow-lg">
              <span className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#0B2545]">Admissions Open for 2026</span>
              <span className="text-sm">🎓</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 max-w-5xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <span className="text-[#0B2545]">Bright Vision Infotech</span>
            <br />
            <span className="bg-gradient-to-r from-[#00C9A7] via-[#028090] to-[#0B2545] bg-clip-text text-transparent">
              Where Bright Futures Begin
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#475569] mb-10 max-w-2xl leading-relaxed"
          >
            Expert coaching for Classes 9–12, NEET & JEE with highly experienced faculty. 
            Join <span className="text-[#028090] font-semibold">5000+ successful students</span> who shaped their careers with us.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              onClick={onExplore}
              data-testid="hero-explore-btn"
              size="lg"
              className="bg-gradient-to-r from-[#00C9A7] to-[#028090] hover:opacity-90 text-white px-10 py-7 text-lg font-semibold shadow-xl shadow-[#028090]/30 hover:shadow-2xl transition-all duration-300 rounded-2xl group"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#028090] border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    {i === 1 ? "A" : i === 2 ? "R" : i === 3 ? "S" : "P"}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#0B2545] font-medium">5000+ Students</span>
            </div>
            <div className="h-8 w-px bg-[#0B2545]/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <span className="text-sm text-[#0B2545] font-medium">4.9 Rating</span>
            </div>
            <div className="h-8 w-px bg-[#0B2545]/20 hidden sm:block" />
            <div className="text-sm text-[#0B2545] font-medium">
              <span className="text-[#00C9A7] font-bold">25+</span> Years Experience
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
