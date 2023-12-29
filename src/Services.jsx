import React from "react";
import Appliance from "./assets/appliances.png";
import Repair from "./assets/repair.jpg";

const Services = () => {
  return (
    <div className="w-full h-full bg-white my-10" id="services">
      <div className="text-4xl">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="md:grid md:grid-cols-2 mx-10 sm:py-10">
        <div className="my-10  py-10">
          <h1 className="md:text-xl px-10">ABOUT OUR SERVICES</h1>
          <p className=" py-6 px-10 sm:text-lg">
            At Mr. Utopia, excellence is our standard. With a commitment to
            prompt, reliable service, our skilled technicians expertly diagnose
            and fix appliance issues. Trust us to bring your appliances back to
            life, ensuring a seamless and stress-free experience for you.
          </p>
        </div>
        <div className="">
          <img
            src={Appliance}
            alt="Appliance Logos"
            className="h-full w-full"
          />
        </div>
        <div className="sm:px-32 sm:my-10">
          <img
            src={Repair}
            alt="Repair boxes"
            className="w-[500px] h-[500px]"
          />
        </div>
        <div className="sm:py-32">
          <h1 className="text-xl px-10">Dependable Service</h1>
          <p className="py-4 sm:px-10 sm:text-md">
            With a deep understanding of top-tier names, Will brings unmatched
            expertise to every repair, ensuring your appliances receive the
            specialized care they deserve. Trust in Will's advanced proficiency
            for a reliable solution to your appliance needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
