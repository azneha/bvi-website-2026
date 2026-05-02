import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";
import Marquee from "react-fast-marquee";

const results = [
  { year: "2024", neet: "150+", jee: "80+", boards: "95%" },
  { year: "2023", neet: "140+", jee: "75+", boards: "94%" },
  { year: "2022", neet: "130+", jee: "70+", boards: "93%" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    achievement: "AIR 245 - NEET 2024",
    text: "The guidance I received here was exceptional. The faculty's dedication helped me achieve my dream!",
  },
  {
    name: "Rahul Verma",
    achievement: "IIT Delhi - JEE 2024",
    text: "Best coaching institute for JEE preparation. The problem-solving approach is unmatched.",
  },
  {
    name: "Ananya Singh",
    achievement: "98% - Class 12 CBSE",
    text: "The teachers here made even the most difficult concepts easy to understand.",
  },
  {
    name: "Arjun Patel",
    achievement: "AIR 512 - JEE Advanced",
    text: "Comprehensive study material and regular tests prepared me perfectly for the exam.",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      ref={ref}
      data-testid="results-section"
      className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00C9A7]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#028090]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#028090] font-semibold text-sm tracking-wider uppercase mb-4">
            <Trophy className="w-4 h-4" />
            Our Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Results That Speak
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Our students consistently achieve excellent results in board exams and competitive examinations.
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={result.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-[#E2E8F0] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {result.year}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#475569]">NEET Selections</span>
                  <span className="text-xl font-bold text-[#00C9A7]">{result.neet}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#475569]">JEE Selections</span>
                  <span className="text-xl font-bold text-[#028090]">{result.jee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#475569]">Board Results</span>
                  <span className="text-xl font-bold text-[#0B2545]">{result.boards}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#0B2545] text-center mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Student Success Stories
          </h3>
          <Marquee speed={40} gradient={true} gradientColor="#F8FAFC" gradientWidth={100} pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 mx-4 min-w-[300px] max-w-[350px] shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#028090] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2545]">{testimonial.name}</h4>
                    <p className="text-sm text-[#00C9A7]">{testimonial.achievement}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-[#475569] text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
