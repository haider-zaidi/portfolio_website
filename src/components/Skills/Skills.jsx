import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'SQL', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'AWS', level: 65 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Teamwork', level: 90 },
    { name: 'Time Management', level: 80 },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="skills-column">
            <h3 className="skills-category">Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category">Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="skills-extra">
              <h4>Other Technologies</h4>
              <div className="tags">
                <span className="tag">Git</span>
                <span className="tag">Docker</span>
                <span className="tag">GraphQL</span>
                <span className="tag">Redux</span>
                <span className="tag">Jest</span>
                <span className="tag">Webpack</span>
                <span className="tag">Sass</span>
                <span className="tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;