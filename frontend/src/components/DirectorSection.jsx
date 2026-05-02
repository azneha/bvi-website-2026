import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Star, BookOpen, Users, Sparkles, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

const directorImages = [
  {
    src: "https://customer-assets.emergentagent.com/job_bvi-institute/artifacts/mnddwjxr_WhatsApp%20Image%202026-05-02%20at%2011.30.30%20PM.jpeg",
    caption: "S. S. Shadman - Director",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bvi-institute/artifacts/lvhdekft_WhatsApp%20Image%202026-05-02%20at%2011.32.32%20PM.jpeg",
    caption: "With Distinguished Guests",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bvi-institute/artifacts/l08qaqt2_WhatsApp%20Image%202026-05-02%20at%2011.35.28%20PM.jpeg",
    caption: "Award Ceremony",
  },
];

const achievements = [
  { icon: GraduationCap, label: "PhD in Mathematics", color: "#00C9A7" },
  { icon: Award, label: "Best Teacher Award", color: "#3B82F6" },
  { icon: Star, label: "99/100 Student Scores", color: "#EF4444" },
  { icon: Users, label: "1000+ Selections", color: "#F59E0B" },
];

const DirectorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % directorImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + directorImages.length) % directorImages.length);
  };

  return (
    <section
      id="director"
      ref={ref}
      data-testid="director-section"
      className="py-24 bg-gradient-to-b from-[#0B2545] via-[#134074] to-[#0B2545] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-white/5 rounded-full"
        />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#00C9A7] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#3B82F6] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
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
            <Sparkles className="w-4 h-4" />
            Meet Our Director
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            S. S. Shadman, <span className="text-[#00C9A7]">PhD</span>
          </h2>
          <p className="text-[#8ECAE6] mt-2">PhD in Mathematics | 25+ Years Experience</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Director Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#00C9A7] via-[#3B82F6] to-[#EF4444] p-1">
                <div className="w-full h-full rounded-[1.8rem] bg-[#0B2545] overflow-hidden relative">
                  {/* Image Carousel */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={directorImages[currentImage].src}
                      alt={directorImages[currentImage].caption}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                      data-testid="director-image"
                    />
                  </AnimatePresence>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-center font-medium">
                      {directorImages[currentImage].caption}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                data-testid="prev-image-btn"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
              >
                <ChevronLeft className="w-6 h-6 text-[#0B2545]" />
              </button>
              <button
                onClick={nextImage}
                data-testid="next-image-btn"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
              >
                <ChevronRight className="w-6 h-6 text-[#0B2545]" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {directorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage 
                        ? "bg-[#00C9A7] w-8" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    data-testid={`dot-${index}`}
                  />
                ))}
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#00C9A7]" />
                  <span className="text-sm font-bold text-[#0B2545]">PhD Maths</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#EF4444] to-[#F59E0B] rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white">99/100</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Director Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              PhD in Mathematics & Expert Mentor
            </h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              With a <strong className="text-[#00C9A7]">PhD in Mathematics</strong> and over 25 years of dedicated teaching experience, 
              S. S. Shadman has been shaping the futures of thousands of students in Delhi NCR. His unique teaching 
              methodology has helped students consistently score <strong className="text-[#EF4444]">99/100 in Mathematics</strong>.
            </p>
            <p className="text-[#8ECAE6] leading-relaxed mb-8">
              Specializing in Classes 11-12 and JEE preparation, he is renowned for making complex concepts 
              simple and understandable. His commitment to excellence has resulted in over{" "}
              <strong className="text-[#F59E0B]">1000+ selections</strong> in prestigious engineering and medical colleges across India.
            </p>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all cursor-pointer border border-white/10"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${achievement.color}30` }}
                  >
                    <achievement.icon className="w-6 h-6" style={{ color: achievement.color }} />
                  </div>
                  <span className="text-white text-sm font-medium">{achievement.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
