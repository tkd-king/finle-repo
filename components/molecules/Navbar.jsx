import React from 'react'
import Anchors from '../atoms/Anchors'

const Navbar = () => {
  return (
    <div className=' flex gap-[25px] hidden lg:flex flex-row ' >
        <Anchors level='1' text='services' href='#services' />
        <Anchors level='1' text='work' href='#works' />
        <Anchors level='1' text='resume' href='resume'  />
        <Anchors level='1' text='skills' href='#skills' />
        <Anchors level='1' text='testimonials' href='#testmonials' />
        <Anchors level='1' text='contact' href='#contact' />
    </div>
  )
}

export default Navbar