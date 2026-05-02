import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, BookOpen, Users, Sparkles } from "lucide-react";

const achievements = [
  { icon: Award, label: "Mathematics Expert", color: "#00C9A7" },
  { icon: Star, label: "Best Teacher Award", color: "#028090" },
  { icon: BookOpen, label: "JEE Specialist", color: "#0B2545" },
  { icon: Users, label: "1000+ Selections", color: "#00C9A7" },
];

const DirectorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#028090] rounded-full animate-pulse" />
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
            S. S. Shadman
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Director Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#00C9A7] via-[#028090] to-[#00C9A7] p-1">
                <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-br from-[#0B2545] to-[#134074] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center">
                      <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>SS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">S. S. Shadman</h3>
                    <p className="text-[#8ECAE6]">Founder & Director</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00C9A7]" />
                  <span className="text-sm font-semibold text-[#0B2545]">25+ Years</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#00C9A7] to-[#028090] rounded-2xl shadow-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">Top Educator</span>
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
              Experienced Mathematics Teacher & Mentor
            </h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              With over 25 years of dedicated teaching experience, S. S. Shadman has been shaping 
              the futures of thousands of students in Delhi NCR. Specializing in Mathematics for 
              Classes 11-12 and JEE preparation, he is renowned for his unique teaching methodology 
              that makes complex concepts simple and understandable.
            </p>
            <p className="text-[#8ECAE6] leading-relaxed mb-8">
              His commitment to student success has resulted in over 1000+ selections in prestigious 
              engineering colleges across India. He has received multiple awards for excellence in 
              education and continues to inspire the next generation of achievers.
            </p>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-colors"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <achievement.icon className="w-5 h-5" style={{ color: achievement.color }} />
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
