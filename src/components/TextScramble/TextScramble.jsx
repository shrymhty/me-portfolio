import React, { useEffect, useRef } from 'react'
import './TextScramble.css'

class TextScrambleEngine {
    constructor(el) {
        this.el = el;
        this.chars= '01{}[]<>+-_=*/%$#@!&^________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i<length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 80);
            const end = start + Math.floor(Math.random() * 80);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        
        // Skip every other frame to slow scrambling effect
        if (this.frame % 5 !== 0) {
            this.frame++;
            this.frameRequest = requestAnimationFrame(this.update);
            return;
        }

        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.1) {
                char = this.randomChar();
                this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
        this.resolve();
        } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const TextScramble = ({phrases}) => {
    // const phrases = [
    //   'developer',
    //   'engineer',
    //   'data scientist',
    //   'designer'
    // ];

    const elRef = useRef(null);

    useEffect(() => {
        const fx = new TextScrambleEngine(elRef.current);
        let counter = 0;

        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 1000);
            });
            counter = (counter + 1) % phrases.length;
        };
        next();

        return () => cancelAnimationFrame(fx.frameRequest);
    }, [])

  return <span className="text" ref={elRef}></span>;
}

export default TextScramble