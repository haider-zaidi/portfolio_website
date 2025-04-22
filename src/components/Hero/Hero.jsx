import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.classList.add('animate-text');
    }
  }, []);
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 ref={textRef} className="hero-title">
          <div className="title-line">Hello, I'm <span className="highlight">Mohd Haani</span>.</div>
          <div className="title-line">I'm a <span className="highlight">Full Stack Developer</span>.</div>
        </h1>
        <p className="hero-subtitle">Specialized in building exceptional digital experiences</p>
        <div className="hero-buttons">
          <a href="https://docs.google.com/document/d/1bgpQZ03WD5Vcx7LmHtooHbUtST9_g1HY/edit?usp=drivesdk&ouid=118256421608042709413&rtpof=true&sd=true" className="btn btn-primary">Download CV</a>
          <a href="" className="btn btn-outline">Video CV</a>
        </div>
      </div>
      <button className="scroll-down-btn" onClick={scrollToNext}>
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;