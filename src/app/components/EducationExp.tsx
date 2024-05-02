'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import bookicon from "@/app/assets/bookicon.png"
import { motion, useScroll } from 'framer-motion';
import arrow from "@/app/assets/arrow.png";

function EducationExp() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["0 1" , "1.33 1"]
    });

    return (
      <>
      <div>
      <span className='animate-pulse mt-16 flex justify-center items-center'><Image 
              src={arrow}
              alt='arrow'
              width={65}
              height={65}>
              </Image>
              </span>
            <h1 className=" flex justify-center items-center text-white mt-10  ml-10 text-transparent bg-clip-text mb-4 lg:text-6xl text-8xl sm:text-5xl font-extrabold"> About me</h1>
            
      </div>
      <motion.section ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress}} className=' flex  rounded-md place-content-center justify-evenly'>
      <div className='flex flex-1 flex-col rounded-md bg: bg-gradient-to-tr from-pink-500 via bg-purple-500 to to-blue-500 place-self-center p-10'>
            <h1 className=" text-white mt-5 ml-2 text-transparent bg-clip-text mb-4 lg:text-6xl text-8xl sm:text-5xl font-extrabold place-content-center place-self-center">Education</h1>
              <div className=" flex flex-row">
                <span><Image
                    src={bookicon}
                    alt=""
                    width={45}
                    height={45} className="rounded-md mt-6 ml-2 border border-black 2xl"
                    ></Image> </span>
                  <span className="ml-5 mt-5  "><h1 className=" font-extrabold"> Certification Cloud Computing Generative AI</h1>
                  <h1>GPA: Continued</h1> 
                  <h1>PIAIC PANAVERSITY</h1>
                  </span>
                </div>
              <div className=" flex flex-row ">
                <span><Image
                    src={bookicon}
                    alt=""
                    width={45}
                    height={45} className="rounded-md mt-6 ml-2 border border-black 2xl"
                    ></Image> </span>
                  <span className="ml-5 mt-5  "><h1 className=" font-extrabold"> MSc Computer Software Engineering </h1>
                  <h1>GPA: 3.78/4</h1> 
                  <h1>University of Engineering and Technology Peshawar</h1>
                  </span>
                </div>
                <div className=" flex flex-row">
                <span><Image
                    src={bookicon}
                    alt=""
                    width={45}
                    height={45} className ="rounded-md mt-6 ml-2 border border-black 2xl"
                    ></Image> 
                    </span>
                  <span className="ml-5 mt-5"><h1 className=" font-extrabold"> BS Computer Software Engineering </h1>
                  <h1>GPA: 3.26/4</h1> 
                  <h1 className='mb-8'>University of Engineering and Technology Peshawar</h1>
                  </span>
                </div>
                </div>  
      <div className=' ml-16 flex flex-col flex-1 rounded-md bg: bg-gradient-to-tr from-pink-500 via bg-purple-500 to to-blue-500 place-self-center p-10'>
        <h1 className=" text-white mt-5 text-transparent bg-clip-text mb-4 lg:text-6xl text-8xl sm:text-5xl font-extrabold place-self-center">Experience</h1>
                    <div className=" flex flex-row ">
                        <span><Image
                            src={bookicon}
                            alt=""
                            width={45}
                            height={45} className="rounded-md mt-6 ml-2 border border-black 2xl"
                            ></Image> </span>
                          <span className="ml-5 mt-5  "><h1 className=" font-extrabold"> Computer Instructor</h1>
                          <h1>April 2022 - continued</h1> 
                          <h1>Federal Government Educational Institutes </h1>
                          </span>
                        </div>
                    <div className=" flex flex-row ">
                          <span><Image
                              src={bookicon}
                              alt=""
                              width={45}
                              height={45} className="rounded-md mt-6 ml-2 border border-black 2xl"
                              ></Image> </span>
                            <span className="ml-5 mt-5  "><h1 className=" font-extrabold"> Visiting Lecturer</h1>
                            <h1>Feb 2018 - Feb 2019</h1> 
                            <h1>University of Engineering and Technology Peshawar KPK Pak</h1>
                            </span>
                          </div>
                    <div className=" flex flex-row">
                          <span><Image
                              src={bookicon}
                              alt=""
                              width={45}
                              height={45} className ="rounded-md mt-6 ml-2 border border-black 2xl"
                              ></Image> 
                              </span>
                            <span className="ml-5 mt-5"><h1 className=" font-extrabold"> Visiting Lecturer</h1>
                            <h1>Aug 2017 - Feb 2019</h1> 
                            <h1 className='mb-8'> Government Post Graduate College Women Mardan KPK Pak</h1>
                            </span>
                          </div>
                </div>
      
      </motion.section>
      </>
    )

}

export default EducationExp;