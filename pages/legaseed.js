import PCNavBar from "../components/PCNavBar";
import DateTime from "../components/DateTime";
import '../app/globals.css';

import {Outfit, Lexend, Urbanist} from "next/font/google";
import MobileNavBar from "../components/MobileNavBar";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Body from "../components/Body";

import Link from 'next/link'

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
  const tags = ["Godot", "GDScript", "Project Management", "Collaboration", "Leadership", "Cross-Platform Development"];
  const photos = ["photos/1.png", "/photos/2.png", "photos/3.png", "photos/4.png"];

  return (
    <div className={`${outfit.variable} ${urbanist.variable} ${lexend.variable} bg-base custom-cursor`}>
      <PCNavBar/>
      <MobileNavBar/>

      <div className="flex flex-col justify-evenly">
        <div className='font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
            <DateTime/>
        </div>
        <Header photo="/photos/ggdc.png" title="LegaSeed"/>
        <div className="flex justify-evenly">
          <Tags tags={tags}/>
          
          <Body
          parent="beacon"

          p1={<div><p>LegaSeed is an approximately 1-hour long puzzle game about a group of students 
            searching their school for treasure. The name is a play on the words legacy and seed, 
            both of which are related to the mystery the students uncover as they follow the trail of 
            clues leading to the treasure. The game consists of several dialogue scenes making up the 
            story, as well as mini-games presenting a variety of different puzzles the player must 
            solve to help the characters follow the clues.</p><br/></div>}

          photos={photos}
          
          p2={<div><br/><p>The game was created over 2 years during my time as co-president of the Bloor CI Girls 
            Game Development Club (GGDC). My friend and I founded this club as a way to encourage more 
            girls to learn to code, and provide a comfortable and inclusive environment to do so. We 
            planned the production of the game in such a way that aside from the dialogue scenes, the 
            gameplay consisted of mini-games which was each its own self-contained project. This way, 
            we could come up with puzzle games with varying levels of difficulty in implementation, 
            and use these projects to teach our members to code.</p>

          <br/><br/><p>Our entire project was based in an open-source game engine called Godot. Godot has its 
            own language called GDScript which is similar to Python, with clean and simple syntax, 
            so we thought it would be suitable for beginners. Additionally, Godot has an intuitive 
            visual interface to aid with managing sprites, so it was easy for our members to start 
            making simple games right away just by knowing a few basics. We believed teaching coding 
            using games would help with motivation, as seeing a visual result of your hard work is 
            more rewarding than the terminal-based projects that most beginners tend to start out with.</p>

          <br/><br/><p>In my case, it was incredibly rewarding to see my club members grow alongside this project. 
            Although this project certainly strengthened my technical skills, what I value most is what 
            this experience taught me about collaboration, communication, and leadership.</p>

          <br/><br/><p>The game is available for download at   
          <Link href='https://rupalico.itch.io/legaseed' className="text-blue-500"> https://rupalico.itch.io/legaseed.</Link></p></div>}/>
        </div>
      </div>
      
    </div>
  );
}