import React from 'react'
import Headings from '../atoms/Headings'

const Achive = ( { number , text } ) => {
  return (
    <div className="flex gap-[10px] items-center text-center">
    <Headings text={number} level="9" />
    <div className="max-w-[100px]">
      <Headings level="8" text={text} />
    </div>
  </div>
  )
}

export default Achive