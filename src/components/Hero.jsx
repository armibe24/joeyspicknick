import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Hero({ onNavigatePage }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={`hero ${inView ? 'in-view' : ''}`} id="hero" ref={ref}>
      {/* Large scaled brand icon watermark in the backdrop (10% opacity, top half visible) */}
      <div className="hero-watermark">
        <img src="/assets/icon.svg" alt="" />
      </div>

      <div className="hero-wrapper">
        <div className="hero-content fade-in-section is-visible">
          <h1 className="serif">
            Dein <br />
            <em>Picknick</em>
            <br /> am Rhein,
            <br /> fertig gepackt.
          </h1>
          <p>
            Wir bieten vorbereitete Picknickkörbe zum direkten Verzehr am Rhein an. Picknickdecken,
            Kissen, eine Variation an Lebensmitteln und Wein von regionalen Weingütern gehören dazu.
          </p>
          <button
            onClick={() => onNavigatePage('menu')}
            className="btn-primary btn-large"
          >
            Menü entdecken
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: '8px', verticalAlign: 'middle' }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        
        {/* Asymmetrical visual collage layout */}
        <div className="hero-collage fade-in-section is-visible">
          {/* Stamp badge with text curved around the circle */}
          <div className="stamp-badge" aria-label="100% Regional und Handgemacht">
            <svg viewBox="0 0 118 118" role="img">
              <defs>
                <path
                  id="stamp-text-path"
                  d="M59,59 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0"
                />
              </defs>
              <circle className="stamp-bg" cx="59" cy="59" r="57" />
              <text className="stamp-text">
                <textPath
                  href="#stamp-text-path"
                  startOffset="0"
                  textLength="256"
                  lengthAdjust="spacing"
                >
                  100% Regional · Handgemacht ·
                </textPath>
              </text>
              <image
                className="stamp-icon"
                href="/assets/icon.svg"
                x="42"
                y="42"
                width="34"
                height="34"
              />
            </svg>
          </div>

          {/* Main Visual Image Card */}
          <div className="hero-main-img">
            <img src="/assets/hero.png" alt="Joeys Picknick Hero Foodtruck am Rheinufer" />
          </div>

          {/* Overlapping offset Polaroid Card */}
          <div className="hero-overlay-card">
            <img src="/assets/WhatsApp Image 2026-02-24 at 17.48.12 (2).jpeg" alt="Gepackte Picknick-Kiste" />
            <div className="hero-overlay-caption">Liebevoll gepackt</div>
          </div>
        </div>
      </div>
    </section>
  );
}
