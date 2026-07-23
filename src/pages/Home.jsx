import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Concept from '../components/Concept';
import Truck from '../components/Truck';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';

export default function Home({ onNavigatePage }) {
  return (
    <>
      <Hero onNavigatePage={onNavigatePage} />
      <Marquee />
      <About />
      <Concept />
      <Truck />
      <Gallery />
      <Testimonial />
      
      {/* Playful Quick Booking CTA banner at the bottom of homepage */}
      <section className="bg-beige" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <div className="section-inner">
          <h2 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Lust auf ein Picknick oder Catering?
          </h2>
          <p style={{ maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'rgba(56, 34, 15, 0.8)' }}>
            Plane jetzt dein Firmenevent, deine Hochzeit oder hol dir einen prall gefüllten Picknickkorb ab. Wir freuen uns auf dich!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigatePage('menu')} className="btn-primary btn-large">
              Speisekarte ansehen
            </button>
            <button onClick={() => onNavigatePage('inquiry')} className="btn-primary btn-large btn-dark">
              Jetzt anfragen
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
