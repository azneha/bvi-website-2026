import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BookOpenAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden" data-testid="book-animation">
      {/* Left page */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(135deg, #0B2545 0%, #134074 50%, #0B2545 100%)",
          transformOrigin: "right center",
          boxShadow: "inset -20px 0 40px rgba(0,0,0,0.3)",
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -90 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      >
        {/* Book spine texture */}
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#0B2545] to-transparent" />
        {/* Page lines */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-20">
          <div className="w-3/4 space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-1 bg-white/30 rounded" style={{ width: `${70 + Math.random() * 30}%` }} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right page */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(225deg, #0B2545 0%, #134074 50%, #0B2545 100%)",
          transformOrigin: "left center",
          boxShadow: "inset 20px 0 40px rgba(0,0,0,0.3)",
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 90 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      >
        {/* Book spine texture */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#0B2545] to-transparent" />
        {/* BVI Logo */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              BVI
            </h1>
            <p className="text-sm md:text-base mt-2 opacity-80">Since 1997</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Center spine glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full"
        style={{
          background: "linear-gradient(to bottom, #8ECAE6, #028090, #8ECAE6)",
          boxShadow: "0 0 20px rgba(142, 202, 230, 0.5)",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </div>
  );
};

export default BookOpenAnimation;
