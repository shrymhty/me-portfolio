import React from 'react'
import './Contact.css'
import { useState, useEffect } from 'react';

const Contact = () => {

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
      <div className='contact-div'>
        <div className="contact-terminal">
          <p className="term-header">comms_terminal.exe</p>
          <div className="terminal-body">
            <div className="ascii-title">
              {/* Get In Touch */}
              <div className="word">
                <pre>
                 &nbsp;_____<br/>
                 / ____|<br/>
                | |  _<br/>
                | | |_|<br/>
                | |__||<br/>
                 \_____|
              </pre>
              <pre>
                &nbsp;_____ <br/>
                |  ___|<br/>
                | |__  <br/>
                |  __| <br/>
                | |___ <br/>
                |_____|<br/>
              </pre>    
              <pre>
                &nbsp;_______ <br/>
                |__   __|<br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;|_|
              </pre>
              </div>
              <div className="word">
                <pre>
                  &nbsp;_____<br/>
                  |_   _|<br/>
                  &nbsp;&nbsp;| |  <br/>
                  &nbsp;&nbsp;| |  <br/>
                  &nbsp;_| |_<br/>
                  |_____| 
                </pre>
                <pre>
                  &nbsp;_   _ <br />
                  | \ | |<br />
                  |  \| |<br />
                  | . ` |<br />
                  | |\  |<br />
                  |_| \_| <br />
                </pre>
              </div>
              <div className="word">
                <pre>
                &nbsp;_______ <br/>
                |__   __|<br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;| |   <br/>
                  &nbsp;&nbsp;&nbsp;|_|
                </pre>
                <pre>
                  &nbsp;____ <br />
                 / __ \ <br />
                ||  ||<br />
                ||  ||<br />
                ||__||<br />
                 \____/   
                </pre>
                <pre>
                  &nbsp;_    _ <br />
                  | |  | |<br />
                  | |  | |<br />
                  | |  | |<br />
                  | |__| |<br />
                  &nbsp;\____/  
                </pre>
                <pre>
                  &nbsp;_____ <br />
                  / ____|<br />
                 | |     <br />
                 | |     <br />
                 | |___ <br />
                  \_____| 
                </pre>
                <pre>
                  &nbsp;_    _ <br />
                  | |  | |<br />
                  | |__| |<br />
                  |  __  |<br />
                  | |  | |<br />
                  |_|  |_|
                </pre>
              </div>
            </div>
            <hr />
            <hr />
            <form className="input-form">
              <div className="field">
                <label htmlFor="name">
                  > Name
                </label>
                <div className="input-div">$ <input type="text" name='name' id='input-name' placeholder='enter your name' required/></div>
              </div>
              <div className="field">
                <label htmlFor="email">
                  > Email
                </label>
                  <div className="input-div">
                    $ <input type="email" name="email" id="input-email" placeholder='enter your email' required/>
                  </div>
              </div>
              <div className="field">
                <label htmlFor="subject">
                  > Subject
                </label>
                <div className="input-div">
                  $ <input type="text" name='subject' id='input-subject' placeholder='type here..' required/>
                </div>
              </div>
              <div className="feild">
                <label htmlFor="message">
                  > Message
                </label>
                <div className="input-div">
                  $ <textarea name="message" id="input-message" required placeholder='enter your message'></textarea>
                </div>
              </div>
              <button className="submit-btn" type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="time">Bengaluru, Karnataka<br/>{time.toLocaleTimeString()}</div>
        <p>Made by Shreya Mohanty <br />Copyright © 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Contact