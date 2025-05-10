import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import nextcentLogo from "../assets/nextcentlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      {/* Navbar */}
      <div className="px-2 max-w-[1240px] mx-auto flex justify-between items-center w-full h-full text-[14px]">
        <div>
          <img src={nextcentLogo} alt="" className="max-w-[154px] h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li>
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="service"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="feature"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Feature
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="product"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonial"
              smooth={true}
              offset={50}
              duration={500}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="footer"
              smooth={true}
              offset={50}
              duration={500}
            >
              Faq
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex ">
          <button className="border-none bg-transparent text-black mr-4 text-[12px]">
            Login
          </button>
          <button className="px-8 py-3 text-[12px]">Sign up</button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={handleOpen}>
          {!isOpen ? (
            <RxHamburgerMenu size={30} className="text-[#28CB8B]" />
          ) : (
            <RxCross2 size={30} className="text-[#28CB8B]" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          isOpen
            ? " absolute bg-white w-[50%] px-8 left-0 opacity-100 duration-300 ease-in-out md:hidden"
            : "absolute bg-white w-[50%] px-8 opacity-0 left-[-90%] duration-300 ease-in-out md:hidden"
        }
      >
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="service"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="feature"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Feature
          </Link>
        </li>
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="product"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Product
          </Link>
        </li>
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="testimonial"
            smooth={true}
            offset={50}
            duration={500}
          >
            Testimonial
          </Link>
        </li>
        <li className="border-b-1 border-zinc-300/10">
          <Link
            onClick={handleClose}
            activeClass="active"
            to="footer"
            smooth={true}
            offset={50}
            duration={500}
          >
            Faq
          </Link>
        </li>

        <div className="flex flex-col  py-5">
          <button className="px-8 py-3 bg-transparent text-black mb-5">
            Login
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
