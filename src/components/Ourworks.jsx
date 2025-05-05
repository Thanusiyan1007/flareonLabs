import React, { useState } from "react";
import img1 from "../assets/2.jpg";
import shape1 from "../assets/shape.svg";
import logop1 from "../assets/projects/logop1.png";
import wepp1 from "../assets/projects/webp1.png";

const works = [
  {
    title: "Ryzite Logo Redesign",
    category: "Branding & Identity",
    platform: "Adobe Illustrator",
    image: logop1,
    description:
      "Crafted a modern and versatile logo re-design to represent a unique brand identity.",
    link: "https://www.linkedin.com/company/ryzite/posts/?feedView=all",
  },
  {
    title: "kezi Website Redesign",
    category: "Web Design & Development",
    platform: "React & TailwindCSS",
    image: wepp1,
    description: "Kezi Reliable Deliveries, Anytime, Anywhere!",
    link: "https://kezi.netlify.app/",
  },
];

const categories = [
  "Branding & Identity",
  "Web Design & Development",
  "Digital Strategy",
];

const itemsPerPage = 2;

export default function OurWorks() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredWorks = works.filter(
    (work) => work.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);
  const currentWorks = filteredWorks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page
  };

  return (
    <section className="relative bg-white text-black py-12 md:py-20 px-4 sm:px-6" id="ourworks">
      {/* Decorative Shapes - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-y-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Top Shape" className="w-full h-auto" />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Bottom Shape" className="w-full h-auto" />
      </div>

      {/* Heading */}
      <div className="text-center mb-8 max-w-2xl mx-auto relative z-10 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Works</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Explore some of our recent projects that blend creativity, strategy,
          and technology.
        </p>
      </div>

      {/* Category Buttons - Scrollable on mobile */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:justify-center gap-3 sm:gap-4 px-2 sm:px-0 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border font-medium transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white border-yellow-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid - Single column on mobile */}
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto relative z-10 px-2 sm:px-4">
        {currentWorks.map((work, index) => (
          <div
            key={index}
            className="border-2 border-yellow-400 rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row bg-white"
          >
            {/* Image - full width on mobile, fixed width on larger screens */}
            <div className="w-full h-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] sm:h-[200px] md:h-[220px] overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs sm:text-sm text-yellow-600 font-semibold">
                  {work.platform}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-1">{work.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm mt-1 line-clamp-3">
                  {work.description}
                </p>
              </div>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-3 py-1 bg-yellow-500 text-white text-xs sm:text-sm rounded-full hover:bg-yellow-600 w-fit transition"
                >
                  View Work
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - Stacked on mobile */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 relative z-10">
        <div className="flex items-center order-2 sm:order-none">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-200 ease-in-out text-sm sm:text-base"
          >
            &lt; Previous
          </button>

          <div className="mx-4 text-sm sm:text-base text-gray-700">
            <span className="font-medium">
              Page {currentPage} / {totalPages}
            </span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-200 ease-in-out text-sm sm:text-base"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}