import React from 'react';
import './Projects.css';

const Projects = () => {
    // Ejemplo de un array de proyectos. Sustituye con tus datos reales.
    const projects = [
        {
            title: "Proyecto 1",
            description: "Descripción del primer proyecto.",
            tags: ["React", "CSS", "Vite"],
            image: "https://via.placeholder.com/400x250",
            link: "#"
        },
        {
            title: "Proyecto 2",
            description: "Descripción del segundo proyecto.",
            tags: ["Node.js", "Express", "MongoDB"],
            image: "https://via.placeholder.com/400x250",
            link: "#"
        },
    ];

    return (
        <section id="proyectos" className="section">
            <div className="container">
                <h2 className="section-title">Proyectos</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="card-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;