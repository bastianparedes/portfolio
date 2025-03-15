'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import languajes from './languajes';

interface AppContextType {
  languajes: typeof languajes;
  setActiveLanguaje: (languaje: keyof typeof languajes) => void;
  translation: (typeof languajes)[keyof typeof languajes];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [activeLanguaje, setActiveLanguaje] =
    useState<keyof typeof languajes>('spanish');
  const translation = languajes[activeLanguaje];

  return (
    <AppContext.Provider value={{ languajes, setActiveLanguaje, translation }}>
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
