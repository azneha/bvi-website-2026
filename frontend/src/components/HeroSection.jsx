import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy, Clock, GraduationCap } from "lucide-react";

const floatingCards = [
  { label: "Explore Courses", icon: BookOpen, delay: 0, position: "top-[15%] left-[5%]" },
  { label: "9th–12th", icon: GraduationCap, delay: 0.2, position: "top-[25%] right-[8%]" },
  { label: "NEET & JEE", icon: Trophy, delay: 0.4, position: "bottom-[35%] left-[3%]" },
  { label: "5000+ Students", icon: Users, delay: 0.6, position: "bottom-[25%] right-[5%]" },
];

const stats = [
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Students Taught", icon: Users },
  { value: "1000+", label: "Selections", icon: Trophy },
  { value: "10-20", label: "Years Faculty Exp", icon: GraduationCap },
];

const HeroSection = ({ onExplore, onContact }) => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E8F4F8] to-[#B8E0EC]" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-96 h-96 bg-[#028090]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[5%] w-[500px] h-[500px] bg-[#8ECAE6]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0B2545]/5 to-[#028090]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-16 h-16 border-2 border-[#028090]/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 w-12 h-12 border-2 border-[#8ECAE6]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-[#028090]/40 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[12%] w-2 h-2 bg-[#0B2545]/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#0B2545] px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-[#028090]/20 shadow-lg shadow-[#028090]/5"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Admissions Open 2026</span>
              </motion.div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <span className="text-[#0B2545]">Bright Vision</span>
                <br />
                <span className="text-[#0B2545]">Infotech</span>
                <br />
                <span className="bg-gradient-to-r from-[#028090] to-[#8ECAE6] bg-clip-text text-transparent">
                  Where Futures Begin
                </span>
              </h1>

              <p className="text-lg text-[#475569] mb-8 max-w-lg leading-relaxed">
                Expert coaching for Classes 9–12, NEET & JEE with experienced faculty. 
                Join 5000+ successful students who shaped their careers with us.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={onContact}
                  data-testid="hero-enquire-btn"
                  size="lg"
                  className="bg-gradient-to-r from-[#028090] to-[#0B2545] hover:from-[#026d7a] hover:to-[#0a1f3a] text-white px-8 py-6 text-base font-semibold shadow-xl shadow-[#028090]/25 hover:shadow-2xl hover:shadow-[#028090]/30 transition-all duration-300 rounded-xl group"
                >
                  Enquire Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={onExplore}
                  data-testid="hero-explore-btn"
                  size="lg"
                  variant="outline"
                  className="bg-white/50 backdrop-blur-sm border-2 border-[#0B2545]/20 text-[#0B2545] hover:bg-white hover:border-[#028090] px-8 py-6 text-base font-semibold transition-all duration-300 rounded-xl"
                >
                  Explore Courses
                </Button>
              </div>

              {/* Quick stats inline */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#028090]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#028090]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0B2545]">25+</div>
                    <div className="text-xs text-[#475569]">Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#028090]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#028090]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0B2545]">5000+</div>
                    <div className="text-xs text-[#475569]">Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#028090]/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-[#028090]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0B2545]">95%</div>
                    <div className="text-xs text-[#475569]">Success</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - 3D Book Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + card.delay, duration: 0.5 }}
                  className={`absolute ${card.position} z-30`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#028090] to-[#0B2545] flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#0B2545] whitespace-nowrap">{card.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* 3D Book Container */}
              <div className="relative w-full max-w-lg aspect-square">
                {/* Book glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#028090]/20 to-[#8ECAE6]/20 rounded-full blur-3xl scale-110" />
                
                {/* Book base shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-[#0B2545]/20 blur-2xl rounded-full" />

                {/* 3D Book Visual */}
                <motion.div
                  animate={{ rotateY: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                  style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                >
                  {/* Book Image with 3D effect */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transform: "rotateX(10deg)" }}
                  >
                    <img
                      src="https://customer-assets.emergentagent.com/job_bvi-institute/artifacts/9qnzh9g3_a-futuristic-and-creative-educational-website-land.jpeg"
                      alt="3D Open Book"
                      className="w-full h-full object-contain drop-shadow-2xl"
                      style={{ 
                        filter: "drop-shadow(0 30px 60px rgba(11, 37, 69, 0.3))",
                      }}
                    />
                  </div>

                  {/* Overlay glassmorphism cards on book */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[15%] bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-white/60 hidden lg:block"
                  >
                    <div className="text-xs font-semibold text-[#028090]">Since 1997</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-[30%] right-[10%] bg-gradient-to-br from-[#028090] to-[#0B2545] text-white px-3 py-2 rounded-lg shadow-lg hidden lg:block"
                  >
                    <div className="text-xs font-bold">NEET & JEE</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[30%] left-[5%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-white/60 hidden lg:block"
                  >
                    <div className="text-lg font-bold text-[#0B2545]">9-12</div>
                    <div className="text-xs text-[#475569]">Classes</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#028090]/10 to-[#8ECAE6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-[#028090]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#475569]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#0B2545]/30 rounded-full flex justify-center bg-white/30 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#028090] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
