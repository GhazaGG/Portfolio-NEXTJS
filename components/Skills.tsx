import React from 'react'
import { SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiMysql   } from "react-icons/si";
import { FaReact, FaNodeJs,FaPython   } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";




const Skills = () => {
  return (
    <div className='text-left mx-3 py-16 md:text-center md:py-32 bg-black'>
      <h1 className='text-white text-[24px] lg:text-[36px] font-extrabold mb-10'>Skills</h1>
      <div>
        <div className='grid grid-flow-col grid-cols-5 gap-5 grid-rows-2 justify-items-center text-3xl lg:mx-96 lg:px-56 md:text-5xl '>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <SiNextdotjs />
            <p className='text-[10px] md:text-[12px] pt-2'>Next JS</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <FaNodeJs />
            <p className='text-[10px] md:text-[12px] pt-2 '>Node JS</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <RiTailwindCssFill  />
            <p className='text-[10px] md:text-[12px] pt-2'>Tailwind CSS</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <SiExpress /> 
            <p className='text-[10px] md:text-[12px] pt-2'>Express JS</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <FaReact /> 
            <p className='text-[10px] md:text-[12px] pt-2'>React JS</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <SiMongodb /> 
            <p className='text-[10px] md:text-[12px] pt-2'>MongoDB</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <SiJavascript  />
            <p className='text-[10px] md:text-[12px] pt-2'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <FaPython />
            <p className='text-[10px] md:text-[12px] pt-2'>Python</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <IoLogoFigma  />
            <p className='text-[10px] md:text-[12px] pt-2'>Figma</p>
          </div>
          <div className='flex flex-col items-center  dark:hover:text-aksen transition duration-300 ease-in-out'>
            <SiMysql />
            <p className='text-[10px] md:text-[12px] pt-2'>Mysql</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills