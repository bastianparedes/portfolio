import Hero from './_components/Hero/Header';
import { TranslationProvider } from './_contexts/translation';

const Page = () => (
  <TranslationProvider>
    <Hero />
  </TranslationProvider>
);

export default Page;
