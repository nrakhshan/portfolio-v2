import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
  return (
    <div id={props.id}>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub w-9/10 lg:w-3/5 max-w-250 h-auto m-auto pt-5 lg:pt-10'>
      PROJECTS</h2>

      <ProjectCard title="Bidesh Beacon" date="2024" sub="Map Application" 
      desc="A GIS application for South Asian newcomers written in C++ 
      using the GTK library and OSM database"
      photo="/photos/mockup.png"
      link="./beacon"/>

      <ProjectCard title="Snacktime Slider" date="2023" sub="FPGA Game" 
      desc="An FPGA puzzle game written in Verilog HDL"
      photo="/photos/mockup.png"
      link="./beacon"/>
    </div>
  )
}

export default Projects
