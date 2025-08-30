import React, { useState, useEffect, useRef } from 'react'
import './Work.css'

const Work = ({activeSection}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const project_list = [
    "Project 1",
    "Project 2",
    "Project 3"
  ]
    
  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.8
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(Number(entry.target.dataset.index))
          setActiveIndex(Number(entry.target.dataset.index))
        }
      })
    }, options)

    const items = containerRef.current.querySelectorAll('.scroll-item')
    items.forEach((item) => observer.observe(item));
  }, [])

  useEffect(() => {
    if (activeSection === "projects") {

      document.body.style.overflow = "hidden";

      const handleWheel = (e) => {
        if (activeIndex === 0 && e.deltaY < 0) {
          document.body.style.overflow = "auto";
        } else if (activeIndex === project_list.length - 1 && e.deltaY > 0) {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
      };

      window.addEventListener("wheel", handleWheel);
      return () => {
        window.removeEventListener("wheel", handleWheel);
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";    // restore
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeSection, activeIndex]);

  useEffect(() => {
    if (activeSection === "projects" && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [activeSection]);



  return (
    <div className="work-div" ref={sectionRef} id='projects'>
      <div className="work-heading">
        <p>My work</p>
      </div>
      <div className="project-scroll" ref={containerRef}>
        {project_list.map((text, i) => (
          <div
            key={i}
            data-index={i}
            className={`scroll-item ${activeIndex === i ? "active" : ""}`}
          >
            {text}
          </div>
        ))}
      </div>
      
    </div>
    
  )
}

export default Work