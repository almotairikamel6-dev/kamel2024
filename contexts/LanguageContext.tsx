
import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Translations, Language, Direction, LanguageContextType } from '../types';
import { translationsData } from '../constants';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [direction, setDirection] = useState<Direction>('rtl');

  useEffect(() => {
    const newDirection = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    document.documentElement.lang = language;
    document.documentElement.dir = newDirection;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };
  
  const t = useCallback((key: string): string => {
    return translationsData[key]?.[language] || key;
  }, [language]);


  return (
    <LanguageContext.Provider value={{ language, direction, translations: translationsData, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
