import React, { useState, useMemo } from 'react';
import './Technologies.css';

const techItems = [
  // Backend
  { name: 'Java',               category: 'backend',  icon: 'fab fa-java' },
  { name: 'PHP',                category: 'backend',  icon: 'fab fa-php' },
  { name: 'Python',             category: 'backend',  icon: 'fab fa-python' },
  { name: 'Spring Boot',        category: 'backend',  icon: 'fab fa-java' },
  { name: 'Laravel',            category: 'backend',  icon: 'fab fa-php' },
  { name: 'Django',             category: 'backend',  icon: 'fab fa-python' },
  { name: 'Express',            category: 'backend',  icon: 'fas fa-server' },
  { name: 'REST APIs',          category: 'backend',  icon: 'fas fa-sync-alt' },
  { name: 'Microservicios',     category: 'backend',  icon: 'fas fa-cubes' },
  { name: 'Node.js',            category: 'backend',  icon: 'fab fa-node-js' },

  // Frontend
  { name: 'React',                  category: 'frontend', icon: 'fab fa-react' },
  { name: 'Angular',                category: 'frontend', icon: 'fab fa-angular' },
  { name: 'HTML',                   category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS',                    category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript / TypeScript',category: 'frontend', icon: 'fab fa-js' },
  { name: 'Vue.js',                 category: 'frontend', icon: 'fab fa-vuejs' },
  { name: 'Tailwind CSS',           category: 'frontend', icon: 'fas fa-wind' },
  { name: 'Bootstrap',              category: 'frontend', icon: 'fab fa-bootstrap' },
  { name: 'Vite',                   category: 'frontend', icon: 'fas fa-bolt' },
  { name: 'Jest',                   category: 'frontend', icon: 'fas fa-vial' },
  { name: 'React Testing Library',  category: 'frontend', icon: 'fas fa-vials' },
  { name: 'Figma',                  category: 'frontend', icon: 'fab fa-figma' },

  // Base de datos
  { name: 'MySQL',        category: 'database', icon: 'fas fa-database' },
  { name: 'PostgreSQL',   category: 'database', icon: 'fas fa-database' },
  { name: 'Oracle SQL',   category: 'database', icon: 'fas fa-database' },
  { name: 'MongoDB',      category: 'database', icon: 'fas fa-leaf' },
  { name: 'Azure',        category: 'database', icon: 'fab fa-microsoft' },

  // Despliegues
  { name: 'Railway',  category: 'deployment', icon: 'fas fa-cloud-upload-alt' },
  { name: 'Heroku',   category: 'deployment', icon: 'fas fa-cloud' },
  { name: 'Firebase', category: 'deployment', icon: 'fas fa-fire' },
  { name: 'Vercel',   category: 'deployment', icon: 'fas fa-rocket' },

  // Otros
  { name: 'Docker',      category: 'others', icon: 'fab fa-docker' },
  { name: 'Kubernetes',  category: 'others', icon: 'fas fa-dharmachakra' },
  { name: 'Git',         category: 'others', icon: 'fab fa-git-alt' },
  { name: 'GitHub',      category: 'others', icon: 'fab fa-github' },
  { name: 'Bash/Shell',  category: 'others', icon: 'fas fa-terminal' },
];

const categories = [
  { id: 'all',        label: 'Todos' },
  { id: 'frontend',   label: 'Frontend' },
  { id: 'backend',    label: 'Backend' },
  { id: 'database',   label: 'Base de Datos' },
  { id: 'deployment', label: 'Despliegues' },
  { id: 'others',     label: 'Otros' },
];

const Technologies = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = useMemo(
    () => (filter === 'all' ? techItems : techItems.filter(t => t.category === filter)),
    [filter]
  );

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>

        <div className="tech-buttons">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={filter === c.id ? 'active' : ''}
              aria-pressed={filter === c.id}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredItems.map(tech => (
            <div key={tech.name} className={`tech-item ${tech.category}`}>
              <div className="tech-icon">
                <i className={tech.icon} aria-hidden="true" />
              </div>
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
