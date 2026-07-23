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
            <div className="section-label">Unsere Philosophie</div>
            <h2 className="section-title serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.5rem' }}>
              Gutes Essen braucht keine weiße Tischdecke.
            </h2>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.2rem' }}>
              Was 2019 als verrückte Idee begann, ist heute unsere Definition von zeitgemäßem Genuss.
              Wir sind Lisa und Max – zwei Köche mit dem Anspruch, Restaurant-Qualität auf die Straße
              zu bringen.
            </p>
            <p className="about-text-p" style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', marginBottom: '1.5rem' }}>
              Wir verzichten auf Abkürzungen: Jede Sauce ist handgerührt, jedes Bun frisch gebacken.
              Wir glauben, dass man Ehrlichkeit schmecken kann.
            </p>
            <div className="about-signature">Lisa & Max</div>
          </div>

          {/* Straight Rectangular Image */}
          <div className={`about-image fade-in-section ${inView ? 'is-visible' : ''}`}>
            <img src="/assets/about.png" alt="Chef Lisa und Max bei der Zubereitung" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
