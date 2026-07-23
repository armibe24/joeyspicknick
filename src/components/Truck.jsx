import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Truck() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about" id="unser-truck" ref={ref}>
      <div className="section-inner">
        <div className="about-grid">
          {/* Flat Premium Double-Border Card */}
          <div className={`about-text premium-card fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="section-label">Unsere vier Räder</div>
            <h2 className="section-title serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.5rem' }}>
              Unser "Foodtruck"
            </h2>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.2rem' }}>
              Unser treuer Begleiter ist kein gewöhnlicher Wagen von der Stange, sondern ein
              waschechter <strong>Seat Terra</strong>. Ein rustikaler Klassiker mit Ecken, Kanten und
              ganz viel Charakter.
            </p>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Wir haben dieses Fahrzeug damals ganz bewusst persönlich in Spanien abgeholt. Zu diesem
              Land verbindet uns eine tiefe, emotionale Geschichte. Die Wärme und die Liebe zum ehrlichen
              Essen reisen mit unserem Terra jeden Tag ein Stückchen mit uns durch die Straßen.
            </p>
          </div>

          {/* Straight Rectangular Image */}
          <div className={`about-image fade-in-section ${inView ? 'is-visible' : ''}`}>
            <img src="/assets/seat-terra.png" alt="Seat Terra Foodtruck" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
