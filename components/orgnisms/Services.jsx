import React, { useState } from "react";
import Headings from "../atoms/Headings";
import { GoArrowUp } from "react-icons/go";

function Services({ web, app, branding, ui }) {
  const [activeButton, setActiveButton] = useState("branding");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
    {/* Heading Section */}
    <div id="services" className="text-center pt-20 px-5 md:px-[20%] bg-[#F6F3FC]" data-aos="zoom-in">
      <Headings level={"2"} text={"My Quality Services"} />
      <Headings
        level={"10"}
        text={
          "We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers."
        }
      />
    </div>
  
    {/* Services List */}
    <div className="flex flex-col px-5 md:px-[9%] py-[30px] md:py-[50px] divide-y justify-between bg-[#F6F3FC]">
      {[
        { id: "branding", number: "01", title: "Branding Design" },
        { id: "ui", number: "02", title: "UI/UX Design" },
        { id: "web", number: "03", title: "Web Design" },
        { id: "app", number: "04", title: "App Design" },
      ].map((service) => (
        <button
          key={service.id}
          onClick={() => handleButtonClick(service.id)}
          className={`px-5 py-[25px] md:py-0 md:px-[25px] mt-6 md:mt-10 font-normal flex flex-col md:flex-row text-[15px] rounded-xl md:rounded-0 h-auto md:h-[109px] items-center text-center md:text-left transition ease-in-out duration-500 ${
            activeButton === service.id
              ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white"
              : "text-[#7645DA]"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start relative w-full" data-aos="zoom-in">
            <span className="text-sm font-black mt-2">{service.number}</span>
            <h3 className="text-[20px] md:text-[25px] font-bold mt-2 md:mt-0 ml-0 md:ml-6">
              {service.title}
            </h3>
            <span className="w-full md:w-[50%] mt-2 md:mt-0">
              <p className="text-sm md:text-base text-center md:text-start ml-0 md:ml-4">
                I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
              </p>
            </span>
            <GoArrowUp
              className={`absolute right-0 md:right-[-20px] text-center text-3xl font-normal hidden md:block ${
                activeButton === service.id ? "rotate-[35deg]" : "rotate-[120deg]"
              }`}
            />
          </div>
        </button>
      ))}
      <hr />
    </div>
  </>
  
    
  );
}

export default Services;
