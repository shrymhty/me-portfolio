import React, { useRef, useEffect } from 'react';
import './Halftone.css';
import img from '../../assets/m3.png';

const Halftone = () => {
  const halftoneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = halftoneRef.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Use negative % to "pull" the dots toward the cursor
      const offsetX = -(x / rect.width) * 10;
      const offsetY = -(y / rect.height) * 10;

      el.style.setProperty('--bg-offset-x', `${offsetX}px`);
      el.style.setProperty('--bg-offset-y', `${offsetY}px`);
    };

    const el = halftoneRef.current;
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="halftone" ref={halftoneRef}>
      <img src={img} alt="" />
    </div>
  );
};

export default Halftone;
