import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";

const Client = () => {
  return (
    <div className="w-screen bg-white">
      <div className="px-2 py-15 max-w-[1240px] mx-auto flex flex-col justify-center items-center w-full h-full text-[14px] text-center">
        <h2 className="text-5xl mb-2 font-bold text-[#717171] md:text-6xl">
          Our Clients
        </h2>
        <p className="text-[#89939E] mb-8">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="w-full flex flex-wrap justify-between">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
