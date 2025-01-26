import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Project } from "@/components/project";

export default function Home() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <About/> 
      <Project /> 
      <Footer/> 
    </div>
  );
}
