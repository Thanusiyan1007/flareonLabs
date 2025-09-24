import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import shape1 from "../assets/shape.svg";
import img1 from "../assets/2.jpg";
import img2 from "../assets/11.jpg";

function About_us() {
  // Framer Motion animation variants
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 0.8,
      rotate: 0,
      transition: { duration: 1.5, ease: "circOut" },
    },
  };

  return (
    <section
      id="about-us"
      className="relative py-24 px-6 overflow-hidden 
                 bg-gradient-to-b from-yellow-50 to-white 
                 dark:from-zinc-900 dark:to-zinc-950"
    >
      

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-[180px] md:w-[280px] lg:w-[380px] transform scale-y-[-1] pointer-events-none select-none z-0"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={shape1} alt="Decorative Top Shape" className="w-full h-auto object-contain" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-[180px] md:w-[280px] lg:w-[380px] transform scale-x-[-1] pointer-events-none select-none z-0"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={shape1} alt="Decorative Bottom Shape" className="w-full h-auto object-contain" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About FlareonLabs
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* Left Column - Images */}
          <motion.div className="grid sm:grid-cols-2 gap-6 lg:order-first order-last" variants={container}>
            <motion.div className="pt-24 flex" variants={imageVariants}>
              <img
                src={img1}
                alt="Creative collaboration"
                className="rounded-2xl object-cover shadow-lg hover:shadow-2xl transition duration-300"
              />
            </motion.div>
            <motion.img
              src={img2}
              alt="Team brainstorming"
              className="rounded-2xl object-cover shadow-lg hover:shadow-2xl transition duration-300 sm:ml-0 ml-auto"
              variants={imageVariants}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          {/* Right Column - Text + Stats */}
          <motion.div className="flex flex-col gap-10 lg:items-start items-center" variants={container}>
            
            {/* Purpose Text */}
            <motion.div className="flex flex-col gap-6 text-center lg:text-left" variants={item}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Purpose-Driven Design Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                At FlareonLabs, our purpose is to empower businesses, creators,
                and startups through beautifully designed digital experiences.
                Whether it's an app, a website, or a brand, we bring ideas to
                life using a blend of creativity, user-first thinking, and
                cutting-edge tech.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div className="flex gap-8 sm:gap-14 justify-center lg:justify-start" variants={container}>
              {[
                { value: 2, label: "Years of Digital Creation" },
                { value: 3, label: "Creative Projects" },
                { value: 2, label: "Happy Partners" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statItem}
                  whileHover={{ scale: 1.08 }}
                  className="flex flex-col items-center lg:items-start backdrop-blur-lg 
                             bg-white/30 dark:bg-zinc-900/40 border border-yellow-400/40 
                             rounded-xl px-6 py-4 shadow-md transition"
                >
                  <h4 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                    <CountUp start={0} end={stat.value} duration={3} delay={index * 0.2} />+
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-center lg:text-left">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              className="mt-4 px-6 py-3 rounded-xl font-semibold text-white text-lg 
                         bg-yellow-500 hover:bg-yellow-600 shadow-lg transition duration-300"
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
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