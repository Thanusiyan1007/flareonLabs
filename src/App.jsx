import React, { useEffect, useState } from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async"; // SEO provider
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/About_us";
import ServiceNew from "./components/ServiceNew";
import Ourworks from "./components/Ourworks";
import Team from "./components/Team";
import Lettalk from "./components/Lettalk";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col relative 
                      bg-gradient-to-b from-yellow-50 to-white 
                      dark:from-zinc-900 dark:to-zinc-950">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Home />
          <AboutUs />
          <ServiceNew />
          <Ourworks />
          <Team />
          <Lettalk />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;