
import React from 'react';
// FIX: Changed import to use namespace to resolve module resolution issue with react-router-dom.
import * as ReactRouterDOM from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPlatform from './pages/AboutPlatform';
import OmdaCV from './pages/OmdaCV';
import EServices from './pages/EServices';
import ResidentRegistration from './pages/ResidentRegistration';
import RealEstateRegistration from './pages/RealEstateRegistration';
import OfficialForms from './pages/OfficialForms';
import OmdaSystem from './pages/OmdaSystem';
import NewsCenter from './pages/NewsCenter';
import Unified911 from './pages/Unified911';
import ContactUs from './pages/ContactUs';
import SmartAssistant from './pages/SmartAssistant';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <LanguageProvider>
      <ReactRouterDOM.HashRouter>
        <div className="bg-light-gray text-gray-800 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            <ReactRouterDOM.Routes>
              <ReactRouterDOM.Route path="/" element={<Home />} />
              <ReactRouterDOM.Route path="/about-platform" element={<AboutPlatform />} />
              <ReactRouterDOM.Route path="/omda-cv" element={<OmdaCV />} />
              <ReactRouterDOM.Route path="/e-services" element={<EServices />} />
              <ReactRouterDOM.Route path="/resident-registration" element={<ResidentRegistration />} />
              <ReactRouterDOM.Route path="/real-estate-registration" element={<RealEstateRegistration />} />
              <ReactRouterDOM.Route path="/official-forms" element={<OfficialForms />} />
              <ReactRouterDOM.Route path="/omda-system" element={<OmdaSystem />} />
              <ReactRouterDOM.Route path="/news" element={<NewsCenter />} />
              <ReactRouterDOM.Route path="/911" element={<Unified911 />} />
              <ReactRouterDOM.Route path="/contact" element={<ContactUs />} />
              <ReactRouterDOM.Route path="/smart-assistant" element={<SmartAssistant />} />
              <ReactRouterDOM.Route path="/search-results" element={<SearchResults />} />
            </ReactRouterDOM.Routes>
          </main>
          <Footer />
        </div>
      </ReactRouterDOM.HashRouter>
    </LanguageProvider>
  );
}

export default App;