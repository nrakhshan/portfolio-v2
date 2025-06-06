import Image from "next/image";
import PCNavBar from "../components/PCNavBar";
import Title from "../components/Title";
import DateTime from "../components/DateTime";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MobileNavBar from "../components/MobileNavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden bg-base custom-cursor">
      <PCNavBar/>
      <MobileNavBar/>
      <div className='hidden md:block font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
          <DateTime/>
      </div>
      <Title/>
      {/* <About id="about"/> */}
      <Projects id="projects"/>
      <Footer/>
    </div>
  );
}

