import Hero from "@/components/Hero";
import About from "@/components/About"
import Project from "@/components/Project";
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-black relative w-full">
        {/* <FloatingNav navItems={[{name: 'Home', link: '/'}]} className=""  /> */}
      <Hero />
      <About />
      <Project />
      <Skills />  
      <Footer />
    </div>
  );
}
