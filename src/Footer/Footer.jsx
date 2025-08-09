import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Álvaro Rafael Quiroz Jaimes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;