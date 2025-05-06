import PCNavBar from "../components/PCNavBar";
import DateTime from "../components/DateTime";
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
  const tags = ["Assembly", "Nios II", "DE1-SoC", "VGA", "Double Buffering", "Hardware Enabled Interrupts"];
  const photos = ["photos/title.png", "photos/car.png", "/photos/gameover.png", "photos/win.png"];

  return (
    <div className="bg-base custom-cursor">
      <PCNavBar/>
      <MobileNavBar/>

      <div className="flex flex-col justify-evenly">
        <div className='font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
            <DateTime/>
        </div>
        <Header photo="/photos/fall.png" title="Fall Fugitive"/>
        <div className="flex justify-evenly">
          <Tags tags={tags}/>
          
          <Body
          parent="beacon"

          p1={<div><p>Fall Fugitive is a top-down car-chasing game where the player is inside a police car 
            in a high-speed chase after some bank robbers. The police car is moving through all 4 lanes and 
            must dodge the other cars while chasing after the getaway vehicle. Along the way, they must 
            collect bags of stolen money that were dropped along the way. There is no time limit or 
            destination - the player wins if they are able to collect 10 bags of money without crashing 
            into any cars (which would result in an immediate loss). There is no penalty for missing a bag of money.</p><br/></div>}

          photos={photos}
          
          p2={<div><br/><p>In this partner project, we collaborated on the game logic, but worked separately on the other 
            components and used GitHub to share our files. My main responsibility was outputting all the 
            components to the VGA. Using C, it was fairly simple to write different functions to &apos;print&apos; 
            different sprites to the screen, and randomize positions and colours using function arguments. 
            What I struggled with was implementing hardware-enabled double buffering, to ensure our game 
            looked smooth and had no tearing. In my initial implementation, some components disappearing 
            when the processor switched the alternating buffer frames.</p>

          <br/><br/><p>It took a lot of debugging and rewriting to finally get it right, but in the process I gained a much 
          deeper understanding of how the processor really worked.</p></div>}/>
        </div>
      </div>
      
    </div>
  );
}