import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc',
      period: 'Jan 2021 - Present',
      description: 'Lead the development of modern web applications using React.js and TypeScript. Mentored junior developers and implemented best practices across multiple projects.',
      responsibilities: [
        'Architected and implemented scalable frontend solutions',
        'Led a team of 4 frontend developers on key projects',
        'Reduced application load time by 40% through performance optimizations',
        'Collaborated with UX/UI designers to implement pixel-perfect designs'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Agency',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed and maintained multiple client websites and web applications. Worked across the stack with Node.js, Express, and React.',
      responsibilities: [
        'Built RESTful APIs and integrated third-party services',
        'Developed responsive websites for various clients across industries',
        'Implemented e-commerce functionality with payment processing',
        'Set up CI/CD pipelines to improve development workflow'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'WebCraft Studio',
      period: 'Jun 2016 - Feb 2018',
      description: 'Started as an intern and quickly moved to a full-time position. Focused on frontend development with HTML, CSS, and JavaScript.',
      responsibilities: [
        'Created responsive layouts from design mockups',
        'Worked with jQuery and vanilla JavaScript for interactive features',
        'Assisted senior developers with various projects',
        'Participated in code reviews and agile development processes'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;