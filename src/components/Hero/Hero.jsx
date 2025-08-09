import React from 'react';
import './Hero.css';
import profileImage from '../../assets/perfil.jpeg'; // Asegúrate de que la imagen esté en esta ruta

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Álvaro Rafael Quiroz Jaimes</h1>
            <h2>DESARROLLADOR FULL-STACK</h2>
            <p>
              Soy un desarrollador apasionado por crear soluciones digitales innovadoras, funcionales y centradas en el usuario. 
              Mi experiencia en distintas capas del desarrollo web me permite diseñar y optimizar sistemas completos, garantizando 
              calidad, escalabilidad y buen rendimiento. Disfruto trabajar en equipo, aprender constantemente y asumir desafíos 
              que impulsen el crecimiento personal y de los proyectos.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span>📍</span>
                <span>Huánuco, Perú</span>
              </div>
              <div className="social-buttons">
                <a href="mailto:alvaroquiroz159357@gmail.com" className="social-btn email" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i> Email
                </a>
                <a href="https://wa.me/963780234" target="_blank" className="social-btn whatsapp" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/" target="_blank" className="social-btn linkedin" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="https://github.com/alvaroquirozjaimes" target="_blank" className="social-btn github" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img 
                src={profileImage} 
                alt="Álvaro Rafael Quiroz Jaimes" 
                className="profile-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;