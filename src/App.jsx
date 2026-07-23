import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import LocationPage from './pages/LocationPage';
import InquiryPage from './pages/InquiryPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';

// Map internal page names <-> URL paths so the existing onNavigatePage(name)
// interface keeps working while the address bar shows real routes.
const pageToPath = {
  home: '/',
  menu: '/speisekarte',
  location: '/standort',
  inquiry: '/anfrage',
  impressum: '/impressum',
  datenschutz: '/datenschutz'
};
const pathToPage = Object.fromEntries(Object.entries(pageToPath).map(([k, v]) => [v, k]));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = pathToPage[location.pathname] || 'other';

  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('cookie_consent') || 'pending'; // 'all', 'necessary', 'pending'
  });

  const handleNavigatePage = (pageName) => {
    navigate(pageToPath[pageName] || '/');
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'all');
    setCookieConsent('all');
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie_consent', 'necessary');
    setCookieConsent('necessary');
  };

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentPage={currentPage} onNavigatePage={handleNavigatePage} />

      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home onNavigatePage={handleNavigatePage} />} />
          <Route path="/speisekarte" element={<MenuPage />} />
          <Route
            path="/standort"
            element={
              <LocationPage cookieConsent={cookieConsent} onAcceptAllCookies={handleAcceptAll} />
            }
          />
          <Route path="/anfrage" element={<InquiryPage />} />
          <Route path="/impressum" element={<Impressum onBack={() => handleNavigatePage('home')} />} />
          <Route path="/datenschutz" element={<Datenschutz onBack={() => handleNavigatePage('home')} />} />
          <Route path="*" element={<NotFound onNavigatePage={handleNavigatePage} />} />
        </Routes>
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
