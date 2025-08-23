import React, { useState } from 'react'
import './Home.css'
import TextScramble from '../TextScramble/TextScramble'
import Halftone from '../Halftone/Halftone'
import MousePosition from '../utils/MousePosition'

const Home = () => {

  const phrases = [
      'developer',
      'engineer',
      'data scientist',
      'designer'
    ];

  return (
    <div className='home'>
      <div className="left">
        <div className='my-name'>
          <span className="glitch-layer" data-text="SHREYA">SHREYA</span>&nbsp;
          <span className="glitch-layer" data-text="MOHANTY">MOHANTY</span>
        </div>
        <p className='scramble-text'><TextScramble phrases={phrases} /></p>
      </div>
      <div className="right">
        <Halftone />
      </div>
    </div>
  )
}

export default Home