import React from "react";
import Fridge from "./assets/fridge.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-full bg-blue-950" id="about">
      <div className="sm:grid sm:grid-cols-2 mx-14 py-32">
        <div className="">
          <div className="my-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 0.75 }}
              transition={{ duration: 0.75 }}
              className="text-white text-5xl sm:py-6 text-center"
            >
              Will Catt
            </motion.h1>
          </div>
          <div className="my-6">
            <p className="text-white text-sm md:text-lg md:px-10 sm:mx-52">
              Will Catt a seasoned appliance technician with over 17 years of
              expertise. In 2014, he took the reins of Mr.Utopia, bringing a
              wealth of experience to every repair. Known for his dedication and
              skill, Will is your go-to expert for reliable and efficient
              appliance solutions.
            </p>
          </div>
        </div>
        <img
          src={Fridge}
          alt="fridge"
          className="h-[410px] rounded-3xl md:my-10"
        />
      </div>
    </div>
  );
};

export default About;
