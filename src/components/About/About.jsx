import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="https://i.ibb.co/Z6LypfbD/IMG-20240705-064159.jpg" alt="Mohd Haani" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Mohd Haani, a passionate full-stack developer having interest in building web applications and digital products. I specialize in JavaScript technologies across the stack and have a strong focus on creating exceptional user experiences.
            </p>
            <p>
              My journey in software development began at the Lovely Proffessional University from where I persuing my Computer Science degree. Since then, I've worked on many projects and deliver high-quality, scalable solutions that solve real business problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the mountains. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Mohd Haani</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">haanizaidi420@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Meerut Uttar Pradesh</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value available">Available for hire</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;