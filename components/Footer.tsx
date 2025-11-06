
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-palm-green text-pure-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-start items-center text-center md:text-start">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">{t('govLinks')}</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-heritage-gold transition">Absher</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition">Ministry of Interior</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition">Ministry of Municipal and Rural Affairs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-pure-white/20 text-center text-sm">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;