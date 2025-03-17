import { TranslationProvider } from './_contexts/translation';
import SetterLanguage from './_components/SetterLanguage';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Experience from './_components/Experience';

export default function Home() {
  return (
    <TranslationProvider>
      <SetterLanguage />
      <Header />
      <Hero />
      <Experience />
    </TranslationProvider>
  );
}
