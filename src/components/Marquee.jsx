import React from 'react';

export default function Marquee() {
  const items = [
    { text: 'Street Food mit Seele' },
    { text: 'Echte Handarbeit' },
    { text: 'Mainz & Rhein-Main' }
  ];

  // Repeat several times to ensure seamless infinite looping on all screens
  const marqueeItems = Array(6).fill(items).flat();

  return (
    <div className="marquee-section">
      <div className="marquee">
        <div className="marquee-content serif">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item.text}</span>
              <img src="/assets/icon.svg" alt="" className="site-icon" />
            </React.Fragment>
          ))}
        </div>
        {/* Secondary track for seamless CSS marquee scroll */}
        <div className="marquee-content serif">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index + '-second'}>
              <span>{item.text}</span>
              <img src="/assets/icon.svg" alt="" className="site-icon" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
