import React from 'react'

const Footer = () => {
  let text = 'text-gray-400 text-[3vw] sm:text-[2.4vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[0.9vw] font-urbanist';

  return (
    <div className='text-center pt-20 pb-4'>
      <hr className='w-[90%] border-gray-300 border-dashed xl:block mx-auto pb-4'></hr>
      <p className={text}>2025 &#169; Nusaiba Rakhshan</p>
    </div>
  )
}

export default Footer
