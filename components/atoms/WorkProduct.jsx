import Image from 'next/image'
import React from 'react'


const WorkProduct = ( {src ,href } ) => {
  return (
    <a href={href} className=' px-[20px] w-[48%]   overflow-hidden pt-[20px] border-box bg-[#140C1C] rounded-[10px] '  >
        <Image src={src} width={400} height={400} className='w-[100%]  ' alt="Web developing " />
    </a>
  )
}

export default WorkProduct