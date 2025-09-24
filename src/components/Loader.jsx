// src/components/Loader.js
import React from "react";
import loading from "../assets/loading.png"; // your loader image

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center 
                    bg-gradient-to-b from-yellow-50 to-white 
                    dark:from-zinc-900 dark:to-zinc-950 z-[9999]">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Spinner ring - glass glowing */}
        <div className="absolute w-full h-full rounded-full 
                        border-4 border-yellow-400/60 border-t-transparent 
                        animate-spin shadow-[0_0_20px_rgba(234,179,8,0.6)]"></div>

        {/* Middle glowing circle backdrop */}
        <div className="absolute inset-3 rounded-full bg-white/30 dark:bg-zinc-800/40 
                        backdrop-blur-lg border border-yellow-400/30"></div>

        {/* Loader Logo */}
        <img
          src={loading}
          alt="Loading..."
          className="w-14 h-14 object-contain relative z-10 animate-pulse"
        />
      </div>
    </div>
  );
}

export default Loader;