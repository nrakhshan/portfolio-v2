import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
  return (
    <div id={props.id}>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub w-9/10 lg:w-3/5 max-w-250 h-auto m-auto pt-5 lg:pt-10'>
      PROJECTS</h2>

      <ProjectCard title="Bidesh Beacon" date="2024" sub="Map Application" 
      desc="A GIS application written in C++ 
      using the GTK library and OSM database"
      photo="/photos/mockup.png"
      position="right"
      adjustments="w-[80%] h-auto m-auto py-[2vw]"
      link="./beacon"/>

      <ProjectCard title="Snacktime Slider" date="2023" sub="FPGA Game" 
      desc="An FPGA puzzle game written in Verilog HDL"
      photo="/photos/snackimg.png"
      position="left"
      adjustments="w-[100%] h-auto overflow-hidden m-auto pt-20 px-5 scale-180 -translate-x-35"
      link="./snack"/>

      <ProjectCard title="LegaSeed" date="2019 - 2021" sub="Video Game" 
      desc="A 1-hour puzzle game made in Godot"
      photo="/photos/ggdc.png"
      position="right"
      adjustments="w-[60%] h-auto m-auto py-[1.5vw]"
      link="./legaseed"/>

      <ProjectCard title="Fall Fugitive" date="2024" sub="FPGA Game" 
      desc="An FPGA car-chasing game written in C"
      photo="/photos/fall.png"
      position="left"
      adjustments="w-[100%] h-auto overflow-hidden m-auto p-5 pt-30 scale-150 -translate-x-25"
      link="./fall"/>
    </div>
  )
}

export default Projects
