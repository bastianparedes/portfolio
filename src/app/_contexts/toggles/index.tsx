'use client';

import constate from 'constate';

type Props = {
  toggles: {
    show_falabella: boolean;
    show_freelance: boolean;
    show_teacher_app: boolean;
    show_teacher_programming: boolean;
    show_ba_tester: boolean;
    show_pdf_constructor: boolean;
    show_short_url: boolean;
    show_tst_maker: boolean;
  };
};

function useToggles({ toggles }: Props) {
  const getToggle = (toggleName: keyof typeof toggles) => {
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
