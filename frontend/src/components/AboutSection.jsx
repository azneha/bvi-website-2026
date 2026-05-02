import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="relative">
              {/* Accent border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#028090] rounded-2xl" />
              <img
                src="https://static.prod-images.emergentagent.com/jobs/493ad79b-9b59-441a-9b2a-38fce3e87d8f/images/4269e6e6e055a5aa43a17333b168b175527e346cc3b0524b1a30376d8cdb95b6.png"
                alt="Director S. S. Shadman"
                className="relative w-full rounded-2xl shadow-lg object-cover"
                data-testid="about-image"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0B2545] text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-7"
          >
            <span className="text-[#028090] font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] mt-2 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              A Legacy of Educational Excellence
            </h2>

            <div className="space-y-4 text-[#475569] leading-relaxed">
              <p>
                <strong className="text-[#0B2545]">Bright Vision Infotech</strong> was established in{" "}
                <strong className="text-[#0B2545]">1997</strong> with a vision to provide 
                quality education and shape the future of young minds. Under the 
                leadership of <strong className="text-[#0B2545]">Director S. S. Shadman</strong>, 
                we have grown into one of the most trusted coaching institutes in Delhi.
              </p>
              <p>
                Located at <strong className="text-[#0B2545]">Daryaganj, Opposite SBI Bank, Ansari Road</strong>, 
                we have been serving students for over 25 years, helping them achieve 
                their academic goals and excel in competitive examinations.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#8ECAE6]/30 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0B2545]">Est. 1997</div>
                  <div className="text-sm text-[#475569]">Trusted Legacy</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#8ECAE6]/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0B2545]">S. S. Shadman</div>
                  <div className="text-sm text-[#475569]">Director</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#8ECAE6]/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0B2545]">Generations</div>
                  <div className="text-sm text-[#475569]">Of Students Trust Us</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#8ECAE6]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0B2545]">Daryaganj</div>
                  <div className="text-sm text-[#475569]">Delhi Location</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
