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

export default function Snack() {
  const tags = ["Verilog", "Quartus Prime", "DE1-SoC", "ModelSim", "Finite State Machine", "Datapath", "VGA"];
  const photos = ["photos/map.png", "/photos/location.png", "photos/night.png"];

  return (
    <div className={`${outfit.variable} ${urbanist.variable} ${lexend.variable} bg-base custom-cursor`}>
      <PCNavBar/>
      <MobileNavBar/>

      <div className="flex flex-col justify-evenly">
        <div className='font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
            <DateTime/>
        </div>
        <Header photo="/photos/snackimg.png" title="Snacktime Slider"/>
        <div className="flex justify-evenly">
            <Tags tags={tags}/>
          
            <Body
            parent="snack"

            p1={<div><p>Snacktime Slider is a puzzle game set inside a vending machine. 
            The player must get the desired snack to the user of the vending machine by moving the other snacks out 
            of the way. Each snack is positioned either horizontally or vertically and its movement is restricted to 
            its row or column. In other words, vertical snacks can only be moved up or down, and horizontal snacks 
            can only be moved left or right. The player can select which snack to move using the switches on the 
            FPGA board, and can then move the snack using two of the buttons on the board.</p><br/></div>}

            photos={photos}
          
            p2={<div><br/><p>In this partner project, a big challenge was scalability. Due to the time constraints of the project, 
            only one level was designed as a proof of concept. However, we wanted our implementation to be able to 
            easily handle new levels without having to design a new FSM and Datapath for each one.</p>

            <br/><br/><p>The way we did this was basing the game logic on a simple 6x6 array representation of the gameboard. 
            Each snack occupies 2 or 3 spots and has a unique ID. Blank spots are represented as 0. When players 
            move the snacks, this simple array is first updated accordingly. Then, a separate module reads the 
            6x6 array and outputs a 16 x 16 px sprite corresponding to each ID to the VGA.</p>

            <br/><br/><p>This level of abstraction meant we didn&apos;t need to worry about the complexity of the sprites when 
            designing an initial setup for a level, or when updating the gameboard with the player&apos;s movements. 
            Additionally, it meant a new level of the same difficulty could easily be implemented by simply 
            switching the 6 x 6 array to a different one that represents the initial setup of a new level. 
            The difficulty can be increased by using a larger initial array such as a 7x7 or 8x8 array, 
            although that would require a few more adjustments to add more snacks and and their corresponding IDs.</p>

            <br/><br/><p>A shortcoming of the current version of this project is that the controls are not provided on 
            the screen, and my partner and I would just explain them verbally to the players. If this game 
            were to be released to a larger audience, it would be paramount to add such instructions, as
            well as a numbering on the snacks to indicate which ID each one corresponds to.</p>
            
            <br/><br/><p> Overall, this project was a valuable experience for learning the methods and challenges in 
            designing FPGA architecture, and working with the various constraints one might encounter 
            in hardware design.</p></div>}/>
        </div>
      </div>
      
    </div>
  );
}