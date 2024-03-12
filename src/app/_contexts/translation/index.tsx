'use client';

import React, { useState } from 'react';
import constate from 'constate';
import spanish from './spanish.json';
import english from './english.json';

function translate() {
  const [translation, setTranslation] = useState(spanish);
  const switchToEnglish = () => setTranslation(english);
  const switchToSpanish = () => setTranslation(spanish);

  return { translation, switchToSpanish, switchToEnglish };
}

const [TranslationProvider, useTranslation] = constate(translate);
export { TranslationProvider, useTranslation };
