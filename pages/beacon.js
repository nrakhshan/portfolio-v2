import Image from "next/image";
import PCNavBar from "../components/PCNavBar";
import Title from "../components/Title";
import DateTime from "../components/DateTime";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import '../app/globals.css';

import {Outfit, Lexend, Urbanist} from "next/font/google";
import MobileNavBar from "../components/MobileNavBar";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Body from "../components/Body";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export default function Beacon() {
  return (
    <div className="bg-base custom-cursor">
      <PCNavBar/>
      <MobileNavBar/>

      <div className="flex flex-col justify-evenly">
        <div className='font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
            <DateTime/>
        </div>
        <Header/>
        <div className="flex justify-evenly">
          <Tags/>
          <Body/>
        </div>
      </div>
      
    </div>
  );
}