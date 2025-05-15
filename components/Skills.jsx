import React from 'react'

const Skills = (props) => {
  return (
    <div id={props.id} className='xl:ml-[10%]'>
    <div className='w-9/10 lg:w-3/5 m-auto py-10'>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub py-5'>SKILLS</h2>
      <div className='tag font-urbanist text-[1.2rem] lg:text-[1rem]'>
        <p>C/C++</p>
        <p>Python</p>
        <p>PyTorch</p>
        <p>HTML/CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>Next.js</p>
        <p>PostgreSQL</p>
        <p>Verilog</p>
        <p>Assembly</p>
        <p>Arduino</p>
        <p>Figma</p>
      </div>
    </div>
    </div>
  )
}

export default Skills
