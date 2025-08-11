import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import useSectionObserver from './components/utils/useSectionObserver'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

const App = () => {

  const activeSection = useSectionObserver();

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="projects" className="section">
        <Work />
      </div>
      <div id="contact" className="section">
        <Contact activeSection={activeSection}/>
      </div>
    </div>

  )
}

export default App