import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
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
      "Crafted a modern and versatile logo redesign to represent a unique brand identity and stand out in competitive markets.",
    link: "https://www.linkedin.com/company/ryzite/posts/?feedView=all",
  },
  {
    title: "Kezi Website Redesign",
    category: "Web Design & Development",
    platform: "React & TailwindCSS",
    image: wepp1,
    description:
      "Developed a sleek and responsive web redesign for Kezi, optimized for reliability, performance, and user experience.",
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
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section
      id="ourworks"
      className="relative py-20 px-4 sm:px-6 
                 bg-gradient-to-b from-yellow-50 to-white dark:from-zinc-900 dark:to-zinc-950 overflow-hidden"
    >
      {/* 🟡 SEO Helmet Tags */}
      <Helmet>
        <title>Our Works | Flareon Labs Portfolio</title>
        <meta
          name="description"
          content="Explore Flareon Labs' portfolio: branding, web design, and development projects built with React, TailwindCSS, and modern digital strategies."
        />
        <link rel="canonical" href="https://flareonlabs.com/works" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Works | Flareon Labs" />
        <meta
          property="og:description"
          content="See selected works by Flareon Labs: sleek React websites, creative branding, and cutting-edge digital strategy projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flareonlabs.com/works" />
        <meta property="og:image" content="https://flareonlabs.com/og-works.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Works | Flareon Labs" />
        <meta
          name="twitter:description"
          content="Dive into our creative projects in branding, React, and Tailwind development."
        />
        <meta name="twitter:image" content="https://flareonlabs.com/og-works.png" />
      </Helmet>

      {/* Decorative Shapes */}
      <div className="hidden sm:block absolute top-0 left-0 w-[180px] md:w-[280px] lg:w-[380px] transform scale-y-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Decorative Top Shape" className="w-full h-auto" />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-[180px] md:w-[280px] lg:w-[380px] transform scale-x-[-1] pointer-events-none select-none z-0 animate-fadeInUp">
        <img src={shape1} alt="Decorative Bottom Shape" className="w-full h-auto" />
      </div>

      {/* Section Heading */}
      <header className="text-center mb-10 relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Our Works
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3 text-base sm:text-lg">
          Explore some of our recent projects that blend creativity, strategy, and technology.
        </p>
      </header>

      {/* Category Buttons */}
      <nav
        aria-label="Portfolio Categories"
        className="relative z-10 mb-10 flex overflow-x-auto sm:justify-center gap-3 sm:gap-4 pb-2 px-2 hide-scrollbar"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 rounded-full font-medium transition whitespace-nowrap backdrop-blur-md
              ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white/40 dark:bg-zinc-800/40 text-gray-700 dark:text-gray-300 border border-yellow-300/40 hover:bg-yellow-100/40"
              }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Works Grid */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto relative z-10 px-2">
        {currentWorks.map((work, index) => (
          <article
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg 
                       bg-white/30 dark:bg-zinc-900/40 backdrop-blur-lg 
                       border border-yellow-400/40 
                       flex flex-col sm:flex-row transition hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="w-full sm:w-[240px] lg:w-[280px] h-[200px] overflow-hidden">
              <img
                src={work.image}
                alt={`${work.title} built with ${work.platform}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wide text-yellow-600 dark:text-yellow-400">
                  {work.platform}
                </span>
                <h3 className="text-lg font-bold mt-1 dark:text-white">
                  {work.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                  {work.description}
                </p>
              </div>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 self-start px-4 py-2 text-sm rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition"
                >
                  View Work
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-10 relative z-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-5 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition text-sm sm:text-base"
        >
          &lt; Prev
        </button>
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-5 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 disabled:opacity-50 transition text-sm sm:text-base"
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
}