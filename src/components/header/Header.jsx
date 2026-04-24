import React, { useEffect, useState } from 'react';
import './Header.css';

const SECTION_IDS = [
  'inicio','sobre-mi','tecnologias','formacion','experiencia','proyectos','contacto'
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('inicio');

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(v => !v);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.55, 0.75] }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const onLinkClick = (id) => { setActiveId(id); closeMenu(); };

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav" role="navigation" aria-label="Principal">
        {/* CAMBIO: nombre real en lugar de "PORTAFOLIO ARQJ" */}
        <div className="logo">
          <span className="logo-name">Álvaro Quiroz</span>
          <span className="logo-dot">.</span>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="main-menu">
          {SECTION_IDS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
                onClick={() => onLinkClick(id)}
              >
                {{ 'inicio':'Inicio','sobre-mi':'Sobre mí','tecnologias':'Tecnologías',
                   'formacion':'Formación','experiencia':'Experiencia',
                   'proyectos':'Proyectos','contacto':'Contacto' }[id]}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="main-menu"
          aria-expanded={isOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`backdrop ${isOpen ? 'show' : ''}`} onClick={closeMenu} aria-hidden={!isOpen} />
    </header>
  );
};

export default Header;
