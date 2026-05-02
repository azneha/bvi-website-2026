import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, FlaskConical, Atom, Heart, BookOpen, TrendingUp, Target, Award } from "lucide-react";

const courseCategories = [
  {
    title: "Classes 9-10",
    description: "Strong foundation for board exams",
    courses: [
      { name: "Mathematics", icon: Calculator },
      { name: "Science", icon: FlaskConical },
    ],
    color: "#0B2545",
  },
  {
    title: "Classes 11-12",
    description: "Advanced concepts & board preparation",
    courses: [
      { name: "Physics", icon: Atom },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Mathematics", icon: Calculator },
      { name: "Biology", icon: Heart },
      { name: "Accountancy", icon: BookOpen },
      { name: "Economics", icon: TrendingUp },
    ],
    color: "#028090",
  },
  {
    title: "Competitive Exams",
    description: "Expert preparation for entrance tests",
    courses: [
      { name: "NEET Preparation", icon: Target },
      { name: "JEE Preparation", icon: Award },
    ],
    color: "#8ECAE6",
  },
  {
    title: "Certification Courses",
    description: "Skill-based professional programs",
    courses: [
      { name: "Online Programs", icon: BookOpen },
      { name: "Offline Programs", icon: Award },
    ],
    color: "#134074",
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
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#028090] font-medium text-sm tracking-wider uppercase">
            Our Programs
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B2545] mt-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Courses Offered
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Comprehensive curriculum designed to help students excel in academics 
            and competitive examinations.
          </p>
        </motion.div>

        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {courseCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              data-testid={`course-category-${categoryIndex}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Header */}
              <div 
                className="p-6 text-white relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {category.title}
                </h3>
                <p className="text-sm opacity-90 mt-1 relative z-10">{category.description}</p>
              </div>

              {/* Courses List */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={course.name}
                      data-testid={`course-item-${categoryIndex}-${courseIndex}`}
                      className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-transparent hover:border-[#028090]/20 hover:bg-white hover:shadow-md transition-all duration-300 group/item"
                    >
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <course.icon className="w-4 h-4" style={{ color: category.color }} />
                      </div>
                      <span className="text-sm font-medium text-[#0B2545]">{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#475569] mb-4">
            Want to know more about our courses and fees?
          </p>
          <a
            href="#contact"
            data-testid="courses-enquire-link"
            className="inline-flex items-center gap-2 text-[#028090] font-medium hover:underline"
          >
            Get in touch with us
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
