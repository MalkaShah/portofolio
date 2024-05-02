'use client';
import Link from 'next/link'
import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Menuoverlay from './Menuoverlay';
import EducationExp from './EducationExp';
import Image from 'next/image';
import logo from "@/app/assets/logo.png";

export default function Navbar() {
        const [navbarOpen,setNavbarOpen] = useState(false);

  return (
    <nav className=' fixed top-0 left-0 right-0 bg-black opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8' >
                 <div className='flex flex-row'>
                 <Image src={logo} width={65} height={65} alt='logo'></Image>
                 <p className='text-sm md:text-xl text-white font-semibold mt-0 place-self-center'>Web Developer</p>
                 </div>
        
        <div className='mobile-menu block md:hidden '>
                {
                        !navbarOpen?(
                                <button onClick={()=>setNavbarOpen(true)} className=' flex items-center border rounded px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                        <Bars3Icon className=' h-5 w-5'></Bars3Icon>
                                </button>
                        ):
                        (
                                <button onClick={()=>setNavbarOpen(false)}className=' flex items-center border rounded px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                        <XMarkIcon className=' h-5 w-5'></XMarkIcon>
                                </button>
                        )
                }

        </div>

        <div className='menu hidden lg:block md:w-auto justify-between' id='navbar'>
        <ul className=' flex p-2 md:p-0 md:flex-row md:space-x-8 mt-5'>
            <li>
                    <Link href={"#"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About </Link>
            </li>
            <li>
                    <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Skills</Link>
            </li>
            <li>
                    <Link href={"#contact"}className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Project</Link>
            </li>
            <li>
                    <Link href={"#contact"}className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>  
         </ul>    
        </div>  
        </div>
        {
                navbarOpen? <Menuoverlay></Menuoverlay>:""
        }
    </nav>
  )
}
