import React from 'react'
import "../../app/globals.css"
import Image from 'next/image'

const BannerRightSec = () => {
  return (
    <div className=' banner-right w-[70%] md:w-[33%] rounded-[38px] moving-box' >
        <Image src={"/assets/images/usama2.png"} width={400} height={400} className='w-[100%] rounded-[38px]' alt="web developer bannar image" />
    </div>
  )
}

export default BannerRightSec