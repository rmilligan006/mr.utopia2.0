import React, { useState } from "react";
import mrutopia from "./assets/mr.utopia.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuItems = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full h-[65px] bg-blue-950 shadow-md shadow-gray-600 flex justify-between items-center px-6 md:px-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={mrutopia} alt="Mr.Utopia Logo" className="h-16 mr-3" />
        <span className="text-white font-serif font-bold text-lg hidden sm:block">
          Mr.Utopia
        </span>
      </div>

      {/* Desktop Menu */}
     <ul className="hidden md:flex text-white font-sans font-semibold">
  {menuItems.map((item) => (
    <li key={item.to} className="ml-10 text-sm uppercase cursor-pointer hover:text-gray-300 transition-colors">
      <Link to={item.to} smooth={true} duration={500}>
        {item.name}
      </Link>
    </li>
  ))}
</ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden text-white text-2xl cursor-pointer z-50">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-blue-950 bg-opacity-95 backdrop-blur-md flex flex-col justify-center items-center transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img src={mrutopia} alt="logo" className="w-32 mb-10" />
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={600}
            onClick={handleClick}
            className="py-6 text-4xl uppercase text-white font-mono hover:text-gray-300 transition-colors cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
