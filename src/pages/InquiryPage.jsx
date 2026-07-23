import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function InquiryPage() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.05 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    eventType: 'picknick', // 'picknick', 'catering', 'event', 'sonstiges'
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request submission
    setSubmitted(true);
  };

  return (
    <main className="inquiry-page" ref={ref}>
      <section className="inquiry-section">
        <div className="section-inner">
          <div className="contact-header align-center" style={{ marginBottom: '4rem' }}>
            <div className="section-label align-center">Jetzt anfragen</div>
            <h1 className="section-title serif">Plane dein Event mit uns</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Teile uns deine Wünsche mit. Ob romantisches Picknick zu zweit, Firmenfeier oder privates Catering
              mit unserem Seat Terra Foodtruck – wir machen es unvergesslich.
            </p>
          </div>

          <div className="contact-form-card premium-card fade-in-section is-visible">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Anfrage erfolgreich gesendet!
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', maxWidth: '450px', margin: '0 auto 2rem' }}>
                  Vielen Dank für deine Nachricht. Wir prüfen deine Anfrage und melden uns innerhalb von 24 Stunden bei dir.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Dein Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>E-Mail-Adresse*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="deine.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Telefonnummer</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Deine Nummer (z. B. für Rückfragen)"
                    />
                  </div>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                    <div className="form-group">
                      <label htmlFor="date" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Datum*</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formState.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Personenzahl</label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        value={formState.guests}
                        onChange={handleChange}
                        placeholder="Anzahl Gäste"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="eventType" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Art der Anfrage*</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formState.eventType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1.3rem',
                      border: '2px solid var(--text-main)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-page)',
                      fontFamily: 'Inter',
                      fontSize: '1rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    <option value="picknick">Picknick-Korb Bestellung</option>
                    <option value="catering">Event-Catering (Hochzeit, Feier)</option>
                    <option value="event">Foodtruck Buchung (Seat Terra)</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Deine Nachricht*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Erzähl uns von deinen Plänen: Wünsche, Unverträglichkeiten, gewünschte Boxen..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary full-width" style={{ marginTop: '1rem' }}>
                  Catering-Anfrage absenden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
