import React from 'react'
import './About.css'
import '../utils/pixel-canvas.js'

const About = () => {
  return (
    <div className='about'>
      <div className="text">
        Hi, I'm Shreya. I am currently working as a software engineer at Morgan Stanley.
      </div>
      <div className="skills">
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
          {/* <div className="card-text">code</div> */}
          <svg className="card-text" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 256 256">
            <path d="M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"></path>
          </svg>
        </div>
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25" data-colors="#e0f2fe, #7dd3fc, #0ea5e9"></pixel-canvas>
          <div className="card-text">design</div>
        </div>
        <div className="card">
          <pixel-canvas data-gap="10" data-speed="25" data-colors="#fecdd3, #fda4af, #e11d48"></pixel-canvas>
          <div className="card-text">development</div>
        </div>
      </div>
    </div>
  )
}

export default About