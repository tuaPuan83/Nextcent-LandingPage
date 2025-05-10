import React from "react";
import whitelogo from "../assets/whitelogo.png";
import {
  LiaInstagram,
  LiaDribbble,
  LiaTwitter,
  LiaYoutube,
} from "react-icons/lia";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer name="footer" className="w-full bg-[#263238]">
      <div className="w-full max-w-[1240px] mx-auto py-15 px-2 md:grid md:grid-cols-3">
        <div className="flex flex-col gap-9 text-[#F5F7FA]">
          <img src={whitelogo} alt="" className="w-[190px]" />
          <div>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-5 text-3xl">
            <LiaInstagram className="p-1 bg-[#89939E] rounded-full" />
            <LiaDribbble className="p-1 bg-[#89939E] rounded-full" />
            <LiaTwitter className="p-1 bg-[#89939E] rounded-full" />
            <LiaYoutube className="p-1 bg-[#89939E] rounded-full" />
          </div>
        </div>

        <div className="mt-10 text-[#F5F7FA] md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:pl-8 gap-2">
          <div>
            <h2 className="text-3xl">Company</h2>
            <ul className="mt-4">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <h2 className="text-3xl">Support</h2>
            <ul className="mt-4">
              <li>
                <a href="">Help center</a>
              </li>
              <li>
                <a href="">Terms of service</a>
              </li>
              <li>
                <a href="">Legal</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Status</a>
              </li>
            </ul>
          </div>

          <div className="w-full mt-15 flex items-center justify-center md:mt-0 md:flex-col md:justify-start md:items-start">
            <h2 className="hidden text-3xl md:block md:mb-10">
              Stay up to date
            </h2>
            <div className="max-w-[90%] md:w-full relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email address"
                className="w-full border-0 rounded-sm bg-[#89939E] px-2 py-3"
              />
              <button className="absolute top-1/2 right-[-4%] transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none">
                <BsFillSendFill size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
