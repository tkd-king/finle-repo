import React from "react";
import Headings from "../atoms/Headings";
import SkillCardSection from "../molecules/SkillCardSection";

function SkillsSection() {
  return (
    <div className="py-6 md:py-16" id="skills">
      <div className=" text-center w-[80%] md:w-[50%] translate-x-[13%] md:translate-x-[50%] flex flex-col">
        <Headings level="2" text="My Skills" />
        <Headings
          level="10"
          text="We put your ideas and thus your wishes in the form of a unique web project that
                inspires you and you customers."
        />
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-6 items-center justify-center space-x-2  md:space-x-4 px-[50px] md:px-[100px] md:mt-0 mt-8" >
    <SkillCardSection 
      text={"Js"} 
      image={"/assets/images/js.png"} 
      perc={"98%"}
    />
    {" "}
    
    <SkillCardSection 
      text={"react.js"} 
      image={"/assets/images/react.png"} 
      perc={"90%"}
    />
    <SkillCardSection 
      text={"Next.js"} 
      image={"/assets/images/Next.js.png"} 
      perc={"85%"}
    />
    <SkillCardSection 
      text={"Node.js"} 
      image={"/assets/images/Node.js.png"} 
      perc={"75%"}
    />
    <SkillCardSection 
      text={"C++(CPlusPlus)"} 
      image={"assets/images/C++ (CPlusPlus).png"} 
      perc={"60%"}
    />
    <SkillCardSection 
      text={"Figma"} 
      image={"/assets/images/figma.png"} 
      perc={"50%"}
    />
</div>

    </div>
  );
}

export default SkillsSection;
