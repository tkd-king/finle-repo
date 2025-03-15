import Image from 'next/image'
import React from 'react'

function SkillCardSection({image, perc, text}) {
  return (
    <div className={" h-[250px] py-2 md:py-12 flex flex-col items-center justify-center"} data-aos="flip-up">
    <div className="py-[14px] w-full rounded-xl bg-[#F6F3FC] px-[24px] flex flex-col items-center justify-center">
      <Image className="w-[150px] md:w-[50px] pt-4" src={image} width={150} height={150} alt="image" />
      <h3 className="text-[#747779] font-black py-4 " >{perc}</h3>
    </div>
    <h4 className="font-[400] text-[16px] mt-2 text-[#8750F7]">{text}</h4>
  </div>
  )
}

export default SkillCardSection
