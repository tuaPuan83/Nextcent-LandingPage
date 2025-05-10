import React from "react";
import heroImg from "../assets/hero-img.png";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col justify-between bg-[#F5F7FA]"
    >
      <div className=" grid md:grid-cols-3 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:col-span-2">
          <h1 className="text-4xl font-bold md:text-7xl">
            Lessons and insights{" "}
            <span className="text-[#28CB8B]">from 8 years</span>
          </h1>
          <p className="text-[14px]  text-[#89939E] py-5">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="py-3 px-6 w-[35%] md:w-[25%] my-4 text-[12px]">
            Register
          </button>
        </div>
        <div className="mx-auto">
          <img className="max-w-full" src={heroImg} alt="" />
        </div>
      </div>

      <div className="absolute  bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-2 text-[#28CB8B] text-[10px] md:text-[15px]">
          <FaCircle />
          <FaCircle className="opacity-25" />
          <FaCircle className="opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
