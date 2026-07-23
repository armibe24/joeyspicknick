import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Send, CheckCircle } from 'lucide-react';

export default function Inquiry() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate API call
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className={`contact ${inView ? 'in-view' : ''}`} id="anfrage" ref={ref}>
      <div className="section-inner stagger-wrap">
        <div className="contact-header stagger-item">
          <h2 className="section-title serif">
            Lass uns dein
            <br />
            Event planen.
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-form-card stagger-item">
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                <CheckCircle size={56} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                <h3 className="serif" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                  Vielen Dank für deine Anfrage!
                </h3>
                <p style={{ color: 'rgba(56, 34, 15, 0.75)', maxWidth: '400px', lineHeight: '1.6' }}>
                  Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir, um dein Event zu besprechen.
                </p>
                <button
                  className="btn-primary"
                  style={{ marginTop: '2rem' }}
                  onClick={() => setSubmitted(false)}
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only" style={{ display: 'none' }}>Name*</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only" style={{ display: 'none' }}>E-Mail*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="E-Mail*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only" style={{ display: 'none' }}>Nachricht*</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Erzähl uns von deinem Event...*"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary full-width">
                  <Send size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Anfrage Senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
