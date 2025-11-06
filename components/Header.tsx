
import React, { useState } from 'react';
// FIX: Changed import to use namespace to resolve module resolution issue with react-router-dom.
import * as ReactRouterDOM from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { navLinks } from '../constants';

const Header = () => {
  const { t, direction } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = ReactRouterDOM.useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false); // Close menu on search
    }
  };

  const SearchForm = () => (
    <form onSubmit={handleSearch} className="relative w-full md:w-auto">
      <input
        type="search"
        placeholder={t('searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full bg-white/20 text-pure-white placeholder-gray-300 rounded-full py-2 ${direction === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'} text-sm focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-heritage-gold transition`}
      />
      <button type="submit" className={`absolute top-1/2 -translate-y-1/2 ${direction === 'rtl' ? 'right-3' : 'left-3'}`} aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );

  return (
    <header className="bg-palm-green shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ReactRouterDOM.Link to="/" className="text-pure-white font-bold text-xl">{t('platformName')}</ReactRouterDOM.Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <ReactRouterDOM.NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-heritage-gold text-pure-white' : 'text-gray-300 hover:bg-white/10 hover:text-pure-white'
                  }`
                }
              >
                {t(link.labelKey)}
              </ReactRouterDOM.NavLink>
            ))}
            <div className="mx-2">
              <SearchForm />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pure-white hover:bg-palm-green/50 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-2 py-2">
              <SearchForm />
            </div>
            {navLinks.map((link) => (
              <ReactRouterDOM.NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-heritage-gold text-pure-white'
                      : 'text-pure-white hover:bg-palm-green/50'
                  }`
                }
              >
                {t(link.labelKey)}
              </ReactRouterDOM.NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
