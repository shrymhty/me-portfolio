import React from 'react'
import './Navbar.css'

const Navbar = () => {

  

  return (
    <div className='navbar'>
      <ul className='nav-links'>
        <li className='glitch' data-text="Home"><a href="#home">Home</a></li>
        <li className='glitch' data-text="About"><a href="#about">About</a></li>
        <li className='glitch' data-text="My Works"><a href="#projects">My Works</a></li> 
        <li className='glitch' data-text="Contact"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar