import React from 'react'
import './Contact.css'
import { plus_icon } from '../../assets/asset'
import map from "../../assets/map.webp"

const Contact = ({ activeSection }) => {
  const isActive = activeSection === 'contact';

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
          <div className="link">
            <img src="" alt="" />
            <p>Linkedin</p>
          </div>
          <div className="link">
            <img src="" alt="" />
            <p>GitHub</p>
          </div>
          <div className="link">
            <img src="" alt="" />
            <p>Instagram</p>
          </div>
          <div className="link">
            <img src="" alt="" />
            <p>LeetCode</p>
          </div>
        </div>
        <img src={map} alt="" className='map'/>
      </div>
    </div>
  )
}

export default Contact
