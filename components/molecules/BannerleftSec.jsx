import React from 'react'
import Headings from '../atoms/Headings'
import DownloadButton from '../atoms/DownloadButton'
import SocialIcon from '../atoms/SocialIcon'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";

const BannerleftSec = () => {
    return (
        <div className="w-full md:w-[49%] flex flex-col gap-[20px] text-center md:text-left">
        <div className="flex flex-col gap-[10px]" >
          <Headings level="3" text="I am Usama" />
          <Headings level="1" text="Web Developer + UX Designer" />
          <Headings
            level="5"
            text="I break down complex user experience problems to create integrity-focused solutions that connect billions of people"
          />
        </div>
        {/* Buttons */}
        <div className="buttons flex justify-center md:justify-start items-center gap-[15px]">
          <DownloadButton />
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=61557600677299"
            icon={<FaFacebookF />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/muhammad-usama00"
            icon={<FaLinkedinIn />}
          />
          <SocialIcon href="#" icon={<IoBasketballOutline />} />
          <SocialIcon href="https://github.com/tkd-king" icon={<GrGithub />} />
        </div>
      </div>
    )
}

export default BannerleftSec