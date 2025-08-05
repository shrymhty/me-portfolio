import React from 'react'
import './Home.css'
import imgSrc from '../../assets/m3.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <div className='my-name'>
          <span className="glitch-layer" data-text="SHREYA">SHREYA</span>&nbsp;
          <span className="glitch-layer" data-text="MOHANTY">MOHANTY</span>
        </div>
        <p className='scramble-text'>Web Developer</p>
      </div>
      <div className="right">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Home