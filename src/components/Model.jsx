import React, { useEffect } from "react";
import portfolios from "../assets/data/portfolioData";

const Model = ({ activeId, setShowModel }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  if (!portfolio) return null;

  // Escape key closes modal for accessibility
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setShowModel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowModel]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm 
                 flex items-center justify-center px-4"
      aria-hidden="false"
      role="dialog"
      aria-labelledby="portfolio-title"
      aria-modal="true"
    >
      <div
        className="w-full max-w-[550px] max-h-[90vh] 
                   bg-white/30 dark:bg-zinc-900/40 
                   backdrop-blur-lg rounded-2xl 
                   border border-yellow-400/30 
                   shadow-2xl relative p-6 flex flex-col animate-fadeInUp"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-2xl font-bold 
                     text-gray-700 dark:text-gray-300 
                     hover:text-yellow-500 transition"
          onClick={() => setShowModel(false)}
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          {/* Project Image */}
          <figure className="mb-4">
            <img
              className="w-full h-[300px] object-cover rounded-xl 
                         border border-yellow-400/30 shadow-md"
              src={portfolio.imgUrl}
              alt={`${portfolio.title} preview`}
            />
          </figure>

          {/* Title */}
          <h2
            id="portfolio-title"
            className="text-2xl font-extrabold text-yellow-600 dark:text-yellow-400 text-center"
          >
            {portfolio.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-center">
            {portfolio.description}
          </p>

          {/* Technologies */}
          {portfolio.technologies && (
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {portfolio.technologies.map((tech, index) => (
                  <li key={index} className="pl-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-center">
          {portfolio.siteUrl ? (
            <a
              href={portfolio.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-6 rounded-lg font-semibold 
                         bg-yellow-500 hover:bg-yellow-600 
                         text-white shadow-lg transition duration-200"
            >
              Visit Project
            </a>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">
              Live project not available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;