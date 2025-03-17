'use client';

import { useState } from 'react';
import { useTranslationContext } from '../_contexts/translation';
import { availableLanguages } from '../_contexts/translation/languages';

const Component = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { translation, languages, setActiveLanguage } = useTranslationContext();

  const switchIsOptionsOpen = () => setIsOptionsOpen(!isOptionsOpen);
  const closeOptions = () => setIsOptionsOpen(false);
  const setLanguage = (language: (typeof availableLanguages)[number]) => {
    setActiveLanguage(language);
    closeOptions();
  };

  return (
    <div className="bg-black text-slate-300 flex flex-col p-2 gap-0 fixed bottom-0 left-5 z-10">
      <button onClick={switchIsOptionsOpen} className="hover:text-white">
        {translation.language.setLanguage}
      </button>
      {isOptionsOpen &&
        availableLanguages.map((language) => (
          <button
            key={language}
            onClick={() => setLanguage(language)}
            className="hover:text-white"
          >
            {languages[language].language.name}
          </button>
        ))}
    </div>
  );
};

export default Component;
