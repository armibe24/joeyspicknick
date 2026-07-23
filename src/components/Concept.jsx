import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Concept() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="what-we-do bg-beige" id="was-wir-machen" ref={ref}>
      <div className="section-inner">
        <div className="about-grid about-grid-reverse">
          {/* Straight Rectangular Image */}
          <div className={`about-image fade-in-section ${inView ? 'is-visible' : ''}`}>
            <img src="/assets/picknick.png" alt="Aesthetic wooden picnic basket filled with food" loading="lazy" />
          </div>

          {/* Flat Premium Double-Border Card */}
          <div className={`about-text premium-card fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="section-label">Unser Angebot</div>
            <h2 className="section-title serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.5rem' }}>
              Picknick-Körbe für Genießer
            </h2>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.2rem' }}>
              Wir haben uns auf etwas ganz Besonderes spezialisiert:{' '}
              <strong>Liebevoll gepackte Picknick-Körbe</strong>. Ob für den spontanen Ausflug ins
              Grüne oder eine entspannte Mittagspause im Park.
            </p>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Unsere Körbe sind prall gefüllt mit handgemachten Leckereien, frischen, saisonalen Snacks
              und erfrischenden Drinks. Abholen, Lieblingsplatz suchen und genießen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
