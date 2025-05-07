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
  const tags = ["C++", "STL", "OSM Database", "GTK Library", "Dijkstra's Algorithm", "Travelling Salesman Problem", "UI/UX Design"];
  const photos = ["photos/map.png", "/photos/location.png", "photos/night.png"];

  return (
    <div className={`${outfit.variable} ${urbanist.variable} ${lexend.variable} bg-base custom-cursor`}>
      <PCNavBar/>
      <MobileNavBar/>

      <div className="flex flex-col justify-evenly">
        <div className='font-outfit font-normal ml-auto text-right text-lg py-15 px-10 lg:px-30'>
            <DateTime/>
        </div>
        <Header photo="/photos/mockup.png" title="Bidesh Beacon"/>
        <div className="flex justify-evenly">
          <Tags tags={tags}/>
          
          <Body
          parent="beacon" 

          p1={<div><p>Bidesh Beacon is a map application designed to assist South Asian newcomers 
            with finding resources and utilities to help them settle in a new city. 
            Bidesh is the word for &apos;foreign country&apos; in many South Asian languages, and Beacon 
            is an allusion to one of the integral features of the software - tailored location 
            markers that newcomers may find useful. For example, the locations of bilingual health 
            services or South Asian grocery stores are among the different types of locations we 
            curated for our users. The use of a non-English word also alludes to another important feature, 
            which is the bilingual UI support. Other features include switching between different cities&apos; 
            maps, finding a route between two locations, and switching the UI to night mode.</p><br/></div>}

          photos={photos}
          
          p2={<div><br/><p>The application was written in C++, using the GTK library for the user interface, 
          and the OpenStreetMap database for the map data. To retrieve the data more efficiently, 
          we developed a higher-level API which pre-loaded and categorized information tailored to 
          the map&apos;s features. For the navigation, we used Djikstra&apos;s Algorithm to find shortest paths 
          between two points, taking into account speed limits.</p>

          <br/><br/><p>As a team of South Asian developers who were once newcomers ourselves, we understood 
          the unique challenges immigrants face when navigating a new city. The initial prototype 
          we designed was based on the concept of creating a tool that our families would have benefited 
          from when we were newcomers to the city. To further develop the design, we conducted informal 
          research by consulting South Asian newcomers in our community. We also invited them to test the 
          application, which helped us make improvements to the UI and ensure it was intuitive and 
          accessible.</p>

          <br/><br/><p>This project was created for the UofT Software Design course ECE297, in which we 
          had several technical requirements and tight deadlines to present different stages 
          of the project to our instructors. It was challenging to implement all the features we 
          envisioned due to our time constraints, and some had to be scrapped, and others modified. 
          We evaluated what the most important features were based on input from community members 
          and our instructors, and focused on creating a minimum viable product. For example, due 
          to difficulty finding translators under short notice, we decided to support just 3 major 
          South Asian languages for our initial product. However, the underlying framework is 
          there for us to expand the service in the future.</p>

          <br/><br/><p>Although the product has room for improvement, I believe what we achieved in the time 
          frame we were given shows our passion and commitment towards our mission and our community.</p></div>}/>
        </div>
      </div>
      
    </div>
  );
}