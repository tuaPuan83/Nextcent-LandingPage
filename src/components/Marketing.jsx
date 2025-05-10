import React from "react";
import streamline from "../assets/streamline.png";
import safeguard from "../assets/safeguard.png";
import member from "../assets/member.png";
import { IoArrowForward } from "react-icons/io5";

const Marketing = () => {
  return (
    <div name="testimonial" className="w-full bg-white">
      <div className="w-full grid md:flex md:flex-col max-w-[1240px] mx-auto py-15 px-2">
        <div className="text-center">
          <h2 className="text-3xl text-[#4D4D4D] font-bold">
            Caring is the new marketing
          </h2>
          <p className="mt-3 text-[14px] text-[#717171] font-light">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>

        {/* Streamline */}
        <div className="mt-6 grid gap-15 md:flex md:flex-wrap md:justify-center">
          <div className="relative flex flex-col justify-center items-center">
            <img src={streamline} alt="" className="max-w-[368px]" />
            <div className="absolute bottom-[-10%] max-w-[317px] text-center bg-[#F5F7FA] rounded-2xl p-3 shadow-sm">
              <p className="text-[#4D4D4D] text-[12px]">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <div className="mt-3 flex justify-center items-center gap-2 text-[#28CB8B]">
                <p>Read More</p>
                <IoArrowForward />
              </div>
            </div>
          </div>

          {/* SafeGuard */}
          <div className="relative flex flex-col justify-center items-center">
            <img src={safeguard} alt="" className="max-w-[368px]" />
            <div className="absolute bottom-[-10%] max-w-[317px] text-center bg-[#F5F7FA] rounded-2xl p-3 shadow-sm">
              <p className="text-[#4D4D4D] text-[12px]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <div className="mt-3 flex justify-center items-center gap-2 text-[#28CB8B]">
                <p>Read More</p>
                <IoArrowForward />
              </div>
            </div>
          </div>

          {/* Member */}
          <div className="relative flex flex-col justify-center items-center">
            <img src={member} alt="" className="max-w-[368px]" />
            <div className="absolute bottom-[-10%] max-w-[317px] text-center bg-[#F5F7FA] rounded-2xl p-3 shadow-sm">
              <p className="text-[#4D4D4D] text-[12px]">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="mt-3 flex justify-center items-center gap-2 text-[#28CB8B]">
                <p>Read More</p>
                <IoArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
