import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import shape1 from "../assets/shape.svg";
import img1 from "../assets/2.jpg";
import img2 from "../assets/11.jpg";

function About_us() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const shapeVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { 
      opacity: 0.8, 
      rotate: 0,
      transition: { duration: 1.5, ease: "circOut" }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden px-6" id="about-us">
      {/* Decorative Shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-y-[-1] pointer-events-none select-none z-0"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={shape1}
          alt="Decorative Top Shape"
          className="w-full h-auto object-contain transition duration-500 brightness-100 dark:brightness-75 dark:drop-shadow-md"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] pointer-events-none select-none z-0"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={shape1}
          alt="Decorative Bottom Shape"
          className="w-full h-auto object-contain transition duration-500 brightness-100 dark:brightness-75 dark:drop-shadow-md"
        />
      </motion.div>

      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 font-manrope">
            About FlareonLabs
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* Left Column: Images */}
          <motion.div 
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
            variants={container}
          >
            <motion.div 
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
              variants={imageVariants}
            >
              <img
                className="rounded-xl object-cover z-50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                src={img1}
                alt="Creative collaboration"
              />
            </motion.div>
            <motion.img
              className="sm:ml-0 ml-auto rounded-xl object-cover z-50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              src={img2}
              alt="Team brainstorming"
              variants={imageVariants}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          {/* Right Column: Purpose & Stats */}
          <motion.div 
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            variants={container}
          >
            {/* Description */}
            <motion.div 
              className="w-full flex-col justify-center items-start gap-8 flex"
              variants={item}
            >
              <motion.div 
                className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                variants={item}
              >
                <h3 className="text-3xl font-semibold text-gray-900 font-manrope lg:text-start text-center">
                  Purpose-Driven Design Innovation
                </h3>
                <motion.p 
                  className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center"
                  variants={item}
                >
                  At FlareonLabs, our purpose is to empower businesses, creators, and startups through beautifully designed digital experiences. Whether it's an app, a website, or a brand — we bring ideas to life using a blend of creativity, user-first thinking, and cutting-edge tech.
                </motion.p>
              </motion.div>

              {/* Statistics */}
              <motion.div 
                className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
                variants={container}
              >
                {[
                  { value: 2, label: "Years of Digital Creation" },
                  { value: 3, label: "Creative Projects" },
                  { value: 2, label: "Happy Partners" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex-col justify-start items-start inline-flex"
                    variants={statItem}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope">
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={3} 
                        delay={index * 0.2}
                      />+
                    </h4>
                    <p className="text-gray-500 text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              className="sm:w-fit w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg font-medium"
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(234, 179, 8, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About_us;