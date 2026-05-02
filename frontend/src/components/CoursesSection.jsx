import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, Atom, FlaskConical, Heart, BookOpen, TrendingUp, Target, Award, ArrowRight } from "lucide-react";

const courseCategories = [
  {
    title: "Classes 9-10",
    description: "Strong foundation for board exams",
    courses: ["Mathematics", "Science"],
    icon: Calculator,
    color: "#00C9A7",
    gradient: "from-[#00C9A7] to-[#028090]",
  },
  {
    title: "Classes 11-12",
    description: "Advanced concepts & board preparation",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics"],
    icon: Atom,
    color: "#028090",
    gradient: "from-[#028090] to-[#0B2545]",
  },
  {
    title: "NEET Preparation",
    description: "Medical entrance exam coaching",
    courses: ["Physics", "Chemistry", "Biology"],
    icon: Heart,
    color: "#0B2545",
    gradient: "from-[#0B2545] to-[#134074]",
  },
  {
    title: "JEE Preparation",
    description: "Engineering entrance exam coaching",
    courses: ["Physics", "Chemistry", "Mathematics"],
    icon: Target,
    color: "#00C9A7",
    gradient: "from-[#134074] to-[#00C9A7]",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="courses"
      ref={ref}
      data-testid="courses-section"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00C9A7]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#028090]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#028090] font-semibold text-sm tracking-wider uppercase mb-4">
            <BookOpen className="w-4 h-4" />
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Courses Offered
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Comprehensive curriculum designed to help students excel in academics and competitive examinations.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {courseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              data-testid={`course-category-${index}`}
              className="group"
            >
              <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Courses */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-[#F8FAFC] rounded-xl text-sm font-medium text-[#0B2545] border border-[#E2E8F0] hover:border-[#028090] hover:bg-[#028090]/5 transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-[#028090] font-semibold group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
