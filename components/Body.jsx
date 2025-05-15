import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

const Body = (props) => {
  let text = 'text-[4vw]/[6vw] sm:text-[3vw]/[5vw] md:text-[2.5vw]/[4vw] lg:text-[2vw]/[3vw] xl:text-[1.4vw]/[2.6vw] 2xl:text-[0.9vw]/[1.8vw] font-urbanist';

  return (
    <div className='w-full px-10 xl:pl-[15%]'>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub pb-5' id='top'>DESCRIPTION</h2>
      <div className={text}>
      {props.p1}
      </div>

      <div className=''>
        <Carousel photos={props.photos}/>
      </div>

      <div className={`${text} pb-0`}>
      {props.p2}
      <br/><br/><br/><br/>
      <Link href={`/${props.parent}`} className={`${text} strong text-blue-500`}>Back to Top</Link>
      </div>
    </div>
  )
}

export default Body
