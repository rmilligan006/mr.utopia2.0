import React from "react";
import Appliance from "./assets/appliances.png";
import Repair from "./assets/repair.jpg";

const Services = () => {
  return (
    <div className="w-full h-full bg-white my-10 ">
      <div className="text-4xl">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 mx-10 py-20">
        <div>
          <h1 className="sm:px-32 sm:text-2xl">ABOUT OUR SERVICES</h1>
          <p className="sm:px-32 py-10 sm:text-lg">
            "At Mr. Utopia Appliance Repair, excellence is our standard. With a
            commitment to prompt, reliable service, our skilled technicians
            expertly diagnose and fix appliance issues. Trust us to bring your
            appliances back to life, ensuring a seamless and stress-free
            experience for you."
          </p>
        </div>
        <div className="my-10">
          <img
            src={Appliance}
            alt="Appliance Logos"
            className="h-[250px] w-[500px]"
          />
        </div>
        <div className="sm:px-32">
          <img
            src={Repair}
            alt="Repair boxes"
            className="w-[500px] h-[325px]"
          />
        </div>
        <div className="">
          <h1 className="sm:text-2xl">Dependable Service</h1>
          <p className=" sm:py-10 sm:px-10 sm:text-lg">
            At Mr.Utopia we pride ourselves on Will's extensive knowledge of
            leading appliance brands. With a deep understanding of top-tier
            names, Will brings unmatched expertise to every repair, ensuring
            your appliances receive the specialized care they deserve. Trust in
            Will's advanced proficiency for a reliable solution to your
            appliance needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
