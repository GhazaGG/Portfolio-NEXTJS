/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const email = "your-email@example.com"; // Replace with your email
  const subject = "Subject Here"; // Optional subject
  const body = "Hello,\n\n"; // Optional body text
  return (
    <div className='bg-black w-screen' id='/'>
      <div>
        <Spotlight className='fill-white-100 -top-[500px] ' />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='text-left w-screen  px-3 md:text-center md:flex md:flex-col md:items-center '>
            <p className="text-[13px] lg:text-[24px] font-light text-white" >
              Aspiring Front-End Developer | Passionate Programmer | Tech Enthusiast
            </p>
            <TextGenerateEffect  words="Hi, i&apos;m Ghaza Gymnastiar." className='text-red-800' />
            {/* <h1 className='text-[96px] text-white font-bold '>HI, i'm <span className='text-aksen'>Ghaza Gymnastiar</span>.</h1> */}
            <p className='text-[13px] lg:text-[24px] font-light text-white mb-5'> I build web experiences that drive results.</p>
            <a 
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} 
              className="flex items-center justify-center w-28 text-[16px] bg-none border border-aksen py-1  px-1 lg:py-3 lg:px-4 rounded-sm text-aksen hover:bg-abuabu" // Add your button styling here
            > 
              <MdEmail className='mr-1' />
              Say Hi
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero