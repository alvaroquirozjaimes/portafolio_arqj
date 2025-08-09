import React from 'react';
// Si ya tienes las clases .section, .container, .section-title, .timeline, etc.
// en tus CSS globales, no necesitas importar nada extra aquí.
import './EducationExperience.css';


const EducationExperience = () => {
  return (
    <>
      {/* Formación */}
      <section id="formacion" className="section">
        <div className="container">
          <h2 className="section-title">Formación</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Julio 2023 - Abril 2025</div>
                <div className="timeline-title">Magister en Ciberseguridad</div>
                <div className="timeline-subtitle">Universidad Americana de Europa (UNADE)</div>
                <p style={{ textAlign: 'justify' }}>
                  Durante esta maestría he adquirido conocimientos avanzados en ciberseguridad, 
                  incluyendo la protección de redes, sistemas y datos frente a amenazas cibernéticas. 
                  La formación se ha centrado en análisis de vulnerabilidades, gestión de riesgos, 
                  seguridad en redes y aplicaciones, auditorías de seguridad, implementación de políticas 
                  de ciberseguridad, y respuesta ante incidentes. Esta preparación me permite diseñar e 
                  implementar estrategias de defensa sólidas para entornos digitales modernos.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Marzo 2018 - Diciembre 2022</div>
                <div className="timeline-title">Ingeniería de Sistemas</div>
                <div className="timeline-subtitle">Universidad Nacional Hermilio Valdizan (UNHEVAL)</div>
                <p style={{ textAlign: 'justify' }}>
                  Formación integral en el análisis, diseño, desarrollo y gestión de sistemas informáticos. 
                  A lo largo de la carrera adquirí conocimientos en programación, bases de datos, redes, 
                  ingeniería de software, arquitectura de computadoras y gestión de proyectos tecnológicos. 
                  Esta formación me permite abordar soluciones tecnológicas eficientes, integrando herramientas 
                  de software y hardware para optimizar procesos en organizaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="section">
        <div className="container">
          <h2 className="section-title">Experiencia</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Septiembre 2024 - Marzo 2025</div>
                <div className="timeline-title">Desarrollador full-stack</div>
                <div className="timeline-subtitle">INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO HAQUIRA</div>
                <p style={{ textAlign: 'justify' }}>
                  Como desarrollador Full Stack, participé en la mejora y optimización del sistema de intranet corporativa, 
                  fortaleciendo la comunicación y colaboración interna. Desarrollé un sistema de control de inventario de equipos, 
                  que permitió una gestión eficiente y un seguimiento preciso de los activos tecnológicos. Además, diseñé e 
                  implementé soluciones para la automatización de procesos en diversas áreas, logrando una mayor eficiencia 
                  operativa y reducción de tiempos en tareas administrativas.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Abril 2022 - Octubre 2024</div>
                <div className="timeline-title">Asistente de Sistemas</div>
                <div className="timeline-subtitle">Cooperativa de Ahorro y Créditos San Francisco de Huánuco LTDA 289</div>
                <p style={{ textAlign: 'justify' }}>
                  Como Asistente de Sistemas, administré bases de datos Oracle y gestioné el sistema core financiero, asegurando 
                  su óptimo funcionamiento y disponibilidad. Desarrollé y mantuve aplicaciones de consulta y cobranza, participando 
                  activamente en todo su ciclo de vida. Implementé políticas de seguridad perimetral utilizando Fortinet, 
                  fortaleciendo la protección de los sistemas. Además, colaboré en proyectos de automatización de procesos internos, 
                  contribuyendo a mejorar la eficiencia operativa y la seguridad de la infraestructura tecnológica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationExperience;
