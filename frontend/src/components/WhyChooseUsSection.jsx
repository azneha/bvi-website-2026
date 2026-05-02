import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Monitor, Target, Award, Lightbulb } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Teachers with 10-20+ years of experience ensuring quality education.",
    color: "#00C9A7",
  },
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    description: "Focus on building strong fundamentals and clear understanding.",
    color: "#028090",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Small batch sizes for individual focus on every student.",
    color: "#0B2545",
  },
  {
    icon: Monitor,
    title: "Online + Offline",
    description: "Flexible learning modes to suit your convenience.",
    color: "#00C9A7",
  },
  {
    icon: Target,
    title: "Exam Focused",
    description: "Specialized preparation strategies for NEET & JEE.",
    color: "#028090",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Consistent track record of excellent results and selections.",
    color: "#0B2545",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={ref}
      data-testid="why-choose-us-section"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Curved top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 80V40C360 80 1080 0 1440 40V80H0Z" fill="white" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00C9A7]/5 to-[#028090]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
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
            What Sets Us Apart
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Discover why thousands of students trust Bright Vision Infotech for quality education.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`feature-card-${index}`}
              className="group"
            >
              <div className="bg-white rounded-3xl p-6 h-full border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[#00C9A7]/5 group-hover:to-[#028090]/5 transition-all duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
