import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or replace with your own icons
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import logo1 from '../assets/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Services", id: "services" },
    { name: "Our Works", id: "ourworks" },
    { name: "Team", id: "team" }, // Added Team link
    { name: "Let’s Talk", id: "contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-center px-4 pt-4 bg-transparent">
      <div className="w-full max-w-[1400px] h-[70px] bg-[rgba(36,35,34,0.10)] border border-yellow-500 rounded-[20px] backdrop-blur-[40px] flex items-center justify-between px-6 md:px-8">
        
        {/* Logo */}
        <img src={logo1} alt="Logo" className="w-[120px] sm:w-[140px] h-[61px]" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.id} // Use react-scroll's Link to navigate to the section
              smooth={true} // Enable smooth scroll
              duration={500} // Scroll duration in ms
              offset={-20} // Offset for fixed header (adjust as needed)
              className="group relative text-[#6A281B] text-sm font-medium font-['Poppins'] cursor-pointer inline-block pb-2"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#6A281B] rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="text-[#6A281B]" /> : <Menu className="text-[#6A281B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[80px] w-full px-4">
          <div className="bg-[rgba(36,35,34,0.9)] border border-[#946104] rounded-xl backdrop-blur-[20px] flex flex-col items-center py-4 gap-4 md:hidden">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.id} // Use react-scroll's Link to navigate to the section
                smooth={true} // Enable smooth scroll
                duration={500} // Scroll duration in ms
                offset={-80} // Offset for fixed header (adjust as needed)
                className="text-white text-base font-medium font-['Poppins'] cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
