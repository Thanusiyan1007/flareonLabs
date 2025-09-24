import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // ⬅ SEO
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const logoItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };
  const shapeVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 0.8, rotate: 0, transition: { duration: 1.5, ease: "circOut" } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col items-center 
                 px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-10
                 bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-900 dark:to-zinc-950
                 text-gray-900 dark:text-white transition-all duration-300"
    >
      

      {/* Decorative Shapes */}
      <motion.div
        className="absolute bottom-0 left-0 w-[180px] md:w-[280px] lg:w-[380px]
                   pointer-events-none select-none z-0 animate-fadeInUp"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={shape1} alt="Decorative Bottom Shape" className="w-full h-auto object-contain opacity-90" />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-[180px] md:w-[280px] lg:w-[380px]
                   transform -scale-x-100 -scale-y-100
                   pointer-events-none select-none z-0 animate-fadeInUp"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={shape1} alt="Decorative Top Shape" className="w-full h-auto object-contain opacity-90" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-3xl text-center z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          className="inline-flex px-4 py-2 text-base border border-yellow-400 dark:border-yellow-300 rounded-full font-medium"
          variants={item}
        >
          Spark Your Vision with Us
        </motion.p>

        <motion.h1
          className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight"
          variants={item}
        >
          Unlock Creativity with <br />
          <span className="text-yellow-400 dark:text-yellow-300 whitespace-nowrap">
            <Typewriter
              words={["FlareonLabs", "Innovation", "Futuristic Designs"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-7 text-gray-700 dark:text-gray-300 font-inter"
          variants={item}
        >
          Flareon Labs is a creative studio shaping sleek, user-centered digital
          experiences. We bring ideas to life with a modern, futuristic approach.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="relative inline-flex mt-10 group"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="absolute -inset-px rounded-xl blur-lg opacity-70 
                       bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] 
                       transition-all duration-1000 group-hover:opacity-100 
                       group-hover:-inset-1 group-hover:duration-200 animate-tilt"
          />
          <a
            href="#services"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold 
                       text-white dark:text-black bg-gray-900 dark:bg-white rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-gray-900 dark:focus:ring-white transition"
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
        <div
          className="w-full max-w-5xl px-8 py-6 flex flex-wrap justify-center gap-12
                     bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                     border border-yellow-400/40 rounded-2xl shadow-xl"
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Technology Logo ${index}`}
              className="h-12 sm:h-14 md:h-16 object-contain"
              variants={logoItem}
              initial="hidden"
              animate="visible"
              custom={index}
              transition={{ delay: index * 0.1 + 1 }}
              whileHover={{ scale: 1.12 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}