import React, {useRef} from 'react'

const Carousel = (props) => {
  const img = "grow shrink-0 basis-full object-cover"
  const button = "material-symbols-rounded click-button transition-all ease-in-out hover:scale-120 bg-gray-accent-2 hover:bg-gray-accent h-full z-2 rounded-full p-5"

  const left = useRef(null)
  const right = useRef(null)
  const carousel = useRef(null)

  const photos = props.photos;
  const photoArray = [];

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

  for(let i = 0; i < photos.length; i++){
    photoArray.push(<img className={img} src={photos[i]} alt="" />)
  }
  
  return (
    <div className='hidden md:flex flex-row justify-center gap-5 items-center py-10'>
      <i className={button} ref={left} onClick={leftClick}>arrow_back</i>
      <div ref={carousel} className='flex flex-row overflow-x-auto scroll-smooth snap-x snap-start snap-mandatory scrollbar-hide'>
        {photoArray}
      </div>
      <i className={button} ref={right} onClick={rightClick}>arrow_forward</i>
    </div>
  )
}

export default Carousel
