import React from 'react'
import Link from 'next/link'

const ProjectCard = (props) => {
  let align = '';
  let photo = '';
  let desc = '';
  let grad = '';
  if (props.position == "right"){
    align = 'text-left my-auto z-50 row-start-1 col-start-1';
    photo = `w-[80%] h-auto m-auto row-start-1 col-start-1 z-1 translate-x-36 lg:w-[68%] right-feather ${props.adjustments}`;
    desc = 'hidden md:block font-urbanist w-[60%] text-[3.2vw] md:text-[2.5vw] lg:text-[1.5vw] px-12 py-4 lg:pt-0';
    grad = 'gradient-2';
  }
  else {
    align = 'text-right my-auto z-50 row-start-1 col-start-1';
    photo = `w-[80%] h-auto m-auto row-start-1 col-start-1 z-1 -translate-x-36 left-feather ${props.adjustments}`;
    desc = 'hidden md:block font-urbanist pl-[40%] text-[3.2vw] md:text-[2.5vw] lg:text-[1.5vw] px-12 py-4 lg:pt-0';
    grad = 'gradient-3';
  }
  return (
    <div className='w-9/10 lg:w-3/5 max-w-250 h-auto m-auto py-5 lg:py-10'>
      <Link href={props.link} className='grid grid-rows-1 grid-col-1 justify-center overflow-hidden h-[60vw] lg:h-[40vw] xl:h-[36vw] bg-white hover:bg-gray-accent transition delay-50 duration-300 ease-in-out hover:scale-101 transform-gpu m-auto rounded-4xl shadow-lg flex'>
        <div className={align}>
          <h4 className='hidden text-gray-sub md:inline-block font-semibold font-outfit text-[2vw] px-12'>{props.date}</h4>
          <h2 className={`${grad} font-semibold font-lexend text-[12vw]/[12vw] md:text-[7vw]/[6vw] lg:text-[5vw]/[5vw] px-8 sm:px-10 pt-4`}>{props.title}</h2>
          <h3 className='hidden md:block font-outfit md:text-[4vw] lg:text-[2.8vw] px-12'>{props.sub}</h3>
          <p className={desc}>{props.desc}</p>
          <div className='tag px-8 font-urbanist text-[3vw] pt-4 md:text-[2vw] lg:text-[1.6vw] xl:text-[1.2vw]'>
            {props.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <img 
          src={props.photo} 
          alt="Project Mockup" 
          className={photo}
        />
      </Link>
    </div>
  )
}

export default ProjectCard
