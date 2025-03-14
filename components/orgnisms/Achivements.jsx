import React from 'react'
import Achive from '../molecules/Achive'

const Achivements = () => {
  return (
    <div className="flex flex-wrap px-[5%] md:px-[9%] pt-[50px] md:pt-[70px] pb-[40px] md:pb-[60px] justify-center md:justify-between items-center gap-5" data-aos="fade-right">
        <Achive number='3' text='Years of Experience' />
        <Achive number='20+' text='Project Completed' />
        <Achive number='150+' text='Happy Clients' />
    </div>
  )
}

export default Achivements