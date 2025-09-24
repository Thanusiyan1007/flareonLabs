import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import shape1 from "../assets/shape.svg";
import member3 from "../assets/jp.png";
import member2 from "../assets/kaju.png";
import member1 from "../assets/Thanu.png";
import member4 from "../assets/Ajiththa.jpg";

const teamMembers = [
  {
    name: "Rayappu Thanusiyan",
    role: "CEO, Founder & UI/UX Designer",
    image: member1,
    linkedin: "https://www.linkedin.com/in/rayapputhanusiyan/",
  },
  {
    name: "Kajurika Sukunakumar",
    role: "CFO, Co-Founder & Designer",
    image: member2,
    linkedin: "https://www.linkedin.com/in/kajurika-sukunakumar/",
  },
  {
    name: "Jeyapiragash Vijayakumar",
    role: "Human Resource Manager",
    image: member3,
    linkedin: "https://www.linkedin.com/in/jeyapiragash-vijayakumar/",
  },
  {
    name: "Ajiththa Seyanthirarasa",
    role: "Client Relationship Manager",
    image: member4,
    linkedin: "https://www.linkedin.com/in/ajiththa-seyanthirarasa-9667a6268/",
  },
];

function Team() {
  return (
    <section
      id="team"
      className="relative py-20 px-6 overflow-hidden font-manrope 
                 bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-900 dark:to-zinc-950 dark:text-white"
    >
      {/* 🟡 SEO Helmet */}
      <Helmet>
        <title>Our Executive Team | Flareon Labs</title>
        <meta
          name="description"
          content="Meet the executive team at Flareon Labs – CEO, designers, HR, and client success professionals driving innovation in React, Tailwind, and digital design."
        />
        <link rel="canonical" href="https://flareonlabs.com/team" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Executive Team | Flareon Labs" />
        <meta
          property="og:description"
          content="Discover the talented executives leading Flareon Labs – creative thinkers, UI/UX designers, and client managers driving innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flareonlabs.com/team" />
        <meta property="og:image" content="https://flareonlabs.com/og-team.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Executive Team | Flareon Labs" />
        <meta
          name="twitter:description"
          content="Meet Flareon Labs’ executive team: experts in UI/UX, branding, and digital projects."
        />
        <meta name="twitter:image" content="https://flareonlabs.com/og-team.png" />
      </Helmet>

      {/* Decorative Shapes */}
            <div className="absolute bottom-0 left-0 w-[180px] md:w-[280px] lg:w-[380px] pointer-events-none select-none z-0 animate-fadeInUp">
              <img
                src={shape1}
                alt="Decorative Bottom Shape"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>
            <div className="absolute top-0 right-0 w-[180px] md:w-[280px] lg:w-[380px] transform -scale-x-100 -scale-y-100 \
                            pointer-events-none select-none z-0 animate-fadeInUp">
              <img
                src={shape1}
                alt="Decorative Top Shape"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Our Executive Team
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg">
          Meet the talented professionals driving innovation at FlareonLabs.
        </p>
      </div>

      {/* Team Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex flex-col p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300
                       bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                       border border-yellow-400/40"
          >
            {/* Image */}
            <div className="w-full aspect-square mb-4 relative rounded-xl overflow-hidden">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="absolute w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-600 dark:text-yellow-400 mb-4 text-sm font-medium">
                {member.role}
              </p>

              {/* Social media */}
              <div className="mt-auto flex gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center 
                             bg-white/40 dark:bg-zinc-800/60 
                             text-yellow-600 dark:text-yellow-400 
                             border border-yellow-400/40 
                             hover:bg-yellow-100 dark:hover:bg-zinc-700 transition"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Team;