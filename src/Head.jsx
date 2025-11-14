import React from "react";
import { motion } from "framer-motion";
import Range from "./assets/hood.png";
import mrutopia from "./assets/mr.utopia.png";

const Head = () => {
  return (
    <header
      id="head"
      className="w-full h-screen relative flex items-center justify-center"
    >
      {/* Background */}
      <img
        src={Range}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <motion.img
          src={mrutopia}
          alt="Mr.Utopia Logo"
          className="w-48 md:w-64 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-6xl font-heading text-gray-200 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Mr.Utopia
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-xl md:text-3xl font-sans text-gray-200 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Friendly and reliable service established in 1995
        </motion.h2>

        {/* Tagline */}
        <motion.h3
          className="text-lg md:text-2xl font-accent text-gray-200 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          "We fix it like we own it!"
        </motion.h3>
      </div>
    </header>
  );
};

export default Head;
