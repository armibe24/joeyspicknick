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
            <div className="section-label">Unser Foodtruck</div>
            <h2 className="section-title serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.5rem' }}>
              Ein spanischer Klassiker
            </h2>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Das Auto ist ein spanischer Klassiker und typisches Landauto! Ein{' '}
              <strong>Seat Terra</strong> aus dem Jahr 1987, den wir 2025 von einem älteren Spanier in
              der Nähe von Madrid gekauft und damit zurück nach Mainz gefahren sind.
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
