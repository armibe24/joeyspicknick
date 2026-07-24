import React from 'react';

export default function Footer({ onNavigatePage }) {
  return (
    <footer className="footer-modern">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/logoshort.svg" alt="Joeys Picknick Kurzlogo" />
        </div>
        <div className="footer-links">
          <button onClick={() => onNavigatePage('impressum')}>Impressum</button>
          <button onClick={() => onNavigatePage('datenschutz')}>Datenschutz</button>
          <a href="https://instagram.com/joeyspicknick" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer-copy">
          © 2026 Joeys Picknick. Alle Rechte vorbehalten.
          <span className="footer-credit">
            Website by{' '}
            <a href="https://www.achimbenzel.com/de/" target="_blank" rel="noopener noreferrer">
              Achim Benzel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
