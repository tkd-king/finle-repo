import React from 'react'
import SwiperCumponent from '../molecules/Swiper.molecules'
import Headings from '../atoms/Headings'
  
export default function StoriesCustomorSection() {
  return (
   
    <div className="flex md:flex-row flex-col items-start justify-between bg-[#F6F3FC] px-[70px] py-[50px] md:py-[100px] text-center md:text-start" id='testmonials'>
      <div className="w-[90%] md:w-[50%] flex flex-col items-center justify-center md:ml-12">
        <Headings level='2' text="My Client's Stories"/>
        <Headings level='10' text="Empowering people in new a digital journey with my super services"/>
      </div>
      <div className="w-[100%] md:w-[50%] mt-6 md:mt-0" >
      <SwiperCumponent />
      </div>
    </div>
    
  )
}
