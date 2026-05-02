import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Atom, Heart, Target, ArrowRight, Calculator, FlaskConical, TrendingUp } from "lucide-react";

const tabs = [
  { id: "9-10", label: "9–10", color: "#00C9A7" },
  { id: "11-12", label: "11–12", color: "#3B82F6" },
  { id: "neet", label: "NEET", color: "#EF4444" },
  { id: "jee", label: "JEE", color: "#F59E0B" },
];

const coursesData = {
  "9-10": {
    title: "Foundation Course",
    description: "Build a strong base for future success",
    subjects: ["Mathematics", "Science", "English"],
    features: ["Board Exam Prep", "Concept Building", "Regular Tests"],
    icon: BookOpen,
    gradient: "from-[#00C9A7] to-[#028090]",
    borderColor: "#00C9A7",
  },
  "11-12": {
    title: "Senior Secondary",
    description: "Advanced concepts for board & competitive exams",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics"],
    features: ["CBSE Board", "Practical Labs", "Career Guidance"],
    icon: Atom,
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    borderColor: "#3B82F6",
  },
  "neet": {
    title: "NEET Preparation",
    description: "Medical entrance exam coaching",
    subjects: ["Physics", "Chemistry", "Biology"],
    features: ["NCERT Focus", "Previous Years", "Mock Tests"],
    icon: Heart,
    gradient: "from-[#EF4444] to-[#DC2626]",
    borderColor: "#EF4444",
  },
  "jee": {
    title: "JEE Preparation",
    description: "Engineering entrance exam coaching",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: ["IIT Focus", "Problem Solving", "Test Series"],
    icon: Target,
    gradient: "from-[#F59E0B] to-[#D97706]",
    borderColor: "#F59E0B",
  },
};

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("9-10");
  const [hoveredCard, setHoveredCard] = useState(null);

  const activeData = coursesData[activeTab];
  const ActiveIcon = activeData.icon;

  return (
    <section
      id="courses"
      ref={ref}
      data-testid="courses-section"
      className="py-24 bg-gradient-to-b from-[#020617] via-[#0a1628] to-[#020617] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#00C9A7]/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#3B82F6] font-semibold text-sm tracking-wider uppercase mb-4">
            <BookOpen className="w-4 h-4" />
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Courses{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#00C9A7] to-[#3B82F6] bg-clip-text text-transparent">
              Offered
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
                ${activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/80 bg-white/5 border border-white/10'
                }
              `}
              style={{
                background: activeTab === tab.id 
                  ? `linear-gradient(135deg, ${tab.color}40 0%, ${tab.color}20 100%)`
                  : undefined,
                border: activeTab === tab.id ? `2px solid ${tab.color}` : undefined,
                boxShadow: activeTab === tab.id ? `0 0 30px ${tab.color}40` : undefined,
              }}
              data-testid={`tab-${tab.id}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${tab.color}20 0%, transparent 100%)`,
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Main Course Card */}
            <motion.div
              onMouseEnter={() => setHoveredCard('main')}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div
                className={`
                  relative rounded-3xl p-8 h-full
                  bg-gradient-to-br from-[#0a1628] to-[#020617]
                  border-2 transition-all duration-500
                  ${hoveredCard === 'main' ? 'border-opacity-100' : 'border-opacity-30'}
                `}
                style={{
                  borderColor: activeData.borderColor,
                  boxShadow: hoveredCard === 'main' 
                    ? `0 0 60px ${activeData.borderColor}30, inset 0 0 60px ${activeData.borderColor}10`
                    : `0 0 30px ${activeData.borderColor}15`,
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: `linear-gradient(135deg, ${activeData.borderColor}, transparent)` }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${activeData.borderColor}30 0%, ${activeData.borderColor}10 100%)`,
                      boxShadow: `0 0 30px ${activeData.borderColor}20`
                    }}
                  >
                    <ActiveIcon className="w-10 h-10" style={{ color: activeData.borderColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {activeData.title}
                  </h3>
                  <p className="text-white/60 mb-6">{activeData.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {activeData.features.map((feature, index) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 rounded-xl text-sm font-medium border"
                        style={{
                          borderColor: `${activeData.borderColor}40`,
                          color: activeData.borderColor,
                          background: `${activeData.borderColor}10`,
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-2 text-white font-semibold group/btn"
                    style={{ color: activeData.borderColor }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Subjects Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activeData.subjects.map((subject, index) => {
                const subjectIcons = {
                  "Mathematics": Calculator,
                  "Science": FlaskConical,
                  "Physics": Atom,
                  "Chemistry": FlaskConical,
                  "Biology": Heart,
                  "English": BookOpen,
                  "Accountancy": TrendingUp,
                  "Economics": TrendingUp,
                };
                const SubjectIcon = subjectIcons[subject] || BookOpen;

                return (
                  <motion.div
                    key={subject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onMouseEnter={() => setHoveredCard(subject)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`
                      relative rounded-2xl p-5 cursor-pointer
                      bg-gradient-to-br from-[#0a1628] to-[#020617]
                      border transition-all duration-300
                      ${hoveredCard === subject ? 'border-opacity-100' : 'border-opacity-30'}
                    `}
                    style={{
                      borderColor: activeData.borderColor,
                      boxShadow: hoveredCard === subject 
                        ? `0 0 40px ${activeData.borderColor}30`
                        : `0 0 15px ${activeData.borderColor}10`,
                    }}
                    data-testid={`subject-${subject.toLowerCase()}`}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                      style={{ 
                        background: hoveredCard === subject 
                          ? `linear-gradient(135deg, ${activeData.borderColor}40 0%, ${activeData.borderColor}20 100%)`
                          : `${activeData.borderColor}15`,
                      }}
                    >
                      <SubjectIcon 
                        className="w-6 h-6 transition-colors duration-300" 
                        style={{ color: hoveredCard === subject ? activeData.borderColor : 'rgba(255,255,255,0.5)' }} 
                      />
                    </div>
                    <h4 className={`font-semibold transition-colors duration-300 ${hoveredCard === subject ? 'text-white' : 'text-white/70'}`}>
                      {subject}
                    </h4>
                    
                    {/* Hover glow */}
                    {hoveredCard === subject && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl -z-10"
                        style={{ 
                          background: `radial-gradient(circle at center, ${activeData.borderColor}10 0%, transparent 70%)`,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 mb-4">
            Want to know more about our courses and fees?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#00C9A7] to-[#028090] hover:shadow-lg hover:shadow-[#00C9A7]/30 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
