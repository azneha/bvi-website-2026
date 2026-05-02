import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "NEET 2024",
    rating: 5,
    text: "The faculty at Bright Vision Infotech helped me crack NEET in my first attempt. Their personalized attention made all the difference!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Rahul Verma",
    course: "JEE Main 2024",
    rating: 5,
    text: "Best coaching institute for JEE preparation. The teachers explain complex concepts in simple terms. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Ananya Singh",
    course: "Class 12 CBSE",
    rating: 5,
    text: "I scored 95% in my board exams thanks to the dedicated teachers here. They focus on both concepts and exam techniques.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Arjun Patel",
    course: "Class 10 CBSE",
    rating: 5,
    text: "The study materials and test series are excellent. Regular mock tests helped me improve my scores consistently.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Sneha Gupta",
    course: "NEET 2023",
    rating: 5,
    text: "From basics to advanced topics, every concept was covered thoroughly. The doubt clearing sessions were very helpful.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    name: "Vikram Joshi",
    course: "JEE Advanced 2024",
    rating: 5,
    text: "The competitive environment and regular assessments pushed me to perform better. Got into IIT with their guidance!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card mx-4 min-w-[320px] max-w-[380px]" data-testid="testimonial-card">
    <div className="flex items-start gap-3 mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-[#0B2545]">{testimonial.name}</h4>
        <p className="text-sm text-[#028090]">{testimonial.course}</p>
      </div>
      <Quote className="w-8 h-8 text-[#8ECAE6] ml-auto opacity-50" />
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
      ))}
    </div>
    <p className="text-[#475569] text-sm leading-relaxed">"{testimonial.text}"</p>
  </div>
);

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      data-testid="testimonials-section"
      className="py-20 md:py-28 bg-white overflow-hidden"
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
            Student Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B2545] mt-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Our Students Say
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
            Hear from students who achieved their academic dreams with Bright Vision Infotech.
          </p>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-[#F8FAFC] px-6 py-3 rounded-full border border-[#E2E8F0]">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-[#0B2545]">Serving students since 1997</span>
              <span className="text-[#475569] ml-1">• 10,000+ success stories</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#FFFFFF"
          gradientWidth={100}
          pauseOnHover={true}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
