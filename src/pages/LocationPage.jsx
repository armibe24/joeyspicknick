import React, { useEffect } from 'react';
import { MapPin, Clock, Calendar, Shield } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function LocationPage({ cookieConsent, onAcceptAllCookies }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.05 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="location-page" ref={ref}>
      <section className="locations">
        <div className="section-inner">
          <div className="align-center">
            <div className="section-label align-center">Unser Standort</div>
            <h1 className="section-title serif">Wo du uns findest</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Unsere feste Base befindet sich in Mainz. Von hier aus starten unsere Picknick-Kisten-Abenteuer.
              Hol deine Bestellung ab oder finde heraus, an welchen Terminen wir für Events unterwegs sind.
            </p>
          </div>

          <div className="location-content">
            {/* Flat Premium Double-Border Card */}
            <div className="premium-card fade-in-section is-visible" style={{ background: 'var(--bg-dark)', color: 'var(--bg-page)' }}>
              <div className="location-detail">
                <div className="icon">
                  <MapPin size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Base Koordinaten</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    Am Winterhafen 1<br />
                    55131 Mainz
                  </p>
                </div>
              </div>

              <div className="location-detail">
                <div className="icon">
                  <Clock size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Abholzeiten</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    Mittwoch – Sonntag: 11:30 – 19:30 Uhr<br />
                    Montag & Dienstag: Ruhetag
                  </p>
                </div>
              </div>

              <div className="location-detail">
                <div className="icon">
                  <Calendar size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Saison 2026</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    April bis Oktober:<br />
                    Täglich frische Körbe auf Vorbestellung
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Layout with GDPR check */}
            <div className="map-wrapper fade-in-section is-visible">
              {cookieConsent === 'all' ? (
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.912349012356!2d8.283123456789012!3d50.00012345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd96e382f6e91f%3A0xe5a3c10a1bd6b510!2sAm%20Winterhafen%201%2C%2055131%20Mainz!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Joeys Picknick Base Mainz Standortkarte"
                  ></iframe>
                </div>
              ) : (
                <div className="map-cookie-notice">
                  <Shield size={44} />
                  <h3 className="serif" style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>Karteninhalt blockiert</h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(56, 34, 15, 0.75)', maxWidth: '350px' }}>
                    Um den interaktiven Standort-Service von Google Maps zu nutzen, stimme bitte den Marketing-Cookies zu.
                  </p>
                  <button onClick={onAcceptAllCookies} className="btn-primary">
                    Karte aktivieren & zustimmen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
