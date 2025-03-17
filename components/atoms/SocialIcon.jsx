import React from 'react'
import "../../app/globals.css"

const SocialIcon = ({href , icon }) => {
  return (
    <a href={href} className=' cursor-pointer social-icon text-[16px] font-normal text-[#8750F7] md:w-[35px] md:h-[35px] w-[50px] h-[40px] flex items-center justify-center rounded-full border-[1px] border-[#8750F7] ' > {icon} </a>
  )
}

export default SocialIcon