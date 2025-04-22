import React, { useState } from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ui', name: 'UI/UX' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'OS scheduling Algorithm Simulation',
      category: 'web',
      image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A full-featured website where we can viusually see how the OS scheduling Algorithm works.',
      technologies: ['React', 'Node.js', 'JavaScript'],
      demoLink: 'https://os-scheduling-algorithm-simulation.vercel.app/',
      codeLink: 'https://github.com/haider-zaidi/React_project'
    },
    {
      id: 2,
      title: 'Student Record Management System',
      category: 'web',
      image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A productivity application for managing students records.',
      technologies: ['React', 'Redux', 'Firebase'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/haider-zaidi/PHP_Project'
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A mobile application for tracking workouts, setting fitness goals, and monitoring progress.',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    }
    // {
    //   id: 4,
    //   title: 'Financial Dashboard',
    //   category: 'ui',
    //   image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   description: 'A comprehensive financial dashboard with data visualization and analytics features.',
    //   technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com'
    // },
    // {
    //   id: 5,
    //   title: 'Travel Booking Platform',
    //   category: 'web',
    //   image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   description: 'A platform for booking travel accommodations, flights, and experiences.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com'
    // },
    // {
    //   id: 6,
    //   title: 'Portfolio Design System',
    //   category: 'ui',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   description: 'A design system and component library for creating consistent user interfaces.',
    //   technologies: ['React', 'Storybook', 'Styled Components'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com'
    // }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;