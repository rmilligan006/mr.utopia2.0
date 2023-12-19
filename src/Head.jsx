import React from "react";
import Range from "./assets/hood.png";
import mrutopia from "./assets/mr.utopia.png";

const Head = () => {
  return (
    <div
      id="head"
      className="w-full h-screen relative flex-col items-center justify-center"
    >
      <img
        src={Range}
        alt="background image"
        className="h-full w-full object-cover =z-0"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black/50"></div>
      <div className="absolute top-0 h-full flex justify-center flex-col text-center w-full m-auto">
        <div className="max-w-screen-lg mx-auto pb-6 flex justify-center">
          <img src={mrutopia} alt="company logo" className="" />
        </div>
        <h1 className="text-2xl md:text-5xl tracking-wide font-bold text-white font-bold p-6">
          Mt.Utopia
        </h1>
        <h2 className="text-xl md:text-3xl tracking-wide font-bold text-white p-4">
          Friendly and reliable service established in 1995
        </h2>
        <h3 className="text-lg md:text-2xl tracking-wide font-bold text-white font-serif p-2">
          "We fix it like we own it!"
        </h3>
      </div>
    </div>
  );
};

export default Head;