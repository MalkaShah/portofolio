'use client'
import React from 'react';
import linkedin from "@/app/assets/liknedin.png";
import git from "@/app/assets/git.png";
import Link from 'next/link';
import Image from 'next/image';
import { METHODS } from 'http';
import { POST } from '../api/route'
import { headers } from 'next/headers';




const EmailSection = () => {
    const HandleSubmit = async(e:any) =>
        {
         e.preventDefault();
         const data = {
            email: e.target.email.value,
            subject: e.target.email.value,
            message: e.target.email.value,
         } ;
         
        
         const JSONData= JSON.stringify(data);
         const endpoint = "/api/send";

         const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application.json'
                 },
            body: JSONData
         }
        
         const response = await fetch (endpoint, options);
         const resData = await response.json();
         console.log(resData)
         if (response.status === 200)
            {
                console.log("Message sent")
            }

        }
  return (
    
    <section className=' grid md:grid-cols-2 my-12 md:my12 py-24 gap-24 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from bg-purple-900 to to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 -translate-1/2'> </div>
        <div className=' z-10'> <h5 className='text-xl font-bold text-white my-2'> Let's Connect</h5>
        <p className=' text-white mb-4 max-w-md'>
        {""}
         I am currently looking for new opportunities. My inbox is always open.
        </p>
        <div className=' socials flex flex-row gap-2'>
        <Link href={"https://github.com/MalkaShah"}>
        <Image alt = "" src={git} width={40} height={40}/>
        </Link>
        <Link href={"https://www.linkedin.com/in/syeda-malka-25ba07147/"}>
        <Image alt = "" src={linkedin} width={40} height={40}/>
        </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-4' onSubmit={HandleSubmit}>
                <label className='text-white block mb-1 text-sm font-medium' htmlFor='email'> Your Email </label>
                    <input name='email' type='Email' id='email' required placeholder='malka.shah12@gmail.com' className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    <label className='text-white block mb-1 text-sm font-medium' htmlFor='subject'> Subject </label>
                    <input  name='subject' type='subject' id='subject' required placeholder='Drop Anything!!' className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    <label className='text-white block mb-1 text-sm font-medium' htmlFor='Message'> Message</label>
                    <textarea name='message' id='message' required placeholder="Let's Talk About...!!" className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                <button
                type='submit'
                className=' mt-10 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg  w-full'> Send Message

                </button>
            </form>
        </div> 
    </section>
)
}

export default EmailSection