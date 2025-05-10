import React from "react";
import cube from "../assets/cube.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import { IoArrowForward } from "react-icons/io5";

const Cube = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="w-full grid md:grid-cols-3 max-w-[1240px] mx-auto py-15 px-2">
        <div className="mx-auto">
          <img src={cube} alt="" className="max-w-full" />
        </div>
        <div className="md:col-span-2 md:p-5">
          <div>
            <p className="text-base">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-[20px] text-[#28CB8B] my-2">Tim Smith</p>
            <p className="text-base text-[#717171]">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="mt-5">
            <div className="w-full flex flex-wrap gap-2 justify-center items-center md:justify-between ">
              <img src={client1} alt="" />
              <img src={client2} alt="" />
              <img src={client3} alt="" />
              <img src={client4} alt="" />
              <img src={client5} alt="" />
              <img src={client6} alt="" />
              <img src={client7} alt="" />
              <div className="mt-4 flex items-center md:justify-center md:mt-0">
                <p className="mr-3 text-[#28CB8B]">Meet all customers</p>
                <div>
                  <IoArrowForward className="text-[#28CB8B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
