import React from "react";
import portfolios from "../assets/data/portfolioData";

const Model = ({ activeId, setShowModel }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);

  if (!portfolio) return null;

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] bg-headingcolor bg-opacity-40 flex items-center justify-center px-4">
      <div className="w-full max-w-[500px] h-[600px] bg-white rounded-[8px] relative p-5 shadow-lg flex flex-col">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={() => setShowModel(false)}
        >
          &times;
        </button>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <figure className="mb-4">
            <img
              className="w-full h-[300px] object-contain rounded-[8px]"
              src={portfolio.imgUrl}
              alt={portfolio.title}
            />
          </figure>

          <h2 className="text-xl font-bold text-center">{portfolio.title}</h2>
          <p className="text-gray-600 mt-4">{portfolio.description}</p>

          <div className="mt-4">
            <h3 className="text-headingcolor font-semibold">Technologies:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {portfolio.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <a
            href={portfolio.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-headingcolor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] transition duration-200"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Model;
