import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SwiperCard from "./SwiperCard";

export default function SwiperCumponent() {
  
  return (
    <div className="">
      <Swiper
      onResize={20}
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true} // Infinite loop ke liye
        style={{ width: "100%", height: "auto" }} // Swiper ka full width hona zaroori hai
        modules={[Pagination]}
        className="mySwiper "
        breakpoints={{
          320: { slidesPerView: 1 },  // Mobile (1 slide)
          768: { slidesPerView: 2 },  // Tablets & Desktops (2 slides max)
        }}
      >
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
      </Swiper>
    </div >
  );
}
