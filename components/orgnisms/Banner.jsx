import React from "react";
import "../../app/globals.css";
import BannerleftSec from "../molecules/BannerleftSec";
import BannerRightSec from "../molecules/BannerRightSec";

const Banner = () => {
  return (
    <div className="outer-banner relative py-[50px] px-[5%]">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-[40px] md:gap-[150px]">
        <BannerleftSec />
        <BannerRightSec />
      </div>
        <h2 className="absolute hidden md:block top-[5%] left-[20%] md:left-[36%] outlined-text text-[120px] sm:text-[200px] md:text-[349px] leading-none font-normal">
        HI
      </h2>
    </div>
  );
};

export default Banner;
