import React from 'react'


const Title = (props) => {
  let BubbleEffect = 'z-3 backdrop-blur-xs rounded-full scale-120 xl:scale-160 transition-all delay-50 duration-300 ease-in-out hover:scale-140 xl:hover:scale-180'
  return (
    <div id={props.id} className='pt-12 xl:ml-[10%]'>
    <div className="grid grid-rows-3 grid-col-4 justify-center">
      <div className='z-1 blur-xl row-start-1 row-span-3 col-start-1 col-span-1'>
        <img src="/icons/bubble.svg" className='scale-100 translate-x-80 translate-y-40 md:translate-x-150' alt="Bubble" />
        <img src="/icons/bubble.svg" className='scale-120 translate-x-20 translate-y-60' alt="Bubble" />
      </div>
        <img src="/icons/bubble.svg" className={`row-start-1 row-span-1 col-start-1 col-span-1 translate-x-[-40%] translate-y-[80%] md:translate-x-[-20%] md:translate-y-[16%] lg:translate-x-[80%] lg:translate-y-[-12%] xl:translate-x-[-60%] -rotate-80 hover:-rotate-60 ${BubbleEffect}`} alt="Bubble" />
        <div className='z-2 gradient row-start-1 row-span-2 col-start-1 col-span-4 mx-auto text-[16vw]/[16vw] lg:text-[12vw]/[12vw] font-lexend font-semibold pt-50 md:pt-24 lg:pt-15'>
          <h1>Nusaiba</h1>
          <h1>Rakhshan</h1>
        </div>
        <p className='gradient-2 row-start-3 row-span-1 col-start-1 col-span-4 px-[10%] lg:px-[18%] xl:px-[0%] xl:ml-[12] mx-auto text-[4vw]/[4vw] xl:text-[2vw]/[2vw] font-lexend font-regular'>Seeking roles in ML and Software Development</p>
        <img src="/icons/bubble.svg" className={`row-start-3 row-span-1 col-start-4 col-span-1 -rotate-60 hover:-rotate-40 translate-x-[40%] translate-y-[-40%] md:translate-x-[20%] md:translate-y-[-60%] lg:translate-x-[-80%] lg:translate-y-[-60%] xl:translate-x-[80%] xl:translate-y-[-60%] ${BubbleEffect}`} alt="Bubble" />
    </div>
    </div>
  )
}

export default Title
