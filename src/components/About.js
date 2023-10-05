import React from "react";
import AboutCard from "../Shared/AboutCard";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-10">
      <div>
        <AboutCard avatarNo="1" />
        <AboutCard avatarNo="2" />
        <AboutCard avatarNo="3" />
      </div>
      <div>
              <img
          className=" h-12 w-12"
          src={require("../assets/Ellipse 46.png")}
          alt="Ellipse"
        />

        <h1 className="font-semibold text-4xl"> Adventure</h1>
        <h2 className="text-3xl">for Students.</h2>
        <p className="font-medium my-3">
          Student Tropical Vacation: Relax and Recharge
        </p>
        <ul className="list-disc ml-5 mb-6">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit</li>
          <li>tortor id euismod habitant</li>
          <li> Sed suspendisse id in ultrices</li>
        </ul>
        <button className="bg-[#F27A44] text-white py-1.5 px-6 rounded-3xl my-2">
          Explore More
        </button>
      </div>
    </div>
  );
}
