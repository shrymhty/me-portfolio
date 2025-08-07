// import React, { useEffect, useState } from 'react'
// import './Navbar.css'

// const Navbar = ({ activeSection }) => {

//   const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 750);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const renderLabel = (id, full) => {
//     if (!isMobile) return full; // Desktop
//     return activeSection === id ? full : full[0];
//   }

//   return (
//     <div className='navbar'>
//       <ul className='nav-links'>
//         <li className='glitch' data-text={renderLabel('home', 'Home')}>
//           <a href="#home">{renderLabel('home', 'Home')}</a>
//         </li>
//         <li className='glitch' data-text={renderLabel('about', 'About')}>
//           <a href="#about">{renderLabel('about', 'About')}</a>
//         </li>
//         <li className='glitch' data-text={renderLabel('projects', 'My Works')}>
//           <a href="#projects">{renderLabel('projects', 'My Works')}</a>
//         </li>
//         <li className='glitch' data-text={renderLabel('contact', 'Contact')}>
//           <a href="#contact">{renderLabel('contact', 'Contact')}</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', full: 'Home' },
    { id: 'about', full: 'About' },
    { id: 'projects', full: 'My Works' },
    { id: 'contact', full: 'Contact' }
  ];

  return (
    <div className='navbar'>
      <ul className='nav-links'>
        {navItems.map(({ id, full }) => (
          <li className='glitch' key={id} data-text={full}>
            <a href={`#${id}`}>
              {isMobile ? (
                <>
                  <span className={`label ${activeSection === id ? 'fade-out' : 'fade-in'}`}>
                    {full[0]}
                  </span>
                  <span className={`label ${activeSection === id ? 'fade-in' : 'fade-out'}`}>
                    {full}
                  </span>
                </>
              ) : (
                <span className="label">{full}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;
