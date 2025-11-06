
export interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

export interface NavLink {
  path: string;
  labelKey: string;
}

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export interface LanguageContextType {
  language: Language;
  direction: Direction;
  translations: Translations;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
