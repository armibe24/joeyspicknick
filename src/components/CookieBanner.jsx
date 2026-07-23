import React from 'react';

export default function CookieBanner({ visible, onAccept, onDecline, onNavigatePage }) {
  return (
    <div className={`cookie-banner ${visible ? 'visible' : 'hidden'}`} id="cookieBanner">
      <div className="cookie-inner">
        <div className="cookie-text">
          <h3 className="serif">Cookies & Datenschutz</h3>
          <p>
            Wir nutzen Cookies, um Inhalte zu personalisieren und externe Dienste wie Google Maps
            einzubinden. Weitere Infos in der{' '}
            <button
              onClick={() => onNavigatePage('datenschutz')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent)',
                textDecoration: 'underline',
                fontWeight: 600,
                cursor: 'pointer',
                font: 'inherit',
                padding: 0
              }}
            >
              Datenschutzerklärung
            </button>
            .
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-necessary" onClick={onDecline}>
            Nur Notwendige
          </button>
          <button className="cookie-btn cookie-btn-all" onClick={onAccept}>
            Alle Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
