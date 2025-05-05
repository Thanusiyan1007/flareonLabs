import React from 'react'
import { Brush, Code, BarChart } from 'lucide-react'
import shape1 from "../assets/shape.svg"

function ServiceNew() {
  const boxClasses = "flex items-center justify-center text-base font-medium py-3 px-2 min-h-[48px] rounded-xl border border-yellow-400 dark:border-yellow-500 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-zinc-800"

  return (
    <div className="relative text-gray-900 dark:bg-zinc-950 dark:text-white py-20 px-6 overflow-hidden font-manrope" id='services'>
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
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
          FlareonLabs empowers your business with beautiful designs, powerful websites, and data-driven strategies.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 sm:px-8">

        {/* Service 1 */}
        <div className="bg-white border border-yellow-400 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <Brush className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Branding & Identity</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We craft distinctive brand identities that reflect your vision and resonate with your target audience.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {['Logo Design', 'Color Strategy', 'Typography Set', 'Brand Guidelines'].map((item, index) => (
              <div key={index} className={boxClasses}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white border border-yellow-400 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <Code className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Web Design & Development</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            From idea to execution, we build fast, responsive websites using modern frameworks like React and Tailwind.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {['UI/UX Design', 'React Dev', 'Tailwind CSS', 'API Integration'].map((item, index) => (
              <div key={index} className={boxClasses}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white border border-yellow-400 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <BarChart className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Digital Strategy</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We help your business grow with smart strategies, data insights, and improvements that lead to real results.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {['Content Creation', 'SM Management', 'Social Ads', 'Consulting Services'].map((item, index) => (
              <div key={index} className={boxClasses}>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceNew
