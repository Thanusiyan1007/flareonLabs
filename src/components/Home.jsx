import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import shape1 from "../assets/shape.svg";
import figmaLogo from "../assets/Figma-logo.svg";
import htmlLogo from "../assets/html-1.svg";
import cssLogo from "../assets/css-3.svg";
import jsLogo from "../assets/javascript-1.svg";
import tailwindLogo from "../assets/tailwind-css-2.svg";
import reactLogo from "../assets/react.svg";

export default function Home({ darkMode }) {
  const logos = [figmaLogo, htmlLogo, cssLogo, jsLogo, tailwindLogo, reactLogo];

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

  const logoItem = {
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
    <section
      id="home"
      className={`relative overflow-hidden min-h-fit pb-20 md:pb-10 flex flex-col items-center px-6 md:px-12 pt-24 md:pt-32 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#ffffff] text-gray-900"
      }`}
    >
      {/* Top-right flipped shape */}
      <motion.div 
        className="absolute top-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] scale-y-[-1] pointer-events-none select-none z-0"
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

      {/* Bottom-left shape */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] pointer-events-none select-none z-0"
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

      {/* Main content */}
      <motion.div 
        className="max-w-3xl text-center z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p 
          className="inline-flex px-4 py-2 text-base border border-yellow-400 dark:border-yellow-300 rounded-full font-pj"
          variants={item}
        >
          Spark Your Vision with Us
        </motion.p>
        
        <motion.h1 
          className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          variants={item}
        >
          Unlocks Creativity with <br />
          <span className="text-yellow-400 dark:text-yellow-300 whitespace-nowrap">
            <Typewriter
              words={["FlareonLabs", "Innovation", "Futuristic Designs"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300 font-inter"
          variants={item}
        >
          Flareon Labs is a creative studio shaping sleek, user-centered digital
          experiences. We bring ideas to life with a modern, futuristic
          approach.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="relative inline-flex mt-10 group"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://near.tl/sm/RgCAiBD7u"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white dark:text-black transition-all duration-200 bg-gray-900 dark:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white"
          >
            Explore Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Tech Logo Grid */}
      <motion.div 
        className="w-full mt-16 z-10 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="w-full max-w-5xl bg-white border border-amber-500 dark:bg-[#1f1f1f] rounded-2xl shadow-lg px-8 py-4 flex flex-wrap justify-center gap-16">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Tech Logo ${index}`}
              className="h-12 sm:h-14 md:h-16 object-contain"
              variants={logoItem}
              initial="hidden"
              animate="visible"
              custom={index}
              transition={{ delay: index * 0.1 + 1 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}