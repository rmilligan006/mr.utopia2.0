import React, { useState } from "react";
import mrutopia from "./assets/mr.utopia.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed top-0 z-50 w-full h-[100px] flex justify-between items-center px-4 bg-blue-950 shadow-md shadow-gray-600">
      <div className="flex justify-center items-center">
        <img src={mrutopia} alt="Mr.Utopia Logo" className="flex h-16" />
        <p className="flex font-bold text-white mx-12 sm:text-center font-serif text-lg">
          Mr.Utopia
        </p>
      </div>
      {/*Menu */}
      <ul className="hidden md:flex text-white font-serif font-semibold">
        <Link to="about" smooth={true} duration={500}>
          <li className="ml-10 text-sm uppercase cursor-pointer">About</li>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <li className="ml-10 text-sm uppercase cursor-pointer">Services</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="ml-10 text-sm uppercase cursor-pointer">Contact</li>
        </Link>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 pr-10 text-white">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center transition-all delay-400 duration-300 overflow-hidden"
        }
      >
        <div>
          <img src={mrutopia} alt="logo" style={{ width: "120px" }} />
        </div>
        <li className="py-6 text-4xl uppercase text-white font-mono">
          <Link onClick={handleClick} to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl uppercase text-white font-mono">
          <Link
            onClick={handleClick}
            to="services"
            smooth={true}
            duration={600}
          >
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl uppercase text-white font-mono">
          <Link onClick={handleClick} to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
