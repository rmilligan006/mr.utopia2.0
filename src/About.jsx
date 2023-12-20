import React from "react";
import Fridge from "./assets/fridge.png";
import Range from "./assets/range2.jpg";

const About = () => {
  return (
    <div className="w-full h-full bg-blue-950" id="about">
      <div className="sm:grid sm:grid-cols-2 mx-14 py-32">
        <div className="">
          <div>
            <h1 className="text-white text-5xl sm:py-6 text-center">
              Will Catt
            </h1>
          </div>
          <div className="text-white">
            <p className="text-2xl px-10 sm:mx-52 py-4">
              Servicing Alliston, Essa, and New Tecumseth
            </p>
          </div>
          <div>
            <p className="text-white text-lg px-10 sm:mx-52">
              Will Catt a seasoned appliance technician with over 17 years of
              expertise. In 2014, he took the reins of Mr.Utopia, bringing a
              wealth of experience to every repair. Known for his dedication and
              skill, Will is your go-to expert for reliable and efficient
              appliance solutions.
            </p>
          </div>
        </div>
        <img src={Fridge} alt="fridge" className="h-[410px] rounded-3xl" />
      </div>
    </div>
  );
};

export default About;
