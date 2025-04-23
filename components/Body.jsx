import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

const Body = (props) => {
  let text = 'xl:w-3/4 text-[4vw]/[6vw] md:text-[2.5vw]/[4vw] lg:text-[1.5vw]/[2.5vw] xl:text-[1.2vw]/[2.4vw] 2xl:text-[0.9vw]/[1.8vw] font-urbanist';

  return (
    <div className='w-full px-10'>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub pb-5' id='top'>DESCRIPTION</h2>
      <div className={text}>
      {props.p1}
      </div>

      <div className='xl:w-3/4'>
        <Carousel photos={props.photos}/>
      </div>

      <div className={`${text} pb-20`}>
      {props.p2}
      <br/><br/><br/><br/>
      <Link href={`/${props.parent}`} className={`${text} strong text-blue-500`}>Back to Top</Link>
      </div>
    </div>
  )
}

export default Body
