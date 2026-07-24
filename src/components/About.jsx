import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about" id="ueber-uns" ref={ref}>
      <div className="section-inner">
        <div className="about-grid">
          {/* Flat Premium Double-Border Card */}
          <div className={`about-text premium-card fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="section-label">Die Idee</div>
            <h2 className="section-title serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.5rem' }}>
              Vom Bankgeschäft an den Zollhafen.
            </h2>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.2rem' }}>
              Nach Studium und Arbeit im Bankgeschäft sehnte ich mich nach frischer Luft. Nach einem
              längeren Aufenthalt in Spanien kam ich mit diesem 40 Jahre alten Landauto nach
              Deutschland zurück – und die Idee von einem Foodtruck am Mainzer Zollhafen entwickelte sich.
            </p>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.5rem' }}>
              Ungezwungen und preiswert Lebensmittel und Getränke anzubieten, die von regionalen
              Anbietern bezogen werden. Ein Weg, mit Menschen in Kontakt zu kommen und den Mainzer
              Zollhafen wieder mehr zu beleben.
            </p>
            <div className="about-signature">Joel</div>
          </div>

          {/* Straight Rectangular Image */}
          <div className={`about-image fade-in-section ${inView ? 'is-visible' : ''}`}>
            <img src="/assets/about.png" alt="Joel bei der Zubereitung" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
