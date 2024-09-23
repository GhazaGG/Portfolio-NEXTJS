import React from 'react'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Project = () => {
  return (
    <div className='text-center py-32 bg-black'>
      <h1 className='text-white text-[36px] font-extrabold mb-5'>Project</h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          // icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  )
} 

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-abuabu"></div>
);
const items = [
  {
    title: "12px",
    description: "A digital studio crafting unique 3D and 2D art, specializing in captivating visuals and creative designs for various media.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "FocusForge",
    description: "A productivity app using the Pomodoro technique.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "AniCore",
    description: "A platform for discovering top anime, curated recommendations, and the latest news—your gateway to the world of anime.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "TiangGawang (In Progress)",
    description:
      "A football news and blog site that keeps you updated with the latest scores, game highlights, and team updates, all in a simple and fan-driven format.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
];


export default Project