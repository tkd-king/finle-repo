import React, { useState } from 'react';

function WorkButtons({ all, app, branding, ui }) {
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex  rounded-[60px] h-[50px] w-[400px] justify-between  bg-[#F6F3FC] " >
      <button onClick={() => { all(); handleButtonClick('all'); }} className={` px-[25px]  font-normal text-[#8750F7]  flex items-center justify-center text-[15px] rounded-[50px] ${activeButton === "all" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white " : ""
        }`} >All</button>
      <button onClick={() => { app(); handleButtonClick('app'); }} className={` px-[25px]   font-normal text-[#8750F7]  flex items-center justify-center  text-[15px]  rounded-[50px]  ${activeButton === "app" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white " : ""
        }`} variant=''>App</button>
      <button onClick={() => { branding(); handleButtonClick('branding'); }} className={` px-[25px]   font-normal text-[#8750F7]  flex items-center justify-center text-[15px]  rounded-[50px] ${activeButton === "branding" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white " : ""
        }`} variant='tr-radius'>Branding</button>
      <button onClick={() => { ui(); handleButtonClick('ui'); }} className={` px-[25px]   font-normal text-[#8750F7]  flex items-center justify-center text-[15px] rounded-[50px] ${activeButton === "ui" ? "bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white " : ""
        }`} variant='rectangle'>UI/UX</button>

    </ div>
  );
}

export default WorkButtons;
 