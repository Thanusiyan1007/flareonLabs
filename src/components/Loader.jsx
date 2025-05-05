// src/components/Loader.js
import React from 'react';
import loading from '../assets/loading.png'; // Your loader image

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent dark:bg-black z-[9999]">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Spinner ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>

        {/* Loader Image (smaller size) */}
        <img
          src={loading}
          alt="Loading..."
          className="w-18 h-18 object-contain z-10"
        />
      </div>
    </div>
  );
}

export default Loader;
