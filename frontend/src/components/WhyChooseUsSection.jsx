import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, UserCheck, Monitor, Target, Clock } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Our teachers have 10-20+ years of experience in their respective fields, ensuring quality education.",
  },
  {
    icon: Trophy,
    title: "Strong Academic Results",
    description: "Consistently high success rates in board exams and competitive examinations like NEET & JEE.",
  },
  {
    icon: UserCheck,
    title: "Personalized Attention",
    description: "Small batch sizes ensure every student receives individual attention and guidance.",
  },
  {
    icon: Monitor,
    title: "Offline + Online Options",
    description: "Flexible learning modes to suit your convenience - attend classes in-person or online.",
  },
  {
    icon: Target,
    title: "Competitive Exam Expertise",
    description: "Specialized preparation strategies for NEET & JEE with proven track record.",
  },
  {
    icon: Clock,
    title: "25+ Years of Trust",
    description: "Generations of students have achieved their dreams through our dedicated guidance.",
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
      className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#028090]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8ECAE6]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#028090] font-medium text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B2545] mt-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Sets Us Apart
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Discover why thousands of students and parents trust Bright Vision Infotech 
            for quality education and career guidance.
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`feature-card-${index}`}
              className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#028090]/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#028090]/0 to-[#8ECAE6]/0 group-hover:from-[#028090]/5 group-hover:to-[#8ECAE6]/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8ECAE6]/30 to-[#028090]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#028090]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B2545] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
