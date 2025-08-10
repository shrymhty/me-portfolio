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

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <ul className='nav-links'>
        {navItems.map(({ id, full }) => (
          <li
            className='glitch'
            key={id}
            data-text={full}
            onClick={() => handleNavClick(id)}
            style={{ cursor: 'pointer' }}
          >
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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;
