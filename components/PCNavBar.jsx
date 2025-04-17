import Link from 'next/link'
import React from 'react'

const PCNavBar = () => {
  let MenuEffect = 'transition-all duration-300 ease-in-out hover:font-semibold hover:px-1'
  let LinkEffect = 'transition-all duration-300 ease-in-out hover:text-gray-sub hover:font-light hover:px-1'
  return (
    <div className='fixed z-50'>
        <nav className='hidden xl:flex flex-col justify-start py-5 px-10 pt-15 gap-2 text-2xl font-outfit font-normal'>
          <Link href='/' className={MenuEffect}>Home</Link>
          <Link href='/#about' className={MenuEffect}>About</Link>
          <Link href='/#skills' className={MenuEffect}>Skills</Link>
          <Link href='/#projects' className={MenuEffect}>Projects</Link>
        </nav>

        <nav className='hidden xl:flex flex-col justify-start px-10 gap-1 text-xl font-outfit font-normal'>
          <h3 className='font-semibold text-sm py-2 text-gray-sub'>LINKS</h3>
          <Link href='https://github.com/nrakhshan' className={LinkEffect}>GitHub</Link>
          <Link href='https://www.linkedin.com/in/nusaibarakhshan/' className={LinkEffect}>LinkedIn</Link>
          <Link href='https://devpost.com/nusaibarakhshan' className={LinkEffect}>Devpost</Link>
          <Link href='mailto:nusaiba.rakhshan@mail.utoronto.ca' className={LinkEffect}>Email</Link>
        </nav>
    </div>
  )
}

export default PCNavBar
