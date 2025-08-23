import React, { useState } from "react";
import "./About.css";
import "../utils/pixel-canvas.js";
import { tool, blocks, code } from "../../assets/asset";
import ScrambleText from "../ScrambleAbout/ScrambleAbout";

const About = () => {
  const defaultText =
    "Hi, I'm Shreya. I am currently working as a software engineer at Morgan Stanley.";
  const [hoverText, setHoverText] = useState(defaultText);
  const [isScrambling, setIsScrambling] = useState(false);

  const texts = {
    code: "I enjoy solving complex problems and writing clean, efficient code.",
    blocks: "I am a quick learner who thrives in fast-paced, evolving environments.",
    tool: "I enjoy creating tools and learning new technologies to improve my development workflow.",
  };

  return (
    <div className="about">
      <div className="text">
        <ScrambleText
          text={hoverText}
          trigger={isScrambling}
          isDefault={hoverText === defaultText}
        />
      </div>
      <div className="skills">
        <div
          className="card"
          onMouseEnter={() => {
            setHoverText(texts.code);
            setIsScrambling(true);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
            setIsScrambling(true);
          }}
        >
          <pixel-canvas data-gap="10" data-speed="25"></pixel-canvas>
          <img className="card-text" src={code} alt="Code Icon" />
        </div>

        <div
          className="card"
          onMouseEnter={() => {
            setHoverText(texts.blocks);
            setIsScrambling(true);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
            setIsScrambling(true);
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
            setIsScrambling(true);
          }}
          onMouseLeave={() => {
            setHoverText(defaultText);
            setIsScrambling(true);
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
