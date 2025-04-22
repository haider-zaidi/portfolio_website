import React from 'react';
import './Education.css';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Lovely Proffessional University',
        period: '2022 - 2026',
        description: 'Comprehensive program covering programming fundamentals, algorithms, data structures, and software development methodologies.',
        achievements: ['Dean\'s List', 'Programming Competition Finalist']
      },
    {
      degree: 'Intermediate',
      institution: 'Meerut Public School',
      period: '2019 - 2020',
      description: 'Comprehensive program covering key subjects like Physics,Chemistry,Mathematics.',
      achievements: ['Head Boy of School', 'Maths Olympiad winner']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'Apr 2022',
      credentialId: 'AWS-DEV-12345'
    },
    {
      title: 'Professional Front-End Web Developer',
      issuer: 'Meta',
      date: 'Nov 2021',
      credentialId: 'META-FED-67890'
    },
    {
      title: 'React Advanced Concepts',
      issuer: 'React Training',
      date: 'Mar 2020',
      credentialId: 'RT-ADV-54321'
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-grid">
          <div className="education-column">
            <h3 className="column-title">
              <GraduationCap size={24} />
              <span>Academic Education</span>
            </h3>
            
            <div className="education-list">
              {educationItems.map((item, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h4 className="education-degree">{item.degree}</h4>
                    <span className="education-period">{item.period}</span>
                  </div>
                  <h5 className="education-institution">{item.institution}</h5>
                  <p className="education-description">{item.description}</p>
                  <div className="education-achievements">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement">{achievement}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-column">
            <h3 className="column-title">
              <Award size={24} />
              <span>Certifications</span>
            </h3>
            
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <h4 className="certification-title">{cert.title}</h4>
                  <div className="certification-meta">
                    <div className="certification-issuer">{cert.issuer}</div>
                    <div className="certification-date">{cert.date}</div>
                  </div>
                  <div className="certification-id">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;