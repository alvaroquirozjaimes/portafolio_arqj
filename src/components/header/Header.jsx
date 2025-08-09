import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">PORTAFOLIO ARQJ</div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#sobre-mi" onClick={toggleMenu}>Sobre mí</a></li>
          <li><a href="#tecnologias" onClick={toggleMenu}>Tecnologías</a></li>
          <li><a href="#formacion" onClick={toggleMenu}>Formación</a></li>
          <li><a href="#experiencia" onClick={toggleMenu}>Experiencia</a></li>
          <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
        </ul>
        <button className="mobile-menu" onClick={toggleMenu}>☰</button>
      </nav>
    </header>
  );
};

export default Header;