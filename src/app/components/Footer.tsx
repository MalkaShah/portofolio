import React from 'react';
import logo from "@/app/assets/logo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=' footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='text-white con p-12 flex justify-center'>
            <span>
                <Image src={logo} width={85} height={85} alt=''/>  
            </span>
            <p className= 'text-slate-200 place-self-center'>All Rights Reserved!
            </p>
        </div>
    </footer>
  )
}

export default Footer;