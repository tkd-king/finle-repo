import React from 'react'
import Headings from '../atoms/Headings'

function ExperiencEducation() {
  const experience = [
   
    {
      title: "2020 - 2021",
      heading: "Intern Front-End Developer",
      content: "Genroar Company (6-Month Internship)",
    },
    {
      title: "2021 - 2023",
      heading: "Front-End Developer",
      content: "Genroar Company",
    },
    {
      title: "2023 - Present",
      heading: "Front-End Developer",
      content: "Online Working",
    },
  ];
  
  const education = [
  
    {
      title: "2020 - 2023",
      heading: "Web Development Course",
      content: "Self-Learning & Online Work",
    },
    {
      title: "2021 - 2023",
      heading: "Intermediate in Computer Science",
      content: "Superior College, Chiniot, Pakistan",
    },
    {
      title: "2024 - Present",
      heading: "BS Software Engineering",
      content: "The University of Faisalabad",
    },
  ];
  
  return (
    <div id='experience' className=' px-[120px] pt-8 md:pt-0 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px]  items-center justify-center bg-gray-100 '  >
      <div className='flex flex-col text-center md:text-start gap-[20px] '>
        <Headings level='2' text='My Experience' /> 
        {experience.map((item, index) => (
          <div key={index} className='p-4 flex flex-col md:text-start text-center justify-center md:justify-start bg-white rounded-xl' data-aos="zoom-in">
            <Headings level='6' text={item.title} />
            <Headings level='4' text={item.heading} />
            <Headings level='10' text={item.content} />
          </div>
        ))}
      </div>
      <div className='flex flex-col text-center md:text-start gap-[20px] '>
        <Headings level='2' text='My Experience' /> 
        {education.map((item, index) => (
          <div key={index} className='p-4 flex flex-col md:text-start text-center justify-center md:justify-start bg-white rounded-xl' data-aos="zoom-in">
            <Headings level='6' text={item.title} />
            <Headings level='4' text={item.heading} />
            <Headings level='10' text={item.content} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencEducation