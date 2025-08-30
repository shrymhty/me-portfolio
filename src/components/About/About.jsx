import React, { useState, useEffect } from "react";
import "./About.css";
import "../utils/pixel-canvas.js";
import { tool, blocks, code } from "../../assets/asset";

const About = () => {
  const defaultText =
    "Hi, I'm Shreya. I am currently working as a software engineer at Morgan Stanley.";
  const [hoverText, setHoverText] = useState(defaultText);
  const [displayText, setDisplayText] = useState("");
  

  useEffect(() => {
    // initial: underscores for letters, spaces remain spaces
    let current = hoverText
      .split("")
      .map((ch) => (ch === " " ? " " : "_"))
      .join("");
    setDisplayText(current);

    // list of indices we can reveal (skip spaces)
    let indices = hoverText
      .split("")
      .map((ch, i) => (ch === " " ? null : i))
      .filter((i) => i !== null);

    let interval = setInterval(() => {
      if (indices.length === 0) {
        clearInterval(interval);
        return;
      }

      // pick random unrevealed index
      const randomIndex = Math.floor(Math.random() * indices.length);
      const charIndex = indices.splice(randomIndex, 1)[0];

      // reveal that letter
      let chars = current.split("");
      chars[charIndex] = hoverText[charIndex];
      current = chars.join("");
      setDisplayText(current);
    }, 10);

    return () => clearInterval(interval);
  }, [hoverText]);


  const texts = {
    code: "I enjoy solving complex problems and writing clean, efficient code.",
    blocks: "I am a quick learner who thrives in fast-paced, evolving environments.",
    tool: "I enjoy creating tools and learning new technologies to improve my development workflow.",
  };

  return (
    <div className="about">
      <div className="text">
        <span className="fade-text">{displayText}</span> 
      </div>
      <div className="skills">
        <div
          className="card"
          onMouseEnter={() => {
            setHoverText(texts.code);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
          }}
        >
          <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
          <img className="card-text" src={code} alt="Code Icon" />
        </div>

        <div
          className="card"
          onMouseEnter={() => {
            setHoverText(texts.blocks);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
          }}
        >
          <pixel-canvas
            data-gap="10"
            data-speed="25"
            data-colors="#e0f2fe, #7dd3fc, #0ea5e9"
          ></pixel-canvas>
          <img className="card-text" src={blocks} alt="Blocks Icon" />
        </div>

        <div
          className="card"
          onMouseEnter={() => {
            setHoverText(texts.tool);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
          }}
        >
          <pixel-canvas
            data-gap="10"
            data-speed="25"
            data-colors="#fecdd3, #fda4af, #e11d48"
          ></pixel-canvas>
          <img className="card-text" src={tool} alt="Tool Icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
