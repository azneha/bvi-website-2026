import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Laptop, RefreshCcw, Check } from "lucide-react";

const learningModes = [
  {
    icon: Building2,
    title: "Classroom Coaching",
    description: "Traditional face-to-face learning with direct interaction with teachers.",
    features: [
      "Direct teacher-student interaction",
      "Peer learning environment",
      "Structured daily schedule",
      "Immediate doubt resolution",
    ],
    color: "#0B2545",
  },
  {
    icon: Laptop,
    title: "Online Classes",
    description: "Learn from anywhere with our interactive online sessions.",
    features: [
      "Flexible timing options",
      "Recorded sessions available",
      "Digital study materials",
      "Live doubt clearing",
    ],
    color: "#028090",
  },
  {
    icon: RefreshCcw,
    title: "Hybrid Learning",
    description: "Best of both worlds - combine online and offline learning.",
    features: [
      "Switch between modes",
      "Personalized schedule",
      "Complete flexibility",
      "Continuous support",
    ],
    color: "#8ECAE6",
  },
];

const LearningModeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="learning"
      ref={ref}
      data-testid="learning-mode-section"
      className="py-20 md:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#028090] font-medium text-sm tracking-wider uppercase">
            Learning Options
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B2545] mt-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Mode of Learning
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Choose the learning format that best fits your lifestyle and preferences.
          </p>
        </motion.div>

        {/* Learning Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              data-testid={`learning-mode-${index}`}
              className="learning-mode-card bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${mode.color}15` }}
              >
                <mode.icon className="w-7 h-7" style={{ color: mode.color }} />
              </div>

              {/* Title & Description */}
              <h3 
                className="text-xl font-bold text-[#0B2545] mb-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {mode.title}
              </h3>
              <p className="text-[#475569] text-sm mb-5">
                {mode.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {mode.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm text-[#475569]"
                  >
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${mode.color}15` }}
                    >
                      <Check className="w-3 h-3" style={{ color: mode.color }} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModeSection;
