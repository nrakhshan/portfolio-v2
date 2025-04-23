import React from 'react'
import Link from 'next/link'

const ProjectCard = (props) => {
  let leftphoto = "hidden";
  let rightphoto = "hidden";
  if (props.position == "right"){
    leftphoto = "hidden"
    rightphoto = props.adjustments
  }
  else {
    leftphoto = props.adjustments
    rightphoto = "hidden"
  }
  return (
    <div className='w-9/10 lg:w-3/5 max-w-250 h-auto m-auto py-5 lg:py-10'>
      <Link href={props.link} className='overflow-hidden min-h-80 bg-white hover:bg-gray-accent transition delay-50 duration-300 ease-in-out hover:scale-101 transform-gpu m-auto rounded-4xl shadow-lg flex'>
        <div className={leftphoto}> 
          <img 
            src={props.photo} 
            alt="Project Mockup" 
            className="w-[100%] h-auto m-auto "
          />
        </div>
        <div className='text-left m-auto'>
          <h4 className='hidden text-gray-sub lg:inline-block font-semibold font-outfit text-[2vw] pt-10 px-11'>{props.date}</h4>
          <h2 className='gradient-2 font-semibold font-lexend text-[7vw]/[6vw] lg:text-[5vw]/[5vw] px-10 pt-11 lg:py-2'>{props.title}</h2>
          <h3 className='hidden lg:inline-block font-outfit text-[2vw] px-11 pb-5 pt-2'>{props.sub}</h3>
          <p className=' font-urbanist [2vw] lg:text-[1.5vw] px-11 pb-10 pt-5 lg:pt-0'>{props.desc}</p>
        </div>
        <img 
          src={props.photo} 
          alt="Project Mockup" 
          className={rightphoto}
        />
      </Link>
    </div>
  )
}

export default ProjectCard
