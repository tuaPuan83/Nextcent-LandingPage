import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Demo = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="w-full max-w-[1240px] mx-auto py-15 px-2">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl/snug md:text-7xl/snug mb-5 text-[#263238] font-semibold">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <button
            type="submit"
            className="flex items-center justify-center py-3 px-6 w-[40%] md:w-[20%]"
          >
            Get Demo <IoArrowForward className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
