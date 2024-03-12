'use client';

import { useState } from 'react';
import constate from 'constate';
import spanish from './spanish.json';
import english from './english.json';

function useTranslate() {
  const [translation, setTranslation] = useState(spanish);
  const switchToEnglish = () => setTranslation(english);
  const switchToSpanish = () => setTranslation(spanish);

  return { translation, switchToSpanish, switchToEnglish };
}

const [TranslationProvider, useTranslationContext] = constate(useTranslate);
export { TranslationProvider, useTranslationContext };
