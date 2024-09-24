import React from 'react';
import projectData from './projectData';
import './css/Projects.css';

 const Projects = () => {
  const getTechClass = (tech) => {
    switch (tech.toLowerCase()) {
      case 'javascript':
        return 'tech-javascript';
      case 'html':
        return 'tech-html';
      case 'css':
        return 'tech-css';
      case 'react':
        return 'tech-react';
      case 'api':
        return 'tech-api';
      case 'pwa':
        return 'tech-pwa';
      default:
        return 'tech-default';
    }
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <div className={`technology-container ${getTechClass(tech)}`} key={techIndex}>
                  <div className="tech-div">{tech}</div>
                </div>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
            <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
