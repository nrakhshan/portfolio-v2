import React from 'react'

const About = (props) => {
  return (
    <div id={props.id} className='w-9/10 lg:w-3/5 m-auto py-10'>
      <h2 className='font-semibold font-outfit text-gray-sub text-sm py-5'>ABOUT</h2>
      <p className='text-[1.2rem] font-urbanist lg:text-[1rem]'>
      Hello! I’m Nusaiba, a 3rd year Computer Engineering student at 
      the University of Toronto. 
      I am interested in both software and hardware design. 
      I am looking for a 12-16 month co-op 
      position for the 2025-2026 year. 
      Please feel free to reach out at nusaiba.rakhshan@mail.utoronto.ca
      </p>
    </div>
  )
}

export default About
