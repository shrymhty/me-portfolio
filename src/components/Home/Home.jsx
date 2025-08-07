import React from 'react'
import './Home.css'
import TextScramble from '../TextScramble/TextScramble'
import Halftone from '../Halftone/Halftone'

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <div className='my-name'>
          <span className="glitch-layer" data-text="SHREYA">SHREYA</span>&nbsp;
          <span className="glitch-layer" data-text="MOHANTY">MOHANTY</span>
        </div>
        <p className='scramble-text'><TextScramble /></p>
      </div>
      <div className="right">
        <Halftone />
      </div>
    </div>
  )
}

export default Home