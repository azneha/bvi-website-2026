import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const nodes = [
  { id: "concept", label: "Concept Clarity", angle: 0, description: "Crystal clear understanding of fundamentals" },
  { id: "faculty", label: "Experienced Faculty", angle: 60, description: "PhD qualified teachers with 10-20+ years" },
  { id: "attention", label: "Personal Attention", angle: 120, description: "Small batches for individual focus" },
  { id: "tests", label: "Regular Tests", angle: 180, description: "Weekly assessments to track progress" },
  { id: "doubt", label: "Doubt Solving", angle: 240, description: "Dedicated sessions for clearing doubts" },
  { id: "results", label: "99/100 Results", angle: 300, description: "Students consistently score top marks" },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredNode, setHoveredNode] = useState(null);
  const [centerHovered, setCenterHovered] = useState(false);

  const radius = 200; // Radius for node placement

  return (
    <section
      id="why-us"
      ref={ref}
      data-testid="why-choose-us-section"
      className="py-24 bg-gradient-to-b from-[#020617] via-[#0a1628] to-[#020617] relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 201, 167, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 201, 167, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C9A7]/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#3B82F6]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-[#EF4444]/5 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#00C9A7] font-semibold text-sm tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What Sets Us{" "}
            <span className="bg-gradient-to-r from-[#00C9A7] via-[#3B82F6] to-[#00C9A7] bg-clip-text text-transparent">
              Apart
            </span>
          </h2>
        </motion.div>

        {/* Network Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center min-h-[600px]"
        >
          {/* SVG for connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {nodes.map((node, index) => {
              const angle = (node.angle * Math.PI) / 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = hoveredNode === node.id || centerHovered;
              
              return (
                <g key={node.id}>
                  {/* Connection line */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke={isActive ? "url(#lineGradientActive)" : "url(#lineGradient)"}
                    strokeWidth={isActive ? 3 : 2}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                  {/* Animated pulse on line */}
                  {isActive && (
                    <motion.circle
                      r="4"
                      fill="#00C9A7"
                      initial={{ x: "50%", y: "50%" }}
                      animate={{
                        x: [`calc(50%)`, `calc(50% + ${x}px)`],
                        y: [`calc(50%)`, `calc(50% + ${y}px)`],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    >
                      <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                    </motion.circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center Node - Student Success */}
          <motion.div
            onMouseEnter={() => setCenterHovered(true)}
            onMouseLeave={() => setCenterHovered(false)}
            whileHover={{ scale: 1.1 }}
            className="absolute z-20 cursor-pointer"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className={`
              w-40 h-40 rounded-full 
              bg-gradient-to-br from-[#0a1628] to-[#020617]
              border-2 transition-all duration-500
              flex items-center justify-center text-center
              ${centerHovered 
                ? 'border-[#00C9A7] shadow-[0_0_60px_rgba(0,201,167,0.5)]' 
                : 'border-[#00C9A7]/30 shadow-[0_0_30px_rgba(0,201,167,0.2)]'
              }
            `}>
              <div>
                <div className="text-3xl mb-1">🎯</div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Student
                </div>
                <div className="text-[#00C9A7] font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Success
                </div>
              </div>
            </div>
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#00C9A7]/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ margin: '-10px' }}
            />
          </motion.div>

          {/* Surrounding Nodes */}
          {nodes.map((node, index) => {
            const angle = (node.angle * Math.PI) / 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isHovered = hoveredNode === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute z-10 cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`
                    w-28 h-28 rounded-2xl 
                    bg-gradient-to-br from-[#0a1628] to-[#020617]
                    border transition-all duration-500
                    flex items-center justify-center text-center p-3
                    ${isHovered 
                      ? 'border-[#00C9A7] shadow-[0_0_40px_rgba(0,201,167,0.4)]' 
                      : 'border-[#1e3a5f] shadow-[0_0_20px_rgba(0,201,167,0.1)]'
                    }
                  `}
                >
                  <span className={`text-xs font-semibold transition-colors duration-300 ${isHovered ? 'text-[#00C9A7]' : 'text-white/80'}`}>
                    {node.label}
                  </span>
                </motion.div>

                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
                  >
                    <div className="bg-[#00C9A7] text-[#020617] px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
                      {node.description}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00C9A7] rotate-45" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "25+", label: "Years", color: "#00C9A7" },
            { value: "5000+", label: "Students", color: "#3B82F6" },
            { value: "99/100", label: "Avg Score", color: "#EF4444" },
            { value: "1000+", label: "Selections", color: "#F59E0B" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="text-3xl font-bold" style={{ color: stat.color, fontFamily: 'Outfit, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
