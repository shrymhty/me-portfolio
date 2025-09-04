import React from 'react'
import './Work.css'
import calico from '../../assets/calico.png'
import pocketCV from "../../assets/pocketcv.png"
import paper from "../../assets/paper.png"
import calico_phone from "../../assets/calico-phone.jpg"
import pocketcv_phone from "../../assets/pocketcv-phone.jpg"
import paper_2 from "../../assets/paper_2.jpg"
import { icons } from '../../assets/asset';

const Work = () => {

  const project_list = [
    {
      title: "Calico",
      image: calico,
      description: "Calico is a clean, handcrafted eCommerce experience tailored for showcasing and selling handmade crochet products. Designed with care for both aesthetics and usability, Calico displays the crochet creations beautifully, manages orders seamlessly, and provides a smooth checkout experience.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Vite", "Postman"]
    },
    {
      title: "PocketCV",
      image: pocketCV,
      description: "PocketCV is an intelligent resume builder that leverages Google Gemini to assist users in creating polished, personalized CVs. Designed for speed and clarity, it offers live editing, modern templates, and AI-generated content suggestions tailored to job roles and industries.",
      tech: ["React", "Vite", "Google Gemini", "NPM"]
    },
    {
      title: "Enhancing Exam Preparation through Topic Modelling and Key Topic Identification",
      image: paper,
      description: "This project improves exam preparation by using topic modeling to identify key topics from past papers, helping students focus their study and boost performance.",
      tech: ["Python", "Jupyter", "PyTorch", "OpenCV"]
    }
  ];
  

  return (
    <div className="work-div" id='projects'>
      <div className="work-heading">
        <p>My Works</p>
      </div>
      <div className={"scroll-item"}>
        <div className="calico">
          <div className="images">
            <img src={project_list[0].image} alt={project_list[0].title} className='desktop-image'/>
            <img src={calico_phone} alt={project_list[0].title} className='phone-image'/>
          </div>
          <div className="description">
            <div className="project-title">{project_list[0].title}</div>
            <p className='proj-desc'>{project_list[0].description}</p>
            <div className="icons">
              {project_list[0].tech.map((tech, index) => (
                <div className="icon">
                  <img src={icons[tech]} alt={tech} key={index} className='tech-icon' title={tech}/>
                  <div className="tech-name">{tech}</div>
                </div>
              ))}
            </div>
            <div className="proj-links">
              <a href="https://shopcalico.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      </div>
      <div className={"scroll-item"}>
        <div className="pocketcv">
          <div className="images">
            <img src={project_list[1].image} alt={project_list[1].title} className='desktop-image'/>
            <img src={pocketcv_phone} alt={project_list[1].title} className='phone-image'/>
          </div>
          <div className="description">
            <div className="project-title">{project_list[1].title}</div>
            <p className='proj-desc'>{project_list[1].description}</p>
            <div className="icons">
              {project_list[1].tech.map((tech, index) => (
                <div className="icon">
                  <img src={icons[tech]} alt={tech} key={index} className='tech-icon' title={tech}/>
                  <div className="tech-name">{tech}</div>
                </div>
              ))}
            </div>
            <div className="proj-links">
              <a href="https://pocketcv.netlify.app/" target='_blank' rel='noopener noreferrer'>View Project</a>
              <a href="https://github.com/shrymhty/pocket-cv" target='_blank' rel='noopener noreferrer'>Code</a>
            </div>
          </div>
        </div>
      </div>
      <div className={"scroll-item"}>
        <div className="paper">
          <div className="images paper-images">
            <img src={project_list[2].image} alt={project_list[2].title} className='paper-image'/>
            <img src={paper_2} alt={project_list[2].title} className='paper-image'/>
          </div>
          <div className="description">
            <div className="project-title">{project_list[2].title}</div>
            <p className='proj-desc'>{project_list[2].description}</p>
            <div className="icons">
              {project_list[2].tech.map((tech, index) => (
                <div className="icon">
                  <img src={icons[tech]} alt={tech} key={index} className='tech-icon' title={tech}/>
                  <div className="tech-name">{tech}</div>
                </div>
              ))}
            </div>
            <div className="proj-links">
              <a href="https://www.techscience.com/jai/v6n1/57295" target='_blank' rel='noopener noreferrer'>View Publication</a>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
};

export default Work