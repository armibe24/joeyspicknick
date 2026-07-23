import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { MapPin, Clock, Calendar, Shield } from 'lucide-react';

export default function Location({ cookieConsent, onAcceptAllCookies }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={`locations bg-beige ${inView ? 'in-view' : ''}`} id="standort" ref={ref}>
      <div className="section-inner stagger-wrap">
        <div className="section-label stagger-item">Standort & Route</div>
        <h2 className="section-title serif stagger-item">Wo wir kochen</h2>

        <div className="location-content stagger-item">
          {/* Info Card */}
          <div className="location-info-card">
            <h3 className="serif">Unsere Base in Mainz</h3>
            <div className="location-detail">
              <span className="icon">
                <MapPin size={24} />
              </span>
              <span>
                An den Rheinwiesen 1, 55116 Mainz – direkt am Rheinufer, sowie auf ausgewählten
                Food-Märkten im Rhein-Main-Gebiet.
              </span>
            </div>
            <div className="location-detail">
              <span className="icon">
                <Clock size={24} />
              </span>
              <span>
                Folgt uns auf Instagram für spontane Routen-Updates und Special-Events.
              </span>
            </div>
            <div className="location-detail">
              <span className="icon">
                <Calendar size={24} />
              </span>
              <span>
                Exklusiv buchbar für Private Dining, Hochzeiten und Premium-Firmenevents.
              </span>
            </div>
          </div>

          {/* Map Wrapper with DSGVO Guard */}
          <div className="map-wrapper">
            {cookieConsent === 'all' ? (
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5!2d8.2785!3d50.0045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd97214b2f626f%3A0x1!2sAn+den+Rheinwiesen+1%2C+55116+Mainz!5e0!3m2!1sde!2sde!4v1700000000001!5m2!1sde!2sde"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Standort von Joeys Picknick"
                ></iframe>
              </div>
            ) : (
              <div className="map-cookie-notice">
                <Shield size={48} />
                <h4 className="serif" style={{ fontSize: '1.25rem' }}>Google Maps blockiert</h4>
                <p style={{ maxWidth: '350px', fontSize: '0.95rem', color: 'var(--text-main)', opacity: 0.8 }}>
                  Um die Google Maps Karte anzuzeigen, müssen Marketing-Cookies akzeptiert werden.
                </p>
                <button className="btn-primary" onClick={onAcceptAllCookies}>
                  Cookies akzeptieren
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
