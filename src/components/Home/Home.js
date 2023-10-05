import React from "react";

export default function Home() {
  return (
    <div className="bg-amber-50 flex flex-col md:flex-row justify-around items-center py-10 mt-10 lg:h-[700px]">
      <div className="flex flex-col items-start">
        <img
          className="py-3 px-3"
          src={require("../../assets//Ellipse 46.png")}
          alt="Ellipsw"
        />

        <p className="font-bold text-2xl">Discover the beauty of the Tropics</p>
        <h1 className="font-bold text-7xl my-2">Tropical</h1>

        <h1 className="font-bold text-7xl">Destinations</h1>
        {/* <img
          className="top-0 right-0 h-16 w-16"
          src={require("../../assets//Ellipse 49.png")}
          alt="Ellipse"
        /> */}

        <h1 className="font-semibold text-6xl my-2"> for Students </h1>
        <p className="my-5 text-1.5xl">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae .
        </p>

        <button className="bg-[#F27A44] text-white py-2 px-6 rounded-3xl my-2">
          SIGN UP
        </button>
      </div>
      <div className=" flex justify-center items-center h-[400px] w-[400px]">
        <img
          className=""
          src={require("../../assets/Group 171.png")}
          alt="MainImage"
        />
      </div>
    </div>
  );
}
