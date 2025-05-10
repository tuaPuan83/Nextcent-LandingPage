import React from "react";
import commu1 from "../assets/commu1.png";
import commu2 from "../assets/commu2.png";
import commu3 from "../assets/commu3.png";

const Community = () => {
  return (
    <div name="service" className="w-screen bg-white">
      <div className="px-2 py-15 max-w-[1240px] mx-auto flex flex-col justify-center items-center w-full h-full text-[14px] text-center">
        <h1 className="text-3xl md:text-5xl mb-3 font-bold text-[#717171]">
          Manage your entire community in a single system
        </h1>
        <p className="text-[#89939E]">Who is Nextcent suitable for?</p>

        <div className="w-full mt-9 grid gap-5 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-md p-7">
            <img src={commu1} alt="" />
            <h2 className="text-3xl text-[#717171] font-bold my-3">
              Membership Organisations
            </h2>
            <p className="text-[#89939E]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-md p-8">
            <img src={commu2} alt="" />
            <h2 className="text-3xl text-[#717171] font-bold my-3">
              National Associations
            </h2>
            <p className="text-[#89939E]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-md p-8">
            <img src={commu3} alt="" />
            <h2 className="text-3xl text-[#717171] font-bold my-3">
              Clubs And Groups
            </h2>
            <p className="text-[#89939E]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
