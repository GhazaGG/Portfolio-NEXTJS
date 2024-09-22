/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className='bg-black'>
      <div>
        <Spotlight className='fill-white-100 -top-40 ' />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='text-center'>
            <p className="text-[24px] font-light text-white" >
              Aspiring Front-End Developer | Passionate Programmer | Tech Enthusiast
            </p>
            <TextGenerateEffect  words="Hi, i'm Ghaza Gymnastiar." className='text-red-800' />
            {/* <h1 className='text-[96px] text-white font-bold '>HI, i'm <span className='text-aksen'>Ghaza Gymnastiar</span>.</h1> */}
            <p className='text-[24px] font-light text-white'> I build web experiences that drive results.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero