import React from "react";
import Fridge from "./assets/fridge.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-full bg-blue-950 py-20" id="about">
      <div className="md:grid md:grid-cols-2 mx-14">
        <div className="sm:py-32 py-10">
          <div className="">
            <h1 className="text-white text-3xl sm:py-2 sm:px-32">Will Catt</h1>
          </div>
          <div className="md:text-md">
            <p className="text-white sm:px-32 text-xl">
              Will Catt a seasoned appliance technician with over 17 years of
              expertise. In 2014, he took the reins of Mr.Utopia, bringing a
              wealth of experience to every repair. Known for his dedication and
              skill, Will is your go-to expert for reliable and efficient
              appliance solutions.
            </p>
            <p className="text-white sm:px-32 text-xl py-10">
              Servicing Alliston, New Techumseh Essa and surrounding area
            </p>
          </div>
        </div>
        <img
          src={Fridge}
          alt="fridge"
          className="h-[500px] w-[500px] rounded-xl shadow-md shadow-gray-400"
        />
      </div>
    </div>
  );
};

export default About;
