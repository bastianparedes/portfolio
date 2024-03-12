import spanish from './spanish.json';
import english from './english.json';

const languajes = {
  spanish,
  english
};

const availableLanguajes = Object.keys(languajes) as (keyof typeof languajes)[];

export { availableLanguajes };
export default languajes;
