import React from 'react'


const Title = (props) => {
  let BubbleEffect = 'backdrop-blur-xs rounded-full scale-110 md:scale-130 lg:scale-150 transition-all delay-50 duration-300 ease-in-out hover:scale-120 md:hover:scale-150 lg:hover:scale-170'
  return (
    <div id={props.id} className="grid grid-rows-4 grid-col-4 justify-center">
        <div className='gradient row-start-1 row-span-4 col-start-1 col-span-4 mx-auto text-[18vw]/[15vw] lg:text-[12vw]/[12vw] font-lexend font-semibold pt-50 lg:pt-15 py-20'>
          <h1>Nusaiba</h1>
          <h1>Rakhshan</h1>
        </div>
        <img src="/icons/bubble.svg" className={`row-start-2 col-start-1 lg:row-start-1 lg:col-start-1 translate-x-[-40%] hover:rotate-20 ${BubbleEffect}`} alt="Bubble" />
        <img src="/icons/bubble.svg" className={`row-start-3 col-start-4 lg:row-start-2 lg:col-start-4 rotate-135 hover:rotate-155 translate-y-[35%] md:translate-y-[100%] lg:translate-x-[80%] translate-x-[40%] ${BubbleEffect}`} alt="Bubble" />
    </div>
  )
}

export default Title
