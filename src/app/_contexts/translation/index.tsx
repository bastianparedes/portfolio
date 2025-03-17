'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import languages from './languages';

interface AppContextType {
  languages: typeof languages;
  setActiveLanguage: (language: keyof typeof languages) => void;
  translation: (typeof languages)[keyof typeof languages];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [activeLanguage, setActiveLanguage] =
    useState<keyof typeof languages>('spanish');
  const translation = languages[activeLanguage];

  return (
    <AppContext.Provider value={{ languages, setActiveLanguage, translation }}>
      {children}
    </AppContext.Provider>
  );
};

const useTranslationContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};

export { TranslationProvider, useTranslationContext };
