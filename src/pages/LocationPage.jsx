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
              Die neue Adresse lautet Am Zoll- und Binnenhafen 16, 55120 Mainz. Wir stehen aktuell jedes
              Wochenende am Mainzer Zollhafen von 17 – 21 Uhr.
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
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Standort</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    Am Zoll- und Binnenhafen 16<br />
                    55120 Mainz
                  </p>
                </div>
              </div>

              <div className="location-detail">
                <div className="icon">
                  <Clock size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Öffnungszeiten</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    Jedes Wochenende: 17 – 21 Uhr<br />
                    am Mainzer Zollhafen
                  </p>
                </div>
              </div>

              <div className="location-detail">
                <div className="icon">
                  <Calendar size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--bg-page)' }}>Gut zu wissen</h3>
                  <p style={{ color: 'rgba(244, 241, 234, 0.8)' }}>
                    Kartenzahlung ab 15 € möglich
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Layout with GDPR check */}
            <div className="map-wrapper fade-in-section is-visible">
              {cookieConsent === 'all' ? (
                <div className="map-container">
                  <iframe
                    src="https://maps.google.com/maps?q=Am%20Zoll-%20und%20Binnenhafen%2016%2C%2055120%20Mainz&z=15&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Joeys Picknick Standort am Mainzer Zollhafen"
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
