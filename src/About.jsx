import React from "react";
import Fridge from "./assets/fridge.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-full bg-blue-950 pb-14" id="about">
      <div className="md:grid md:grid-cols-2 mx-14">
        <div className="py-10">
          <div className="py-20">
            <h1 className="text-white text-3xl sm:py-6 text-center">
              Will Catt
            </h1>
          </div>
          <div className="md:px-24 md:text-md">
            <p className="text-white">
              Will Catt a seasoned appliance technician with over 17 years of
              expertise. In 2014, he took the reins of Mr.Utopia, bringing a
              wealth of experience to every repair. Known for his dedication and
              skill, Will is your go-to expert for reliable and efficient
              appliance solutions.
            </p>
          </div>
        </div>
        <img src={Fridge} alt="fridge" className="h-[500px] w-[500px] my-24" />
      </div>
    </div>
  );
};

export default About;
