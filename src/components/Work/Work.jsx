import React from 'react'
import './Work.css'
import calico from '../../assets/calico.png'
import pocketCV from "../../assets/pocketcv.png"
import paper from "../../assets/paper.png"
import calico_phone from "../../assets/calico-phone.jpg"
import pocketcv_phone from "../../assets/pocketcv-phone.jpg"
import paper_2 from "../../assets/paper_2.jpg"

const Work = () => {

  const project_list = [
    {
      title: "Calico",
      image: calico,
      description: "Calico is a clean, handcrafted eCommerce experience tailored for showcasing and selling handmade crochet products. Designed with care for both aesthetics and usability, Calico displays the crochet creations beautifully, manages orders seamlessly, and provides a smooth checkout experience.",
    },
    {
      title: "PocketCV",
      image: pocketCV,
      description: "PocketCV is an intelligent resume builder that leverages Google Gemini to assist users in creating polished, personalized CVs. Designed for speed and clarity, it offers live editing, modern templates, and AI-generated content suggestions tailored to job roles and industries.",
    },
    {
      title: "Enhancing Exam Preparation through Topic Modelling and Key Topic Identification",
      image: paper,
      description: "This project improves exam preparation by using topic modeling to identify key topics from past papers, helping students focus their study and boost performance.",
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
        </div>
      </div>
      <div className={"scroll-item"}>
        <div className="pocketcv">
          <div className="images">
            <img src={project_list[1].image} alt={project_list[1].title} className='desktop-image'/>
            <img src={pocketcv_phone} alt={project_list[1].title} className='phone-image'/>
          </div>
        </div>
      </div>
      <div className={"scroll-item"}>
        <div className="paper">
          <div className="images paper-images">
            <img src={project_list[2].image} alt={project_list[2].title} className='paper-image'/>
            <img src={paper_2} alt={project_list[2].title} className='paper-image'/>
          </div>
        </div>
      </div>     
    </div>
    
  )
};

export default Work