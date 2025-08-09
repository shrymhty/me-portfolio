import React from 'react'
import './Work.css'
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import calicoImg from '../../assets/calico.png'
import cvImg from "../../assets/pocketcv.png"
import examImg from "../../assets/paper.png"
import { icons } from '../../assets/asset.js';

 const projects = [
    {
      id: 1,
      title: "Calico",
      description: "🧶 Calico is a clean, handcrafted eCommerce experience tailored for showcasing and selling handmade crochet products. Designed with care for both aesthetics and usability, Calico displays the crochet creations beautifully, manages orders seamlessly, and provides a smooth checkout experience.",
      techStack: ["React", "Node.js", "MongoDB", "Firebase Auth", "Vite", "Express.js"],
      image: calicoImg,
    },
    {
      id: 2,
      title: "PocketCV",
      description: "📄 PocketCV is an intelligent resume builder that leverages Google Gemini to assist users in creating polished, personalized CVs. Designed for speed and clarity, it offers live editing, modern templates, and AI-generated content suggestions tailored to job roles and industries.",
      techStack: ['React', 'Node.js', 'Gemini API', 'Vite'],
      image: cvImg
    },
    {
      id: 3,
      title: "Enhancing Exam Preparation through Topic Modelling and Key Topic Identification",
      description: "📚 This project focuses on improving exam preparation strategies by utilizing topic modeling and key topic identification techniques. By analyzing past exam papers and identifying key topics, students can better focus their study efforts and improve their performance.",
      techStack: ['Python', 'PyTorch', 'OpenCV', "Jupyter"],
      image: examImg
    }
];

const Work = () => {

  const [activeProject, setActiveProject] = useState(projects[0].id);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setActiveProject(Number(id));
          }
        });
      },
      {threshold: 0.6}
    );
    
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const current = projects.find(p => p.id === activeProject);

  return (
    <div className='project'>
      <div className="section-title">
        <p>Here are some of my recent projects that I have worked on.</p>
      </div>
      <div className="project-showcase">
        <div className="left-panel">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id} 
            ref={(el) => (itemRefs.current[index] = el)} 
            data-id={project.id}
          >
            <img src={project.image} alt={project.title} className='proj-image'/>
          </div>
        ))}
      </div>
      <div className="right-panel">
        <div 
          className="project-details fade"
          key={current.id}
        >
          <p className='proj-title'>{current.title}</p>
          <p className='proj-desc'>{current.description}</p>
          <div className='tech-stack'>
            <div className="icons">
              {current.techStack.map((tech, i) => (
                <img 
                  key={i} 
                  src={icons[tech]} 
                  alt={tech} 
                  title={tech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Work