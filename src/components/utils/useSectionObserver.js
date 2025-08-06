import { useEffect } from 'react';

const useSectionObserver = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
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
};

export default useSectionObserver;