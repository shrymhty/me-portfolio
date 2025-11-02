import React, { useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  useEffect(() => {

    const addCornerDecorations = () => {
      const container = document.getElementById("visual-container");
      if (!container) return;
      const corners = [
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ];
      corners.forEach((pos) => {
        const dot = document.createElement("div");
        dot.className = "corner-dot";
        Object.assign(dot.style, pos);
        container.appendChild(dot);
      });
    };


    const setupPulsingGrid = () => {
      const canvas = document.getElementById("pulsing-grid");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const size = 6;
      let time = 0;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < canvas.height; y += size * 8) {
          for (let x = 0; x < canvas.width; x += size * 8   ) {
            const distance = Math.sqrt(
              (x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2
            );
            const wave = Math.sin(distance * 0.05 - time * 3) * 0.5 + 0.5;
            const opacity = 0.5 + Math.sin(time * 2 + distance * 0.05) * 0.3;
            ctx.fillStyle = `rgba(100, 255, 255, ${opacity})`;
            ctx.fillRect(x, y, size, size);
          }
        }
        time += 0.02;
        requestAnimationFrame(animate);
      };
      animate();
    };

    setupPulsingGrid();
    addCornerDecorations();

  }, []);

  return (
    <div id="visual-container">
      <canvas id="pulsing-grid" width="180" height="180"></canvas>
    </div>
  )
};

export default LoadingScreen;
