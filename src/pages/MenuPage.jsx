import React, { useState, useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function MenuPage() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.05 });
  const [activeTab, setActiveTab] = useState('boxen'); // 'boxen', 'drinks', 'weine'
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boxen = [
    {
      id: 'meenzer',
      title: 'Meenzer Box',
      subtitle: 'für 2 Personen',
      price: '14,90 €',
      items: ['Brezeln', 'Spundekäse', 'Käsewürfel', 'Trauben', 'Kekse']
    },
    {
      id: 'mediterran',
      title: 'Mediterrane Box',
      subtitle: 'für 2 Personen',
      price: '19,90 €',
      items: ['Fladenbrot', 'Tomate-Feta-Aufstrich', 'Oliven', 'Trauben', 'Kekse']
    },
    {
      id: 'schobbe',
      title: 'Schobbe Box',
      subtitle: 'für 2 Personen',
      price: '14,90 €',
      items: ['Silvaner und Riesling 0,75l (süffiger Tischwein)', 'Apollinaris Sprudel']
    }
  ];

  const mitnehmen = [
    { name: 'Brezel', price: '3,00 €' },
    { name: 'Brezel mit Spundekäse', price: '5,50 €' }
  ];

  const softdrinks = [
    { name: 'fritz-kola', volume: '0,33l', price: '3,00 €', sub: 'Koffeinhaltig' },
    { name: 'fritz-kola super zero', volume: '0,33l', price: '3,00 €', sub: 'Zuckerfrei & Koffeinhaltig' },
    { name: 'fritz-limo orange', volume: '0,33l', price: '3,00 €', sub: 'Fruchtige Orangenlimonade' },
    { name: 'fritz-spritz bio-apfelschorle', volume: '0,33l', price: '3,00 €', sub: 'Erfrischende Bioschorle' },
    { name: 'fritz-spritz bio-traubenschorle', volume: '0,33l', price: '3,00 €', sub: 'Erfrischende Bioschorle' },
    { name: 'Vio Still', volume: '0,75l', price: '4,00 €', sub: 'Stilles Mineralwasser' },
    { name: 'Apollinaris Sprudel', volume: '0,75l', price: '4,00 €', sub: 'Mineralwasser mit Kohlensäure' }
  ];

  const biere = [
    { name: 'Bayreuther Helles', volume: '0,33l', price: '3,50 €', sub: 'Klassisches bayerisches Helles' },
    { name: 'Alkoholfreies Helles', volume: '0,33l', price: '3,50 €', sub: 'Alkoholfreier Biergenuss' }
  ];

  const weine = [
    { name: 'Riesling (halbtrocken)', volume: '0,75l', price: '13,90 €', sub: 'Wein- und Sektgut Ch. W. Bernhard' },
    { name: 'Spätburgunder Weißherbst (trocken)', volume: '0,75l', price: '13,90 €', sub: 'Wein- und Sektgut Ch. W. Bernhard' }
  ];

  return (
    <main className="menu-page" ref={ref}>
      <section className="menu" id="speisekarte">
        <div className="section-inner">
          <div className="align-center">
            <div className="section-label align-center">Speisekarte</div>
            <h1 className="section-title serif">Unsere Kreationen</h1>
            <p className="menu-intro" style={{ maxWidth: '650px', margin: '0 auto 3rem' }}>
              Saisonal, regional und mit ganz viel Herz zubereitet. Lade dir unsere Karte als PDF herunter
              oder stöbere direkt hier durch unsere Signature-Boxen und Getränke.
            </p>
          </div>

          {/* Tab Selector Controls */}
          <div className="menu-tabs">
            <button
              onClick={() => setActiveTab('boxen')}
              className={`menu-tab-btn ${activeTab === 'boxen' ? 'active' : ''}`}
            >
              Picknick-Boxen
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`menu-tab-btn ${activeTab === 'drinks' ? 'active' : ''}`}
            >
              Alkoholfrei & Biere
            </button>
            <button
              onClick={() => setActiveTab('weine')}
              className={`menu-tab-btn ${activeTab === 'weine' ? 'active' : ''}`}
            >
              Weine
            </button>
          </div>

          {/* Tab Content Display */}
          <div>
            {activeTab === 'boxen' && (
              <div className="fade-in-section is-visible">
                <div className="menu-grid">
                  {boxen.map((box) => (
                    <div key={box.id} className="menu-card premium-card">
                      <div>
                        <div className="menu-card-header">
                          <div className="menu-card-heading">
                            <h3 className="menu-card-title serif">{box.title}</h3>
                            <span className="menu-card-subtitle">{box.subtitle}</span>
                          </div>
                          <span className="menu-card-price">{box.price}</span>
                        </div>
                        <ul className="menu-card-list">
                          {box.items.map((item, idx) => (
                            <li key={idx}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="drinks-list premium-card" style={{ marginTop: '4rem' }}>
                  <h3 className="drinks-category-title serif">Zum Mitnehmen</h3>
                  {mitnehmen.map((item, idx) => (
                    <div key={idx} className="drink-row">
                      <div className="drink-name-wrap">
                        <span className="drink-name">{item.name}</span>
                      </div>
                      <div className="drink-meta">
                        <span className="drink-price">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="notice-board" style={{ marginTop: '3rem' }}>
                  <strong>Pfand-Hinweis:</strong> Kiste, Picknickdecke &amp; Kissen sowie Weingläser und
                  Verpackungsgläser auf Pfandbasis – <strong>25 €</strong>, inklusive Lampe – <strong>35 €</strong>.
                  <br />
                  Kartenzahlung erst ab 15 € möglich.
                </div>
              </div>
            )}

            {activeTab === 'drinks' && (
              <div className="drinks-list premium-card fade-in-section is-visible">
                <h3 className="drinks-category-title serif">
                  Alkoholfreie Erfrischungen
                </h3>
                {softdrinks.map((drink, idx) => (
                  <div key={idx} className="drink-row">
                    <div className="drink-name-wrap">
                      <span className="drink-name">{drink.name}</span>
                      <span className="drink-subtext">{drink.sub}</span>
                    </div>
                    <div className="drink-meta">
                      <span className="drink-volume">{drink.volume}</span>
                      <span className="drink-price">{drink.price}</span>
                    </div>
                  </div>
                ))}

                <h3 className="drinks-category-title serif" style={{ marginTop: '4rem' }}>
                  Bierspezialitäten
                </h3>
                {biere.map((beer, idx) => (
                  <div key={idx} className="drink-row">
                    <div className="drink-name-wrap">
                      <span className="drink-name">{beer.name}</span>
                      <span className="drink-subtext">{beer.sub}</span>
                    </div>
                    <div className="drink-meta">
                      <span className="drink-volume">{beer.volume}</span>
                      <span className="drink-price">{beer.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'weine' && (
              <div className="drinks-list premium-card fade-in-section is-visible">
                <h3 className="drinks-category-title serif">
                  Unsere Weine
                </h3>
                {weine.map((wein, idx) => (
                  <div key={idx} className="drink-row">
                    <div className="drink-name-wrap">
                      <span className="drink-name">{wein.name}</span>
                      <span className="drink-subtext">{wein.sub}</span>
                    </div>
                    <div className="drink-meta">
                      <span className="drink-volume">{wein.volume}</span>
                      <span className="drink-price">{wein.price}</span>
                    </div>
                  </div>
                ))}

                <div className="wine-combo-hint">
                  → Weine in Kombination mit Picknickkorb nur <strong>10,90 €</strong>
                </div>
              </div>
            )}
          </div>

          {/* Toggle PDF View */}
          {showPdf && (
            <div className="menu-pdf-container fade-in-section is-visible" style={{ marginTop: '4rem' }}>
              <iframe
                src="/assets/Speisekarte.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
                title="Speisekarte PDF"
                scrolling="no"
              ></iframe>
            </div>
          )}

          <div className="menu-cta-wrapper" style={{ marginTop: '3rem' }}>
            <button onClick={() => setShowPdf(!showPdf)} className="btn-primary">
              <FileText size={18} style={{ marginRight: '8px' }} />
              {showPdf ? 'PDF ausblenden' : 'PDF Vorschau'}
            </button>
            <a href="/assets/Speisekarte.pdf" download="Joeys-Picknick-Speisekarte.pdf" className="btn-primary">
              <Download size={18} style={{ marginRight: '8px' }} />
              PDF Speisekarte (Download)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
