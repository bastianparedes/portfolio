import { TranslationProvider } from './_contexts/translation';
import SetterLanguaje from './_components/SetterLanguaje';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Experience from './_components/Experience';

export default function Home() {
  return (
    <TranslationProvider>
      <SetterLanguaje />
      <Header />
      <Hero />
      <Experience />
    </TranslationProvider>
  );
}
