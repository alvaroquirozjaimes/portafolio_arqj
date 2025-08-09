import React, { useState } from 'react';
import './Technologies.css';

const techItems = [
    { name: 'Java', category: 'backend', icon: 'fab fa-java' },
    { name: 'PHP', category: 'backend', icon: 'fab fa-php' },
    { name: 'Python', category: 'backend', icon: 'fab fa-python' },
    { name: 'Spring Boot', category: 'backend', icon: 'fab fa-java' },
    { name: 'Laravel', category: 'backend', icon: 'fab fa-php' },
    { name: 'Django', category: 'backend', icon: 'fab fa-python' },
    { name: 'Express', category: 'backend', icon: 'fas fa-server' },
    { name: 'REST APIs', category: 'backend', icon: 'fas fa-sync-alt' },
    { name: 'Microservicios', category: 'backend', icon: 'fas fa-cubes' },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node-js' },
    { name: 'React', category: 'frontend', icon: 'fab fa-react' },
    { name: 'Angular', category: 'frontend', icon: 'fab fa-angular' },
    { name: 'HTML', category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS', category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript / TypeScript', category: 'frontend', icon: 'fab fa-js' },
    { name: 'Vue.js', category: 'frontend', icon: 'fab fa-vuejs' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'fas fa-wind' },
    { name: 'Bootstrap', category: 'frontend', icon: 'fab fa-bootstrap' },
    { name: 'Vite', category: 'frontend', icon: 'fas fa-bolt' },
    { name: 'Jest', category: 'frontend', icon: 'fas fa-vial' },
    { name: 'MySQL', category: 'database', icon: 'fas fa-database' },
    { name: 'PostgreSQL', category: 'database', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'database', icon: 'fas fa-database' },
    { name: 'SQL', category: 'database', icon: 'fas fa-database' },
    { name: 'AWS', category: 'deployment', icon: 'fab fa-aws' },
    { name: 'Azure', category: 'deployment', icon: 'fab fa-microsoft' },
    { name: 'DigitalOcean', category: 'deployment', icon: 'fab fa-digital-ocean' },
    { name: 'Vercel', category: 'deployment', icon: 'fas fa-cloud' },
    { name: 'Netlify', category: 'deployment', icon: 'fas fa-cloud' },
    { name: 'GIT', category: 'others', icon: 'fab fa-git-alt' },
    { name: 'GitHub', category: 'others', icon: 'fab fa-github' },
    { name: 'Figma', category: 'others', icon: 'fab fa-figma' },
    { name: 'Docker', category: 'others', icon: 'fab fa-docker' },
    { name: 'SCRUM', category: 'others', icon: 'fas fa-users' },
    { name: 'Jira', category: 'others', icon: 'fab fa-jira' },
    { name: 'Trello', category: 'others', icon: 'fab fa-trello' },
    { name: 'Kanban', category: 'others', icon: 'fas fa-stream' },
];

const Technologies = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredItems = filter === 'all'
        ? techItems
        : techItems.filter(item => item.category === filter);

    return (
        <section id="tecnologias" className="section">
            <div className="container">
                <h2 className="section-title">Tecnologías</h2>
                <div className="tech-buttons">
                    <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>Todos</button>
                    <button onClick={() => handleFilterChange('frontend')} className={filter === 'frontend' ? 'active' : ''}>Frontend</button>
                    <button onClick={() => handleFilterChange('backend')} className={filter === 'backend' ? 'active' : ''}>Backend</button>
                    <button onClick={() => handleFilterChange('database')} className={filter === 'database' ? 'active' : ''}>Base de Datos</button>
                    <button onClick={() => handleFilterChange('deployment')} className={filter === 'deployment' ? 'active' : ''}>Despliegues</button>
                    <button onClick={() => handleFilterChange('others')} className={filter === 'others' ? 'active' : ''}>Otros</button>
                </div>
                <div className="tech-grid">
                    {filteredItems.map((tech) => (
                        <div key={tech.name} className={`tech-item ${tech.category}`}>
                            <div className="tech-icon"><i className={tech.icon}></i></div>
                            <div>{tech.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;