import React from 'react'
import Headings from '../atoms/Headings'
import Image from 'next/image'

export default function SwiperCard({srcl, srcr,  text1, text2, text3}) {
  return (
    <div className=' flex flex-col gap-[80px] rounded-lg p-[20px] mb-[50px] w-[300px] h-[416.78px] overflow-hidden bg-white'>
      <div className="flex items-start justify-between " >
      <Image
      src={srcl}
      width={100}
      height={100}
      alt="Image"
    />
     <Image
     className='rounded-bl-full'
      src={srcr}
      width={100}
      height={100}
      alt="Image"
    />
      </div>
      <Headings level='10' text={text1} />
      <div>
        <Headings level='7' text={text2} />
        <Headings level='11' text={text3} />
        </div>
    </div>
  )
}
