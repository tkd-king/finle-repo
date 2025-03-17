"use client"
import React, { useState } from "react";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";
import Link from "next/link";
import { CgMenuBoxed } from "react-icons/cg";
import Anchors from "../atoms/Anchors";
import { RiCloseLargeFill } from "react-icons/ri";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlClose = () => {
    setIsOpen(false);
  }


  return (
    <div
      id="header"
      className=" px-[9%] h-[95px] bg-[#F6F3FC] border-box w-[100%] flex justify-between items-center "
    >
      <div className=" w-[100%] flex gap-[30px] items-center ">
        <div className="logo w-[15%] md:w-[5%] ">
          <Link href={"/"}>
            <Image
              src={"/assets/images/11.png"}
              width={150}
              height={150}
              className="hover:cursor-pointer w-[100%] "
              alt="Header image"
              title="Muhammad Usama"
            />
          </Link>
        </div>
        <a
          href="#"
          className=" text-[15px] font-normal leading-[22px] text-[#2A1454] hidden md:block"
        >
          musama4288921@gmail.com.com
        </a>
        <Navbar />
      </div>
      <Link href={"#contact"} className="md:block hidden">
        {" "}
        <Button variant="header-button" text="Hire me!" />{" "}
      </Link>
      <div 
      onClick={() => setIsOpen(!isOpen)}
      className="menu absolute right-4 top-7 text-4xl text-[#2A1454] shadow-xl rounded-md p-0 m-0 block md:hidden cursor-pointer">
        <CgMenuBoxed />
        
      </div>
      {/* side bar */}
      <div
        className={`flex flex-col items-start justify-start gap-4 pl-4 fixed top-0 right-0 z-50 h-[100vh] w-[200px] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handlClose}
          className="absolute top-2 right-2 p-2 text-[#8750F7] text-xl rounded-full"
        >
          <RiCloseLargeFill />
        </button>
        <div className=' flex flex-col gap-[25px] mt-12  ' >
       <div onClick={handlClose}> <Anchors level='1' text='services' href='#services' /></div>
       <div onClick={handlClose}> <Anchors level='1' text='work' href='#works' /></div>
       <div onClick={handlClose}> <Anchors level='1' text='resume' href='resume'  /></div>
       <div onClick={handlClose}> <Anchors level='1' text='skills' href='#skills' /></div>
       <div onClick={handlClose}> <Anchors level='1' text='testimonials' href='#testmonials' /></div>
       <div onClick={handlClose}> <Anchors level='1' text='contact' href='#contact' /></div>
    </div>
    <Link href={"#contact"}>
        {" "}
        <div onClick={handlClose}>  <Button variant="header-button" text="Hire me!" />{" "} </div>
      </Link>
      </div>
    </div>
  );
};

export default Header;
