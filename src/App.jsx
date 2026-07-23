import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import LocationPage from './pages/LocationPage';
import InquiryPage from './pages/InquiryPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  const [page, setPage] = useState('home'); // 'home', 'menu', 'location', 'inquiry', 'impressum', 'datenschutz'
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('cookie_consent') || 'pending'; // 'all', 'necessary', 'pending'
  });

  const handleNavigatePage = (pageName) => {
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'all');
    setCookieConsent('all');
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie_consent', 'necessary');
    setCookieConsent('necessary');
  };

  // Scroll to top on page switches
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentPage={page} onNavigatePage={handleNavigatePage} />

      <div style={{ flexGrow: 1 }}>
        {page === 'home' && <Home onNavigatePage={handleNavigatePage} />}
        {page === 'menu' && <MenuPage />}
        {page === 'location' && (
          <LocationPage cookieConsent={cookieConsent} onAcceptAllCookies={handleAcceptAll} />
        )}
        {page === 'inquiry' && <InquiryPage />}
        {page === 'impressum' && <Impressum onBack={() => handleNavigatePage('home')} />}
        {page === 'datenschutz' && <Datenschutz onBack={() => handleNavigatePage('home')} />}
      </div>

      <Footer onNavigatePage={handleNavigatePage} />

      <CookieBanner
        consentStatus={cookieConsent}
        onAcceptAll={handleAcceptAll}
        onAcceptNecessary={handleAcceptNecessary}
        onOpenPrivacy={() => handleNavigatePage('datenschutz')}
      />
    </div>
  );
}
