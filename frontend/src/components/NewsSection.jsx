import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Award, ArrowRight } from "lucide-react";

const newsItems = [
  {
    type: "announcement",
    icon: Bell,
    date: "Jan 15, 2026",
    title: "Admissions Open for 2026-27",
    description: "New batch starting soon for Classes 9-12, NEET & JEE. Limited seats available.",
    color: "#00C9A7",
  },
  {
    type: "result",
    icon: Award,
    date: "Jan 10, 2026",
    title: "NEET 2025 Results Announced",
    description: "Congratulations to all our students! 150+ selections in NEET this year.",
    color: "#028090",
  },
  {
    type: "event",
    icon: Calendar,
    date: "Jan 5, 2026",
    title: "Free Demo Classes",
    description: "Register now for free demo classes in Mathematics, Physics & Chemistry.",
    color: "#0B2545",
  },
  {
    type: "announcement",
    icon: Bell,
    date: "Dec 28, 2025",
    title: "Winter Crash Course",
    description: "Intensive preparation program for board exams starting January.",
    color: "#00C9A7",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="news"
      ref={ref}
      data-testid="news-section"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
          <span className="inline-flex items-center gap-2 text-[#028090] font-semibold text-sm tracking-wider uppercase mb-4">
            <Bell className="w-4 h-4" />
            Latest Updates
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            News & Announcements
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#475569] bg-[#F8FAFC] px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#475569] group-hover:text-[#028090] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2 group-hover:text-[#028090] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#0B2545] via-[#028090] to-[#00C9A7] rounded-2xl p-4 overflow-hidden"
        >
          <div className="flex items-center">
            <span className="bg-white text-[#0B2545] px-4 py-2 rounded-xl font-bold text-sm mr-4 flex-shrink-0">
              LIVE
            </span>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <span className="text-white">🎉 Admissions Open for 2026-27 Batch</span>
              <span className="text-white">📚 New Crash Course Starting Soon</span>
              <span className="text-white">🏆 150+ NEET Selections in 2025</span>
              <span className="text-white">⭐ Free Demo Classes Available</span>
              <span className="text-white">🎉 Admissions Open for 2026-27 Batch</span>
              <span className="text-white">📚 New Crash Course Starting Soon</span>
              <span className="text-white">🏆 150+ NEET Selections in 2025</span>
              <span className="text-white">⭐ Free Demo Classes Available</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
