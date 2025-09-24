import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo1 from "../assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on ESC key
  React.useEffect(() => {
    const escHandler = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Services", id: "services" },
    { name: "Our Works", id: "ourworks" },
    { name: "Team", id: "team" },
    { name: "Let’s Talk", id: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className="w-full max-w-[1400px] h-[70px] 
                   bg-white/20 dark:bg-zinc-900/30 
                   backdrop-blur-md border border-white/30 dark:border-zinc-800/50
                   shadow-lg rounded-2xl flex items-center justify-between px-6 md:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Flareon Labs Home">
          <img
            src={logo1}
            alt="Flareon Labs logo"
            className="w-[120px] sm:w-[140px] h-auto"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-20}
                className="relative group text-gray-800 dark:text-white/80 font-medium cursor-pointer hover:text-yellow-500 transition"
                aria-label={`Go to ${item.name} section`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 rounded-full transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-lg bg-transparent hover:bg-white/20 dark:hover:bg-zinc-800/30 transition"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-[80px] w-full px-4 md:hidden"
          role="menu"
        >
          <div
            className="bg-white/30 dark:bg-zinc-900/50 backdrop-blur-xl 
                       border border-white/20 rounded-2xl shadow-xl 
                       flex flex-col items-center gap-4 py-4"
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-gray-900 dark:text-white text-lg font-medium hover:text-yellow-500 transition"
                role="menuitem"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;