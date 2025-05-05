import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About_us';
import ServiceNew from './components/ServiceNew';
import Ourworks from './components/Ourworks';
import Team from './components/Team';
import Lettalk from './components/Lettalk';
import Loader from './components/Loader'; // Import the Loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay or failure detection
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2s load time or adjust as needed

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader component during loading state
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar - No animation */}
      <div className="flex-grow z-100">
        <Navbar />
      </div>

      {/* Home - Slide In */}
      <div className="flex-grow animate-slide-in-left">
        <Home />
      </div>

      {/* About Us - Slide In with delay */}
      <div className="flex-grow animate-slide-in-left animation-delay-1s">
        <AboutUs />
      </div>

      {/* Services - Slide In with delay */}
      <div className="flex-grow animate-slide-in-left animation-delay-2s">
        <ServiceNew />
      </div>

      {/* Our Works - Slide In with delay */}
      <div className="flex-grow animate-slide-in-left animation-delay-3s">
        <Ourworks />
      </div>

      {/* Team - Slide In with delay */}
      <div className="flex-grow animate-slide-in-left animation-delay-4s">
        <Team />
      </div>

      {/* Contact - Slide In with delay */}
      <div className="flex-grow animate-slide-in-left animation-delay-5s">
        <Lettalk />
      </div>
    </div>
  );
}

export default App;
