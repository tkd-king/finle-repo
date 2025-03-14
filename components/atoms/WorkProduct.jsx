import React from 'react'


const WorkProduct = ( {src ,href } ) => {
  return (
    <a href={href} className=' px-[20px] w-[48%]   overflow-hidden pt-[20px] border-box bg-[#140C1C] rounded-[10px] '  >
        <img src={src} className='w-[100%]  ' alt="" />
    </a>
  )
}

export default WorkProduct