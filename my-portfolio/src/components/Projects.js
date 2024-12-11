import React from 'react';
import './css/Projects.css';
import memoryLane from './images/memoryLane.png';
import gitHub from './images/github-logo.webp';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing my work and skills.',
      image: gitHub,
      link: 'https://github.com/RiveraSonoely-FS/YYMM-WDV349-RiveraSonoely'
    },
    {
      title: 'Memory Lane',
      description: 'A web blog reflecting on my academic career',
      image: memoryLane,
      link: 'https://github.com/RiveraSonoely-FS/memory-lane'
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;