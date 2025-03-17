import spanish from './spanish.json';
import english from './english.json';

const languages = {
  spanish,
  english
};

const availableLanguages = Object.keys(languages) as (keyof typeof languages)[];

export { availableLanguages };
export default languages;
