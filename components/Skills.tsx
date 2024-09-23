import React from 'react'
import { SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiMysql   } from "react-icons/si";
import { FaReact, FaNodeJs,FaPython   } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";




const Skills = () => {
  return (
    <div className='text-center py-32 bg-black'>
      <h1 className='text-white text-[36px] font-extrabold mb-10'>Skills</h1>
      <div>
        <div className='grid grid-flow-col grid-cols-5 gap-5 grid-rows-2 justify-items-center mx-96 px-56 text-5xl'>
          <SiNextdotjs />
          <FaNodeJs />
          <RiTailwindCssFill  />
          <SiExpress />
          <FaReact />
          <SiMongodb /> 
          <SiJavascript  />
          <FaPython />
          <IoLogoFigma  />
          <SiMysql />
        </div>
      </div>
    </div>
  )
}

export default Skills