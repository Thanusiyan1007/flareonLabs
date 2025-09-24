import React from "react";
import { Brush, Code, BarChart } from "lucide-react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import shape1 from "../assets/shape.svg";

function ServiceNew() {
  const boxClasses =
    "flex items-center justify-center text-sm sm:text-base font-medium py-2 px-3 min-h-[48px] rounded-xl \
     border border-yellow-400/40 text-yellow-700 dark:text-yellow-400 \
     bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm transition";

  return (
    <section
      id="services"
      className="relative text-gray-900 dark:text-white py-20 px-6 overflow-hidden font-manrope \
                 bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-900 dark:to-zinc-950"
    >
      

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
          Our Services
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg">
          FlareonLabs empowers your business with beautiful designs, powerful
          websites, and data-driven strategies.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {/* Service 1 */}
        <article
          className="p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 
                     bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                     border border-yellow-400/40"
        >
          <Brush className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Branding & Identity</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Craft distinctive brand identities that reflect your vision and
            resonate with your audience.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Logo Design", "Color Strategy", "Typography Set", "Brand Guidelines"].map(
              (item, idx) => (
                <div key={idx} className={boxClasses}>
                  {item}
                </div>
              )
            )}
          </div>
        </article>

        {/* Service 2 */}
        <article
          className="p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 
                     bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                     border border-yellow-400/40"
        >
          <Code className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Web Design & Development</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Build fast, responsive websites using modern frameworks like React
            and Tailwind.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["UI/UX Design", "React Dev", "Tailwind CSS", "API Integration"].map(
              (item, idx) => (
                <div key={idx} className={boxClasses}>
                  {item}
                </div>
              )
            )}
          </div>
        </article>

        {/* Service 3 */}
        <article
          className="p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 
                     bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                     border border-yellow-400/40"
        >
          <BarChart className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Digital Strategy</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Grow your business with smart strategies, data insights, and actionable improvements.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Content Creation", "SM Management", "Social Ads", "Consulting Services"].map(
              (item, idx) => (
                <div key={idx} className={boxClasses}>
                  {item}
                </div>
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServiceNew;