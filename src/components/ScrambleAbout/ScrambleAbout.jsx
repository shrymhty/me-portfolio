import React, { useEffect, useState } from "react";

const letters = '01{}[]<>+-_=*/%$#@!&^________';

const ScrambleText = ({ text, trigger, isDefault, speed = 20 }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (isDefault || !trigger) {
      // If it's the default text, just show normally
      setDisplayText(text);
      return;
    }

    let frame = 0;
    let animationFrame;

    const animate = () => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, i) => {
            if (i < frame) return text[i]; // already revealed
            if (Math.random() < 0.1) return text[i]; // 20% chance to show real char early
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      frame++;
      if (frame <= text.length) {
        animationFrame = setTimeout(animate, speed);
      } else {
        setDisplayText(text);
      }
    };

    animate();

    return () => clearTimeout(animationFrame);
  }, [text, trigger, speed]);

  return <span>{displayText}</span>;
};

export default ScrambleText;
