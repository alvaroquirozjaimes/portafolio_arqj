import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '' // honeypot (debe quedar vacío)
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbyTFB-42-yMYMa-nlrZeQupegqcKpGq3_spd_fYZvDUR3cmaeMt9MLgbcF_k1CJDDM25A/exec";

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    // Bloquear bots que rellenan el honeypot
    if (formData.company.trim() !== '') {
      setStatus({ type: 'error', msg: '❌ Detección de actividad sospechosa.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Timeout de seguridad
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);

      const body = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message
      }).toString();

      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        signal: controller.signal
      });
      clearTimeout(timer);

      const data = await response.json();
      if (data.result === "success") {
        setStatus({ type: 'success', msg: '✅ Mensaje enviado correctamente.' });
        setFormData({ name: '', email: '', message: '', company: '' });
      } else {
        throw new Error("Respuesta no exitosa del servidor");
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: '❌ Error al enviar el mensaje. Intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-form-container">
          <form id="contactForm" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
            {/* Honeypot invisible (NO quitar) */}
            <div className="hp-wrap" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tunombre@mail.com"
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
                placeholder="Cuéntame sobre tu proyecto o duda…"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'is-loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
              {isSubmitting && <span className="btn-loader" aria-hidden="true" />}
            </button>

            {status.msg && (
              <p
                className={`form-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
