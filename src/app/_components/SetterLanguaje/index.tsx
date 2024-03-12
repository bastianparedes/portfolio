'use client';

import { useState } from 'react';
import { useTranslationContext } from '../../_contexts/translation';
import { availableLanguajes } from '../../_contexts/translation/languajes';

const Component = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { setActiveLanguaje } = useTranslationContext();

  const switchIsOptionsOpen = () => setIsOptionsOpen(!isOptionsOpen);
  const closeOptions = () => setIsOptionsOpen(false);
  const setLanguaje = (languaje: (typeof availableLanguajes)[number]) => {
    setActiveLanguaje(languaje);
    closeOptions();
  };

  return (
    <div className="bg-black text-slate-300 flex flex-col p-2 gap-0 fixed top-0 right-5">
      <button onClick={switchIsOptionsOpen} className="hover:text-white">
        Set languaje
      </button>
      {isOptionsOpen &&
        availableLanguajes.map((languaje) => (
          <button
            key={languaje}
            onClick={() => setLanguaje(languaje)}
            className="hover:text-white"
          >
            {languaje}
          </button>
        ))}
    </div>
  );
};

export default Component;
