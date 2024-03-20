'use client';

import constate from 'constate';
import type { get } from '@vercel/edge-config';

type togglesAvailable =
  | 'show_falabella'
  | 'show_freelance'
  | 'show_teacher_app'
  | 'show_teacher_programming'
  | 'show_ba_tester'
  | 'show_pdf_constructor'
  | 'show_short_url'
  | 'show_tst_maker';

interface Props {
  toggles: Awaited<ReturnType<typeof get>>;
}

function useToggles({ toggles }: Props) {
  const getToggle = (toggleName: togglesAvailable) => {
    if (!(toggles instanceof Object)) return false;

    const togglesTyped = toggles as Record<string, unknown>;
    const toggleValue = togglesTyped[toggleName];
    if (!(typeof toggleValue === 'boolean')) return false;
    return toggleValue;
  };
  return { getToggle };
}

const [TogglesProvider, useTogglesContext] = constate(useToggles);
export { TogglesProvider, useTogglesContext };
