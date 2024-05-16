import React from 'react';
import Link from 'next/link';
import Titlesection from './Titlesection';

const Menuoverlay = () => {
  return (
    
        <ul className='menuoverlay flex flex-col py-4 items-center'>
            <li>
                    <Link href="#Titlesection" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
            </li>
            <li>
                    <Link href="#EducationExp" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Education</Link>
            </li>
            <li>
                    <Link href="#SkillsLanguagePub" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Skills</Link>
            </li>

            <li>
                    <Link href="#Projectsection" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link>
            </li>
            <li>
                    <Link href="#EmailSection"className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>  
         </ul>     
  )
}

export default Menuoverlay