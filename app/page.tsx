import Hero from "@/components/Hero";
import About from "@/components/About"
import Project from "@/components/Project";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <FloatingNav navItems={[{name: 'Home', link: '/'}]} className=""  /> */}
      <Hero />
      <About />
      <Project />
    </div>
  );
}
