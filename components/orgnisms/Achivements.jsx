import React from 'react'
import Achive from '../molecules/Achive'

const Achivements = () => {
  return (
    <div className="flex flex-wrap px-[5%] md:px-[9%] pt-[50px] md:pt-[70px] pb-[40px] md:pb-[60px] justify-center md:justify-between items-center gap-5" data-aos="fade-right">
        <Achive number='14' text='Years of Experience' />
        <Achive number='50+' text='Project Completed' />
        <Achive number='1.5K' text='Happy Clients' />
        <Achive number='14' text='Years of Experience' />
    </div>
  )
}

export default Achivements