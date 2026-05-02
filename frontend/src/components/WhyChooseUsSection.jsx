import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Users, Monitor, Target, Award, Lightbulb, Heart, Zap, CheckCircle, XCircle } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "PhD Qualified Faculty",
    description: "Our director holds a PhD in Mathematics. Teachers with 10-20+ years of experience.",
    color: "#00C9A7",
    hoverColor: "#10B981",
  },
  {
    icon: Lightbulb,
    title: "99/100 Student Scores",
    description: "Our students consistently score 99/100 in Mathematics. Proven excellence.",
    color: "#3B82F6",
    hoverColor: "#2563EB",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Small batch sizes ensure individual focus on every student's progress.",
    color: "#EF4444",
    hoverColor: "#DC2626",
  },
  {
    icon: Monitor,
    title: "Technology + Experience",
    description: "Modern tech tools combined with decades of teaching expertise.",
    color: "#F59E0B",
    hoverColor: "#D97706",
  },
  {
    icon: Target,
    title: "Exam Focused Strategy",
    description: "Specialized preparation with proven strategies for NEET & JEE success.",
    color: "#8B5CF6",
    hoverColor: "#7C3AED",
  },
  {
    icon: Award,
    title: "1000+ Selections",
    description: "Consistent track record of excellent results year after year.",
    color: "#EC4899",
    hoverColor: "#DB2777",
  },
];

const comparison = [
  { feature: "PhD Qualified Director", us: true, others: false },
  { feature: "25+ Years Experience", us: true, others: false },
  { feature: "Technology Integration", us: true, others: true },
  { feature: "Experienced Teachers (10-20 yrs)", us: true, others: false },
  { feature: "99/100 Student Scores", us: true, others: false },
  { feature: "Personal Attention", us: true, others: false },
  { feature: "Proven Track Record (1000+ selections)", us: true, others: false },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="why-us"
      ref={ref}
      data-testid="why-choose-us-section"
      className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0FDF4] relative overflow-hidden"
    >
      {/* Colorful background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#00C9A7]/20 to-[#3B82F6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#EF4444]/10 to-[#F59E0B]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#8B5CF6]/5 to-[#EC4899]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#028090] font-semibold text-sm tracking-wider uppercase mb-4">
            <Award className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What Sets Us{" "}
            <span className="bg-gradient-to-r from-[#00C9A7] via-[#3B82F6] to-[#EF4444] bg-clip-text text-transparent">
              Apart
            </span>
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Unlike other institutes that only focus on technology, we combine <strong className="text-[#0B2545]">cutting-edge tech</strong> with{" "}
            <strong className="text-[#0B2545]">decades of teaching experience</strong>.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`feature-card-${index}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              <motion.div 
                className="bg-white rounded-3xl p-6 h-full border-2 shadow-lg transition-all duration-500 relative overflow-hidden"
                style={{ 
                  borderColor: hoveredCard === index ? feature.hoverColor : '#E2E8F0',
                  boxShadow: hoveredCard === index ? `0 20px 40px -12px ${feature.color}40` : undefined
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Hover background gradient */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.hoverColor}05 100%)` }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2 group-hover:text-[#028090] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#0B2545] via-[#134074] to-[#028090] p-6 text-white text-center">
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Bright Vision vs Other Institutes
            </h3>
            <p className="text-white/70 text-sm mt-1">See why we're the preferred choice</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-4 text-center font-semibold">
              <div className="text-[#475569]">Feature</div>
              <div className="text-[#00C9A7]">Bright Vision</div>
              <div className="text-[#EF4444]">Others</div>
            </div>
            {comparison.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="grid grid-cols-3 gap-4 py-3 border-t border-[#E2E8F0] items-center hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="text-[#0B2545] font-medium text-sm">{item.feature}</div>
                <div className="text-center">
                  {item.us ? (
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <CheckCircle className="w-6 h-6 text-[#00C9A7] mx-auto" />
                    </motion.div>
                  ) : (
                    <XCircle className="w-6 h-6 text-[#9CA3AF] mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.others ? (
                    <CheckCircle className="w-6 h-6 text-[#F59E0B] mx-auto" />
                  ) : (
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <XCircle className="w-6 h-6 text-[#EF4444] mx-auto" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
