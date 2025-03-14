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
          320: { slidesPerView: 1 }, // Mobile (1 slide)
          768: { slidesPerView: 2 }, // Tablets & Desktops (2 slides max)
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
            srcr="/assets/images/client2.png"
            text1="“Working with Taylor was great. His designs added value and improved our online presence.”"
            text2="Max"
            text3="Marketing Head, Nova Trends"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client3.jpg"
            text1="“Taylor's innovative designs made our brand stand out. His professionalism was impressive.”"
            text2="Hamza Khan"
            text3="Product Manager, StyleSphere"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client4.jpg"
            text1="“Our online presence improved greatly after the redesign. Highly recommended!”"
            text2="ALI RAZA"
            text3="Founder of taekwondozone.pk"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client5.jpeg"
            text1="“The professionalism and creativity Taylor brings to every project are unmatched. Our website and branding have never looked better!”"
            text2="Noah Bennett"
            text3="CEO, Urban Apparel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/bd3897c84c7024bf14ef51e08d8e0451.png"
            srcr="/assets/images/client6.jpeg"
            text1="“Working with Taylor was a great experience. His designs are clean, modern, and user-friendly.”"
            text2="David Brown"
            text3="Founder, Creative Minds"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
