import React from "react";
import mrutopia from "./assets/mr.utopia.png";

const Footer = () => {
  return (
    <div className=" w-full flex justify-center items-center  py-8 bg-black text-white">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <img src={mrutopia} alt="business logo" className="w-[100px] pt-6" />
          <h3 className="uppercase text-2xl font-bold tracking-widest text-center">
            Mr.Utopia
          </h3>
          <p>"We fix it like we own it"</p>
        </div>
        <div className="flex justify-center items-center">
          <p> Phone: 705-424-0327 </p>
        </div>
        <div>
          <p className="text-sm text-center pb-5">
            &copy; {new Date().getFullYear()}
            <br />
            Mr.Utopia Appliance Repair & Created by Ryan Milligan Designs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
