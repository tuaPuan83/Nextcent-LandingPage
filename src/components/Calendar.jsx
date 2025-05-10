import React from "react";
import calendar from "../assets/calendar.png";

const Calendar = () => {
  return (
    <div className="w-full bg-white">
      <div className=" grid md:grid-cols-3 max-w-[1240px] mx-auto py-15 px-2">
        <div className="mx-auto">
          <img className="max-w-full" src={calendar} alt="" />
        </div>
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:col-span-2 md:pr-20">
          <h1 className="text-2xl text-[#4D4D4D] font-bold md:text-5xl">
            How to design your site footer like we did
          </h1>
          <p className="text-[14px]  text-[#89939E] py-5">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="py-3 px-6 w-[45%] md:w-[30%] my-4 text-[12px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
