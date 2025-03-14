import { MdOutlineFileDownload } from "react-icons/md";
import "../../app/globals.css"
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/assets/images/Muhammad Usama cv.pdf"  data-aos="fade-left" download="Muhammad Usama cv.pdf" >
        <button className='new-button flex items-center gap-[5px] w-[45%] ' >Download CV <MdOutlineFileDownload className="text-[18px]" /></button>
    </a>
  );
};

export default DownloadButton;
