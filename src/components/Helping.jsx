import React from "react";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

const Helping = () => {
  return (
    <div name="product" className="w-full bg-[#F5F7FA]">
      <div className=" grid md:grid-cols-2 max-w-[1240px] m-auto py-15 px-2 md:items-center">
        <div>
          <h2 className="text-3xl mb-2 md:text-5xl">Helping a local </h2>
          <h2 className="text-3xl mb-2 md:text-5xl text-[#28CB8B]">
            business reinvent itself
          </h2>
          <p className="text-[13px]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="w-full mt-5 md:mt-0">
          <div className="w-full grid gap-5 text-center md:grid-cols-2 md:grid-rows-2 md:gap-2.5 ">
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-3">
              <MdOutlineSupervisorAccount className="text-6xl text-[#28CB8B] md:text-6xl" />
              <div>
                <p className="text-3xl font-bold md:text-2xl">2,245,341</p>
                <p>Members</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-3">
              <TbBrandBooking className="text-6xl text-[#28CB8B] md:text-6xl" />
              <div>
                <p className="text-3xl font-bold md:text-2xl">828,867</p>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-3">
              <FaHandshake className="text-6xl text-[#28CB8B] md:text-6xl" />
              <div>
                <p className="text-3xl font-bold md:text-2xl">46,328</p>
                <p>Clubs</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-3">
              <MdOutlinePayment className="text-6xl text-[#28CB8B] md:text-6xl" />
              <div>
                <p className="text-3xl font-bold md:text-2xl">1,926,436</p>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
