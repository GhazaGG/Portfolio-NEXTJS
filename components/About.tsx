import React from 'react'
import { Timeline } from './ui/Timline'
import { VscDebugBreakpointFunction } from "react-icons/vsc";


const About = () => {
	const data = [
		{
			title: "Freelance & Personal Work",
			content: (
				<div>
					<h3 className='font-bold text-[16px] md:text-[24px]'>Front-End Web Developer @ <span className='text-aksen'>Home</span></h3>
					<h5 className='font-light text-[14px] md:text-[18px]'> Jul 2022 - Present </h5>
					<div>
							<div className='flex items-center'>
								<VscDebugBreakpointFunction className='text-aksen text-5xl' />
								<p className='text-[14px] md:text-[16px] text-justify pl-5 pt-5'><span className='font-bold'>12px</span>: Led the development of our digital studio website, 12px, utilizing React.js for the front end and Express with MongoDB for the back end. This streamlined the process of showcasing our 3D and 2D art projects, allowing us to present our portfolio to potential clients and collaborators effectively.</p>
							</div>
							<div className='flex items-center'>
								<VscDebugBreakpointFunction className='text-aksen text-5xl' />
								<p className='text-[14px] md:text-[16px] text-justify pl-5 pt-5'><span className='font-bold'>Pomodoro Timer App</span>: Created a fully functional Pomodoro Timer that includes customizable time intervals, task tracking, and a dark mode feature. The app allows users to improve their productivity through gamification elements like earning points for completed tasks.</p>
							</div>
							<div className='flex items-center'>
								<VscDebugBreakpointFunction className='text-aksen text-5xl' />
								<p className='text-[14px] md:text-[16px] text-justify pl-5 pt-5'><span className='font-bold'>Portfolio Website</span>: Currently developing a personal portfolio to showcase skills in front-end development. The portfolio highlights project experience, coding capabilities, and integration with modern web technologies.</p>
							</div>
					</div>
				</div>
			)
		},
		{
			title: "Bangkit Academy",
			content: (
				<div>
					<h3 className='font-bold text-[16px] md:text-[24px]'>Cloud Computing @ <span className='text-aksen'>Bangkit Academy Capstone Project</span></h3>
					<h5 className='font-light text-[14px] md:text-[18px]'> Des 2022 - Jan 2024 </h5>
					<div>
							<div className='flex items-center'>
								<VscDebugBreakpointFunction className='text-aksen text-5xl' />
								<p className='text-[14px] md:text-[16px] text-justify pl-5 pt-5'><span className='font-bold'>MOTIX</span>: Worked collaboratively with fellow students in Android development and machine learning at Bangkit Academy to create a hoax detector app as our final project. My responsibilities included developing the API and managing Google Cloud services, focusing on integrating cloud resources effectively to enhance the app&apos;s functionality and performance.</p>
							</div>
					</div>
				</div>
			)
		}
	]
  return (
    <div className='py-32 bg-black'>
        <div className='text-left mx-3 md:text-center lg:mx-72'>
            <h1 className='text-white text-[24px] lg:text-[36px] font-extrabold mb-5'>About Me</h1>
            <p className='text-white text-[16px] lg:text-[24px] font-light'>Hi, Im Ghaza Gymnastiar a Front End web developer based in Indonesia. Currently I&apos;m in a final-year Informatics Engineering student with a strong passion for web development. </p>
        </div>
				<Timeline data={data}/>
    </div>
  )
}

export default About