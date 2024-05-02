'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import bookicon from "@/app/assets/bookicon.png"
import { motion, useScroll } from 'framer-motion';
import arrow from "@/app/assets/arrow.png";
import kisan from "@/app/assets/ppic1.jpg";
import diet from "@/app/assets/ppic2.jpg";
import kareegar from "@/app/assets/ppic3.jpg";
import flashlight from "@/app/assets/ppic4.jpg";
import calcu from "@/app/assets/ppic5.jpg";
import Link from 'next/link';


function Projectsection() {
  const ref = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1" , "1.33 1"]
  });
  return (
    <>
        <section className=" w-auto max-w-none m-14  bg: bg-gradient-to-tr from-pink-500 via bg-purple-500 to to-blue-500 container flex justify-evenly flex-wrap rounded-md p-8">
        <div className="w-30 h-30 flex flex-col justify-between place-items-center">
        <Link href="#"><Image
          src={kareegar}
          alt=""
          width={135}
          height={135} className="rounded-full hover:animate-pulse"
          ></Image></Link>
          <h1 className="text-2xl font-bold">Kareegar</h1>
          <h1>Android App</h1>
          <h1> Handymen's App</h1>
        </div>
        <div className="w-30 h-30 flex flex-col justify-between place-items-center">
        <Link href="#"><Image
          src={kisan}
          alt=""
          width={135}
          height={135} className=" rounded-full hover:animate-pulse"
          ></Image></Link>
          <h1 className="text-2xl font-bold">KisanSahulat</h1>
          <h1>Android App</h1>
          <h1> Farmer's App</h1>
        </div>
        <div className="w-30 h-30 flex flex-col justify-between place-items-center">
        <Link href="#"><Image
          src={diet}
          alt=""
          width={135}
          height={135} className=" rounded-full hover:animate-pulse"
          ></Image></Link>
          <h1 className="text-2xl font-bold">13 Days Diet</h1>
          <h1>Android App</h1>
          <h1> Utility App</h1>
        </div>
        <div className="w-30 h-30 flex flex-col justify-between place-items-center">
        <Link href="#"><Image
          src={flashlight}
          alt=""
          width={135}
          height={135} className="rounded-full hover:animate-pulse"
          ></Image></Link>
          <h1 className="text-2xl font-bold">Torch</h1>
          <h1>Android App</h1>
          <h1> Utility App</h1>
        </div>
        <div className="w-30 h-30 flex flex-col justify-between place-items-center">
        <Link href="#"><Image
          src={calcu}
          alt=""
          width={135}
          height={135} className="rounded-full hover:animate-pulse"
          ></Image></Link>
          <h1 className="text-2xl font-bold">Calculator</h1>
          <h1>TypeScript</h1>
          <h1> App in Typescript</h1>
        </div>
        
      </section>  

    </>
  
  )
}

export default Projectsection;