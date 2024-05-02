'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import pic from '@/app/assets/pic.jpg'

export default function Titlesection(){
  
  return(
  
    <section className='mt-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className="col-span-8 place-self-center text-center sm:text-left ">
          <h1 className='text-white mb-4 lg:text-6xl text-4xl sm:text-5xl font-extrabold '>
            <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Hello! I am 
            </span>
            <br></br>
             <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'SYEDA MALKA',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Certified Cloud Engineer Generative AI',
                1000,
                'Web Developer',
                1000,
                'Mobile App Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              />
          </h1>
          <p className='text-[#ADB7BE] mb-6 lg:text-xl text-base sm:text-lg mr-10 '>
          Being a Computer Software Engineer I have huge passion for development
          </p>
          <div>
            <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via bg-purple-500 to-pink-500 hover:bg-slate-200 text-white sm:w-fit'>
              Hire Me
            </button>
            <button className='px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via bg-purple-500 to-pink-500 hover:bg-slate-200 text-white  mx-4 sm:w-fit'>
              <span className=' block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className=''>
        <div className='rounded-full bg-[#181818]  w-96 h-96 relative flex items-center'>
            <Image 
              src={pic}
              alt ="Avatar" 
              className='  absolute transform  left-4 object-fit: contain rounded-full border from-pink-500 via-blue-500 to bg-purple-500  px-2 py-2'
              height={350} 
              width={350}
            ></Image>
          </div>
        </div>
          
        </div>
      
    </section>
  )
}
