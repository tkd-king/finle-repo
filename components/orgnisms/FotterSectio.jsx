import React from "react";
import FooterNavebar from "../molecules/FooterNavebar";
import Headings from "../atoms/Headings";
import Link from "next/link";
import FloatingBtin from "../atoms/FloatingBtn";
import { FiArrowUp } from "react-icons/fi";
import Image from "next/image";

function FotterSectio() {
  return (
    <div className="bg-[#2A1454] py-10 text-center">
      <div className=" w-[100%] flex flex-col gap-[30px] items-center ">
        <div className="logo w-[15%] md:w-[5%] ">
          <Link href={"#header"}>
            <Image
              src={"/assets/images/2.png"}
              width={150}
              height={150}
              className=" w-[100%] "
              alt="Footer image"
              title="Muhammad Usama"
            />
          </Link>
        </div>
        <FooterNavebar />
        <div className="flex text-[#8750F7]">
          &copy;{" "}
          <Headings
            level={"8"}
            text={"2025 Muhammad Usama Web developer. All rights reserved."}
          />
        </div>
      </div>
      <Link href={"#header"}>
        <FloatingBtin icon={<FiArrowUp />} />
      </Link>
    </div>
  );
}

export default FotterSectio;
