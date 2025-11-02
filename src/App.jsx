// import React, { useRef } from 'react'
// import { useScroll, animated, useSpring } from '@react-spring/web'
// import Navbar from './components/Navbar/Navbar'
// import './App.css'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Work from './components/Work/Work'
// import Contact from './components/Contact/Contact'
// import useSectionObserver from './components/utils/useSectionObserver'

// const App = () => {
//   // const activeSection = useSectionObserver()
//   // const homeRef = useRef(null)
//   // const aboutRef = useRef(null)

//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const workRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Track scroll progress from top of Home to top of About
//   const { scrollYProgress } = useScroll({
//     container: typeof window !== 'undefined' ? window : undefined,
//     target: homeRef,
//     offset: ['start start', 'end start'],
//   })

//   // Home animation (fade + move up slowly)
//   const homeStyles = useSpring({
//     opacity: scrollYProgress.to([0, 0.7], [1, 0]),
//     y: scrollYProgress.to([0, 1], [0, -300]), // moves up but slower
//     config: { tension: 200, friction: 40 },
//   })

//   // About animation (moves up faster as it comes in)
//   const aboutStyles = useSpring({
//     opacity: scrollYProgress.to([0, 0.3], [0, 1]), // fades in later
//     y: scrollYProgress.to([0, 1], [-20, 0]), // starts lower, slides up quicker
//     config: { tension: 220, friction: 30 },
//   })

//   return (
//     <div>
//       <Navbar activeSection={activeSection} />

//       <div id="home" className="section" ref={homeRef}>
//         <animated.div style={homeStyles}>
//           <Home />
//         </animated.div>
//       </div>

//       <div id="about" className="section" ref={aboutRef}>
//         <animated.div style={aboutStyles}>
//           <About />
//         </animated.div>
//       </div>

//       <div id="projects" className="section">
//         <Work />
//       </div>

//       <div id="contact" className="section">
//         <Contact activeSection={activeSection}/>
//       </div>
//     </div>
//   )
// }

// export default App



import React, { useRef, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import useSectionObserver from './components/utils/useSectionObserver'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

const App = () => {

  // const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const activeSection = useSectionObserver(["home", "about", "projects", "contact"]);


  console.log("Active section:", activeSection);

  // useEffect(() => {
  //   // Simulate loading delay (you can adjust time or tie it to image/data loading)
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //     // Re-enable scrolling after load
  //     document.body.style.overflow = "auto"
  //   }, 2500)

  //   // Prevent scrolling while loading screen is visible
  //   document.body.style.overflow = "hidden"

  //   return () => clearTimeout(timer)
  // }, [])

  // if (isLoading) {
  //   return <LoadingScreen />
  // }

  return (
    <div className='app'>
      <Navbar activeSection={activeSection} />

      <div id="home" className="section" ref={homeRef}>
        <Home />
      </div>

      <div id="about" className="section" ref={aboutRef}>
        <About />
      </div>

      <div id="projects" ref={workRef} >
        <Work />
      </div>

      <div id="contact" className="section" ref={contactRef}>
        <Contact />
      </div>
    </div>
  )
}

export default App