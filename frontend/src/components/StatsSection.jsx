import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, Users, Trophy, GraduationCap } from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience", icon: Clock, color: "#00C9A7" },
  { value: 5000, suffix: "+", label: "Students Taught", icon: Users, color: "#028090" },
  { value: 1000, suffix: "+", label: "Selections", icon: Trophy, color: "#0B2545" },
  { value: 20, prefix: "10-", label: "Years Faculty Exp", icon: GraduationCap, color: "#00C9A7" },
];

const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="relative py-20 -mt-32 z-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 p-8 md:p-12 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00C9A7]/20 to-[#028090]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#0B2545]/10 to-[#028090]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </motion.div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#0B2545] to-[#028090] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-sm text-[#475569] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
