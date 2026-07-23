import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Gallery() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section className="bg-beige" ref={ref}>
      <div className="section-inner">
        <div className="fade-in-section is-visible">
          <div className="section-label">Impressionen</div>
          <h2 className="section-title serif">Liebe zum Detail</h2>
          <p style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '1.15rem', color: 'rgba(56, 34, 15, 0.8)' }}>
            Ein kleiner Einblick in unsere Base, unsere frischen Zubereitungen und unseren spanischen Gefährten.
          </p>
        </div>

        {/* Polaroid Scrapbook Layout Grid */}
        <div className="gallery-grid fade-in-section is-visible">
          {/* Polaroid 1 - Tilted Left */}
          <div className="gallery-item gallery-tilt-left">
            <img
              src="/assets/WhatsApp Image 2026-02-24 at 17.48.12 (2).jpeg"
              alt="Frisch gepackter Picknick-Korb mit Wein und Oliven"
              loading="lazy"
            />
            <div className="gallery-caption serif">Frisch gepackt</div>
          </div>

          {/* Polaroid 2 - Tilted Right */}
          <div className="gallery-item gallery-tilt-right">
            <img
              src="/assets/WhatsApp Image 2026-02-24 at 17.48.12 (3).jpeg"
              alt="Klassischer Seat Terra Foodtruck in Spanien"
              loading="lazy"
            />
            <div className="gallery-caption serif">Unser Seat Terra</div>
          </div>
        </div>
      </div>
    </section>
  );
}
