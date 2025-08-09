import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyTFB-42-yMYMa-nlrZeQupegqcKpGq3_spd_fYZvDUR3cmaeMt9MLgbcF_k1CJDDM25A/exec";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const formBody = new URLSearchParams(formData).toString();
            const response = await fetch(scriptURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody,
            });

            const data = await response.json();
            if (data.result === "success") {
                setStatus('✅ Mensaje enviado correctamente.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error("Respuesta no exitosa del servidor");
            }
        } catch (error) {
            console.error("Error al enviar email:", error);
            setStatus('❌ Error al enviar el mensaje. Intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="section">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-form-container">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;