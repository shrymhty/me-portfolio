import React from 'react'
import './Contact.css'
import { map_pin, plus_icon } from '../../assets/asset'
import map from "../../assets/map.webp"
import { linkedin, github} from '../../assets/asset'
import { useState, useEffect } from 'react'

const Contact = ({ activeSection }) => {
  const isActive = activeSection === 'contact';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact">
      <div className={`contact-form ${isActive ? 'animate' : ''}`}>
        
        {/* Crosshair 1 */}
        <div className="crosshair one">
          <img src={plus_icon} alt="crosshair" />
        </div>

        {/* Content wrapper */}
        <div className="form-content">
          <p>Get In Touch</p>
          <form className="contact-input">
            <label htmlFor="input-name">Name</label>
            <input type="text" id='input-name' placeholder='Your name' name='input-name'/>

            <label htmlFor="input-email">Email</label>
            <input type="email" placeholder='example@yourmail.com' name='input-email' id='input-email'/>

            <label htmlFor="input-subject">Subject</label>
            <input type="text" name="input-subject" id="input-subject" placeholder='Title'/>

            <label htmlFor="input-message">Message</label>
            <textarea name="input-message" id="input-message" placeholder='Type Here...'></textarea>
          </form>
        </div>

        {/* Crosshair 2 */}
        <div className="crosshair two">
          <img src={plus_icon} alt="crosshair" />
        </div>

      </div>

      <div className="other-details">
        <p><span>Got an idea, a question, or just want to say hi?</span><br/>Feel free to drop me a message.</p>
        <div className="social-links">
          <a 
            className="link"
            href="https://linkedin.com/in/shreyamhty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
            <p>linkedin/shreyamhty</p>
          </a>
          <a 
            className="link"
            href="https://github.com/shrymhty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
            <p>github/shrymhty</p>
          </a>
        </div>
        <div className="link">
            <img src={map_pin} alt="" />
            <p>Bengaluru, Karnataka<br/>{time.toLocaleTimeString()}</p>
          </div>
        <img src={map} alt="" className='map'/>
      </div>
    </div>
  )
}

export default Contact
