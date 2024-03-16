import Hero from './_components/Hero/Header';
import { TranslationProvider } from './_contexts/translation';
import { TogglesProvider } from './_contexts/toggles';
import SetterLanguaje from './_components/SetterLanguaje';
import { get } from '@vercel/edge-config';

const Page = async () => {
  const toggles = await get('portfolio');
  return (
    <TranslationProvider>
      <TogglesProvider toggles={toggles}>
        <Hero />
        <SetterLanguaje />
      </TogglesProvider>
    </TranslationProvider>
  );
};

export default Page;
