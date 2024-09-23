import Hero from "@/components/Hero";
import About from "@/components/About"
import Project from "@/components/Project";
import Skills from "@/components/Skills"
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <FloatingNav navItems={[{name: 'Home', link: '/'}]} className=""  /> */}
      <Hero />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}
