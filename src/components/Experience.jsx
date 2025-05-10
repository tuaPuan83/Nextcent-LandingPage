import React from "react";
import exp from "../assets/exp.png";

const Experience = () => {
  return (
    <div name="feature" className="w-full bg-white">
      <div className=" grid md:grid-cols-3 max-w-[1240px] mx-auto py-15">
        <div className="mx-auto">
          <img className="max-w-full" src={exp} alt="" />
        </div>
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:col-span-2 md:pr-20">
          <h1 className="text-2xl text-[#4D4D4D] font-bold md:text-5xl">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-[14px]  text-[#89939E] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="py-3 px-6 w-[40%] md:w-[30%] my-4 text-[12px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
