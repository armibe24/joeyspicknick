import React, { useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Mail } from 'lucide-react';

const EMAIL = 'info@joeyspicknick.de';

export default function InquiryPage() {
  const [ref] = useIntersectionObserver({ threshold: 0.05 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="inquiry-page" ref={ref}>
      <section className="inquiry-section">
        <div className="section-inner">
          <div className="contact-header align-center" style={{ marginBottom: '3rem' }}>
            <div className="section-label align-center">Jetzt anfragen</div>
            <h1 className="section-title serif">Plane dein Event mit uns</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(56, 34, 15, 0.8)' }}>
              Ob romantisches Picknick zu zweit, Firmenfeier oder privates Catering mit unserem Seat
              Terra Foodtruck – schreib uns einfach eine E-Mail mit deinen Wünschen und wir melden uns
              so schnell wie möglich bei dir.
            </p>
          </div>

          <div
            className="contact-form-card premium-card fade-in-section is-visible"
            style={{ alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}
          >
            <Mail size={48} color="var(--accent)" />
            <h3 className="serif" style={{ fontSize: '1.6rem', color: 'var(--text-main)' }}>
              Schreib uns eine E-Mail
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(56, 34, 15, 0.8)', maxWidth: '460px' }}>
              Teile uns am besten das gewünschte Datum, die Personenzahl und die Art der Anfrage mit –
              dann können wir dir direkt ein passendes Angebot machen.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Anfrage%20Joeys%20Picknick`}
              className="btn-primary btn-large"
            >
              <Mail size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
