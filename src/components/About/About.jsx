import React from 'react'
import './About.css'
import '../utils/pixel-canvas.js'
import {tool, blocks, code} from "../../assets/asset";

const About = () => {
  return (
    <div className='about'>
      <div className="text">
        Hi, I'm Shreya. I am currently working as a software engineer at Morgan Stanley.
      </div>
      <div className="skills">
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
          <img className="card-text" src={code} alt="" />
        </div>
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25" data-colors="#e0f2fe, #7dd3fc, #0ea5e9"></pixel-canvas>
          <img className="card-text" src={blocks} alt="" />
        </div>
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25" data-colors="#fecdd3, #fda4af, #e11d48"></pixel-canvas>
          <img className="card-text" src={tool} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About