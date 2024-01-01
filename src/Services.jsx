import React from "react";
import Appliance from "./assets/appliances.png";
import Repair from "./assets/repair.jpg";

const Services = () => {
  return (
    <div className="w-full h-full bg-gray-300 py-4" id="services">
      <div className="text-4xl">
        <h1 className="text-center text-gray-700">Services</h1>
      </div>
      <div className="md:grid md:grid-cols-2 mx-10 py-10">
        <div className="p-2">
          <div className="bg-blue-950 p-8 py-16 text-white">
            <h1 className="sm:px-32 text-md">ABOUT OUR SERVICES</h1>
            <p className=" py-6 sm:px-32 sm:text-lg">
              At Mr. Utopia, excellence is our standard. With a commitment to
              prompt, reliable service, Will, will expertly diagnose and fix
              appliance issues. Trust us to bring your appliances back to life,
              ensuring a seamless and stress-free experience for you.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={Appliance}
            alt="Appliance Logos"
            className="h-[300px] w-full"
          />
        </div>
        <div className="sm:px-32 sm:my-10">
          <img
            src={Repair}
            alt="Repair boxes"
            className="w-[500px] h-[350px]"
          />
        </div>
        <div className="">
          <div className="sm:py-32 bg-blue-950 p-7 text-white">
            <h1 className="text-xl sm:px-12 pb-8">Dependable Service</h1>
            <p className="sm:px-12 sm:text-lg sm:text-md">
              With a deep understanding of top-tier names, Will brings unmatched
              expertise to every repair, ensuring your appliances receive the
              specialized care they deserve. Trust in Will's advanced
              proficiency for a reliable solution to your appliance needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
