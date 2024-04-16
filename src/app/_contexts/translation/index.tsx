'use client';

import { useState } from 'react';
import constate from 'constate';
import languajes from './languajes';

function useTranslate() {
  const [activeLanguaje, setActiveLanguaje] =
    useState<keyof typeof languajes>('english');
  const translation = languajes[activeLanguaje];

  return { translation, setActiveLanguaje };
}

const [TranslationProvider, useTranslationContext] = constate(useTranslate);
export { TranslationProvider, useTranslationContext };
