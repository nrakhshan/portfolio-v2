import React, {useRef} from 'react'

const Carousel = () => {
  const img = "grow shrink-0 basis-full object-cover"
  const button = "material-symbols-rounded click-button transition-all ease-in-out hover:scale-120 bg-gray-accent-2 hover:bg-gray-accent h-full z-2 rounded-full p-5"

  const left = useRef(null)
  const right = useRef(null)
  const carousel = useRef(null)

  const leftClick = (element) => {
    carousel.current.scrollBy({
      left: -carousel.current.offsetWidth, 
      behavior: 'smooth'
    });
  };

  const rightClick = (element) => {
    carousel.current.scrollBy({
      left: carousel.current.offsetWidth, 
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='hidden md:flex flex-row justify-center gap-5 items-center py-10'>
      <i className={button} ref={left} onClick={leftClick}>arrow_back</i>
      <div ref={carousel} className='flex flex-row overflow-x-auto scroll-smooth snap-x snap-start snap-mandatory scrollbar-hide'>
        <img className={img} src="/photos/map.png" alt="" />
        <img className={img} src="/photos/location.png" alt="" />
        <img className={img} src="/photos/night.png" alt="" />
      </div>
      <i className={button} ref={right} onClick={rightClick}>arrow_forward</i>
    </div>
  )
}

export default Carousel
