import React, { useState, useEffect } from 'react';

export default function Header({ currentPage, onNavigatePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageName) => {
    setMobileOpen(false);
    document.body.style.overflow = '';
    onNavigatePage(pageName);
  };

  const toggleMobileMenu = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-inner">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="logo"
          >
            <img src="/assets/logolong.svg" alt="Joeys Picknick Logo" className="logo-long" />
            <img src="/assets/logoshort.svg" alt="Joeys Picknick Logo" className="logo-short" />
          </a>
          <nav>
            <button
              onClick={() => handleLinkClick('home')}
              className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
            >
              Startseite
            </button>
            <button
              onClick={() => handleLinkClick('menu')}
              className={`nav-link-btn ${currentPage === 'menu' ? 'active' : ''}`}
            >
              Speisekarte
            </button>
            <button
              onClick={() => handleLinkClick('location')}
              className={`nav-link-btn ${currentPage === 'location' ? 'active' : ''}`}
            >
              Standort & Route
            </button>
            <button
              onClick={() => handleLinkClick('inquiry')}
              className="btn-primary"
              style={{ marginLeft: '1rem' }}
            >
              Anfrage
            </button>
          </nav>
          <button
            className={`burger ${mobileOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menü öffnen"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay styled for button tags */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button onClick={() => handleLinkClick('home')}>
              Startseite
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('menu')}>
              Speisekarte
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('location')}>
              Standort & Route
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('inquiry')}>
              Anfrage
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
