import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
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
      <>
        {/* 🟡 GLOBAL SEO Helmet */}
        <Helmet>
          <title>FlareonLabs | Spark Your Vision with Us</title>
          <meta
            name="description"
            content="Flareon Labs is a creative digital studio delivering sleek web design, UI/UX, and branding powered by React, Tailwind CSS, and SEO. We also craft social media posters and digital designs that help startups and businesses grow online."
          />
          <meta
            name="keywords"
            content="Flareon Labs, React developer, Tailwind CSS, SEO, UI/UX, Branding, Sri Lanka web design"
          />
          <link rel="canonical" href="https://flareonlabs.com/" />

          {/* Open Graph */}
          <meta property="og:title" content="Flareon Labs | Spark Your Vision with Us" />
          <meta
            property="og:description"
            content="We bring ideas to life with React, Tailwind, and modern SEO strategies."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://flareonlabs.com/" />
          <meta property="og:image" content="https://flareonlabs.com/og-home.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Flareon Labs | React & Tailwind Web Design Studio" />
          <meta
            name="twitter:description"
            content="Flareon Labs builds modern websites with React and Tailwind CSS — optimized for SEO."
          />
          <meta name="twitter:image" content="https://flareonlabs.com/og-home.png" />
        </Helmet>

        <div
          className="min-h-screen flex flex-col relative 
                     bg-gradient-to-b from-yellow-50 to-white 
                     dark:from-zinc-900 dark:to-zinc-950"
        >
          {/* Navbar */}
          <Navbar />

          {/* Main content – all sections */}
          <main className="flex-grow">
            <Home />
            <AboutUs />
            <ServiceNew />
            <Ourworks />
            <Team />
            <Lettalk />
          </main>
        </div>
      </>
    </HelmetProvider>
  );
}

export default App;