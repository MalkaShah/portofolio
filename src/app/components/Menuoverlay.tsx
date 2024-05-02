import React from 'react';
import Link from 'next/link';

const Menuoverlay = () => {
  return (
    
        <ul className='menuoverlay flex flex-col py-4 items-center'>
            <li>
                    <Link href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
            </li>
            <li>
                    <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link>
            </li>
            <li>
                    <Link href={"#contact"}className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>  
         </ul>     
  )
}

export default Menuoverlay