import React, { useState, useEffect } from 'react';
import { Check, Download, FileText, Wine, Coffee, Beer } from 'lucide-react';
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
      id: 'deutsch',
      title: 'Deutsche Box',
      price: 'Individuell',
      items: [
        'Frische Brezel',
        'Würziger Spundekäse',
        'Süße Trauben',
        'Weißwein oder Traubensaft',
        'Mineralwasser',
        'Leckeres Hörnchen',
        'Fruchtige Marmelade'
      ],
      footer: 'Inkl. Korb, Decke, Gläser & Kissen'
    },
    {
      id: 'mediterran',
      title: 'Mediterrane Box',
      price: 'Individuell',
      items: [
        'Knuspriges Baguette',
        'Cremiger Feta-Frischkäse',
        'Eingelegte Oliven',
        'Weißwein oder Traubensaft',
        'Mineralwasser',
        'Süße Kekse'
      ],
      footer: 'Inkl. Korb, Decke, Gläser & Kissen'
    },
    {
      id: 'arabisch',
      title: 'Arabische Box',
      price: 'Individuell',
      items: [
        'Traditioneller Sesamring',
        'Hummus & Harissa',
        'Gefüllte Weinblätter',
        'Süßes Baklava',
        'Feine Datteln',
        'Fruchtiger Traubensaft'
      ],
      footer: 'Inkl. Korb, Decke, Gläser & Kissen'
    }
  ];

  const softdrinks = [
    { name: 'fritz-kola', volume: '0,33l', price: '3,00 €', sub: 'Koffeinhaltig' },
    { name: 'fritz-kola super zero', volume: '0,33l', price: '3,00 €', sub: 'Zuckerfrei & Koffeinhaltig' },
    { name: 'fritz-limo orange', volume: '0,33l', price: '3,00 €', sub: 'Fruchtige Orangenlimonade' },
    { name: 'fritz-spritz bio-rhabarberschorle', volume: '0,33l', price: '3,00 €', sub: 'Erfrischende Bioschorle' },
    { name: 'fritz-spritz bio-apfelschorle', volume: '0,33l', price: '3,00 €', sub: 'Erfrischende Bioschorle' },
    { name: 'fritz-spritz bio-traubenschorle', volume: '0,33l', price: '3,00 €', sub: 'Erfrischende Bioschorle' },
    { name: 'Wasser Still', volume: '0,33l', price: '2,50 €', sub: 'Natürliches Mineralwasser' },
    { name: 'Wasser Sprudel', volume: '0,33l', price: '2,50 €', sub: 'Mineralwasser mit Kohlensäure' }
  ];

  const biere = [
    { name: 'Bayreuther Helles', volume: '0,33l', price: '3,50 €', sub: 'Klassisches bayerisches Helles' },
    { name: 'Alkoholfreies Helles', volume: '0,33l', price: '3,50 €', sub: 'Alkoholfreier Biergenuss' }
  ];

  const weissweine = [
    { name: 'Weißwein Hausmarke (Wein 1)', volume: '0,33l', price: '7,50 €', sub: 'Trocken & spritzig, perfekt für den Sommer' },
    { name: 'Weißwein Premium (Wein 2)', volume: '0,33l', price: '7,50 €', sub: 'Feinfruchtig & elegant am Gaumen' }
  ];

  const rotweine = [
    { name: 'Rotwein Hausmarke (Wein 1)', volume: '0,33l', price: '7,50 €', sub: 'Kräftig & harmonisch mit Beerenaromen' },
    { name: 'Rotwein Premium (Wein 2)', volume: '0,33l', price: '7,50 €', sub: 'Vollmundig, samtig & intensiv im Abgang' }
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
                          <h3 className="menu-card-title serif">{box.title}</h3>
                          <span className="menu-card-price">{box.price}</span>
                        </div>
                        <ul className="menu-card-list">
                          {box.items.map((item, idx) => (
                            <li key={idx}>
                              <Check size={16} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="menu-card-footer">
                        <span>{box.footer}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="notice-board">
                  <strong>Pfand-Hinweis:</strong> Korb, Picknickdecke & Kissen sowie Weingläser und
                  Verpackungsgläser stellen wir auf Pfandbasis für <strong>20 €</strong> zur Verfügung. Bitte
                  gib diese anschließend wieder bei uns ab.
                </div>
              </div>
            )}

            {activeTab === 'drinks' && (
              <div className="drinks-list premium-card fade-in-section is-visible">
                <h3 className="drinks-category-title serif">
                  <Coffee size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
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
                  <Beer size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
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
                  <Wine size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Ausgewählte Weißweine
                </h3>
                {weissweine.map((wein, idx) => (
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

                <h3 className="drinks-category-title serif" style={{ marginTop: '4rem' }}>
                  <Wine size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Ausgewählte Rotweine
                </h3>
                {rotweine.map((wein, idx) => (
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
