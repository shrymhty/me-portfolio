import { useEffect } from 'react';
import { useState } from 'react';

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, '', `#${id}`);
          }
        });
      },
      {
        threshold: 0.6, // Adjust this value to control when section is "in view"
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return activeSection;
};

export default useSectionObserver;