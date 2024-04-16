import Hero from './_components/Hero/Header';
import { TranslationProvider } from './_contexts/translation';
import SetterLanguaje from './_components/SetterLanguaje';

const Page = async () => {
  return (
    <TranslationProvider>
      <Hero />
      <SetterLanguaje />
    </TranslationProvider>
  );
};

export default Page;
