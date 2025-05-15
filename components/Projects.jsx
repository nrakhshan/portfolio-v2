import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
  const beacon = ["C++/STL", "GTK", "OSM Database"];
  const snack = ["FPGA", "Verilog", "DE1-SoC"];
  const fugi = ["FPGA", "C", "Embedded Systems"];
  const seed = ["Godot", "Game Development"];

  return (
    <div id={props.id} className='xl:pl-[10%]'>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub w-9/10 lg:w-3/5 max-w-250 h-auto m-auto lg:pt-10'>
      PROJECTS</h2>

      <ProjectCard title="Bidesh Beacon" date="2024" sub="Map Application" 
      desc="A GIS application written in C++ 
      using the GTK library and OSM database"
      photo="/photos/mockup.png"
      position="right"
      tags = {beacon}
      adjustments=""
      link="./beacon"/>

      <ProjectCard title="Fall Fugitive" date="2024" sub="FPGA Game" 
      desc="An FPGA car-chasing game written in C"
      photo="/photos/fugitive.png"
      position="left"
      tags = {fugi}
      adjustments="scale-120 xl:scale-100 translate-y-12"
      link="./fall"/>

      <ProjectCard title="Snacktime Slider" date="2023" sub="FPGA Game" 
      desc="An FPGA puzzle game written in Verilog HDL"
      photo="/photos/snackimg.png"
      position="right"
      tags = {snack}
      adjustments="scale-120 xl:scale-100 translate-y-12"
      link="./snack"/>

      <ProjectCard title="LegaSeed" date="2019 - 2021" sub="Video Game" 
      desc="A 1-hour puzzle game made in Godot"
      photo="/photos/ggdc.png"
      position="left"
      tags = {seed}
      adjustments="translate-y-4"
      link="./legaseed"/>
    </div>
  )
}

export default Projects
