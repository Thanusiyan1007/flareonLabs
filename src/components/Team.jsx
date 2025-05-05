import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import shape1 from "../assets/shape.svg";
import member3 from "../assets/jp.png";
import member2 from "../assets/kaju.png";
import member1 from "../assets/Thanu.png";
import member4 from "../assets/Ajiththa.jpg";

const teamMembers = [
  {
    name: "Rayappu Thanusiyan",
    role: "CEO , Founder & UI/UX Designer",
    image: member1,
    linkedin: "https://www.linkedin.com/in/rayapputhanusiyan/",
  },
  {
    name: "Kajurika Sukunakumar",
    role: "CFO , Co-Founder & Designer",
    image: member2,
    linkedin: "https://www.linkedin.com/in/kajurika-sukunakumar/",
  },
  {
    name: "Jeyapiragash Vijayakumar",
    role: "Human Resource Manager",
    image: member3,
    linkedin: "https://www.linkedin.com/in/jeyapiragash-vijayakumar/"
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
    <div className="relative text-gray-900 dark:bg-zinc-950 dark:text-white py-20 px-6 overflow-hidden font-manrope" id="team">
      {/* Decorative Shapes */}
      <div className="absolute bottom-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] pointer-events-none select-none -z-10 animate-fadeInUp">
        <img
          src={shape1}
          alt="Decorative Bottom Shape"
          className="w-full h-auto object-contain transition duration-500 brightness-100 dark:brightness-75 dark:drop-shadow-md"
        />
      </div>
      <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] scale-y-[-1] pointer-events-none select-none -z-10 animate-fadeInUp">
        <img
          src={shape1}
          alt="Decorative Top Shape"
          className="w-full h-auto object-contain transition duration-500 brightness-100 dark:brightness-75 dark:drop-shadow-md"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Our Executive Team
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
          Meet the talented professionals driving innovation at FlareonLabs.
        </p>
      </div>

      {/* Team Cards with Perfectly Fitted Images */}
      <div className="max-w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white border border-yellow-400 dark:bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Image Container - Top-Aligned and Fully Fitted */}
            <div className="w-full aspect-[5/5] mb-2 relative rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
              <img
                src={member.image}
                alt={member.name}
                className="absolute w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-yellow-600 dark:text-yellow-400 mb-4 font-medium">{member.role}</p>
              
              {/* Social Links */}
              <div className="mt-auto flex gap-3">
                <a
                  href={`${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-yellow-50 dark:bg-zinc-800 flex items-center justify-center text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-zinc-700 transition-colors duration-300 border border-yellow-400 dark:border-yellow-500"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;