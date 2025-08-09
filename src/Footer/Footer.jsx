import React from 'react';
import './Footer.css';

const PAGE_ID = 'alvaroquirozjaimes.github.io.PORTAFOLIO_MEJORA'; // cámbialo si quieres otro contador

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} Álvaro Rafael Quiroz Jaimes. Todos los derechos reservados.
        </p>
        <img
          className="views-badge"
          src={`https://visitor-badge.laobi.icu/badge?page_id=${encodeURIComponent(PAGE_ID)}`}
          alt="Contador de visitas"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </footer>
  );
};

export default Footer;
