import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = [
  { bg: "rgba(239, 68, 68, 0.3)", border: "#EF4444" },   // Red
  { bg: "rgba(245, 158, 11, 0.3)", border: "#F59E0B" },  // Yellow/Orange
  { bg: "rgba(0, 201, 167, 0.3)", border: "#00C9A7" },   // Green
  { bg: "rgba(59, 130, 246, 0.3)", border: "#3B82F6" },  // Blue
  { bg: "rgba(139, 92, 246, 0.3)", border: "#8B5CF6" },  // Purple
  { bg: "rgba(236, 72, 153, 0.3)", border: "#EC4899" },  // Pink
];

const CursorFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [showRipple, setShowRipple] = useState(false);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest(".hover-color-change")
      ) {
        setIsHovering(true);
        // Change color randomly
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(randomColor);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e) => {
      setRipplePos({ x: e.clientX, y: e.clientY });
      setShowRipple(true);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
      setTimeout(() => setShowRipple(false), 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className="w-10 h-10 rounded-full transition-colors duration-200"
          style={{
            background: currentColor.bg,
            border: `2px solid ${currentColor.border}`,
            boxShadow: isHovering ? `0 0 30px ${currentColor.border}` : "none",
          }}
        />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      >
        <div
          className="w-4 h-4 rounded-full opacity-50"
          style={{
            background: currentColor.border,
          }}
        />
      </motion.div>

      {/* Click ripple effect */}
      <AnimatePresence>
        {showRipple && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: ripplePos.x,
              top: ripplePos.y,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="w-20 h-20 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                background: `radial-gradient(circle, ${currentColor.border} 0%, transparent 70%)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorFollower;
