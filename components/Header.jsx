import React from 'react'

const Header = (props) => {
  return (
    <div className='flex flex-col justify-center'>
      <img src={`${props.photo}`} className="fade-img mx-auto w-full lg:w-3/4 h-[50vw] lg:h-[35vw] object-top object-cover" alt="A mockup of my project" />
      <h1 className='gradient -translate-y-10 mx-auto w-3/4 text-center text-[18vw]/[15vw] lg:text-[10vw]/[10vw] font-lexend font-semibold pb-10'>{props.title}</h1>
    </div>
  )
}

export default Header
