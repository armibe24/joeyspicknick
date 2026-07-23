import React, { useEffect } from 'react';

export default function NotFound({ onNavigatePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="not-found">
      <div className="section-inner align-center">
        <div className="not-found-code serif">404</div>
        <h1 className="section-title serif" style={{ marginBottom: '1.5rem' }}>
          Seite nicht gefunden
        </h1>
        <p style={{ maxWidth: '480px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'rgba(56, 34, 15, 0.8)' }}>
          Diese Seite gibt es leider nicht (mehr). Vielleicht wurde sie verschoben oder der Link ist
          nicht ganz korrekt. Zurück zum Picknick geht es hier:
        </p>
        <button onClick={() => onNavigatePage('home')} className="btn-primary btn-large">
          Zurück zur Startseite
        </button>
      </div>
    </main>
  );
}
