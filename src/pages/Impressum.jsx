import React, { useEffect } from 'react';
import content from './impressum.html?raw';

export default function Impressum({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="section-inner">
        <button onClick={onBack} className="legal-back-link">
          ← Zurück zur Startseite
        </button>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}
