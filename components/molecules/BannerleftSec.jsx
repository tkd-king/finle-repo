import React from "react";
import Headings from "../atoms/Headings";
import DownloadButton from "../atoms/DownloadButton";
import SocialIcon from "../atoms/SocialIcon";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";

const BannerleftSec = () => {
  return (
    <div className="w-full md:w-[49%] flex flex-col gap-[20px] text-center md:text-left">
      <div className="flex flex-col gap-[10px]">
        <Headings level="3" text="I am Usama" />
        <h1 className="capitalize text-[45px] lg:text-[65px] leading-[58px] md:leading-[78px] max font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
          Web Developer + UX Designer
        </h1>
        <Headings
          level="5"
          text="I break down complex user experience problems to create integrity-focused solutions that connect billions of people"
        />
      </div>
      {/* Buttons */}
      <div className="buttons flex md:flex-row flex-col justify-center md:justify-start items-center gap-[15px]">
        <div className="buttons flex justify-center md:justify-start items-center gap-2 md:gap-[15px]" >
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=61557600677299"
            icon={<FaFacebookF />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/muhammad-usama00"
            icon={<FaLinkedinIn />}
          />
          <SocialIcon href="#" icon={<IoBasketballOutline />} />
          <SocialIcon
            href="https://github.com/tkd-king"
            icon={<GrGithub />}
          />{" "}
        </div>
        <DownloadButton />

      </div>
    </div>
  );
};

export default BannerleftSec;
