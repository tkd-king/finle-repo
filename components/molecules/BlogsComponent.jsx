import Image from "next/image";
import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";

function BlogsComponent() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 md:px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center justify-center -m-4">
          <div className="p-4 w-[400px] md:w-1/3 lg:h-[350px] md:h-36 relative" data-aos="flip-up">
            <div className=" h-[300px] md:h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image src="/assets/images/blog1.png" width={400} height={400} alt="image" className="bg-cover" />
              <h2 className="tracking-widest text-xs title-font font-[200] mb-1 absolute top-8 left-8 p-2 rounded-2xl bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white">
                SAAS
              </h2>
              <div className="p-2 bg-white mx-[18px] w-[80%] rounded-xl absolute bottom-8">
              <div className="flex items-center flex-wrap ">
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-0 md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FaRegCalendarDays className="mr-1" />
                    May 10, 2024
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FaRegComment className="mr-1" />
                    no comments
                  </span>
                </div>
                <h4 className="title-font w-[80%] text-lg font-[700] text-[#2A1454] mb-1">
                  The Role of Technology in Modern...
                </h4>
                <a className=" text-indigo-500 inline-flex items-center ml-auto md:mb-2 lg:mb-0">
                    Learn More
                    <FaArrowRight className="text-lg pl-1 pt-1" />
                  </a>
              </div>
            </div>
          </div>
          <div className="p-4 w-[400px] md:w-1/3 lg:h-[350px] md:h-36 relative" data-aos="flip-up">
            <div className="h-[300px] md:h-full  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image width={400} height={400} src="/assets/images/blog2.png" alt="image" className="bg-cover" />
              <h2 className="tracking-widest text-xs title-font font-[200] mb-1 absolute top-8 left-8 p-2 rounded-2xl bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white">
                SAAS
              </h2>
              <div className="p-2 bg-white mx-[22px] w-[80%] rounded-xl absolute bottom-8">
                <div className="flex items-center flex-wrap ">
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-0 md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FaRegCalendarDays className="mr-1" />
                    May 10, 2024
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FaRegComment className="mr-1" />
                    no comments
                  </span>
                </div>
                <h4 className="title-font text-lg font-[700] text-[#2A1454] mb-1">
                  A Song And Dance Act
                </h4>
               <a className=" text-indigo-500 inline-flex items-center ml-auto md:mb-2 lg:mb-0">
                    Learn More
                    <FaArrowRight className="text-lg pl-1 pt-1" />
                  </a>
              </div>
            </div>
          </div>
          <div className="p-4 w-[400px] md:w-1/3 lg:h-[350px] md:h-36 relative" data-aos="flip-up">
            <div className="h-full h-[318px]  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image width={400} height={400} src="/assets/images/blog3.png" className=" bg-cover" alt="saas blog image" />
              <h2 className="tracking-widest text-xs title-font font-[200] mb-1 absolute top-8 left-8 p-2 rounded-2xl bg-gradient-to-tl from-[#2A1454] to-[#8750F7] text-white">
                DESIGN
              </h2>
              <div className="p-2 bg-white mx-[22px] w-[80%] rounded-xl absolute bottom-8">
                <div className="flex items-center flex-wrap ">
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-0 md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FaRegCalendarDays className="mr-1" />
                    May 10, 2024
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FaRegComment className="mr-1" />
                    no comments
                  </span>
                </div>
                <h4 className="title-font text-lg font-[700] text-[#2A1454] mb-1">
                  Shooting Stars
                </h4>
               <a className=" text-indigo-500 inline-flex items-center ml-auto md:mb-2 lg:mb-0">
                    Learn More
                    <FaArrowRight className="text-lg pl-1 pt-1" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsComponent;
