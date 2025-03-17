'use client';

import PageFalabella from './images/png/page-falabella.png';
import PageSodimac from './images/png/page-sodimac.png';
import PageTrilma from './images/png/page-trilma.png';
import PagePaideia from './images/png/page-paideia.png';
import Image from "next/image";
import { useTranslationContext } from '../_contexts/translation';



const Component = () => {
  const { translation } = useTranslationContext();

  const experiences = Object.freeze([
    {
      company: translation.experience.jobs.sodimac.company,
      position: translation.experience.jobs.sodimac.position,
      begin: '2024',
      end: undefined,
      url: 'https://www.sodimac.com',
      image: PageSodimac
    },
    {
      company: translation.experience.jobs.falabella.company,
      position: translation.experience.jobs.falabella.position,
      begin: '2024',
      end: '2022',
      url: 'https://www.falabella.com',
      image: PageFalabella
    },
    {
      company: translation.experience.jobs.trilma.company,
      position: translation.experience.jobs.trilma.position,
      begin: '2019',
      end: '2022',
      url: 'https://www.trilma.com',
      image: PageTrilma
    },
    {
      company: translation.experience.jobs.paideia.company,
      position: translation.experience.jobs.paideia.position,
      begin: '2017',
      end: '2022',
      url: 'https://www.colegiopaideia.cl',
      image: PagePaideia
    }
  ]);

  return (
    <section className="w-fit mx-auto relative">
      <h1 className="text-6xl text-black font-bold mb-3">{translation.experience.title}</h1>
      <p className="text-2xl w-xl">{translation.experience.paragraph}</p>
      <div className="grid grid-cols-2 place-items-center w-fit gap-16 mx-auto">
        {experiences.map((experience, index) => (
          <a
            key={`${experience.company}-${experience.position}`}
            className="w-xl aspect-[864/479] relative bg-gray-400 overflow-hidden rounded-3xl duration-100 border-1 border-solid border-gray-400 linear p-5 hover:scale-105 hover:shadow-2xl"
            style={{translate: index % 2 === 0 ? '0 5rem' : 0}}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="w-fit bg-black text-white p-2 rounded-2xl shadow-2xl shadow-white text-xl">{experience.company}</h2>
            <h3 className="w-fit bg-black text-white px-2 py-1 rounded-2xl shadow-2xl shadow-white mt-2 text-base">{experience.position}</h3>
            <Image
              src={experience.image}
              alt={experience.company}
              className="absolute w-full h-full top-0 left-0 -z-10"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Component;
