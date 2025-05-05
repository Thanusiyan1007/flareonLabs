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
    <section className="relative bg-white text-black py-20 px-4" id="ourworks">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-y-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Top Shape" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] transform scale-x-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Bottom Shape" className="w-full h-auto" />
      </div>

      {/* Heading */}
      <div className="text-center mb-8 max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Works</h2>
        <p className="text-gray-600 text-lg">
          Explore some of our recent projects that blend creativity, strategy,
          and technology.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 rounded-full border font-medium transition ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white border-yellow-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-7xl mx-auto relative z-10">
        {currentWorks.map((work, index) => (
          <div
            key={index}
            className="border-2 border-yellow-400 rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row bg-white"
          >
            {/* Image - full width on mobile, fixed width on larger screens */}
            <div className="w-full h-[200px] sm:w-[320px] sm:h-[220px] overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content - full width on mobile, flex-1 on larger screens */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <span className="text-sm text-yellow-600 font-semibold">
                  {work.platform}
                </span>
                <h3 className="text-lg font-bold mt-1">{work.title}</h3>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">
                  {work.description}
                </p>
              </div>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-3 py-1 bg-yellow-500 text-white text-sm rounded-full hover:bg-yellow-600 w-fit"
                >
                  View Work
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-200 ease-in-out"
        >
          &lt; Previous
        </button>

        <div className="flex items-center text-sm sm:text-base md:text-lg text-gray-700">
          <span className="font-medium">
            Page {currentPage} / {totalPages}
          </span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-200 ease-in-out"
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
}