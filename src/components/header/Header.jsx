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

  // sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // scrollspy: observa secciones y marca la activa
  useEffect(() => {
    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      entries => {
        // elige la que más área visible tenga
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.55, 0.75] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const onLinkClick = (id) => {
    setActiveId(id);   // feedback inmediato
    closeMenu();
  };

  const headerClass = `header ${isScrolled ? 'is-scrolled' : ''}`;

  return (
    <header className={headerClass}>
      <nav className="nav" role="navigation" aria-label="Principal">
        <div className="logo">PORTAFOLIO ARQJ</div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="main-menu">
          {SECTION_IDS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
                onClick={() => onLinkClick(id)}
              >
                {{
                  'inicio':'Inicio',
                  'sobre-mi':'Sobre mí',
                  'tecnologias':'Tecnologías',
                  'formacion':'Formación',
                  'experiencia':'Experiencia',
                  'proyectos':'Proyectos',
                  'contacto':'Contacto'
                }[id]}
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

      <div
        className={`backdrop ${isOpen ? 'show' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />
    </header>
  );
};

export default Header;
