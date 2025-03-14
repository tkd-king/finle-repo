import React from "react";
import Anchors from "../atoms/Anchors";

const FooterNavebar = () => {
  return (
    <div className=" flex md:flex-row flex-col md:gap-[25px] gap-[15px]">
      <Anchors level="2" text="Services." href="#services" />
      <Anchors level="2" text="Work." href="#works" />
      <Anchors level="2" text="Experience." href="#experience" />
      <Anchors level="2" text="Blogs." />
    </div>
  );
};

export default FooterNavebar;
