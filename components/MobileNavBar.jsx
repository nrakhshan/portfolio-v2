"use client"
import React, {useRef, useState} from 'react';
import Link from 'next/link'

const MobileNavBar = () => {
    const LogoEffect = 'transition-all duration-300 ease-in-out hover:scale-120'

    const [ShowLinks, setShowLinks] = useState(false);
    const menu = useRef(null);
    const links = useRef(null);

    const LinkMenu = () => {
      menu.current.classList.add('left-out');
      
    
      setTimeout(() => {
        menu.current.classList.add('hidden');
        menu.current.classList.remove('flex');

        links.current.classList.remove('hidden');
        links.current.classList.add('flex');
        
        menu.current.classList.remove('left-out');
      }, 1000);
      
      setTimeout(() => {
        links.current.classList.add('left-in');
      }, 1000);

      setTimeout(() => {
        links.current.classList.remove('left-in');
        menu.current.classList.remove('left-in');
      }, 1000);
    };
    
    const MainMenu = () => {
      links.current.classList.add('left-out');
    
      setTimeout(() => {
        links.current.classList.add('hidden');
        links.current.classList.remove('flex');

        menu.current.classList.remove('hidden');
        menu.current.classList.add('flex');

        links.current.classList.remove('left-out');
      }, 1000);

      setTimeout(() => {
        menu.current.classList.add('left-in');
      }, 1000);

      setTimeout(() => {
        menu.current.classList.remove('left-in');
        links.current.classList.remove('left-in');
      }, 1000);
    };

    return (
      <div className="xl:hidden fixed z-50 top-10 left-[50%] translate-x-[-50%] bg-white/70 rounded-full shadow-lg backdrop-blur-md min-h-20 w-11/12 text-[40px] flex justify-center items-center">
        
        <div ref={menu} className={`flex justify-evenly items-center w-full`}>
          <Link href='/' className={LogoEffect}>
          <i className="material-symbols-rounded">home</i></Link>

          <Link href='#about' className={LogoEffect}>
          <i className="material-symbols-rounded">person</i></Link>

          <Link href='/#skills' className={LogoEffect}>
          <i className="material-symbols-rounded">build</i></Link>

          <Link href='/#projects' className={LogoEffect}>
          <i className="material-symbols-rounded">code</i></Link>

          <button onClick={LinkMenu} className={`md:hidden ${LogoEffect}`}>
              <i className="material-symbols-rounded pt-1">link</i>
          </button>
        </div>

        <div ref={links} className={`hidden md:flex justify-evenly items-center w-full md:w-4/5`}>
          <button onClick={MainMenu} className={`md:hidden ${LogoEffect}`}>
              <i className="material-symbols-rounded pt-1">close</i>
          </button>

          <Link href='https://github.com/nrakhshan' className={LogoEffect}>
          <img src="/icons/github.svg" alt="GitHub Icon" className='w-auto h-auto'/></Link>
            
          <Link href='https://www.linkedin.com/in/nusaibarakhshan/' className={LogoEffect}>
          <img src="/icons/linkedin.svg" alt="LinkedIn Icon" className='w-auto h-auto'/></Link>

          <Link href='https://devpost.com/nusaibarakhshan' className={LogoEffect}>
          <img src="/icons/devpost.svg" alt="Devpost Icon" className='w-auto h-auto'/></Link>

          <Link href='mailto:nusaiba.rakhshan@mail.utoronto.ca' className={LogoEffect}>
          <i className="material-symbols-rounded pt-1">mail</i></Link>
        </div>

      </div>
    );
};
  
export default MobileNavBar
